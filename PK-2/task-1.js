const ans = Math.floor(Math.random() * 10) + 1;

let input = prompt("Отгадайте число от 1 до 10!");

while (input != ans)
{
    if (input == null)
    {
        alert("Вы проиграли!");
        break;
    }
    alert("Не соответсвует...");
    input = prompt("Попробуйте ещё раз:");
}

if (input == ans)
    alert("Хорошая работа!");

    