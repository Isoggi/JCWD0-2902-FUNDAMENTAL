/** @format */

console.log("test");
console.log("hehehehe");
console.log("hihihi");

let message; // declare
message = "hello"; // re-assign

// let,const,var
console.log(message);

var globalVariable = "ini var"; // declare + assign
globalVariable = "ini berubah"; // reassign
var globalVariable = "ini redeclare"; // redeclare

let replacable = "ini let";
replacable = "ini let yang diubah"; //reassign
// let replacable = "ini let"; //tidak bisa redeclare

const constant = "ini constant";
//tidak bisa direassign dan redeclare

const male = "male";
const udin_gender = "male";
if (udin_gender == male) {
  console.log("dia adalah laki laki");
  console.log("betul dia laki laki");
}

console.log(globalVariable, replacable, constant);
console.log(123 + 567);

// naming variable
const _name = "jordan";
const _Name = "jordan";
const $name = "jordan";
const name1 = "jordan";
const namaSaya = "jordan";
// const const ="ini const"
// const let = "ini constlet"
console.log(_name);

//data types

//primitive
const str = "ini string";
const numb = 123;
const bigNumb = 123n;
const bool = false;
const ini_null = null;
let undef;

console.log(typeof str);
console.log(typeof numb);
console.log(typeof bigNumb);
console.log(typeof bool);
console.log(typeof ini_null);
console.log(typeof undef);
// email = string, password =string, nama = string;
// email = "j@mail.com", password = "password" , nama = "jordan"

// non primitive
const arr = [1, 2, 3, 4];
const obj = {
  name: "jordan",
  address: "bsd",
  fn: () => {
    console.log("hello");
  },
};
console.log(typeof arr);

const jcwd_students = ["adil", "bogel", "yaron"];
const kelas_jcwd = {
  total_student: 11,
  lecture: "jordan",
  lokasi: "bsd",
};
kelas_jcwd.total_student = 20;
kelas_jcwd.lecture = "udin";

const students = [
  {
    name: "adil",
    umur: 100,
    siblings: ["boy", "adek boy"],
  },
  {
    name: "bogel",
    umur: 25,
  },
];

console.log(kelas_jcwd); // console.log(obj.address);
// console.log(arr[0]);

console.log(students[0].name);

// non primitive memiliki collection data primitive;

//

let name2 = "jhonny";
name2 = "bukan jhonny";
let newName2 = name2; // jhonny
console.log(newName2);
newName2 = "jonjon"; // reassign = jonjon

console.log(name2, newName2);

const student1 = {
  name: "junnet",
  age: 20,
};

const student2 = student1;
const student3 = { ...student1 }; // deep copy
student2.name = "juni";
student3.name = "jujun";
console.log(student1, student2, student3);
// shallow copy dan deep copy

//built in method string

const str2 = "ini adalah string";

console.log(str2.length);

console.log("abc");
console.log(str2.slice(0, 5));
console.log(str2.split("u"));
console.log(str2.charAt(1));
console.log(str2[1]);
str2[1] = "k";
console.log(str2.concat(" ayam ", "goreng"));
console.log(str2.toUpperCase());
[(1, 2, 3, 4)];
// menjalan sebuah function diakhiri dengan ()

const hello = "test";
const semua = "semua";
const helloSemua = hello + " " + semua;
const helloSemua2 = `${hello} ${semua} terimakasih`;
const jumlah = 2 * 5;
console.log(jumlah);

console.log(helloSemua2);
console.log("'hello'" + " semua");
console.log('"hello"');
console.log(`hello`);

console.log(`ini adalah isi dari jumlah yaitu ${jumlah}  tipe data angka`);

//numbers

const angka = 123.5;
console.log(angka.toString());
console.log(angka.toFixed());

//conversion
console.log(typeof String(8999));
console.log("string 0", Boolean(String(0)));
console.log(typeof Number("129"));
console.log(Boolean("hello"));
console.log('""', Boolean(""));
console.log(0, Boolean(0));
console.log(-1, Boolean(-1));
console.log(1, Boolean(1));
console.log({}, Boolean({}));
console.log([], Boolean([]));
console.log(null, Boolean(null));
console.log(undefined, Boolean(undefined));
console.log("string false", Boolean("false"));

let date = new Date();
let date2 = new Date("2017-06-11:01:20:31"); // YYYY-MM-DD
let date3 = new Date(0);
let date4 = new Date(24 * 60 * 60 * 1000);

console.log(date);
console.log(date2);
console.log(date3.getFullYear());
console.log(date4.getDate());
console.log(date4.getDay());

const angka2 = 23;
angka2.toExponential();

console.log(1 + 2, typeof (1 + 2));
console.log("1" + 2, typeof ("1" + 2));
console.log(true + "true");
console.log(true + 15);
console.log(25 && 78);
console.log(25 || 78);

console.log("2" - 3);
console.log("2" * 3);
console.log(3 / "2");
console.log(10 % 3);
console.log(5 ** 3);

console.log(1 + 2 + "1");
console.log(1 + 2 + "1" * 3 + "2");

let n = 2;

n += 5; // n = n + 5 =  7
n *= 2; // n = 7 * 2 =  14
n++; // n = 14 + 1 = 15
// n--; // n = 15 - 1 = 14
console.log(n--);
console.log(++n);

const t = `${(n *= 5)} horee`;
console.log(n);
console.log(t);

//cari luas persegi panjang
// rumusnya panjang x lebar

// buat variable panjang, contoh panjang = 10
// buat variable lebar , contoh lebar = 5
// apply rumus panjang x lebar, luas = panjang * lebar

const panjang = 10,
  lebar = 5;

const luas = panjang * lebar;

console.log(panjang, "x", lebar, "=", luas);

const date5 = new Date("2022-01-20");
const date6 = new Date("2023-01-20");

// const diff: number = (Number(date2) - Number(date1)) / 1000 / 3600 / 24;
const diff = (date6 - date5) / 1000 / 3600 / 24;
console.log(diff);
