var arr =[];
var count=Number(prompt('Количество чисел в массиве'));

for(var i=0;i<count;i++){
    arr[i]=Number(prompt('Введите число'));
}

var unique = arr.filter((item,i,arr) => arr.indexOf(item) == i);

console.log('Уникальные элементы: ', + unique);