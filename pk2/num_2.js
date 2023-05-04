var arr =[];
var sum = 0;
var count=Number(prompt('Количество чисел в массиве'));

for(var i=0;i<count;i++){
    arr[i]=Number(prompt('Введите число'));
    if((arr[i]%2)==0){
        sum =sum + Number(arr[i]);
    }
}

console.log('Сумма всех четных чисел: '+ sum);