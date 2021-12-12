<nav class="navBar">
    <div class="navBar_left">

        <a href="/" data-logo="link" class="logo__link">
            AsceticShop.ru
        </a>

        <ul data-menu="left" class="navBar__ul">
            <li class="navBar__li">
                <a href="#" class="navBar__link">
                    Столы
                </a>
            </li>

            <li class="navBar__li">
                <a href="#" class="navBar__link">
                    Стулья
                </a>
            </li>

            <li class="navBar__li">
                <a href="#" class="navBar__link">
                    Кровати
                </a>
            </li>

            <li class="navBar__li">
                <a href="#" class="navBar__link">
                    Все

                    <div class="navBar__link__trigram">
                        <div class="navBar__drop_menu show_block">
                            <ul class="navBar__drop_menu__ul">
                                <li class="navBar__drop_menu__li">
                                    Все категории
                                </li>
                            </ul>
                        </div>
                    </div>

                </a>
            </li>

        </ul>
    </div>


    <ul data-menu="right" class="navBar__ul">
        <li class="navBar__li_auth">
            @include('blocks.authMenu')
        </li>
    </ul>
</nav>
