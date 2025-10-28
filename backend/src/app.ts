import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import meRoutes from './routes/me.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Stock Simulator API is running...'));

app.use('/api/auth', authRoutes);

app.use('/api', meRoutes);

export default app;
