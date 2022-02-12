@php
    $currentCategorySlug = \Illuminate\Support\Facades\Route::current()->category->slug ?? '';
@endphp

<footer id="siteFooter"
    data-site-domain="{{ $contacts['domain'] }}"
    data-site-address="{{ $contacts['address'] }}"
    data-site-phone="{{ $contacts['phone'] }}"
    data-site-phone-time="{{ $contacts['phoneTime'] }}"
    data-site-whatsapp="{{ $contacts['whatsapp'] }}"
    data-site-tg="{{ $contacts['tg'] }}"
    data-site-vkontakte="{{ $contacts['vkontakte'] }}"
    data-site-ok="{{ $contacts['ok'] }}"
    data-site-meta="{{ $contacts['meta'] }}"
    data-site-email="{{ $contacts['e-mail'] }}"
    class="bottom_menu">
    <nav>
        <ul id="bottomMenu-allCategories" class="bottom_menu__ul">
            @foreach ($categories as $category)
                @php
                    $catUrl = route('products.byCategory', [
                        'category' => $category->slug
                    ]);
                @endphp
                <li class="bottom_menu__li">
                    @if ($category->slug === $currentCategorySlug)
                        <p data-menu-link-section-name="productCategory"
                           data-menu-link-category-id="{{ $category->id }}"
                           data-menu-link-category-slug="{{ $category->slug }}"
                           data-menu-link-category-name="{{ $category->name }}"
                           class="bottom_menu__link bottom_menu__link_active m0 cursor-pointer">
                            {{ $category->name }}
                        </p>
                    @else
                        <a href='{{ $catUrl }}'
                           data-menu-link-section-name="productCategory"
                           data-menu-link-category-id="{{ $category->id }}"
                           data-menu-link-category-slug="{{ $category->slug }}"
                           data-menu-link-category-name="{{ $category->name }}"
                           class="bottom_menu__link">
                            {{ $category->name }}
                            {{-- $category->products_count --}}
                        </a>
                    @endif
                </li>
            @endforeach
        </ul>
    </nav>
    <div data-order-button="0" class="bottom_menu__contacts">
        <div data-order-button="0" class="bottom_menu__contacts__relative">
            <p data-order-button="0" class="bottom_menu__contacts__absolute">
                Контакты
            </p>
        </div>
    </div>
</footer>
