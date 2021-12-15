<nav class="bottom_menu">

        <ul class="bottom_menu__ul">
            @foreach ($categories as $category)
                @php
                    $catUrl = route('products.byCategory', [
                        'category' => $category->slug
                    ]);
                @endphp
                <li class="bottom_menu__li">
                    <a href='{{ $catUrl }}' class="bottom_menu__link">
                        {{ $category->name }}
                        {{-- $category->products_count --}}
                    </a>
                </li>
            @endforeach

        </ul>
</nav>
