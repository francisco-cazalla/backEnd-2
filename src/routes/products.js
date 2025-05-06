import { Router } from 'express';
import * as ctrl from '../controllers/ProductsController.js';
import auth from '../middlewares/auth.js';
import authorizeRole from '../middlewares/authorizeRole.js';

const router = Router();
router.get('/',        ctrl.getAll);
router.get('/:pid',    ctrl.getById);
router.post('/',       auth, authorizeRole('admin'), ctrl.create);
router.put('/:pid',    auth, authorizeRole('admin'), ctrl.update);
router.delete('/:pid', auth, authorizeRole('admin'), ctrl.remove);
export default router;