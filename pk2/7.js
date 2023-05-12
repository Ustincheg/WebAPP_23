str = "webmaster";
alert("Исходная строка: "+ str)
console.log("Исходная строка: "+ str)

str1 = str.split('')
for (i = 0; i < str1.length; i++) {
    for (j = 0; j < str1.length - i - 1; j++) {
        if (str1[j] > str1[j + 1]) {
            temp = str1[j];
            str1[j] = str1[j + 1];
            str1[j + 1] = temp;
        }
    }
}
console.log("Конечная строка: "+ str1.join(''))
alert("Конечная строка: "+ str1.join(''))
