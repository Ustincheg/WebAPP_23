//1
var randNum = Math.floor(Math.random() *10) +1;
console.log("Рандомное число: " + randNum);
var Num = prompt ("Введите число от 1 до 10: ");
console.log ("Введённое число: " + Num);
if (randNum == Number(Num)) console.log("Хорошая работа")
else console.log("Не соответствует");
