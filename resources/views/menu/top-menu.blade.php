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
                $catCount = count($categories);
                $loopLimit = $catCount < $visibleCategoriesLimit ? $catCount : $visibleCategoriesLimit;
            @endphp

            @for ($i = 0; $i < $loopLimit; $i++)
                @php
                    $category = $categories[$i];
                    $catUrl = route('products.byCategory', [
                        'category' => $category->slug
                    ]);
                @endphp
                <div data-menu-link-category="{{ $i + 1 }}" class="top_menu__li">
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

            {{--@if ($catCount >= $visibleCategoriesLimit)--}}
            <div id="topMenu-dropMenuInitiator" class="top_menu__li">
                <p
                    data-menu-link-section-name="allProducts"
                    data-menu-link-title-text="{{ $mainPageTitle }}"
                    class="top_menu__link top_menu__link_with_drop_menu nowrap m0">
                    Все
                </p>
            </div>
            {{--@endif--}}

        </nav>
    </div>


    <div data-menu="right" class="top_menu__ul">
        <div data-menu-contact-link="mobile" data-order-button="0" class="top_menu__li">
            <p data-order-button="0" class="top_menu__link m0">
                <img data-order-button="0" alt=""
                     src="{{ asset('/images/contacts.svg') }}"
                     class="top_menu__contacts_icon__img">
            </p>
        </div>
        <div data-menu-contact-link="desktop" data-order-button="0" class="top_menu__li">
            <p data-order-button="0" class="top_menu__link m0">
                Контакты
            </p>
        </div>
        <div class="top_menu__li_favorites">
            @include('menu.fav-icon')
        </div>
        <div class="top_menu__li_auth">
            @include('menu.auth-menu')
        </div>
        <div id="mobileMenuIconWrapper" class="top_menu__mobile_menu_icon__wrapper">
            <p id="mobileMenuIconContent" class="top_menu__mobile_menu_icon__content">
                <img alt=""
                     src="{{ asset('/images/blackMobileMenuIcon.svg') }}"
                     class="top_menu__mobile_menu_icon__img">
            </p>
        </div>
    </div>
</header>

