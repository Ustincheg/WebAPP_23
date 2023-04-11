var n_img = 3;
var corrente = 1;

function succ()
{
    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "none";

    if (++corrente > n_img)
        corrente = 1;

    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "block";
}

function prec()
{
    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "none";

    if (--corrente == 0)
        corrente = n_img;

    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "block";
}

setInterval(succ, 5000);