import {Router} from 'express';
import ProductRepository from '../repositories/ProductRepository.js';
import auth,{authorizeRole} from '../middlewares/auth.js';
const router = Router(), repo = new ProductRepository();

router.get('/',    async (r,s,n)=>{ try{s.json(await repo.getAll())}catch(e){n(e)} });
router.get('/:pid',async (r,s,n)=>{ try{s.json(await repo.getById(r.params.pid))}catch(e){n(e)} });
router.post('/',   auth, authorizeRole('admin'), async(r,s,n)=>{ try{s.status(201).json(await repo.create(r.body))}catch(e){n(e)} });
router.put('/:pid',auth, authorizeRole('admin'), async(r,s,n)=>{ try{s.json(await repo.update(r.params.pid,r.body))}catch(e){n(e)} });
router.delete('/:pid',auth,authorizeRole('admin'),async(r,s,n)=>{try{s.json(await repo.delete(r.params.pid))}catch(e){n(e)}});

export default router;
