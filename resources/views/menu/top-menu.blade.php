<header class="top_menu">
    <div class="top_menu__left">

        <a href="/"
           data-logo="link"
           data-menu-link-section-name="all"
           data-menu-link-title-text="{{ $mainPageTitle }}"
           class="logo__link">
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
                <div data-menu-link-category="{{ $i }}" class="top_menu__li">
                    <a href='{{ $catUrl }}'
                       data-menu-link-section-name="productCategory"
                       data-menu-link-category-id="{{ $category->id }}"
                       data-menu-link-category-slug="{{ $category->slug }}"
                       data-menu-link-category-name="{{ $category->name }}"
                       class="top_menu__link">
                        {{ $category->name }}
                        {{-- $category->products_count --}}
                    </a>
                </div>
            @endfor

            <div id="topMenu-dropMenuInitiatorContainer" class="top_menu__li">
                <a href="/"
                   data-menu-link-section-name="all"
                   data-menu-link-title-text="{{ $mainPageTitle }}"
                   class="top_menu__link top_menu__link_with_drop_menu nowrap">
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
