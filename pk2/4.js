arr = [6, 3, 8, 1, 2, 5, 7];
alert("Отсортированный массив: " + arr);
console.log("Первоначальный массив: "+ arr);
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
alert("Отсортированный массив: "+ arr);
console.log("Отсортированный массив: "+ arr);

