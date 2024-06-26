import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

//create products
router.post('/create-product', ProductControllers.createProduct);

//get all products
router.get('/', ProductControllers.getProducts);

//get product by id
router.get('/:productId', ProductControllers.getSingleProduct);

//update product by id
router.put('/:productId', ProductControllers.updateSingeProduct);

//delete product by id
router.delete('/:productId', ProductControllers.deleteSingleProduct);


export const ProductRoutes = router;
