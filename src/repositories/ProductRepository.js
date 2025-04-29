import ProductDAO from '../dao/ProductDAO.js';
const dao = new ProductDAO();
export default class ProductRepository {
  getAll()   { return dao.findAll(); }
  getById(i){ return dao.findById(i); }
  create(d)  { return dao.create(d); }
  update(i,d){ return dao.update(i,d); }
  delete(i)  { return dao.delete(i); }
}
