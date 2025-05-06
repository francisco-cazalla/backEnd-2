import ProductDAO from '../dao/ProductDAO.js';
const dao = new ProductDAO();
export default class ProductRepository {
  getAll()           { return dao.findAll(); }
  getById(id)        { return dao.findById(id); }
  create(data)       { return dao.create(data); }
  update(id, data)   { return dao.update(id, data); }
  delete(id)         { return dao.delete(id); }
}