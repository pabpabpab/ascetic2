@extends('layouts.main-layout')

@php
    $routeName = \Illuminate\Support\Facades\Route::currentRouteName();

    $pageTitle = 'Товары из дерева';
    $pageDescription = 'Товары из дерева на заказ';

    if ($routeName === 'products.byCategory') {
        $pageTitle = $categorySeo->page_title ?? 'Товары категории ' . $category->name;
        $pageDescription = $categorySeo->page_description ?? 'Список товаров категории ' . $category->name;
    } elseif ($routeName === 'products.byMaterial') {
        $pageTitle = 'Товары из материала ' . $category->name;
        $pageDescription = 'Товары из материала ' . $category->name;
    } elseif ($routeName === 'products.byColor') {
        $pageTitle = 'Товары цвета ' . $category->name;
        $pageDescription = 'Товары цвета ' . $category->name;
    }
@endphp


@section('title'){{ $pageTitle }}@endsection
@section('description'){{ $pageDescription }}@endsection


@section('content')
    <h1 class="ml15">{{ $pageTitle }}</h1>

    <div class="products">
        @foreach ($products as $product)

            @php
                $photoSet = json_decode($product->photo_set);
                $photoSrc = count($photoSet) > 0
                    ? "/storage/products-photos-size3/".$product->id."s3-".$photoSet[0]
                    : '';

                $params = json_decode($product->parameters);
                $price = $params->price;

                $categoriesArr = $params->categories;
                $materialsArr = $params->materials;
                $colorsArr = $params->colors;

                $singleProductUrl = route('products.single', [
                    'slug' => $product->slug,
                    'product' => $product->id
                ]);
            @endphp

            <div class="product_item__wrapper">
                <div class="product_item">
                    <div class="product_item__content">

                        <div class="product_item__quick_view_link__wrapper">
                            <a href='{{ $singleProductUrl }}' class="product_item__quick_view_link">
                                Быстрый просмотр
                            </a>
                        </div>

                        @if ($photoSrc)
                            <div>
                                <a href='{{ $singleProductUrl }}'>
                                    <img src="{{ $photoSrc }}" alt="" class="photo__size3" />
                                </a>
                            </div>
                        @else
                            <div class="product_item__no_photo">
                                НЕТ ФОТО
                            </div>
                        @endif


                        <div>
                            <div class="product_item__name">
                                <a href='{{ $singleProductUrl }}' class="product_item__name__link">
                                    {{ $product->name }}
                                </a>
                            </div>
                            <div class="product_item__price">
                                {{ $price }} ₽
                            </div>
                        </div>

                        <div class="product_item__bottom_info__relative_wrapper">
                            <div class="product_item__bottom_info__absolute">

                                @foreach ($categoriesArr as $category)
                                    <p title="Категория" class="product_item__bottom_info__text">
                                        @php
                                            $catUrl = route('products.byCategory', [
                                                'category' => $category->slug
                                            ]);
                                        @endphp
                                        <a href='{{ $catUrl }}' class="product_item__name__link">
                                            {{ $category->name }}
                                        </a>
                                    </p>
                                @endforeach

                                @foreach ($materialsArr as $material)
                                    <p title="Материал" class="product_item__bottom_info__text">
                                        @php
                                            $catUrl = route('products.byMaterial', [
                                                'material' => $material->slug
                                            ]);
                                        @endphp
                                        <a href='{{ $catUrl }}' class="product_item__name__link">
                                            {{ $material->name }}
                                        </a>
                                    </p>
                                @endforeach

                                @foreach ($colorsArr as $color)
                                    <p title="Цвет" class="product_item__bottom_info__text">
                                        @php
                                            $catUrl = route('products.byColor', [
                                                'color' => $color->slug
                                            ]);
                                        @endphp
                                        <a href='{{ $catUrl }}' class="product_item__name__link">
                                            {{ $color->name }}
                                        </a>
                                    </p>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>



    {{ $products->links('pagination.products-pagination') }}
@endsection
