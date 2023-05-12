let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));
let operator = prompt("Введите +, -, / или *");
if (operator == "+") {
    alert(`Результат: ${num1+num2}`);
}
    else if (operator == "-") {
        alert(`Результат: ${num1-num2}`);
    }
    else if (operator == "/") {
        alert(`Результат: ${num1/num2}`);
    }
    else if (operator == "*") {
        alert(`Результат: ${num1*num2}`);
    }
    
