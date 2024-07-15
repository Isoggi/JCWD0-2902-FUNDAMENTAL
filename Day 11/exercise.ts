/** @format */

// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

const convertExcel2 = (input: string) =>
  input
    .split("")
    .reduce(
      (result, val) => result * 26 + val.toUpperCase().charCodeAt(0) - 64,
      0
    );
//result = 1 *26 + 1
//result = 27
console.log(convertExcel2("aa"));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1
const singleNumber = (arr: number[]) =>
  arr
    .sort()
    .reduce((prev, curr) => (prev == curr ? NaN : isNaN(prev) ? curr : prev));

console.log(singleNumber([2, 2, 1])); //1

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s: string, t: string) =>
  s.toLowerCase().split("").sort().join() ==
  t.toLowerCase().split("").sort().join();

console.log(isAnagram("Car", "rac")); //[c,a,r] [r,a,c] => [a,c,r] [a,c,r] => "acr" === "acr"

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const staircase = (n: number) =>
  [...Array(n)].reduce(([prev, curr]) => [curr, prev + curr], [0, 1])[1];
console.log(staircase(8));
// [21,34]

// [0,1] => [1,1]
