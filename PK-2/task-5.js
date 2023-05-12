function set(arr, comp)
{
    let set = [];
    for (let i = 0; i < arr.length; ++i)
    {
        let = is_found = false;
        for (let j = 0; j < set.length; ++j)
            if (set[j] == arr[i])
            {
                is_found = true;
                break;
            }
        if (is_found)
            continue;
        set.push(arr[i]);
    }
    return set;
}

function comp(left, right)
{
    return left == right;
}

arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]

alert(set(arr))