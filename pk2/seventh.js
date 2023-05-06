let str = prompt("Введите слово");
let arr = str.split("");
alert(strSort(arr));

function strSort(arr){
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