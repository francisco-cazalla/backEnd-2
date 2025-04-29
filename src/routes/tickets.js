import {Router} from 'express';
import TicketService from '../services/TicketService.js';
import {TicketDTO} from '../dtos/TicketDTO.js';
import auth from '../middlewares/auth.js';
const router = Router(), service = new TicketService();

router.get('/:tid', auth, async(r,s,n)=>{
  try {
    const t = await service.getById(r.params.tid);
    if(!t) return s.status(404).json({error:'Ticket no existe'});
    s.json(new TicketDTO(t));
  } catch(e){ n(e) }
});

export default router;
