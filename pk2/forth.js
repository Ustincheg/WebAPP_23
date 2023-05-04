let arr = [5, 10, 2, 4, 8, 7, 2, 9, 11, 1, 55, 22, 100];
alert(bubbleSort(arr));

function bubbleSort(arr) {
    const lenArr = arr.length;
    for (let i = 0; i < lenArr - 1; i++) {
      for (let j = 0; j < lenArr - i - 1; j++) { 
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }