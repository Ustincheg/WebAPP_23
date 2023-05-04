var znak = prompt('Введите операцию');
var x = Number(prompt('Введите число 1'));
var y = Number(prompt('Введите число 2'));
var result=0;

switch (znak) {
    case '+':
        return result = x + y;
    case '-':
        result = x - y;
        break;
    case '/':
        result = x / y;
        break;
    case '*':
        result = x * y;
        break;
}

console.log('Результат операции: ', + result);