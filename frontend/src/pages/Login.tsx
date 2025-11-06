import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/AuthForm/AuthForm';

const Login: React.FC = () => {
  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

const onSubmit = async (data: { email: string; password: string }) => {
  try {
    await handleLogin({ email: data.email, password: data.password });
    navigate('/dashboard');
  } catch {
    alert('Invalid credentials');
  }
};



  return (
    <div>
      <AuthForm onSubmit={onSubmit} />
      {loading && <p className="text-center text-gray-500 mt-4">Logging in...</p>}
    </div>
  );
};

export default Login;
