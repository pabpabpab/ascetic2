@php
    $invisibleCssOfViewMoreButton = '';
    if ($pageCount < 2 || $currentPage > 1) {
        $invisibleCssOfViewMoreButton = 'display-none';
    }
@endphp

<div class="pagination_and_view_more">

    <div class="pagination_and_view_more__view_more">
        <button id="viewMoreButton"
                class="pagination_and_view_more__view_more__button {{$invisibleCssOfViewMoreButton}}">
            Показать еще
        </button>
    </div>

    <nav id="paginationWrapper" class="pagination_and_view_more__pagination_nav @if($currentPage > 1) w100 @endif">
        @if ($pageCount > 1)
            <div id="paginationContent" class="pagination_nav__content">
                @if (in_array($currentRouteName, ['mainPage', 'products.list']))
                    {{ $products->links('pagination.all-products-pagination') }}
                @elseif (in_array($currentRouteName, ['products.byCategory']))
                    {{ $products->links('pagination.products-by-category-pagination', ['category' => $category]) }}
                @elseif (in_array($currentRouteName, ['products.viewed']))
                    {{ $products->links('pagination.viewed-products-pagination') }}
                @elseif (in_array($currentRouteName, ['products.favorites']))
                    {{ $products->links('pagination.favorite-products-pagination') }}
                @endif
            </div>
        @endif
    </nav>

</div>

