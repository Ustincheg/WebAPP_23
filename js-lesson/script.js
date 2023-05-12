// var num = 1.45;
// var Num = 2;
// Num = 5;

let x = true;
// let a = Number(prompt("Введите число "));
// a = 16546546546546455654654654645546545;
// console.log(num, Num)
// document.write(typeof(Num));

// document.write(x + a)


// console.log(a)



const array2 = [1, 2, 3, 4, 5, 6] 

function sumArr (arr) {
    res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
        console.log(res, i)
    }
    return res
}



console.log(sumArr(array2))