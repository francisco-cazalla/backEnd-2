import ProductModel from '../models/Product.model.js';
export default class ProductDAO {
  findAll()   { return ProductModel.find(); }
  findById(id){ return ProductModel.findById(id); }
  create(d)   { return ProductModel.create(d); }
  update(i,d) { return ProductModel.findByIdAndUpdate(i,d,{new:true}); }
  delete(i)   { return ProductModel.findByIdAndDelete(i); }
}
