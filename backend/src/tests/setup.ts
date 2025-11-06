// backend/src/tests/setup.ts
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../config/db';

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

afterEach(async () => {
  // Clean up database between tests
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});