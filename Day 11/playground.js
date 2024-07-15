let input = [0, 0];
console.log(`input is ${JSON.stringify(input)}`);
console.log(Boolean(JSON.stringify(input)));

// var checkIfInstanceOf = function (obj, classFunction) {
//   console.log(obj.prototype[String.toString(classFunction)]);
//   if (Boolean(obj.prototype[String.toString(classFunction)]))
//     return obj.prototype[classFunction];
//   return typeof obj === classFunction;
// };

// let obj = 5;

// do {
//   object = obj.prototype;
//   console.log(object);
// } while (object);
// console.log(Object.entries(Number.prototype));

// console.log(checkIfInstanceOf(5, Number));

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

var join = function (arr1, arr2) {
  let objArray = [];
  [...arr1].forEach((outerObj) => {
    objArray.push(
      Object.keys(outerObj)
        .sort()
        .reduce((obj, key) => {
          obj[key] = outerObj[key];
          return obj;
        }, {})
    );
  });
  console.log(`objArray is `);
  console.log(objArray);
  [...arr2].forEach((outerObj) => {
    console.log(outerObj.id);
    console.log(objArray[0]);
    let objIndex = objArray.findIndex(({ id }) => {
      return id === outerObj.id;
    });
    console.log(objIndex);
    if (objIndex > -1) {
      Object.assign(objArray[objIndex], outerObj);
      console.log(objArray[objIndex], outerObj);
    } else {
      objArray.push(
        Object.keys(outerObj)
          .sort()
          .reduce((obj, key) => {
            obj[key] = outerObj[key];
            return obj;
          }, {})
      );
    }
  });
  return objArray.sort((a, b) => a.id - b.id);
};
for (let objIndex in arr1[0]) {
  console.log(objIndex);
}
console.log(join(arr1, arr2));

arr1 = [{ id: 1, x: 6 }];
arr2 = [
  { id: 1, x: 15, y: 7 },
  { id: 2, x: 9, y: 18 },
];
console.log(join(arr1, arr2));

arr1 = [
  { id: 1, x: 36, d: 26, f: 35 },
  { id: 3, c: 20, z: 75 },
];
arr2 = [{ id: 2, o: 48, z: 84, y: 61 }];
console.log(join(arr1, arr2));

arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(arr1, arr2));

(arr = [0, 10, 20, 30]),
  (fn = function greaterThan10(n) {
    return n > 10;
  });

var filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let a = fn(arr[i], i);
    console.log(a);
    if (a) res.push(arr[i]);
  }
  return res;
};

console.log(filter(arr, fn));
