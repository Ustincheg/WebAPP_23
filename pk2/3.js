num1 = parseInt(prompt("Введите первое число: "), 10);
num2 = parseInt(prompt("Введите второе число: "), 10);
symbol = prompt("Введите один из операторов(+ - * /): ");

switch (symbol) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
}