const num1 = parseFloat(prompt("Введите первое число"));
const op = prompt("Введите арифметическую операцию (+, -, *, /)");
const num2 = parseFloat(prompt("Введите второе число"));
switch (op)
{
case "+":
    alert(num1 + num2)
    break;
case "-":
    alert(num1 - num2)
    break;
case "*":
    alert(num1 * num2)
    break;
case "/":
    alert(num1 / num2)
    break;
default:
    alert("Неверно")
}