/** @format */

//linear search
function search(arr: number[], x: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

console.log(search([2, 20, 10, 30], 30));

//binary search
function binarySearch(arr: number[], l: number, r: number, x: number) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binarySearch(arr, l, r - 1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

let arr = [2, 3, 5, 10, 40];
let x = 40;

console.log(binarySearch(arr, 0, arr.length - 1, x));
//arr, 0 , 4, 40
//2
//arr[2] == x => 5 == 40 ? false
//5 > 40 ?false
// arr, 3, 4, 40
// 3
// arr[3] === x => 10 == 40 ? false
// 10 > 40 ? false
//arr, 4,4,40
//4
//arr[4] == x? 40 === 40 ? true return mid
