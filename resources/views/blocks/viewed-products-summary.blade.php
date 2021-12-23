
@php
    $excludedRoutes = [
        'products.viewed',
        'products.singlePhotoPage',
        'my'
    ];
    $isAccountRoute = explode(".", $currentRouteName)[0] === 'account';
@endphp


@if (in_array($currentRouteName, $excludedRoutes))
    {{-- --}}
@elseif ($isAccountRoute)
    {{-- --}}
@elseif (!session()->exists('viewedProductsIds'))
    {{-- --}}
@else
    <aside class="viewed_products__aside">
        <a href='{{ route('products.viewed') }}' class="viewed_products__link">
            Просмотренные товары
        </a>
    </aside>
@endif











