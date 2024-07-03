class User {
  name: string;
  address: string;
  #email: string;
  constructor(name: string, address: string, email?: string) {
    this.name = name;
    this.address = address || "bsd";
    this.#email = email ?? "";
  }
  greeting() {
    console.log(`hello ${this.name}`);
  }
  showEmail() {
    console.log(this.#email);
  }
}
const user = new User("Jordan", "JKT", "mail@mail.com");
console.log(user);

// const a: User = {
//   greeting() {},
//   name: "huhu",
//   address: "konoha",
// };
user.showEmail();

class DB {
  static #connection = "";
  static #createConnection() {}
}

class Matematika {
  #number1: number;
  // #number2: number;
  constructor(number1?: number, number2?: number) {
    this.#number1 = number1 ?? 0;
  }
  // #number2: number;
  get showNumber1() {
    return this.#number1;
  }
  set changeNumber1(value: any) {
    if (typeof value === "number") this.#number1 = value;
    else console.log("Not number");
  }
}

let matemat = new Matematika();
console.log(matemat.showNumber1);
matemat.changeNumber1 = 2;
console.log(matemat.showNumber1);

class Employee {
  #name: string | undefined | null;
  #lastName: string;
  constructor(name?: string) {
    this.#name = name ?? undefined;
  }

  get EmployeeName() {
    return `${this.#name}`;
  }

  set EmployeeName(value) {
    if (typeof value === "string" && !value.endsWith(" ")) {
      this.#name = value;
    }
  }
}
