const cnvrtExclCol = (val: string) => {
  let res: number = 0;
  const nrml = "A".charCodeAt(0) - 1;
  const maxAscii = "Z".charCodeAt(0) - nrml;
  //   console.log(nrml);
  for (let index = 0; index < val.length; index++) {
    // console.log(val.charCodeAt(index) - nrml);
    // console.log(Math.pow(maxAscii, val.length - index - 1));
    res +=
      (val.charCodeAt(index) - nrml) *
      Math.pow(maxAscii, val.length - index - 1);
  }
  console.log(`${val} -> ${res}`);
  return res;
};

cnvrtExclCol("AAA");

const anagramCheck = (s: string, t: string) => {
  if (s.length === t.length) {
    let comp =
      s
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join("") ===
      t
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join("");

    return comp;
  }
  return false;
};
let s = "anagram",
  t = "nagaram";
console.log(`Input: s = "${s}", t = "${t}" Output: ${anagramCheck(s, t)}`);

const stepStair = (n: number) => {
  let res: number = 0;

  //   res =
  return res;
};

let n = 3;
console.log(`Input: n = ${n} Output: ${stepStair(n)}`);

async function sleep(millis) {
  let res = new Promise((resolve, reject) => {
    setTimeout(() => resolve(millis), millis);
  });
}

// sleep.then((result) => {

// }).catch((err) => {

// });
