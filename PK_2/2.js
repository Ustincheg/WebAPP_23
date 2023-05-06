
const n = 10
let arr = Array.from({length: n},(_, index) => index + 1)

function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    console.log(sum);
}
sum(arr)