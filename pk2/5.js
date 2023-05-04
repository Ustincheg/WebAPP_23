
let a = [1, 2, 1, 3, 3, 4, 5, 6, 7, 7, 9, 1, 2];
f();

function f(a) {
    let q = [];
    
    for (let i = 0; i < a.length; i++){
        if (!q.includes(i)){
            q.push(a[i]);
        }
    }
    alert(q);
  }