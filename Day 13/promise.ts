/** @format */

//then pada saat promise terpenuhi
//catch pada saat promise tidak terpenuhi
//finally mau berhasil atau gagal akan dijalankan di akhir

const tryPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) return resolve("success");
    reject("error");
  }, 2000);
});

const contoh2 = new Promise((resolve, reject) => {
  resolve({ result: "berhasil" });
  reject("gagal");
});

const result = async () =>
  await contoh2
    .then((res) => {
      const a = res as { result: string };
      return a.result;
    })
    .catch((err) => err)
    .finally(() => console.log("finally")); //berhasil atau gagal

//promise punya state
//pending, success, failed

//1 menunggu sebuah promise
//2 menunggu sebuah async function yg memiliki promise

//fetch => request ke api
// request api butuh waktu => waktunya ga jelas
//pada saat berhasil datanya mau diapain ?
//pada saat gagal mau munculin apa ?

//pada kita fetching terus gagal dan kita ga buat catchnya

const test = async () => console.log(await result());
test();
// test nunggu sampai result selesai
// result nunggu promise selesai

//promise selesai return ke result
//test result isi dari result

tryPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally done"));

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = (await response.json()) as any[];
    // console.log(users);
    const user = users.find((v) => v.id == 10);
    console.log(user);
    console.log("ditungguin");

    return users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  } finally {
    console.log("lol");
  }
};

// fetchData();

//promise itu sifatnya async
//async fungsi yg tidak perlu ditunggu
//apa si await?
//nunggu ? promise

function fetchData2() {
  fetch("https://jjjjjjjsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json().then((resolve) => {
        const users = resolve as any[];
        console.log(users.find((user) => user.id == 10));
      });
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  console.log("horror");
}

fetchData2();

const testError = () => {
  try {
    console.log("ini test error");
    throw new Error("ini errorrrr");
    console.log("halo2");
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
};

// testError();

// console.log("hihihi");

const tryThrow = () => {
  try {
    const isFalse = true;
    if (isFalse) throw { message: "ini errorrrrrrrrrrrrrrr" };
    console.log("successsssssssssssssss");
  } catch (error: any) {
    console.log(error.message);
  }
};

tryThrow();

const runFunction = async (f: () => void) => {
  try {
    console.log(await f());
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

const f = async () => {
  return await new Promise((resolve, reject) => {
    const isError = false;
    if (isError) reject(new Error("terjadi error"));
    resolve("success banget");
  });
};

runFunction(f);

const obj = {
  name: "udin",
};

const strObj = JSON.stringify(obj);

const arr = [1, 2, 3, 4];
console.log(JSON.stringify(arr), arr);

console.log(strObj, JSON.parse(strObj));
console.log(obj);
