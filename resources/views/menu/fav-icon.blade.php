@guest

    <div id="topMenu-favIcon-wrapper" class="top_menu__favorite_icon__wrapper">
        <img id="topMenu-favIcon-img" alt=""
             src="{{ asset('images/favoriteIcon.svg') }}"
             class="top_menu__favorite_icon__img">
        <span class="topMenu-favIcon-total">8</span>
    </div>

@else

    <div id="topMenu-favIcon-wrapper" class="top_menu__favorite_icon__wrapper">
        <a href="{{ route('products.favorites') }}"
           title="Посмотреть избранное"
           class="top_menu__link top_menu__link_fav_icon">
            <img id="topMenu-favIcon-img" alt=""
                 src="{{ asset('images/favoriteIcon.svg') }}"
                 class="top_menu__favorite_icon__img">
        </a>
        <span class="topMenu-favIcon-total">8</span>
    </div>

@endguest
