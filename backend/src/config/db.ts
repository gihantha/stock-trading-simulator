// backend/src/config/database.ts
import mongoose from 'mongoose';

const getMongoURI = (): string => {
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'e2e') {
    return process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/myapp_test';
  }
  return process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
};


export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = getMongoURI();
    
    const options = {
      // Better connection handling
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(mongoURI, options);
    
    console.log('MongoDB Connected successfully to:', 
      mongoURI.includes('localhost') ? mongoURI : mongoURI.replace(/\/\/[^@]+@/, '//***@'));
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.connection.close();
};