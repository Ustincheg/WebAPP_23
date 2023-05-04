var arr = [];
var sum = 0;
for (var i = 0; i < 3, i++) {
    arr[i] = prompt("ВВедите число");
    if ((arr[i]) % 2 == 2) {
        sum = sum + Number(arr[i]);
    }
}

console.log(arr);
console.log(sum);
