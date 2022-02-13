@php
    $currentCategorySlug = \Illuminate\Support\Facades\Route::current()->category->slug ?? '';
@endphp


<header id="topMainMenu" class="top_menu">
    <div class="top_menu__left">

        @if ($currentRouteName === 'mainPage')
            <p data-logo="link"
               data-menu-link-section-name="allProducts"
               data-menu-link-title-text="{{ $mainPageTitle }}"
               class="logo__link logo__link_active m0 cursor-pointer">
                AsceticShop.ru
            </p>
        @else
            <a href="/"
               data-logo="link"
               data-menu-link-section-name="allProducts"
               data-menu-link-title-text="{{ $mainPageTitle }}"
               class="logo__link">
                AsceticShop.ru
            </a>
        @endif



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
                    @if ($category->slug === $currentCategorySlug)
                        <p data-menu-link-section-name="productCategory"
                           data-menu-link-category-id="{{ $category->id }}"
                           data-menu-link-category-slug="{{ $category->slug }}"
                           data-menu-link-category-name="{{ $category->name }}"
                           class="top_menu__link top_menu__link_active m0 cursor-pointer">
                            {{ $category->name }}
                        </p>
                    @else
                        <a href='{{ $catUrl }}'
                           data-menu-link-section-name="productCategory"
                           data-menu-link-category-id="{{ $category->id }}"
                           data-menu-link-category-slug="{{ $category->slug }}"
                           data-menu-link-category-name="{{ $category->name }}"
                           class="top_menu__link">
                            {{ $category->name }}
                            {{-- $category->products_count --}}
                        </a>
                    @endif
                </div>
            @endfor

            <div id="topMenu-dropMenuInitiatorContainer" class="top_menu__li">
                <p
                   data-menu-link-section-name="allProducts"
                   data-menu-link-title-text="{{ $mainPageTitle }}"
                   class="top_menu__link top_menu__link_with_drop_menu nowrap m0">
                    Все
                </p>
            </div>

        </nav>
    </div>


    <div data-menu="right" class="top_menu__ul">
        <div data-order-button="0" class="top_menu__li">
            <p data-order-button="0" class="top_menu__link m0">
                Контакты
            </p>
        </div>
        <div class="top_menu__li_auth">
            @include('menu.fav-icon')
        </div>
        <div class="top_menu__li_auth">
            @include('menu.auth-menu')
        </div>
    </div>
</header>
