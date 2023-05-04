var num = Math.floor(Math.random() * (11 - 1 + 1) + 1);
console.log(num);

var p = Number(prompt("Введите число"));

if (p == num) {
    console.log("{Хорошая работа")
} else console.log("Не соответствует");
