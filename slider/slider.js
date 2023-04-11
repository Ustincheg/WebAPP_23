var n_img = 5;
var corrente = 1;

function succ()
{
    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "none";
    document.querySelector(".left-banner__control-list__item:nth-child(" + corrente + ")").style.background = "#9B9B9B";

    if (++corrente > n_img)
        corrente = 1;

    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "block";
    document.querySelector(".left-banner__control-list__item:nth-child(" + corrente + ")").style.background = "white";
}

function prec()
{
    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "none";
    document.querySelector(".left-banner__control-list__item:nth-child(" + corrente + ")").style.background = "#9B9B9B";

    if (--corrente == 0)
        corrente = n_img;

    document.querySelector(".left-banner__slider__item:nth-child(" + corrente + ")").style.display = "block";
    document.querySelector(".left-banner__control-list__item:nth-child(" + corrente + ")").style.background = "white";
}

//setInterval(succ, 5000);