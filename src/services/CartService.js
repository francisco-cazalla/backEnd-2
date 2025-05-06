import CartRepository from '../repositories/CartRepository.js';
import ProductRepository from '../repositories/ProductRepository.js';
import TicketService from './TicketService.js';
const cartRepo = new CartRepository();
const prodRepo = new ProductRepository();
const ticketService = new TicketService();

export default class CartService {
  createCart() { return cartRepo.createCart(); }
  getCart(id) { return cartRepo.getCart(id); }

  async addProduct(cartId, productId) {
    const cart = await cartRepo.getCart(cartId);
    const prod = await prodRepo.getById(productId);
    if (!prod) throw new Error('Producto no encontrado');
    const exists = cart.products.find(p => p.product._id.equals(prod._id));
    if (exists) exists.quantity++;
    else cart.products.push({ product: prod._id, quantity: 1 });
    return cartRepo.updateCart(cartId, cart);
  }

  async purchase(cartId, user) {
    const cart = await cartRepo.getCart(cartId);
    const purchased = [], failed = [];
    for (const item of cart.products) {
      const prod = await prodRepo.getById(item.product._id);
      if (item.quantity <= prod.stock) {
        prod.stock -= item.quantity;
        await prodRepo.update(prod._id, { stock: prod.stock });
        purchased.push({ product: prod, quantity: item.quantity });
      } else failed.push(item.product._id);
    }
    const amount = purchased.reduce((sum,i)=> sum + i.quantity * i.product.price, 0);
    const ticket = await ticketService.create({ amount, purchaser: user.email });
    cart.products = failed.map(id=>({ product: id, quantity: 1 }));
    await cartRepo.updateCart(cartId, cart);
    return { ticket, failed };
  }
}