// backend/src/tests/setupE2E.ts
import mongoose from 'mongoose';

beforeEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});
