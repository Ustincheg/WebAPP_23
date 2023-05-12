function simple_sort(arr)
{
    for (let n = arr.length - 1; n; --n)
        for (let i = 0; i < n; ++i)
            if (arr[i] > arr[i + 1])
            {
                arr[i] ^= arr[i + 1];
                arr[i + 1] ^= arr[i];
                arr[i] ^= arr[i + 1];
            }
    return arr;
}

/*arr = [0, -1, 2, -3, 4, -5, 6]

alert(simple_sort(arr))*/

function get_random_array(length, max)
{
    return Array.apply(null, Array(length)).map(function() {return Math.round(Math.random() * max);});
}

function verify_task(ans, solution)
{
    for (let i = 0; i < 1e2; ++i)
    {
        const arr = get_random_array(Math.round(Math.random() * 1e2), Math.round(Math.random() * 1e5));
        if (solution(arr) != ans(arr))
        {
            alert(`Ошибка на тесте ${arr}`)
            return;
        }
    }
    alert("Полное решение");
}

function solution(arr)
{
    for (let n = arr.length - 1; n; --n)
        for (let i = 0; i < n; ++i)
            if (arr[i] > arr[i + 1])
            {
                arr[i] ^= arr[i + 1];
                arr[i + 1] ^= arr[i];
                arr[i] ^= arr[i + 1];
            }
    return arr;
}

verify_task(simple_sort, solution);
