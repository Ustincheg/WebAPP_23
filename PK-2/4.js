//4 
function arrsort(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (Number(arr[j+1]) < Number(arr[j])) {
            var a1 = arr[j+1];
            arr[j+1] = arr[j]; 
            arr[j] = a1;
        }
    }
    }
    return arr;
}

var array = prompt("Введите масив чисел (через пробел): ");
array = array.split(" ");
var massiv = arrsort(array);
console.log("Отсортированный массив: " + massiv);