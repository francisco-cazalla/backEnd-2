export class TicketDTO {
  constructor({ _id, code, purchase_datetime, amount, purchaser }) {
    this.id     = _id;
    this.code   = code;
    this.date   = purchase_datetime;
    this.total  = amount;
    this.email  = purchaser;
  }
}