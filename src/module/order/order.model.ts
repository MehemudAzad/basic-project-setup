import { model, Schema } from 'mongoose';
import { Order } from './order.interface';

// Mongoose Schema for Order
const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<Order>('Order', orderSchema);
