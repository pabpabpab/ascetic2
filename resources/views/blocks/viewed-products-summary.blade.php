@php
  //dump($currentRouteName);
@endphp

@if (!in_array($currentRouteName, ['products.viewed', 'products.singlePhotoPage']))
    @if (session()->exists('viewedProductsIds'))
        <aside class="viewed_products__aside">
            <a href='{{ route('products.viewed') }}' class="viewed_products__link">
                Просмотренные товары
            </a>
        </aside>
    @endif
@endif
