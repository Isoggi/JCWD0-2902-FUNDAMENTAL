class User {
  constructor(name, address) {
    this.name = name;
    this.address = address || "bsd";
  }
  greeting() {
    console.log("hello world 1");
  }
}
const User2 = class {
  greeting() {
    console.log("hello world 2");
  }
};

const user = new User();
console.log(user);
