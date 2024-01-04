class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  login = (email, password) => {
    if (email === this.email && password === this.password) {
      return true;
    } else {
      return false;
    }
  };
}

const dan = new User("Danyllo Hipólito", "hdanyllo97@gmail.com", "1234");
console.log(dan);
const login = dan.login("hdanyllo97@gmail.com", "1234");
console.log(login);
