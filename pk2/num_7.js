function alpa(word){
    var arr=word.split('');
    res=arr.sort().join('');
    return res;
}

console.log(alpa(prompt('Введите строку')));