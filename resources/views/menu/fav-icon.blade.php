
<div id="topMenu-favIcon-wrapper" class="top_menu__favorite_icon__wrapper">
    <a href="{{ route('products.favorites') }}"
       data-menu-link-section-name="favoriteProducts"
       data-menu-link-title-text="Избранное"
       class="top_menu__link top_menu__link_fav_icon">
        <img id="topMenu-favIcon-img" alt=""
             src="{{ asset('/images/favoriteIcon.svg') }}"
             data-menu-link-section-name="favoriteProducts"
             data-menu-link-title-text="Избранное"
             class="top_menu__favorite_icon__img">
    </a>
    <span class="topMenu-favIcon-total">0</span>
</div>


