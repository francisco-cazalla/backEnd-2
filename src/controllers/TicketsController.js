import TicketService from '../services/TicketService.js';
import { TicketDTO } from '../dtos/TicketDTO.js';
const service = new TicketService();

export const getById = async (req, res, next) => {
  try {
    const t = await service.getById(req.params.tid);
    if (!t) return res.status(404).json({ error: 'Ticket no encontrado' });
    res.json(new TicketDTO(t));
  } catch (err) { next(err); }
};