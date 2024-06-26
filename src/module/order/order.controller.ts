import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    //will call service function
    const result = await OrderServices.orderServiceIntoDB(orderData);
    //send response
    res.status(200).json({
      success: true,
      message: 'product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: 'unable to get data' });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const result = await OrderServices.getOrderByEmailFromDB(email as string);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
        "success": false,
        "message": "Order not found"
       });
  }
};


export const OrderController = {
  createOrder,
  getAllOrders,
};
