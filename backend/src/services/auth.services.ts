import { User } from '../models/user.model';
import { generateToken } from '../utils/generate.tokens.utils';
import bcrypt from 'bcryptjs';

export const registerUserService = async (name: string, email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already exists');

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashed });
  const token = generateToken(user.id);

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    credits: user.credits,
    token,
  };
};

export const loginUserService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  const token = generateToken(user.id);

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    credits: user.credits,
    token,
  };
};
