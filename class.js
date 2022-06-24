class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const petra = new User('petra', 'müller');

const susi = {
  firstname: 'Susi',
  lastname: 'Meier',
  greet() {
    return `${this.firstname} ${this.lastname}`;
  },
};
