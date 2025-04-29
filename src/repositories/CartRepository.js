import CartDAO from '../dao/CartDAO.js';
const dao = new CartDAO();
export default class CartRepository {
  createCart()      { return dao.create(); }
  getCart(id)       { return dao.findById(id); }
  updateCart(id,d)  { return dao.update(id,d); }
}
