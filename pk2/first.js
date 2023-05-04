let rnd =  Math.floor(Math.random() * 10) + 1;
let num = parseInt(prompt("Введите число от 1 до 10: "), 10);
if (rnd == num){
    alert("Хорошая работа");
} else {
    alert(`Не соответствует ${rnd}`);
}