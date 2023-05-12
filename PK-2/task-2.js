function calculate_even_sum(arr)
{
    let res = 0;
    for (let i = 0; i < arr.length; ++i)
        if (arr[i] % 2 == 0)
            res += arr[i];
    return res;
}

/*arr = [0, 1, 2, 3, 4, 5, 6]

alert(calculate_even_sum(arr))*/

function get_random_array(length, max)
{
    return Array.apply(null, Array(length)).map(function() {return Math.round(Math.random() * max);});
}

function verify_task(calculate_even_sum, solution)
{
    for (let i = 0; i < 1e4; ++i)
    {
        const arr = get_random_array(Math.round(Math.random() * 1e2), Math.round(Math.random() * 1e5))
        if (solution(arr) != calculate_even_sum(arr))
        {
            alert(`Ошибка на тесте {${arr}}`)
            return;
        }
    }
    alert("Полное решение")
}

function solution(arr)
{
    let res = 0;
    for (let i = 0; i < arr.length; ++i)
        if (arr[i] % 2 == 1)
            res += arr[i];
    return res;
}

verify_task(calculate_even_sum, solution);