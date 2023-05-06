
const str = prompt('Введите строку:')


function sortAlfa(str) {
    console.log(str.split('').sort().join(''));
}
sortAlfa(str)