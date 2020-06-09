export class User {
  id;
  username;
  firstname;
  lastname;
  password;
  email;
  role; // Role will correspond to what level of authorization the user has.

  constructor(id, username, firstname, lastname, password, email, role) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}
