import React, { useState, useEffect } from 'react';
import NeonBlobs from './NeonBlobs';
import FloatingTicker from './FloatingTicker';
import CandlestickBackground from './CandlestickBackground';
import InputField from '../common/form/InputField';

interface AuthFormProps {
  onSubmit: (data: { username: string; email: string; password: string }) => void | Promise<void>;
  isRegister?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isRegister = false }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      <NeonBlobs />
      <FloatingTicker />
      <CandlestickBackground />

      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Hero Text */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {isRegister ? 'Join TradersHub' : 'Welcome Back'}
          </h1>
          <p className="mt-4 text-gray-300 text-base max-w-md">
            {isRegister
              ? 'Create your account to start simulating trades and testing strategies in a risk-free environment.'
              : 'Log in to access your portfolio, trading simulator, and real-time analytics.'}
          </p>
          <p className="mt-6 text-sm text-gray-400">
            {isRegister ? (
              <>
                Already have an account?{' '}
                <a href="/login" className="text-green-400 font-semibold hover:underline">
                  Log in
                </a>
              </>
            ) : (
              <>
                Don’t have an account?{' '}
                <a href="/register" className="text-green-400 font-semibold hover:underline">
                  Register
                </a>
              </>
            )}
          </p>
        </div>

        {/* Form */}
        <div
          className={`flex-1 max-w-md w-full bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-700 transition-transform duration-500 hover:scale-105 ${
            mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 text-center">
            {isRegister ? 'Create Account' : 'Sign In'}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({
                username: isRegister ? username : '',
                email,
                password,
              });
            }}
            className="space-y-5"
          >
            {isRegister && (
              <InputField
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-green-400 placeholder-gray-400 transition-all rounded-xl p-4"
                labelClassName="text-gray-100 font-semibold"
                required
              />
            )}

            <InputField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-green-400 placeholder-gray-400 transition-all rounded-xl p-4"
              labelClassName="text-gray-100 font-semibold"
              required
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-green-400 placeholder-gray-400 transition-all rounded-xl p-4"
              labelClassName="text-gray-100 font-semibold"
              required
            />

            <button
              type="submit"
              className="mt-8 w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {isRegister ? 'Register' : 'Log In'}
            </button>
          </form>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scaleY(1); opacity: 0.7; }
          50% { transform: translateY(-80px) scaleY(1.1); opacity: 1; }
          100% { transform: translateY(-160px) scaleY(0.9); opacity: 0.5; }
        }
        @keyframes blob {
          0%,100%{transform:translate(0,0) scale(1) rotate(0deg);}
          33%{transform:translate(30px,-50px) scale(1.1) rotate(5deg);}
          66%{transform:translate(-20px,20px) scale(0.9) rotate(-5deg);}
        }
        .animate-blob{animation:blob 8s cubic-bezier(0.4,0,0.2,1) infinite;}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}
        @keyframes ticker{0%{transform:translateX(100%);}100%{transform:translateX(-100%);}}
        .animate-ticker{animation:ticker 25s linear infinite;}
      `}</style>
    </div>
  );
};

export default AuthForm;
