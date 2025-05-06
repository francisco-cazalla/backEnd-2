import { Router } from 'express';
import { register, login, current } from '../controllers/AuthController.js';
import auth from '../middlewares/auth.js';

const router = Router();
router.post('/register', register);
router.post('/login',    login);
router.get('/current',   auth, current);
export default router;