const number = Math.floor(Math.random()*10)+1;
let input = prompt("Загадано число от 1 до 10");
while(input != number){
    if (input == null){
        alert('Не угадано');
        break;
    }
    alert('Не соответствует');
    input = prompt('Попробуйте еще раз:');
}
 if (input == number){
    alert('Хорошая работа')
 }
