import ProductModel from '../models/Product.model.js';

export default class ProductDAO {
  findAll()            { return ProductModel.find(); }
  findById(id)         { return ProductModel.findById(id); }
  create(data)         { return ProductModel.create(data); }
  update(id, data)     { return ProductModel.findByIdAndUpdate(id, data, { new: true }); }
  delete(id)           { return ProductModel.findByIdAndDelete(id); }
}