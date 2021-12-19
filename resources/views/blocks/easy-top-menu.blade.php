<header class="top_menu">
    <div class="top_menu__left">

        <a href="/" data-logo="link" class="logo__link">
            AsceticShop.ru
        </a>

        <div data-menu="left" class="top_menu__ul">

            <div class="top_menu__li">
                <a href="#" class="top_menu__link easy_top_menu__link_with_drop_menu">
                    &#9776;
                </a>

                <div class="top_menu__drop_menu show_block">
                    <div class="top_menu__drop_menu__ul">
                        @foreach ($categories as $category)
                            @php
                                $catUrl = route('products.byCategory', [
                                    'category' => $category->slug
                                ]);
                            @endphp
                            <div class="top_menu__drop_menu__li">
                                <a href='{{ $catUrl }}' class="top_menu__drop_menu__link">
                                    {{ $category->name }}
                                    {{-- $category->products_count --}}
                                </a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>

        </div>
    </div>


    <div data-menu="right" class="top_menu__ul">
        <div class="top_menu__li_auth">
            @include('blocks.auth-menu')
        </div>
    </div>
</header>

