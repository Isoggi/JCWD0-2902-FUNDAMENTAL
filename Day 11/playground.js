var checkIfInstanceOf = function (obj, classFunction) {
  if (typeof obj === Object) return obj instanceof classFunction;
  return typeof obj === classFunction;
};

// console.log(Object.getPrototypeOf());
console.log((5)["__proto__"] === Number.prototype);
console.log(Number.prototype);

// console.log(checkIfInstanceOf(5,Number));

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

var join = function (arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  for (let a in arr1) {
    console.log(a);
  }
};
join(arr1, arr2);

(functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x]), (x = 4);

var compose = function (functions) {
  return function (x) {
    for (let fn = functions.length - 1; fn >= 0; fn--) {
      x = functions[fn](x);
    }
    return x;
  };
};

console.log(compose(functions)(x));

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
