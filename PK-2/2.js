//2
var arr = prompt("Введите масив чисел (через пробел): ");
arr = arr.split(" ");
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 == 0) 
    sum +=Number(arr[i]);
}
console.log("Сумма чётных элементов массива: " + sum);