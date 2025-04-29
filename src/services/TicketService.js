import TicketModel from '../models/Ticket.model.js';
export default class TicketService {
  create(data){ return TicketModel.create(data); }
  getById(id) { return TicketModel.findById(id); }
}
