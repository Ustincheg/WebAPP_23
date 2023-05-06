let arr = [2, 34, 3, 47, 22, 27, 3, 2, 47, 43, 55, 28];
alert(findElements(arr));

function findElements(arr){
    let tarr = [];
    for(let i = 0; i < arr.lenght; i++){
        if(!tarr.includes(arr[i])){
            tarr.push(arr[i]);
        }
    }
    return tarr;
}