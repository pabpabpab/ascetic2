@extends('layouts.main-layout')

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    $pageTitle = $mainPageTitle; // в AppServiceProvider
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
        <h1 id="productsH1" class="products__h1">{{ $pageTitle }}</h1>

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

@endsection
