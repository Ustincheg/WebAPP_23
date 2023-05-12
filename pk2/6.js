function is_number(number)
{
    number = String(number);
    is_found_dot = false;
    for (let i = number[0] == '-'; i < number.length; ++i)
    {
        if (number[i] >= '0' && number[i] <= '9')
            continue;
        if (number[i] == '.' || number[i] == ',')
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