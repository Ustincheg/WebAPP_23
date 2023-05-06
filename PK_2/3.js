const num_1 = parseFloat(prompt('Введите первое число:'));

const num_2 = parseFloat(prompt('Введите второе число:'));

const operation = prompt('Введите знак действия (+, -, *, /)');

let end;

switch (operation) {
  case '+':
    end = num_1 + num_2;
    break;
  case '-':
    end = num_1 - num_2;
    break;
  case '*':
    end = num_1 * num_2;
    break;
  case '/':
    end = num_1 / num_2;
    break;
  default:
    alert('Такого знака нет, введите еще раз:');
}

console.log(end)
