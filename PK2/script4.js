function sortArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
      let min_idx = i;
      for (let j = i+1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      let temp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  
  let numbers = [16, 3, 9, 1,8];
  alert(sortArray(numbers));