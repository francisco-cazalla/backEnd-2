import CartService from '../services/CartService.js';
const service = new CartService();

export const createCart = async (req, res, next) => {
  try { res.status(201).json(await service.createCart()); }
  catch (err) { next(err); }
};

export const getCart = async (req, res, next) => {
  try { res.json(await service.getCart(req.params.cid)); }
  catch (err) { next(err); }
};

export const addProduct = async (req, res, next) => {
  try { res.json(await service.addProduct(req.params.cid, req.params.pid)); }
  catch (err) { next(err); }
};

export const purchase = async (req, res, next) => {
  try { res.json(await service.purchase(req.params.cid, req.user)); }
  catch (err) { next(err); }
};