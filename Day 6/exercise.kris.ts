class AgeScore {
  Age: number;
  Score: number;
  constructor(age: number, score: number) {
    this.Age = age;
    this.Score = score;
  }
}

class Student extends AgeScore {
  Name: string;
  Email?: string;

  constructor(name: string, age: number, score: number, email?: string) {
    super(age, score);
    this.Name = name;
    if (email) this.Email = email;
  }
}

class HighLowAvg {
  High: number;
  Low: number;
  Average: number;
  constructor(h = 0, l = 0, a = 0) {
    this.High = h;
    this.Low = l;
    this.Average = a;
  }
}

let arr = [
  new Student("A", 10, 86),
  new Student("V", 11, 90),
  new Student("I", 11, 84),
  new Student("C", 10, 89),
];

console.log(arr);
const CalcStud = (arr: Student[]) => {
  //   let hLA = new HighLowAvg();
  let result = {
    age: new HighLowAvg(),
    score: new HighLowAvg(),
  };

  result.age.High = Math.max(...arr.map((v) => v.Age));
  result.age.Low = Math.min(...arr.map((v) => v.Age));
  result.age.Average =
    [...arr]
      .map((v) => v.Age)
      .reduce((pV, cV) => {
        return pV + cV;
      }, 0) / arr.length;

  result.score.High = Math.max(...arr.map((v) => v.Score));
  result.score.Low = Math.min(...arr.map((v) => v.Score));
  result.score.Average =
    [...arr]
      .map((v) => v.Score)
      .reduce((pV, cV) => {
        return pV + cV;
      }, 0) / arr.length;

  return result;
};

console.log(CalcStud(arr));

class Product {
  Name: string;
  Price: number;
  constructor(name: string, price: number) {
    this.Name = name;
    this.Price = price;
  }
}

class Transaction {
  #Total: number;
  #Products: Product[];

  constructor() {
    this.#Total = 0;
    this.#Products = [];
  }

  set AddCart(value: Product) {
    this.#Products.push(value);
  }

  get ShowTotal() {
    return this.#Products.map((x) => x.Price).reduce((p, c) => p + c, 0);
  }

  get CheckOut() {
    this.#Total = this.#Products.reduce((p, c) => p + c.Price, 0);
    return;
  }
}

function Transact() {}
