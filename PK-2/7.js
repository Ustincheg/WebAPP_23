//7
function strsort(str_1) {
    str_1 = str_1.split("");
    return str_1.sort().join("");
}

var stroka = prompt("Введите строку: ");
stroka = strsort(stroka);
console.log("Отсортированная строка: " + stroka);