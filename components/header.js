class Header extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <header class="header">
            <div class="special-color">
                <div class="header__upp-panel container">
                    <ul class="header__upp-list">
                        <li class="header__upp-list__item">
                            <a class="header__upp-list__link" href="#">
                                Магазины
                            </a>
                        </li>
                        <li class="header__upp-list__item">
                            <a class="header__upp-list__link" href="#">
                                Доставка и оплата
                            </a>
                        </li>
                        <li class="header__upp-list__item">
                            <a class="header__upp-list__link" href="#">
                                Кредиты и рассрочка
                            </a>
                        </li>
                    </ul>
                    <a class="header__telephone telephone" href="tel:84954448885">
                        8 (495) 444-888-5
                    </a>
                </div>
            </div>
            <div class="container">
                <div class="header__mid-part">
                    <a class="header__logo" href="index.html">
                        <img class="logo__image" src="data/logos/logo-black.svg" alt="Логотип" width="215" height="46"/>
                    </a>
                    <form class="header__search-form" action="handler.php">
                        <input class="header__search__input text-form" type="text" name="header__search__input" placeholder="Поиск...">
                    </form action="handler.php">
                    <ul class="header__user-list user-list">
                        <li class="header__user-list__item">
                            <a class="header__user-list__link" href="#">
                                <p class="header__user-list__link-text">Избранное (0)</p>
                            </a>
                        </li>
                        <li class="header__user-list__item">
                            <a class="header__user-list__link" href="#">
                                <p class="header__user-list__link-text">Корзина (0)</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="header__down-part">
                    <button class="header__button-menu button">
                        <p class="header__button-menu__text">Каталог</p>
                    </button>
                    <nav class="header__nav">
                        <ul class="header__nav-list">
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    СКИДКИ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="catalog.html">
                                    СМАРТФОНЫ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    ТЕЛЕВИЗОРЫ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    НОУТБУКИ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    СТИРАЛЬНЫЕ МАШИНЫ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    ХОЛОДИЛЬНИКИ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    ПЫЛЕСОСЫ
                                </a>
                            </li>
                            <li class="header__nav-list__item">
                                <a class="header__nav-list__link" href="#">
                                    МИКРОВОЛНОВКИ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('electro-place-header', Header)