import axios from 'axios';
import { API_URL } from '../config/env';

export interface AuthResponse {
  token: string;
  user: { id: number; username: string; email: string };
}

export async function login(data: { email: string; password: string }): Promise<AuthResponse> {
  const res = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);
  return res.data;
}

export async function register(data: { username: string; email: string; password: string }): Promise<AuthResponse> {
  const res = await axios.post<AuthResponse>(`${API_URL}/auth/register`, data);
  return res.data;
}
