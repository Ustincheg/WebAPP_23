let rnd = Math.floor(Math.random()*10);
let num = parseInt(prompt("Введите число", rnd));
if (num == rnd){
    prompt("Хорошая работа");
}
else{
    prompt("Не соответствует");
}
