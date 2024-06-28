// Array yang sama
let arr: string[] = ["A", "B", "C", "D", "E", "F"];
let arr2: string[] = new Array("A", "B", "C", "D", "E", "F");

console.log(arr, arr2);

interface IStudent {
  name: string;
  email: string;
}

type TStudent = {
  name: string;
  email?: string;
};

interface IJCWDStudent extends TStudent {
  kkm: number;
}

let scores = [10, 20, 30, 40];
scores.push(60);

let students: IStudent[] = [
  {
    name: "student 1",
    email: "email 1",
  },
  {
    name: "student 2",
    email: "email 2",
  },
];

console.log(students);
let studentsT: TStudent[] = [
  {
    name: "student 1",
  },
  {
    name: "student 2",
    email: "email 2",
  },
];

console.log(studentsT);
let JCWDstudents: IJCWDStudent[] = [
  {
    name: "student 1",
    email: "email 1",
    kkm: 85,
  },
  {
    name: "student 2",
    email: "email 2",
    kkm: 85,
  },
];
console.log(JCWDstudents);

console.log(scores, scores.toString());
console.log(scores.join(" "));

scores[scores.length] = 120;
console.log(scores);
scores.push(140);
console.log(scores);
scores.unshift(5);
console.log(scores);
scores.pop();
console.log(scores);
scores.shift();
console.log(scores);

let merged = scores.concat([2, 4, 6, 8, 10], [3, 6, 9, 12, 15]);
console.log(merged, scores);

scores.splice(1, 2); //splice(x,y) x: start index, y: how much to be deleted from index - (3,1) start from [3] delete only [3]
console.log(scores);
scores.splice(1, 0, 15);
console.log(scores);
scores.splice(1, 0, 16, 17, 18, 19);
console.log(scores);

console.log(scores.slice(0, 3));
const newScores = [...scores];
scores.push(2000);
console.log(scores, newScores);
console.log(scores.indexOf(40));
scores.push(40);
console.log(scores.lastIndexOf(40));
scores.sort((v, i) => v - i); //asc
console.log(scores);
scores.sort((v, i) => i - v); //desc
console.log(scores);

const strArr = ["ayam", "bebek", "kucing"];
strArr.sort().reverse(); // desc
console.log(strArr);

strArr.sort(); // asc
