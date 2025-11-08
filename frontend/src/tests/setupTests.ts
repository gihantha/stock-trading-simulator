// src/tests/setupTests.ts
import '@testing-library/jest-dom';

// Mock Vite environment variables for tests
jest.mock('../config/env', () => ({
  API_URL: 'http://localhost:5000/api',
}));
