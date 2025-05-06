import UserModel from '../models/User.model.js';

export default class UserDAO {
  create(data)       { return UserModel.create(data); }
  findByEmail(email) { return UserModel.findOne({ email }); }
  findById(id)       { return UserModel.findById(id); }
}