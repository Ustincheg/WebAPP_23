let num = prompt("Введите значение:");
function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }