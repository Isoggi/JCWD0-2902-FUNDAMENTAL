/** @format */

const loop = (arr: any[]) => {
  arr.map((val) => console.log(val.name));
};

const loop2 = (arr: any[]) => {
  arr.map((val) => console.log(val));
};

let loop3 = (arr: any[]) => {
  arr.map((val) => console.log(val.name));
};

// export default { loop, loop2, loop3 };
module.exports = { loop2 };
