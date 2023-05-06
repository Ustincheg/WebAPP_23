const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt('Я загадал число от 1 до 10. Попробуй угадать его!');

while (guess != randomNumber) {

  
 if (guess === null) {
    alert('Игра окончена.');
    break;
  }


  alert('Не соответствует.');


  guess = prompt('Попробуй еще раз:');
}


if (guess == randomNumber) {
  alert('Хорошая работа!');
}