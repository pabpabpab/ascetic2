@extends('layouts.main-layout')

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    $pageTitle = 'Товары из дерева';
    $pageDescription = 'Товары из дерева на заказ';

    if ($currentRouteName === 'products.byCategory') {
        $pageTitle = $categorySeo->page_title ?? 'Товары категории ' . $category->name;
        $pageDescription = $categorySeo->page_description ?? 'Список товаров категории ' . $category->name;
    } elseif ($currentRouteName === 'products.byMaterial') {
        $pageTitle = 'Товары из материала ' . $category->name;
        $pageDescription = 'Товары из материала ' . $category->name;
    } elseif ($currentRouteName === 'products.byColor') {
        $pageTitle = 'Товары цвета ' . $category->name;
        $pageDescription = 'Товары цвета ' . $category->name;
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
                                        <img src="{{ $photoSrc }}" alt="{{ $product->name }}" class="photo__size3"/>
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
                                            {{ $material->name }}
                                        </p>
                                    @endforeach

                                    @foreach ($colorsArr as $color)
                                        <p title="Цвет" class="product_item__bottom_info__text">
                                            {{ $color->name }}
                                        </p>
                                    @endforeach

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

    </section>


    @if (in_array($currentRouteName, ['mainPage', 'products.list']))
        {{ $products->links('pagination.all-products-pagination') }}
    @elseif (in_array($currentRouteName, ['products.byCategory']))
        {{ $products->links('pagination.products-by-category-pagination', ['category' => $category]) }}
    @elseif (in_array($currentRouteName, ['products.viewed']))
        {{ $products->links('pagination.viewed-products-pagination', ['category' => $category]) }}
    @endif

@endsection
