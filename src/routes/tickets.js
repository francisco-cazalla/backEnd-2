import { Router } from 'express';
import { getById } from '../controllers/TicketsController.js';
import auth from '../middlewares/auth.js';

const router = Router();
router.get('/:tid', auth, getById);
export default router;