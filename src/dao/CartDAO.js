import CartModel from '../models/Cart.model.js';

export default class CartDAO {
  create()             { return CartModel.create({ products: [] }); }
  findById(id)         { return CartModel.findById(id).populate('products.product'); }
  update(id, data)     { return CartModel.findByIdAndUpdate(id, data, { new: true }).populate('products.product'); }
}