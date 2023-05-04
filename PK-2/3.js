//3
var str_1 = prompt("Введите математическую операцию: +, -, *, /"); 
var num_1 = prompt("Введите первое число: ");
var num_2 = prompt("Введите второе число: ");
if (str_1 == "+") {
    console.log("Сумма двух чисел: " + (Number(num_1) + Number(num_2)));
} else if (str_1 == "-") {
    console.log("Разность двух чисел: " + (Number(num_1) - Number(num_2)));
} else if (str_1 == "*") {
    console.log("Произведение двух чисел: " + (Number(num_1) * Number(num_2)));
} else if (str_1 == "/") {
    console.log("Частное двух чисел: " + (Number(num_1) / Number(num_2)));
} else {
    console.log("Вы ввели не математическую операцию!");
}
