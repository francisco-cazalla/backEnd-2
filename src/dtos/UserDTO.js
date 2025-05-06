export class UserDTO {
  constructor({ _id, firstName, lastName, email, role }) {
    this.id    = _id;
    this.name  = `${firstName} ${lastName}`;
    this.email = email;
    this.role  = role;
  }
}