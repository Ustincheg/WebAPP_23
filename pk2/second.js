let arr = [2, 34, 3, 47, 22, 27];
let sum = 0;
for( let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        sum += arr[i];
    }
}
alert(sum);