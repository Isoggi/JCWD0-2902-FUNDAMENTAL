interface IUser {
  name: string;
  greet: () => void;
  hobby?: string;
  hello?: string;
  multiply: (a: number, b: number) => number;
  a: number;
  b: number;
  marks?: IMark;
}

interface IMark {
  math?: number;
  biology: number;
}

var user: IUser = {
  name: "David",
  greet() {
    console.log(this.hello ?? "Hello", this.name);
  },
  multiply(a, b) {
    return a * b;
  },
  a: 1,
  b: 2,
};

user.greet();
user.hello = "Hello to";
user.greet();

user.hobby = "coding";
console.log(user);

delete user.hobby; //warning but work
console.log(user);

interface IPerson {
  name: string;
  age: number;
  address?: string;
}

var person: IPerson = {
  name: "David",
  age: 20,
  address: "Address",
};

type TPerson = "name" | "age";
for (let key in person) {
  console.log(key);
  console.log(typeof key);
  console.log(typeof (key as TPerson));
  console.log(person[key as TPerson]);
  // console.log(person[key as "uhuy"]); //error
}

person = { name: "Budi", age: 20 };

const { ...name, age } = person;

const nama = "bayu";
const umur = 10;
let school = "konoha";
const obj = { nama, umur, sekolah: school };

console.log(obj);
school = "desa pasir";
console.log(obj);

const target = {},
  source = {};
