import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';

jest.setTimeout(30000);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST!);
}, 30000);

beforeEach(async () => {
  await mongoose.connection.db?.dropDatabase();
});

afterAll(async () => {
  //disconnect from test DB
  await mongoose.connection.close();
});

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    // Implement test for user registration
    const res = await request(app).post('/api/auth/register').send({
      username: 'Alice', 
      email: 'alice@test.com',
      password: 'password123',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });
});
