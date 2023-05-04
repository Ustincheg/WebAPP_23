var a = prompt("Введите знак")
var b = Number(prompt("Введите число"));
var c = Number(prompt("Введите число"));
var result = 0;

switch (a) {
    case "*":
        result = b * c;
        break;
    case "-":
        result = b - c;
        break;
    case "/":
        result = b / c;
        break;
    case "+":
        result = b + c;
        break;
}

console.log(result);