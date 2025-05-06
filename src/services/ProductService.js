import ProductRepository from '../repositories/ProductRepository.js';
const repo = new ProductRepository();
export default class ProductService {
  getAll()         { return repo.getAll(); }
  getById(id)      { return repo.getById(id); }
  create(data)     { return repo.create(data); }
  update(id,data)  { return repo.update(id,data); }
  delete(id)       { return repo.delete(id); }
}