const userDetails = {
    userName: 'aliaksandr_khatsko@epam.com',
    firstName: 'QAAuto_FirstName',
    lastName: 'QAAuto_SecondName',
    email: 'aliaksandr_khatsko@epam.com',
  };

class Credentials {
  get userDetails() { return userDetails; }
}

module.exports = Credentials;
