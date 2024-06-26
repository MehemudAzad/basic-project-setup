import { Order } from './order.interface';
import { OrderModel } from './order.model';


const orderServiceIntoDB = async (order : Order)=>{
    const result = await OrderModel.create(order);
    return result;
}

const getAllOrdersFromDB = async () => {
    const result = await OrderModel.find({});
    return result;
  };
  
  const getOrderByEmailFromDB = async ( email: string) => {
    const result = await OrderModel.find({ email : email });
    return result;
  };

export const OrderServices = {
    orderServiceIntoDB,
    getAllOrdersFromDB,
    getOrderByEmailFromDB
}