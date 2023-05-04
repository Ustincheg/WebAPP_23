/*
//Операции
var num_1 = 5.4;
var num_2 = 15;

console.log("Результат: " + (num_1 + num_2));
*/

/*
//Условия
var number = 15;
var bool = true;

if (number == 5 && !bool) {
    console.log("Ok");
} else if (number < 10) {
    console.log("Ok!");
} else {
    console.log("Else");
}


var str_1 = "word1";

switch(str_1) {
    case 4: console.log("Переменная со значением 4");
    break;
    case "45": console.log("Переменная со значением 45");
    break;
    case "word": console.log("Переменная со значением word");
    break;
    default: console.log("Default");
} 
*/

/* 
//Массивы
var arr = [5, true, "stroka", 5.7, 0, -100];
arr[3] = "word";
console.log(arr);

var matrix = [[4, 6, 8], ["stroka", 5.7], [0, -100]];
matrix[1][0] = 90;
console.log(matrix);
 */

/* 
//Циклы
for (var i = 100; i > 5; i /= 2) {
    console.log(i);
}

var j = 0;
while(j < 10) {
    j++;
    console.log(j);
}

var x = 0;
do {
    console.log(x);
    x++;
} while(x < 50); 
*/ 

/* 
//Всплывающие окна
var person = null;
if(confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше имя");
    alert ("Привет, " + person)
} else {
    alert("Вы нажали на «Отмена»");
} 
*/

/* 
//Функции
function info(word) {
    console.log(word + "!");
}

function summa(a, b) {
    var res = a +b;
    info(res);
}

summa(5, 7);

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

var array = [6, 8, 1];
var res = sum(array);
res *=2
console.log("Результат: " + res);
 */

/* 
//Маленькая программка
function Func(c, d) {
    c = Number(c);
    d = Number(d);6
    if (c == d) {
        otv = c*c;
    } else {
        otv = (c + d)*2;
    }
    return otv;
}

var a = prompt ("Введите длину прямоугольника:");
var b = prompt ("Введите ширину прямоугольника:"); 
res = Func(a, b);
console.log("Результат: " + res);
 */

/* 
//Ещё одна маленькая программка 
function Func(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0)
        arr[i] = 0;
        else {
        arr[i] = Number(arr[i])*2;
        }
    }
    return (arr);
}

var array = prompt("Введите массив данных (в строку через запятую): "); 
array = array.split(","); 
var Ar = Func(array); 
document.write (Ar);
 */
