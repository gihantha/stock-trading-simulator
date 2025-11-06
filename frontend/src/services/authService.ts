// src/services/authService.ts
import axios from 'axios';

const API_URL = (globalThis as any)?.import?.meta?.env?.VITE_API_URL || 'http://localhost:5000/api';
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface AuthData {
  username?: string;
  password: string;
  email?: string;
}


export const register = async (data: AuthData) => {
  const res = await axios.post(`${API_URL}/auth/register`, data);
  return res.data;
};

export const login = async (data: AuthData) => {
  const res = await axios.post(`${API_URL}/auth/login`, data);
  return res.data;
};
