function simple_sort(arr)
{
    arr = arr.split('');
    for (let n = arr.length - 1; n; --n)
        for (let i = 0; i < n; ++i)
            if (arr[i] > arr[i + 1])
            {
                const t = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = t;
            }
    return arr.join('');
}

alert(simple_sort(prompt("Введите слово:")))