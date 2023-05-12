function is_number(num)
{
    num = String(num);
    is_found_dot = false;
    for (let i = 0; i < num.length; ++i)
    {
        if (num[i] >= '0' && num[i] <= '9')
            continue;
        if (num[i] == '.' || num[i] == ',')
        {
            if (is_found_dot)
                return false;
            is_found_dot = true;
            continue;
        }
        return false;
    }
    return true;
}

alert(is_number(prompt("Введите число:")))