import { Router } from 'express';
import { protect, AuthRequest } from '../middlewares/auth.middleware';

const router = Router();

router.get('/me', protect, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

export default router;
