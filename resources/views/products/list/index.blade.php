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
    }

@endphp


@section('title'){{ $pageTitle }}@endsection
@section('description'){{ $pageDescription }}@endsection


@section('content')
    <section>
        <h1 class="products__h1">{{ $pageTitle }}</h1>

        <div id="products" class="products">
            @each('products.list.product-item', $products, 'product')
        </div>
    </section>


    @if (in_array($currentRouteName, ['mainPage', 'products.list']))
        {{ $products->links('pagination.all-products-pagination') }}
    @elseif (in_array($currentRouteName, ['products.byCategory']))
        {{ $products->links('pagination.products-by-category-pagination', ['category' => $category]) }}
    @elseif (in_array($currentRouteName, ['products.viewed']))
        {{ $products->links('pagination.viewed-products-pagination') }}
    @endif
@endsection
