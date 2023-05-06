let arr = [2, 34, 3, 47, 22, 27];
alert(bubbleSort(arr));

function bubbleSort(arr){
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
