
const n = parseFloat(prompt('Введите число:'));
let arr = Array.from({length: n},() => Math.floor(Math.random()*10) + 1)
console.log(arr)


function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

var unique = arr.filter(onlyUnique);

console.log(unique); 
