// src/config/env.ts
export const API_URL =
  typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_URL
    ? (import.meta as any).env.VITE_API_URL
    : process.env.API_URL || 'http://localhost:5000/api';
