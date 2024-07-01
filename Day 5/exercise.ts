console.log(
  "Write a function to get the lowest, highest and average value in the array (with and without sort function)."
);
let arr: any = [12, 5, 23, 18, 4, 45, 32];

let result: any;
console.log("With sort:");

const lowHighAvg = (arr: Array<number>) => {
  let res = {
    low: 0,
    high: 0,
    avg: 0,
  };
  res.low = [...arr].sort()[0];
  res.high = [...arr].sort()[arr.length - 1];
  res.avg = arr.reduce((v: number, c: number) => v + c, 0) / arr.length;
  return res;
};

result = lowHighAvg(arr);
console.log(
  `arr = ${arr} → {lowest : ${result.low}, highest: ${result.high}, average: ${result.avg}`
);

console.log("Without  sort:");
// result =

console.log(
  `arr = ${arr} → {lowest : ${result.low}, highest: ${result.high}, average: ${result.avg}`
);

arr = ["apple", "banana", "cherry", "date"];
const concatAnd = (v: Array<string>) => {
  let res = "";
  res =
    [...v].slice(0, v.length - 1).join(",") + `, and ${[...v][v.length - 1]}`;
  return res;
};
console.log(`arr = ${arr} → ${concatAnd(arr)}`);

arr = [5, 3, 1, 7, 2, 6];
const sortSecond = (v: Array<number>) => {
  let res = 0;
  res = [...v].sort()[1];
  return res;
};

console.log(`numbers = ${arr} → ${sortSecond(arr)}`);

const sumIntArr = (a: Array<number>, b: Array<number>) => {
  let res = new Array<number>();
  let c_in = 0;
  while (c_in < a.length) {
    res.push(a[0] + b[0]);
    c_in++;
  }
  return res;
};
arr = [1, 2, 3];
let arr2: any = [3, 2, 1];
console.log(`[${arr}] + [${arr2}] → [${sumIntArr(arr, arr2)}]
`);

const newElArr = (v: Array<number>, nE: number) => {
  if (![...v].includes(nE)) v.push(nE);
};

arr = [1, 2, 3, 4];
arr2 = [...arr];
let newInput: any = 4;
newElArr(arr, newInput);
console.log(`arr = [${arr2}], newElement = [${newInput}] → [${arr}]
`);
newInput = 7;
newElArr(arr, newInput);
console.log(`arr = [${arr2}], newElement = [${newInput}] → [${arr}]
`);

arr = ["3", 1, "string", null, false, undefined, 2];
const sumNumOnly = (a: Array<any>) => {
  return a.reduce((pv, cv) => pv + (typeof cv === "number" ? cv : 0), 0);
};
console.log(`mixedArray = [${arr}] → ${sumNumOnly(arr)}`);

const maxSizeInput = (max: number) => {
  function resultArray(a: number, ...rest: Array<number>) {
    let res = new Array<number>();
    let c_in = 0;
    while (res.length < max) {
      res.push(res.length === 0 ? a : rest[c_in]);
      if (res.length > 1) c_in++;
    }
    return res;
  }

  return resultArray;
};

newInput = 5;
console.log(
  `maxSize = [${newInput}], given integers is [5, 10, 24, 3, 6, 7, 8 ] → ${maxSizeInput(
    newInput
  )(5, 10, 24, 3, 6, 7, 8)}`
);

const concArr = (a1: Array<any>, a2: Array<any>) => {
  return [...a1, ...a2];
};
(arr = [1, 2, 3]), (arr2 = [4, 5, 6]);
console.log(`arr = [${arr}], arr2 = [${arr2}] → [${concArr(arr, arr2)}]`);

arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const dupArr = (a: Array<any>) => {
  let tempArr = [...a],
    dupA = new Array<any>();
  tempArr.reduce((pV, cV) => {
    if (
      tempArr.indexOf(cV) !== tempArr.lastIndexOf(cV) &&
      !dupA.some((item) => item === cV)
    )
      dupA.push(cV);

    return dupA;
  }, []);

  return dupA;
};

console.log(`arr = [${arr}]  →  ${dupArr(arr)}`);
function diffArr(a: Array<any>, b: Array<any>) {
  let tempArr = [...a, ...b],
    diffA = new Array<any>();
  tempArr.reduce((pV, cV) => {
    if (tempArr.indexOf(cV) === tempArr.lastIndexOf(cV)) diffA.push(cV);

    return diffA;
  }, []);
  return diffA;
}
(arr = [1, 2, 3, 4, 5]), (arr2 = [3, 4, 5, 6, 7]);
console.log(`arr = [${arr}], arr2 = [${arr2}] → [${diffArr(arr, arr2)}]`);

function onlyPrimitive(arr: Array<any>) {
  let tempArr = [...arr];

  return tempArr.filter((x) => typeof x !== "object");
}

arr = [1, [], undefined, {}, "string", {}, []];
console.log(
  `[${arr.map((x: any) => String(x))}] → [${onlyPrimitive(arr).map((x: any) =>
    String(x)
  )}]`
);

arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(
  `${arr}  →  ${[...arr]
    .filter((x) => dupArr(arr).includes(x))
    .reduce((pv: number, cv: number) => (cv += pv), 0)}`
);

const SuitJepang = ["Batu", "Gunting", "Kertas"];

function JanKenPon(a: Number | string) {
  let jkp_num = -1;
  if (typeof a == "string") jkp_num = SuitJepang.indexOf(a);
  else jkp_num = Number(a);

  let comJkp = SuitJepang.indexOf(
    [...SuitJepang].sort((a, b) => Math.random() - 0.5)[0]
  );

  if (jkp_num === comJkp - 1 || (jkp_num === 2 && comJkp === 0)) return "Win";
  else return "Lose";
}

console.log(JanKenPon("Batu"));
