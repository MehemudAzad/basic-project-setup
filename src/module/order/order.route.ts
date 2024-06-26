import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//insert an order
router.post('/create-order', OrderController.createOrder);

//retrieve all orders
router.get('/', OrderController.getAllOrders);

export const OrderRoutes = router;
