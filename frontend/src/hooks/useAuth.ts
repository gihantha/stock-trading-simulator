import { useState } from 'react';
import { login, register } from '../services/authService';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(data); 
      localStorage.setItem('token', res.token);
      return res;
    } catch (err: unknown) {
if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('Login failed');
    }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await register(data);
      return res;
    } catch (err: unknown) {
if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('Registration failed');
    }      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  return { handleLogin, handleRegister, logout, loading, error };
}
