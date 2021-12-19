@extends('layouts.main-layout')

@php
    //dd(session('viewedProductsIds'));

    //dd($product);

    $pageTitle = $seo->page_title ?? $product->name;
    $pageDescription = $seo->page_description ?? 'Товары из дерева ' . $product->name;

    $photoSet = json_decode($product->photo_set);
    $photoCount = count($photoSet);

    $params = json_decode($product->parameters);
    $price = $params->price;


    $func = function (object $item): string {
        $categoryUrl = route('products.byCategory', ['category' => $item->slug]);
        return "<a href='{$categoryUrl}' class='single_product__category_item__link'>{$item->name}</a>";
    };
    $categoriesArr = array_map($func, $params->categories);
    $listOfCategories = implode(", ", $categoriesArr);

    $func2 = function (object $item): string {
        return $item->name;
    };
    $materialsArr = array_map($func2, $params->materials);
    $materials = implode(", ", $materialsArr);
    $colorsArr = array_map($func2, $params->colors);
    $colors = implode(", ", $colorsArr);
@endphp


@section('title'){{ $pageTitle }}@endsection
@section('description'){{ $pageDescription }}@endsection


@section('content')
    <div class="single_product_page__content_wrapper">
    <div class="single_product__content">

        @if ($photoCount > 0)
            @include("products.photo-block-of-single-product", ['pageTitle' => $pageTitle])
        @endif

        <section class="single_product__top_characteristics
                @if($photoCount > 0)
                    single_product__top_characteristics__margin_left
                @endif
            ">
            <h1 class="single_product__h1">
                {{ $pageTitle }}
            </h1>
            <div class="single_product__price">
                {{ $price }} ₽
            </div>
            <div class="single_product__categories">
                Категория:
                {!! $listOfCategories !!}
            </div>
            <div class="single_product__categories">
                Материал:
                {{ $materials }}
            </div>
            <div class="single_product__categories">
                Цвет:
                {{ $colors }}
            </div>
            <div class="single_product__description">
                {{ $description->description }}
            </div>

{{--
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
--}}
        </section>

    </div>
    </div>
@endsection
