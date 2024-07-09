/** @format */

function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
//i 0
//j = 3
// j < 4
//3 < 5 ? true [3,5,2,10,25]
// 2 < 5? true [3,2,5,10,25]
// 10< 5? false
// 25 < 10 ? false

//i 1 [3,5,2,10,25]
//j = 1
// j < 3
// arr[j + 1] < arr[j]
// 5 < 3? false
// 2 < 3? true [2,3,5,10,25]
// 5 < 10 ? false
// 25 false

// console.log(bubbleSort([5, 3, 2, 10, 25]));

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    const min = Math.min(...arr.slice(i + 1, arr.length)); // 2  [3, 2, 10, 25]
    const indexMin = arr.indexOf(min); // index 2 adalah 2
    if (min < arr[i]) [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    //2 < 5? arr[0] = 2, arr[2] = 5
    //
    //[2,3,5,10,25]
  }
  return arr;
}

console.log(selectionSort([5, 3, 2, 10, 25]), "test");
