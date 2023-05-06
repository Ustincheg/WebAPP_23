
const n = parseFloat(prompt('Введите число:'));
let arr = Array.from({length: n},() => Math.floor(Math.random()*10) + 1)
console.log(arr)

function sortNumber(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const n = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = n;
        }
      }
    }
    console.log(arr);
}
sortNumber(arr)