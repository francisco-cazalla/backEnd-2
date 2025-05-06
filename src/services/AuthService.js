import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';
import { UserDTO } from '../dtos/UserDTO.js';
import dotenv from 'dotenv';

dotenv.config();
const repo = new UserRepository();

export default class AuthService {
  async register(data) {
    const { email, password } = data;
    if (await repo.getByEmail(email)) throw new Error('Email ya registrado');
    const hash = await bcrypt.hash(password, 10);
    const user = await repo.create({ ...data, password: hash });
    return new UserDTO(user);
  }

  async login({ email, password }) {
    const user = await repo.getByEmail(email);
    if (!user) throw new Error('Usuario no encontrado');
    if (!(await bcrypt.compare(password, user.password))) throw new Error('Contraseña incorrecta');
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }

  async current(user) {
    return new UserDTO(user);
  }
}