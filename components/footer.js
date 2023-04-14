class Footer extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <footer class="footer">
            <div class="footer__upp-part">
                <section class="footer__upp-part__section container">
                    <p class="footer__upp-part__title">
                        Получайте самые интересные предложения первыми!
                    </p>
                    <form class="footer__upp-part__form" action="handler.php">
                        <input class="footer__upp-part__email-form text-form" type="text" placeholder="Введите ваш e-mail" />
                        <button class="footer__upp-part__button button big-button blue-button">Подписаться</button>
                    </form>
                </section>
            </div>
            <div class="footer__down-part">
                <div class="footer__down-part__container">
                    <div class="footer__information">
                        <ul class="footer__left-information">
                            <li class="footer__left-information__item">
                                <img class="footer__left-information__logo-image" src="data/logos/logo-white.svg"
                                    alt="Логотип" />
                            </li>
                            <li class="footer__left-information__item">
                                <p class="footer__left-information__address-text">
                                    7-я Кожуховская ул., 9, Москва (этаж 1)
                                </p>
                            </li>
                        </ul>
                        <ul class="footer__links-list">
                            <li class="footer__links-list__item ">
                                <a class="footer__links-list__link" href="#">
                                    Скидки
                                </a>
                            </li>
                            <li class="footer__links-list__item ">
                                <a class="footer__links-list__link" href="#">
                                    Акции
                                </a>
                            </li>
                            <li class="footer__links-list__item ">
                                <a class="footer__links-list__link" href="#">
                                    Покупателям
                                </a>
                            </li>
                            <li class="footer__links-list__item ">
                                <a class="footer__links-list__link" href="#">
                                    Информация
                                </a>
                            <li class="footer__links-list__item ">
                                <a class="footer__links-list__link" href="#">
                                    Доставка
                                </a>
                            </li>
                        </ul>
                        <ul class="footer__links-list">
                            <li class="footer__links-list__item">
                                <a class="footer__links-list__link" href="#">
                                    Гарантия
                                </a>
                            </li>
                            <li class="footer__links-list__item">
                                <a class="footer__links-list__link" href="#">
                                    Кредит и рассрочка
                                </a>
                            </li>
                            <li class="footer__links-list__item">
                                <a class="footer__links-list__link" href="#">
                                    Новости
                                </a>
                            </li>
                            <li class="footer__links-list__item">
                                <a class="footer__links-list__link" href="#">
                                    Вакансии
                                </a>
                            </li>
                        </ul>
                        <ul class="footer__social-networks-list">
                            <li class="footer__social-networks-list__item">
                                <a class="footer__social-networks-list__link" href="#">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="footer__social-networks-list__image" d="M9.62352 0.0037452L7.22496 0C4.53025 0 2.78881 1.73871 2.78881 4.42982V6.47227H0.377152C0.168756 6.47227 0 6.63668 0 6.83949V9.79876C0 10.0016 0.168949 10.1658 0.377152 10.1658H2.78881V17.633C2.78881 17.8358 2.95756 18 3.16596 18H6.31248C6.52088 18 6.68963 17.8356 6.68963 17.633V10.1658H9.50942C9.71781 10.1658 9.88657 10.0016 9.88657 9.79876L9.88772 6.83949C9.88772 6.74211 9.84789 6.64886 9.77727 6.57994C9.70665 6.51103 9.61044 6.47227 9.51038 6.47227H6.68963V4.74086C6.68963 3.90868 6.89341 3.48622 8.00735 3.48622L9.62314 3.48566C9.83134 3.48566 10.0001 3.32124 10.0001 3.11863V0.370775C10.0001 0.168347 9.83154 0.00411972 9.62352 0.0037452Z" fill="white"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer__social-networks-list__item">
                                <a class="footer__social-networks-list__link" href="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="footer__social-networks-list__image" d="M12 0H4C1.8002 0 0 1.79941 0 4V12C0 14.1998 1.8002 16 4 16H12C14.1998 16 16 14.1998 16 12V4C16 1.79941 14.1998 0 12 0ZM8 11.3332C6.15879 11.3332 4.6666 9.84039 4.6666 8C4.6666 6.15879 6.15879 4.6666 8 4.6666C9.84039 4.6666 11.3334 6.15879 11.3334 8C11.3334 9.84039 9.84039 11.3332 8 11.3332ZM12.3334 4.6666C11.7806 4.6666 11.3334 4.21879 11.3334 3.6666C11.3334 3.11441 11.7806 2.6666 12.3334 2.6666C12.8862 2.6666 13.3334 3.11441 13.3334 3.6666C13.3334 4.21879 12.8862 4.6666 12.3334 4.6666Z" fill="white"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer__social-networks-list__item">
                                <a class="footer__social-networks-list__link" href="#">
                                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="footer__social-networks-list__image" d="M14.9368 5.73429C14.6458 5.38429 14.729 5.22857 14.9368 4.91571C14.9405 4.91214 17.3428 1.75071 17.5904 0.678571L17.5919 0.677857C17.7149 0.287143 17.5919 0 16.9971 0H15.029C14.528 0 14.297 0.246429 14.1732 0.522143C14.1732 0.522143 13.1712 2.80643 11.7537 4.28714C11.2961 4.715 11.0846 4.85214 10.8349 4.85214C10.7119 4.85214 10.5206 4.715 10.5206 4.32429V0.677857C10.5206 0.209286 10.3804 0 9.9656 0H6.87099C6.55673 0 6.36997 0.218571 6.36997 0.422143C6.36997 0.866429 7.07875 0.968571 7.15225 2.21857V4.93071C7.15225 5.525 7.03899 5.63429 6.78774 5.63429C6.11871 5.63429 4.49491 3.34071 3.53262 0.715714C3.33837 0.206428 3.14861 0.000714234 2.64384 0.000714234H0.675023C0.113254 0.000714234 0 0.247143 0 0.522857C0 1.01 0.669023 3.43214 3.11111 6.63214C4.73866 8.81643 7.03074 10 9.11582 10C10.3691 10 10.5221 9.73714 10.5221 9.285C10.5221 7.19786 10.4089 7.00071 11.0366 7.00071C11.3276 7.00071 11.8287 7.13786 12.9987 8.19143C14.336 9.44071 14.5558 10 15.3043 10H17.2723C17.8334 10 18.1176 9.73714 17.9541 9.21857C17.5799 8.12786 15.0508 5.88429 14.9368 5.73429Z" fill="white"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer__social-networks-list__item">
                                <a class="footer__social-networks-list__link" href="#">
                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="footer__social-networks-list__image" d="M17.6291 2.03419C17.4217 1.23876 16.8137 0.61173 16.0427 0.397545C14.6341 0 8.9998 0 8.9998 0C8.9998 0 3.36567 0 1.95711 0.382473C1.20092 0.596431 0.578102 1.23887 0.370679 2.03419C0 3.48702 0 6.5 0 6.5C0 6.5 0 9.52817 0.370679 10.9658C0.578321 11.7611 1.18609 12.3882 1.95722 12.6023C3.3805 13 9.00002 13 9.00002 13C9.00002 13 14.6341 13 16.0427 12.6175C16.8138 12.4035 17.4217 11.7764 17.6294 10.9811C17.9999 9.52817 17.9999 6.5153 17.9999 6.5153C17.9999 6.5153 18.0148 3.48702 17.6291 2.03419ZM7.20595 9.2835V3.7165L11.8912 6.5L7.20595 9.2835Z" fill="white"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="footer__super-down-part__container">
                    <p class="footer__text text-open-sans">
                        ©️ Electro place, 2003–2023
                    </p>
                    <a class="footer__politics-link footer__text text-open-sans" href="#">
                        Политика обработки персональных данных
                    </a>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('electro-place-footer', Footer)