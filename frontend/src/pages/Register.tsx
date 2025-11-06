import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/AuthForm/AuthForm';

const Register: React.FC = () => {
  const { handleRegister, loading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; email: string; password: string }) => {
    try {
        
      await handleRegister(data);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <AuthForm onSubmit={onSubmit} isRegister />
      {loading && <p className="text-center text-gray-500 mt-4">Registering...</p>}
    </div>
  );
};

export default Register;
