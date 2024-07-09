/** @format */

const fruits: string[] = ["banana", "apple", "jackfruit", "apple"];

console.log(fruits);
const newFruits: Set<string> = new Set(fruits);

console.log(newFruits);
newFruits.add("watermelon"); // add new element
newFruits.delete("banana"); // delete element banana
console.log(newFruits.has("banana")); // check if newfruits has banana. return boolean
// newFruits.clear(); // reset newFruits
console.log(newFruits.size); // length new fruits
console.log(Object.fromEntries(newFruits.entries()));
newFruits.forEach((value) => console.log(value)); // loop of newFruits set
console.log(newFruits);

const numbers: number[] = [1, 2, 3, 1, 2];
const newNumbers = new Set(numbers);
console.log(newNumbers);
const tmp: number[] = [];
// const entries = newNumbers.entries();
newNumbers.forEach((v) => tmp.push(v));
console.log(tmp);
const test = Object.entries(Object.fromEntries(newNumbers.entries())).map(
  ([k, v]) => v
);
console.log(newNumbers.entries()); //[Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(Object.fromEntries(newNumbers.entries())); //{ '1': 1, '2': 2, '3': 3 }
console.log(Object.entries(Object.fromEntries(newNumbers.entries()))); //[ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ] ]
console.log(test); //[ 1, 2, 3 ]

// console.log(entries);

interface IStudent {
  name: string;
  age: number;
}

const students: IStudent[] = [
  { name: "udin", age: 20 },
  { name: "john", age: 22 },
  { name: "udin", age: 20 },
];

// console.log(new Set(students)); //tidak bisa distinct array of object

console.log(test);
for (let i = 0; i < test.length; i++) {
  if (test[i] == 2) {
    console.log(true);
    break;
  }
}
