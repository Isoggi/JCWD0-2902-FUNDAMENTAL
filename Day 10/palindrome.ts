/** @format */

let palindrome: string | string[] = "race, car"; //racecar
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("").filter((char) => {
  console.log(char, arrAlpha.includes(char));

  return arrAlpha.includes(char);
});
//[r,a,c,e, ',' , " ", c,a,r]
//[r,a,c,e,c,a,r]
console.log(palindrome);

const reversed = [...palindrome].reverse();
let isPalindrome = true;

for (let i = 0; i < palindrome.length; i++) {
  for (let j = 0; j < reversed.length; j++) {
    if (palindrome[i] !== reversed[j]) {
      isPalindrome = false;
    }
  }
}

console.log(palindrome.join("") === reversed.join(""));

const somefunc = (a: number, b: number) => {
  a + 2;
  if (!a) a *= 100;
  return a + b;
};

let numb = 20;
console.log(numb++ + 15); //

//  10(avg(fundamental,frontend,backend)) + 10 CC(cc1+cc2)
// 15 minpro + 15 selection test(take home test, live code, technical question)  = 50*2
// hasil >= 85
