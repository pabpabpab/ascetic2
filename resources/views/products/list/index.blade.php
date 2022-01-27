@extends('layouts.main-layout')

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    $pageTitle = $mainPageTitle; // в AppServiceProvider
    $pageDescription = 'Товары из дерева на заказ';

    if ($currentRouteName === 'products.byCategory') {
        $pageTitle = 'Товары категории ' . $category->name;
        $pageDescription = 'Список товаров категории ' . $category->name;
        if ((isset($categorySeo->page_title)) && (strlen(trim($categorySeo->page_title)) > 0)) {
            $pageTitle = trim($categorySeo->page_title);
        }
        if ((isset($categorySeo->page_description)) && (strlen(trim($categorySeo->page_description)) > 0)) {
            $pageDescription = trim($categorySeo->page_description);
        }
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
        <h1 id="productsH1" class="products__h1 mb0">{{ $pageTitle }}</h1>

        @include('products.list.top-viewing-sorting-filtering')

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

    @include('pagination.pagination-and-view-more-section')

    {{--@include('products.list.filter-block')--}}
@endsection
