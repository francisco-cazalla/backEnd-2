import AuthService from '../services/AuthService.js';
const service = new AuthService();

export const register = async (req, res, next) => {
  try { res.status(201).json(await service.register(req.body)); }
  catch (err) { next(err); }
};

export const login = async (req, res, next) => {
  try { res.json(await service.login(req.body)); }
  catch (err) { next(err); }
};

export const current = async (req, res, next) => {
  try { res.json(await service.current(req.user)); }
  catch (err) { next(err); }
};