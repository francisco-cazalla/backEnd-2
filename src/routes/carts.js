import { Router } from 'express';
import * as ctrl from '../controllers/CartsController.js';
import auth from '../middlewares/auth.js';

const router = Router();
router.post('/',                     ctrl.createCart);
router.get('/:cid',                  ctrl.getCart);
router.put('/:cid/product/:pid',     ctrl.addProduct);
router.post('/:cid/purchase', auth,  ctrl.purchase);
export default router;