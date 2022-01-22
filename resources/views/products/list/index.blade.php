@extends('layouts.main-layout')

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    $pageTitle = 'Товары из дерева';
    $pageDescription = 'Товары из дерева на заказ';

    if ($currentRouteName === 'products.byCategory') {
        $pageTitle = $categorySeo->page_title ?? 'Товары категории ' . $category->name;
        $pageDescription = $categorySeo->page_description ?? 'Список товаров категории ' . $category->name;
    } elseif ($currentRouteName === 'products.viewed') {
        $pageTitle = 'Вы смотрели';
        $pageDescription = 'Товары которые вы смотрели. ';
    } elseif ($currentRouteName === 'products.favorites') {
        $pageTitle = 'Избранные товары';
        $pageDescription = 'Товары которые вам понравились. ';
    }

@endphp


@section('title'){{ $pageTitle }}@endsection
@section('description'){{ $pageDescription }}@endsection


@section('content')
    <section>
        <h1 class="products__h1">{{ $pageTitle }}</h1>

        <div id="productList"
             data-total-products-count="{{ $totalProductsCount }}"
             data-section-products-count="{{ $sectionProductsCount }}"
             data-section-page-count="{{ $pageCount }}"
             data-product-section-name="{{ $productSectionName }}"
             data-additional-data-of-product-section="{{ $additionalDataOfProductSection }}"
             class="products">
            <div id="productListContent">
                @each('products.list.product-item', $products, 'product')
            </div>
        </div>
    </section>


    @if($pageCount > 1)
        <div class="pagination_and_view_more">

            @if($currentPage === 1)
                <div class="pagination_and_view_more__view_more">
                    <button id="viewMoreButton" class="pagination_and_view_more__view_more__button">
                        Показать еще
                    </button>
                </div>
            @endif

                <nav id="paginationWrapper" class="pagination_and_view_more__pagination_nav @if($currentPage > 1) w100 @endif">
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
                </nav>
        </div>
    @endif

@endsection
