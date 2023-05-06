const num = Math.floor(Math.random()*10) + 1


let begin = prompt('Введите число от 1 до 10')

if (begin == num) {
    print('Хорошая работа!');
}
else{
    print('Не соответствует');
    a = prompt('Попробуй еще раз:');
}