jest.mock('../config/env', () => ({
  API_URL: process.env.VITE_API_URL || 'http://localhost:5000/api'
}));
