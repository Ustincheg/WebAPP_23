let arr = [1,2,3,4,5,6,23,56];
let b=0;
let a = arr.length;
for (let i=0;i<a;i++){
if (arr[i]%2===0){
    b+=arr[i];
}
}
alert(b)