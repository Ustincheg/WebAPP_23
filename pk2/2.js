let arr = [7, -3, 0, -23, 9564537, -303927, 4536, 282, -483, 49111001019299, 5, -2091817626363]
let ans = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        ans += arr[i];
    }
}
alert(ans)