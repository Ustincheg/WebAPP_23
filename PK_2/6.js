
const n = parseFloat(prompt('Введите число или строку:'));

function isNumber(n) {
    if(typeof n === 'number'&& isFinite(n)){
        console.log('True')
    }
    else{
        console.log("False")
    }
}
isNumber(n)