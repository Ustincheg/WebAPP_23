var num = Math.floor(Math.random() * (11 - 1 + 1) + 1);

var pred = Number(prompt("Введите целое предполагаемое число"));

if (pred == num) {
    console.log('Хорошая работа');
} else console.log('Не соответствует');

console.log('Загаданное число было: ' + num);