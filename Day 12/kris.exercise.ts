function returnMajor(arr: number[]) {
  let resArr: number[] = [];
  let distinct = arr.filter((v, i, a) => a.indexOf(v) === i);
  //   console.log(distinct);
  for (let item in distinct) {
    // console.log(arr.filter((v) => v === distinct[item]).length);
    resArr.push(arr.filter((v) => v === distinct[item]).length);
  }
  return distinct[resArr.indexOf(Math.max(...resArr))];
}
let nums = [3, 2, 3];
console.log(returnMajor(nums));
nums = [2, 2, 1, 1, 1, 2, 2];
console.log(returnMajor(nums));

function RomanToNumeric(str: string) {
  const romanics: any = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  });
  const romanArr = Object.entries(romanics).map((x) => x[0]);
  let res: number = 0;
  let isNextPassed: boolean = false;
  for (let i = 0; i < str.length; i++) {
    if (isNextPassed) {
      isNextPassed = false;
      continue;
    }
    let nextRoman: string = romanArr[romanArr.indexOf(str[i]) + 1];
    if (romanics[nextRoman] % 10) {
    }
    if (str[i + 1] == nextRoman) {
      isNextPassed = true;
      res += romanics[nextRoman] - romanics[str[i]];
    } else {
      res += romanics[str[i]];
    }
  }

  return res;
}
let s = "III";
console.log(RomanToNumeric(s));

s = "LVIII";
console.log(RomanToNumeric(s));

s = "MCMXCIV";
console.log(RomanToNumeric(s));

function PascalTRow(n: number, arr: number[][] = []) {
  for (let i = 0; i < n; i++) {}
  return arr;
}

let numRows = 5;
console.log(PascalTRow(numRows));
numRows = 1;
console.log(PascalTRow(numRows));

function StockArray(arr: number[]) {
  let res: number = 0;
  let tempArr = [...arr].slice(arr.indexOf(Math.min(...arr)));
  res = Math.max(...tempArr) - Math.min(...arr);

  if (res === 0 && arr.length > 2) {
    return StockArray(arr.splice(arr.indexOf(Math.min(...arr))));
  }
  return res;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(StockArray(prices));
prices = [7, 6, 4, 3, 1];
console.log(StockArray(prices));

prices = [23, 27, 14, 15, 13, 22, 12];
console.log(StockArray(prices));
