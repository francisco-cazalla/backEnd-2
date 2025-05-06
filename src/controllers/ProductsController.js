import ProductService from '../services/ProductService.js';
const service = new ProductService();

export const getAll = async (req, res, next) => {
  try { res.json(await service.getAll()); }
  catch (err) { next(err); }
};

export const getById = async (req, res, next) => {
  try { res.json(await service.getById(req.params.pid)); }
  catch (err) { next(err); }
};

export const create = async (req, res, next) => {
  try { res.status(201).json(await service.create(req.body)); }
  catch (err) { next(err); }
};

export const update = async (req, res, next) => {
  try { res.json(await service.update(req.params.pid, req.body)); }
  catch (err) { next(err); }
};

export const remove = async (req, res, next) => {
  try { res.json(await service.delete(req.params.pid)); }
  catch (err) { next(err); }
};