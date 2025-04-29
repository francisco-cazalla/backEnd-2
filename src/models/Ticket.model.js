import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const ticketSchema = new mongoose.Schema({
  code:{ type:String,unique:true,default:()=>nanoid(10) },
  purchase_datetime:{ type:Date,default:Date.now },
  amount:Number,
  purchaser:String
});
export default mongoose.model('Ticket', ticketSchema);
