@extends('layouts.main-layout')

@php
    //dd(session('viewedProductsIds'));
    //dd($product);


    $pageTitle = $product->name;
    if ((isset($seo->page_title)) && (strlen(trim($seo->page_title)) > 0)) {
        $pageTitle = trim($seo->page_title);
    }

    $pageDescription = "Товар из дерева " . $product->name;
    if ((isset($seo->page_description)) && (strlen(trim($seo->page_description)) > 0)) {
        $pageDescription = trim($seo->page_description);
    }


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
    <div id="singleProduct" class="single_product_page__content_wrapper">
    <div class="single_product__content">

        @if ($photoCount > 0)
            @include("products.single.photo-block-of-single-product", ['pageTitle' => $pageTitle])
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


            <div id="favIcon-wrapper-{{ $product->id }}" class="single_product__favorite_icon__wrapper">
                <img id="favIcon-img-{{ $product->id }}" alt=""
                     src="{{ asset('images/favoriteIcon.svg') }}"
                     class="single_product__favorite_icon__img">
                <span id="favIcon-text-{{ $product->id }}" class="single_product__favorite_icon__text">
                    В ИЗБРАННОЕ
                </span>
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
