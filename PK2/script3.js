let a=parseInt(prompt("введите первое число"),10);
let b=parseInt(prompt("введите второе число"),10);
let c = prompt("введите +,-,* или /: ");
alert(a);
alert(c);
if(c=='+'){
    alert(a + b);
}else if(c=='-'){
    alert(a - b);
}else if(c=='*'){
    alert(a * b);
}else if(c=='/'){
    alert(a / b);
}else{
    alert('Не корректный ввод');
}