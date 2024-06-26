import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    //will call service function
    const result = await ProductServices.productServiceIntoDB(productData);
    //send response
    res.status(200).json({
      success: true,
      message: 'product created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};


const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    
    const products = await ProductServices.getAllProductsFromDB(searchTerm as string);

    res.status(200).json({
        success: true,
        message: searchTerm ? `Products matching search term '${searchTerm}' fetched successfully` : 'All products fetched successfully',
        data: products,
    });
  } catch (err) {
    throw new Error(`Failed to get products`);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    throw new Error(`Failed to get product`);
  }
};

const updateSingeProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const { productId } = req.params;
    const result = await ProductServices.updateSingleProductFromDB(
      productId,
      product,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated succesfully',
      data: result,
    });
  } catch (err) {
    throw new Error(`Failed to update product`);
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSingleProductFromDB(productId);
    if (result.deletedCount === 0) {
      throw new Error('Product not found');
    }
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    throw new Error(`Failed to delete product`);
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingeProduct,
};
