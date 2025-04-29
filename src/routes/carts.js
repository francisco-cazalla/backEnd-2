import {Router} from 'express';
import CartRepository from '../repositories/CartRepository.js';
import ProductRepository from '../repositories/ProductRepository.js';
import auth from '../middlewares/auth.js';
import TicketService from '../services/TicketService.js';

const router = Router();
const cartRepo = new CartRepository();
const prodRepo = new ProductRepository();
const ticketService = new TicketService();

router.post('/', async(r,s,n)=>{try{s.status(201).json(await cartRepo.createCart())}catch(e){n(e)}});
router.get('/:cid', async(r,s,n)=>{try{s.json(await cartRepo.getCart(r.params.cid))}catch(e){n(e)}});
router.put('/:cid/product/:pid', async(r,s,n)=>{
  try {
    const cart = await cartRepo.getCart(r.params.cid);
    const prod = await prodRepo.getById(r.params.pid);
    if(!prod) return s.status(404).json({error:'Producto no encontrado'});
    const exist = cart.products.find(p=>p.product._id.equals(prod._id));
    if(exist) exist.quantity++;
    else cart.products.push({product:prod._id,quantity:1});
    s.json(await cartRepo.updateCart(r.params.cid,cart));
  } catch(e){n(e)}
});

router.post('/:cid/purchase', auth, async(r,s,n)=>{
  try {
    const cart     = await cartRepo.getCart(r.params.cid);
    const purchased= [], failed=[];
    for(const item of cart.products){
      const prod = await prodRepo.getById(item.product._id);
      if(item.quantity<=prod.stock){
        prod.stock -= item.quantity;
        await prodRepo.update(prod._id,{stock:prod.stock});
        purchased.push({product:prod,quantity:item.quantity});
      } else failed.push(item.product._id);
    }
    const amount = purchased.reduce((sum,i)=>sum + i.quantity*i.product.price,0);
    const ticket = await ticketService.create({amount,purchaser:r.user.email});
    cart.products = failed.map(id=>({product:id,quantity:1}));
    await cartRepo.updateCart(cart._id,cart);
    s.json({ticket,failed});
  } catch(e){n(e)}
});

export default router;
