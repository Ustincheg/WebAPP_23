a=[2, 7, 9, 3, 5, 6, 8]
console.log(a.length)
k=0;
for (i = 0; i<a.length; i++){
    if (a[i]%2==0){
        k+=a[i];
    }
}
alert(k);