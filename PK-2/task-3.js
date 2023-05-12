const n1 = Number(prompt("Первое число:"));
const n2 = Number(prompt("Второе число:"));

const operator = prompt("Введите арифметическую операцию (+, -, *, /):")

switch (operator[0])
{
case '+':
    alert(n1 + n2);
    break;
case '-':
    alert(n1 - n2);
    break;
case '*':
    alert(n1 * n2);
    break;
case '/':
    alert(n1 / n2);
    break;
default:
    alert("Ошибка ввода");
}