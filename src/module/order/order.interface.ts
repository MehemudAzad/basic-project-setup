import { Schema } from "mongoose";

// Interface for Order
export type Order = {
  email: string;
  productId: Schema.Types.ObjectId;
  price: number;
  quantity: number;
}

