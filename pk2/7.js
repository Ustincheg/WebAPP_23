let str = prompt("Введите строку:");
let arr = str.split("");
alert(sort(arr))

function sort(arr) {
    let len = arr.length;
    for (let j = len - 1; j > 0; j--) {
      for (let i = 0; i < j - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return(arr.join(''))
  }