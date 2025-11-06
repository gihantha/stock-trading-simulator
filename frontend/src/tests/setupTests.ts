import '@testing-library/jest-dom';

// Mock Vite's import.meta.env for Jest (Node environment)
(globalThis as unknown as { import: { meta: { env: { VITE_API_URL: string } } } }).import = {
  meta: {
    env: {
      VITE_API_URL: 'http://localhost:5000/api',
    },
  },
};
