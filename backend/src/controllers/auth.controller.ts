import { Request, Response } from 'express';
import { loginUserService, registerUserService } from '../services/auth.services';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await registerUserService(name, email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Registration failed' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await loginUserService(email, password);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Login failed' });
  }
};
