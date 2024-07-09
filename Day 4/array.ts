/** @format */

let arr = ["A", "B", "C", "D", "E", "F", "G"];
let arr2 = new Array("A", "B", "C", "D", "E", "F", "G");
// class = template object

console.log(arr, arr2);
type TClass = {
  class_name: string;
  lecturer: string;
};

interface IStudent {
  name: String;
  email: string;
}
type TStudent = {
  name: String;
  email?: string;
  kelas: TClass;
};

const student: TStudent | TClass | undefined = undefined;

interface TJcwdStudent extends TStudent {
  kkm: number;
}

const jcwd: TJcwdStudent = {
  name: "udin",
  kkm: 85,
  email: "test@mail.com",
  kelas: {
    class_name: "JCWD",
    lecturer: "jordan",
  },
};

let scores: number[] = [10, 20, 30, 40, 50];
scores.push(2);
let students: IStudent[] = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  {
    name: "Student 2",
    email: "student2@mail.com",
  },
  {
    name: "Student 3",
    email: "student3@mail.com",
  },
];

console.log(scores, scores.toString()); // array to string
console.log(scores.join(" ")); // array to string, replace ',' based on argument

//CRUD = create read update delete
scores[scores.length] = 8;
// scores[100] = 20;
scores.push(88); //menambahkan element ke dalam index paling belakang
scores.unshift(21); //menambahkan element ke dalam index paling depan
console.log(scores);
scores.pop(); //menghapus value di index paling belakang
scores.shift(); //menghapus value di index paling depan

console.log(scores);
const merged = scores.concat([5, 7, 8, 9], [2, 90, 20, 30]); //menggabungkan 2 atau lebih array dan tidak merubah origin array
console.log(merged, scores);

scores.splice(1, 2); //delete 20,30
console.log(scores);

scores.splice(1, 0, 29); //menambahkan 29 ke index 1, sisa index sebelumnya akan bergeser ke index selanjutnya
console.log(scores);

scores.splice(1, 0, 5, 6, 7, 8, 9); //setelah param ke 2, parameter selanjutnya adalah element yang akan di masukan ke dalam index
console.log(scores);

scores.splice(2, 1); //menghapus element start dari index ke 2, sebanyak 1 element
console.log(scores);

console.log(scores.slice(0, 3)); // mengambil potongan array sesuai start index, dan banyak elementnya
const newScores = [...scores];
console.log(scores.indexOf(50)); //mencari lokasi index dari value 50
console.log(scores.indexOf(1000)); // pada saat lokasi index tidak ketemu, return -1
scores.push(50);
console.log(scores);
console.log(scores.indexOf(50));
console.log(scores.lastIndexOf(50));
console.log(scores);

scores.sort((a, b) => a - b); // sorting number dari besar ke kecil
console.log(scores);
scores.sort((a, b) => b - a); // sorting number dari besar ke kecil
console.log(scores);
const arr3 = ["kucing", "ayam", "kodok"];
arr3.sort().reverse(); //sort string descending
arr3.sort(); //sort string ascending
console.log(arr3);

arr3.forEach((v, i) => {
  console.log("hore");

  console.log(`index ke ${i} = ${v}`);
  console.log("index ke", i, "=", v);
  console.log("index ke " + i + " = " + v);
});
arr3.forEach(() => console.log("tes"));

console.log(
  arr3.concat(["burung"]).forEach((v, i, self) => {
    console.log(self);
    return 20;
  })
);

const students1 = ["udin", "ucok"];
const students2 = ["naruto", "sakura"];
const students3 = students1.concat(students2);
const students4 = [...students1, ...students2];

// console.log(students1.concat(students2));
// console.log(students1, students2);

// function penjumlahan(a: number, b: number) {
//   return a + b;
// }

// function penjumlahan2(a: number, b: number) {
//   return a + b;
// }

// const c = penjumlahan(5, 9);
// console.log(penjumlahan(10, 20));
// console.log(penjumlahan2(10, 20));

const fc = students4.forEach((v, i) => v);
//foreach return undefined atau void
const mp = students4.map((v, i) => v + i);
// map => return array
// array yang direturn dari map bergantung kepada return dari cbfunction
console.log("ini fc", fc);
console.log("ini mp", mp);

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrEvenOdd = numbs.map((v) => v + (v % 2 ? " odd" : " even"));

console.log(arrEvenOdd);

console.log(students4);

const filter_students = students4.filter((v, i) => 1);
const filter_students2 = students4.map((v, i) => 1);
console.log(filter_students); //filter
console.log(filter_students2); //map

// [] = push(true),push(false)
// [] =  true? push(v) :

// map return Array, panjang array sesuai dengan origin Array, element di dalam array yang baru bergantung pada return setiap loopingnya

// filter return array, panjang array bergantung pada setiap return boolean di dalam looping. ketika dia true maka akan push value sebagai element di array yang baru. jika tidak true maka tidak akan dipush.

const find_student = students4.find((v, i) => v == "narto");

console.log(find_student);

const find_index_student = students4.findIndex((v, i) => v == "naruto");

console.log(find_index_student);

console.log(students4.indexOf("naruto"));
const index_student = students.findIndex((v) => v.name == "Student 1");
console.log(
  students.indexOf({
    name: "Student 1",
    email: "student1@mail.com",
  })
);

console.log(index_student);

const coba = students4.map((v) => {
  for (let i = 0; i < 10; i++) {
    v += " 1 ";
  }
  return v;
});

console.log(coba);

const arr_ = [1, 2, 3, 4, 5, 5];

for (let i = 0; i < arr_.length; i++) {
  console.log(arr[i]);
}

console.log(arr_.map((v) => console.log(v)));

console.log(console.log("hello"));

const arr_numbs = [9];

const sum = arr_numbs.reduce((sm, curr_value) => {
  console.log("ini nilai sum", sm, curr_value);

  return sm + curr_value;
}, 0);

const sum2 = arr_numbs.reduce((sm, curr_value) => {
  console.log("ini nilai sum tanpa init value", sm, curr_value);
  return sm + curr_value;
});
console.log(sum);
console.log(sum2);

const arr5 = [1, 2, 3, 4];
const arr6 = [1, 2, 3, 4, 6];

arr5.reduce((arr, value) => [...arr, value + 1], [] as number[]);

console.log(arr5.push(50) + arr6.push(12));
