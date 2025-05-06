import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/database.js';
import authRoutes from './src/routes/auth.js';
import productsRoutes from './src/routes/products.js';
import cartsRoutes from './src/routes/carts.js';
import ticketsRoutes from './src/routes/tickets.js';
import errorHandler from './src/utils/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use('/api/sessions', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));