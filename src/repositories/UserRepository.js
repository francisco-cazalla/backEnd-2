import UserDAO from '../dao/UserDAO.js';
const dao = new UserDAO();
export default class UserRepository {
  create(data)       { return dao.create(data); }
  getByEmail(email)  { return dao.findByEmail(email); }
  getById(id)        { return dao.findById(id); }
}