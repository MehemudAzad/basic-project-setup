import { Product } from './product.interface';
import { ProductModel } from './product.model';

const productServiceIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm : string) => {
    let query = {};
    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { tags: { $in: [searchTerm] } },
        ],
      };
    }
    const products = await ProductModel.find(query);
    return products;
};

const getSingleProductFromDB = async (id : string) => {
    const result = await ProductModel.findOne({ _id : id });
    return result;
};

const updateSingleProductFromDB = async(id:string, product :Product) => {
    const result = await ProductModel.updateOne({_id: id}, { $set: product });
    return result;
}

const deleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id : id });
  
  return result;
};

export const ProductServices = {
  productServiceIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
  updateSingleProductFromDB
};
