@extends('layouts.main-layout')

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();
@endphp


@section('title'){{ $pageTitle }}@endsection
@section('description'){{ $pageDescription }}@endsection


@section('content')
    <section>

        <div class="h1_viewing_sorting_filtering_container">
            <h1 id="productsH1" class="products__h1 mb0">
                {{ $pageTitle }}
            </h1>

            <div class="viewing_sorting_filtering_container">
                @include('products.list.top-viewing-sorting-filtering')
            </div>
        </div>


        <div id="productList"
             data-total-products-count="{{ $totalProductsCount }}"
             data-section-products-count="{{ $sectionProductsCount }}"
             data-section-page-count="{{ $pageCount }}"
             data-current-page="{{ $currentPage }}"
             data-per-page="{{ $perPage }}"
             data-product-section-name="{{ $productSectionName }}"
             data-additional-section-data="{{ $additionalSectionData }}"
             data-h1-text="{{ $pageTitle }}"
             class="products">
            <div id="productListContent">
                @each('products.list.product-item', $products, 'product')
            </div>
        </div>
    </section>

    @include('pagination.pagination-and-view-more-section')

    {{--@include('products.list.filter-block')--}}
@endsection
