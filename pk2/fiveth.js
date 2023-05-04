let arr = [5, 10, 2, 4, 2, 2, 2, 9, 11, 1, 5, 2, 10];
getUniq(arr);

function getUniq(arr) {
    let uniq = [];
    
    for (let i = 0; i < arr.length; i++){
        if (!uniq.includes(i)){
            uniq.push(arr[i]);
        }
    }
    alert(uniq);
  }