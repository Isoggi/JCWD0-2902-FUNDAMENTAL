const contoh2 = new Promise((resolve, reject) => {
  resolve("Hasil resolve");
  reject("Hasil reject");
});

const result = async () => await contoh2.then((res) => res).catch((err) => err);
const resultCheck = async () =>
  await contoh2
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log(result);
console.log(resultCheck);
