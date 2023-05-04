let arr = [5, 10, 2, 4, 8, 7, 2, 9, 11, 1, 55, 22, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      sum += arr[i]; 
    }
  }
alert(sum);