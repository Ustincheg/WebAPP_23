arr1 = [3, 3, 5, 7, 8, 4, 8]
alert("Исходный массив: " + arr1)
console.log("Исходный массив: " + arr1)

arr2 = arr1.filter((item,i) => arr1.indexOf(item) == i);
alert("Конечный массив: " + arr2)
console.log("Конечный массив: " + arr2)

