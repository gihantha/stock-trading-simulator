// backend/src/server.ts
import dotenv from 'dotenv';
dotenv.config({ path: '/etc/secrets/backend.env' });

// must come first
dotenv.config({
  path: process.env.NODE_ENV === 'e2e' ? '.env.e2e' : '.env',
});

import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
