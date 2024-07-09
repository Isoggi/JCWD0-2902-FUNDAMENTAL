/** @format */

const myMap = new Map();

console.log(myMap.keys());
console.log(myMap.values());

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

myMap.forEach((v) => console.log(v, "ini foreach"));
myMap.set("Udin", {
  age: 27,
  address: "bsd",
});
myMap.set("Udin", {
  age: 27,
  address: "bukan bsd",
}); // replacing
myMap.set("Ucok", {
  age: 25,
  address: "jkt",
});
myMap.set("naruto", {
  age: 29,
  address: "konoha",
});
myMap.set("sasuke", {
  age: 30,
  address: "laut",
});

console.log(myMap);

console.log(myMap.get("Udin"));

// const arr = [1, 2, 3];

// for (const index in arr) {
//   console.log(index);
// }

// for (const value of arr) {
//   console.log(value);
// }

console.log(
  {
    name: "a",
    age: 88,
  },
  {
    name: "a",
    age: 88,
  }
);
