let num1 = parseInt(prompt("Введите первое число: "), 10);
let num2 = parseInt(prompt("Введите второе число: "), 10);
let op = prompt("Введите один из операторов(+ - * /): ");

if (op == '+'){
    alert (num1 + num2);
}
 else if (op == '-'){
    alert (num1 - num2);
}
 else if (op == '*'){
    alert (num1 * num2);
}
 else if (op == '/'){
    alert (num1 / num2);
}
 else {
    alert ("Неправильный ввод");
}