import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/database.js';
import productsRouter from './src/routes/products.js';
import cartsRouter    from './src/routes/carts.js';
import ticketsRouter  from './src/routes/tickets.js';
import errorHandler   from './src/utils/errorHandler.js';

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts',    cartsRouter);
app.use('/api/tickets',  ticketsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
