<header class="top_menu">
    <div class="top_menu__left">

        <a href="/" data-logo="link" class="logo__link">
            AsceticShop.ru
        </a>

        <nav data-menu="left" class="top_menu__ul">

            @php
                $categoriesCount = count($categories);
                $loopLimit = $categoriesCount < 5 ? $categoriesCount : 5;
            @endphp

            @for ($i = 0; $i < $loopLimit; $i++)
                @php
                    $category = $categories[$i];
                    $catUrl = route('products.byCategory', [
                        'category' => $category->slug
                    ]);
                @endphp
                <div data-menu-category="{{ $i }}" class="top_menu__li">
                    <a href='{{ $catUrl }}' class="top_menu__link">
                        {{ $category->name }}
                        {{-- $category->products_count --}}
                    </a>
                </div>
            @endfor

            <div id="topMenu-dropMenuContainer" class="top_menu__li">
                <a href="/" class="top_menu__link top_menu__link_with_drop_menu">
                    Все
                </a>
            </div>

        </nav>
    </div>


    <div data-menu="right" class="top_menu__ul">
        <div class="top_menu__li_auth">
            @include('menu.fav-icon')
        </div>
        <div class="top_menu__li_auth">
            @include('menu.auth-menu')
        </div>
    </div>
</header>
