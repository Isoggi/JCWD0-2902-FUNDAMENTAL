function IsEqualObj(a: any, b: any) {
  let result = false;
  let dataA = Object.keys(a);
  let dataB = Object.keys(b);
  if (dataA.length > 0 && dataB.length > 0)
    result = a[dataA[0]] === b[dataB[0]];
  return result;
}
let obj1: any = { a: 2 },
  obj2: any = { a: 1 };

console.log(`${obj1.a} ${obj2.a} ${IsEqualObj(obj1, obj2)}`);

(obj1 = { a: "Hello" }), (obj2 = { a: 1 });

console.log(`${obj1.a} ${obj2.a} ${IsEqualObj(obj1, obj2)}`);

(obj1 = { a: 1 }), (obj2 = { a: 1 });

console.log(`${obj1.a} ${obj2.a} ${IsEqualObj(obj1, obj2)}`);

function IntersectObj(a: any, b: any) {
  let dataA = Object.keys(a);
  let dataB = Object.keys(b);
}
