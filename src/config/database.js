import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    console.log('Conectando a MongoDB Atlas:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Atlas conectado');
  } catch (err) {
    console.error('❌ Error conectando MongoDB Atlas:', err);
    process.exit(1);
  }
};