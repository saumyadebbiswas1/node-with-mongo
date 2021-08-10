import express from 'express';
const router = express.Router();
import {registerController, loginController, userController, refreshTokenController} from '../controllers';
import { auth } from '../middlewares';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/profile', auth, userController.profile);
router.post('/refreshtoken', refreshTokenController.refresh);
router.post('/logout', auth, loginController.logout);

export default router;