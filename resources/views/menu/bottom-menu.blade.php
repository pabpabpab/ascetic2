@php
    $currentCategorySlug = \Illuminate\Support\Facades\Route::current()->category->slug ?? '';
@endphp

<footer class="bottom_menu">
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
</footer>
