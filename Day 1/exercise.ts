/** @format */

// Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15
const l: number = 5;
const w: number = 3;
const area: number = w * l;
console.log(area);

// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3
// Output : 16
const perimeter = (w + l) * 2;
console.log(perimeter);

// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539

const r: number = 5; // radius
const d: number = r * 2; // diameter
const c: number = 2 * Math.PI * r; // circumference
const a: number = Math.PI * Math.pow(r, 2); // area
console.log("D =", d, "circumference =", c.toFixed(4), "area =", a.toFixed(3));

// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65
// Output : 35
const angle1: number = 80;
const angle2: number = 65;
const angle3: number = 180 - angle1 - angle2;
console.log(angle3);

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

const days: number = 366;
const year: number = Math.floor(days / 365); //1
const month: number = Math.floor((days % 365) / 30); //1
const day: number = (days % 365) % 30;

console.log(
  `${days} day(s) → ${year} year(s), ${month} month(s), ${day} day(s)`
);

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22
// Output : 2

const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-23");

const diff: number = (Number(date2) - Number(date1)) / 1000 / 3600 / 24;
console.log(Number("2") - 3);

console.log(diff);

// const date1: number = Date.parse("2022-01-20");
// const date2: number = Date.parse("2022-01-22");

// console.log((date2 - date1) / 1000 / 3600 / 24);

interface IObj {
  name: string;
  age: number;
}

const obj: IObj = {
  name: "abc",
  age: 23,
};

// type,interface, generics
