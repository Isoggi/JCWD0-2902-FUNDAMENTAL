function triangleHeight(h: number) {
  let kolom = 1,
    angka = 1;
  while (kolom <= h) {
    let baris = 0,
      tulisan = "";
    while (baris < kolom) {
      tulisan += `${angka > 10 ? angka : "0" + angka} `;
      baris++;
      angka++;
    }
    console.log(tulisan);
    kolom++;
  }
}

triangleHeight(5);

function FizzBuzz(n: number) {
  let arr: any[] = [],
    hitung = 1;
  while (hitung <= n) {
    let str: string = "";
    str += hitung % 3 === 0 ? "Fizz" : "";
    str += hitung % 5 === 0 ? "Buzz" : "";

    arr.push(str ? str : hitung);
    hitung++;
  }
  return arr;
}

console.log(FizzBuzz(18));

function BMICalc(w: number, h: number) {
  let result = "";
  const BMI = w / h ** 2;
  console.log(BMI);
  switch (true) {
    case BMI < 18.5:
      result = "less weight";
      break;
    case BMI >= 18.5 && BMI <= 24.9:
      result = "ideal";
      break;

    case BMI >= 25.0 && BMI <= 29.9:
      result = "overweight";
      break;
    case BMI >= 30.0 && BMI <= 39.9:
      result = "very overweight";
      break;
    case BMI > 39.9:
      result = "obesity";
      break;

    default:
      break;
  }
  return result;
}

const evenOnly = (arr: number[]) => {
  return arr.filter((v, i) => v % 2 === 0);
};

console.log(BMICalc(98, 1.75));

console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
