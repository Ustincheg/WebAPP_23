var que;

que = prompt('Введите что-нибудь');

if (typeof que == 'number') {
    console.log('Введенное является числом');
} else console.log('Не является числом');

//все-что мы вводим воспринимается как строка, даже числа..