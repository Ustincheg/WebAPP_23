function sort(arr)
{
    for (let i = arr.length - 1; i; i--)
        for (let j = 0; j < i; j++)
            if (arr[j] > arr[j+1])
            {
                const m = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = m; 
            }
    return arr;
}

let arr = [10, 15, 56, 43, -167, 45, 45, 22, -9828, 27, -287, 0, 67, 89]

alert(sort(arr))
