
function sort(array){
    var c4,d;
    for(var i=0;i<array.length;i++){
        c4=array[i]
        d=i
        for(var j=0;j<array.length;j++){
            if(c4<array[j])
            {
                c4=array[j]
                d=j
            }
                
        }
        array[d]=array[i]
        array[i]=c4
        
    }
    alert(array)
}

        

        


      alert("№1")
        let b1=Math.floor(Math.random(10)*10)
        alert(b)
        let a1= prompt("Введите число")
        
        if(a1=b1)
            alert("Хорошая работа")
        else
            alert("Не соответствует")
        
        
        
        alert("№2")
        a2=Number(prompt("Введите Колличество элементов массива"))
        let sum=0
        
        for(let i=1;i<=a2;i++)
        {
            let b2=Number( prompt("Введите "+i +" число "+a))
            if(b2%2==0)
                sum+=b2
        }
        alert(sum)



        alert("№3")
        let a3=Number(prompt("Введите 1 число"))
        let b3=Number(prompt("Введите 2 число"))
        let c3=(prompt("Введите знак"))

        if(c3=="+")
            alert(a3+b3)
        else if(c3=="-")
            alert(a3-b3)
        else if(c3=="*")
            alert(a3*b3)
        else if(c3=="/")
            alert(a3/b3)



        alert("№4")

        a4=Number(prompt("Введите Колличество элементов массива"))
        let arr=[]
        let b4;
        for(let i=1;i<=a4;i++)
        {
            b4=Number( prompt("Введите "+i +" число "+a4))
            arr.push(b4)
        }
        sort(arr)



        alert("№5")
        a5=Number(prompt("Введите Колличество элементов массива"))
        let arr2=[]
        let b5
        for(let i=1;i<=a5;i++)
        {
            b5=Number( prompt("Введите "+i +" число "+a5)) 
            if(!arr2.includes(b5))
                arr2.push(b5)
        }
        alert(arr2)



        alert("№6")
        let a6= prompt("Введите число")
        alert(!!Number(a6))

        