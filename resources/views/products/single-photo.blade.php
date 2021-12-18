@extends('layouts.main-layout')

@php
    $bigPhotoFolder = "/storage/products-photos-size5/";

    //dd($product);
    $singleProductUrl = route('products.single', [
                    'slug' => $product->slug,
                    'product' => $product->id
                ]);

    //dd($photoSeo);
    $photoSeoArr = $photoSeo->toArray();
    $photoSeoObj = $photoSeoArr[0];
    //dd($photoSeoObj);
    /*
     "photo_id" => 394,
     "filename" => "1632752822.jpg"
     "alt_text" => "зеленая палатка на фото"
     "page_title" => "зеленая палатка"
     "page_description" => "зеленая палатка на фото за 7100 руб."
    */
    // $photoAlt = (bool) $photoSeoObj->alt_text ? $photoSeoObj->alt_text : $photoSeoObj->page_title;
@endphp


@section('title'){{ $photoSeoObj->page_title }}@endsection
@section('description'){{ $photoSeoObj->page_description }}@endsection


@section('content')
    <h1>{{ $photoSeoObj->page_title }}</h1>

    <div class="single_photo_page__content_wrapper">
        <img src="{{ $bigPhotoFolder . $product->id }}s5-{{ $photoSeoObj->filename }}"
            alt="{{ $photoSeoObj->page_title }}"
            class="w100"/>

        <div class="single_photo_page__bottom">
            Фото товара:
            <a href='{{ $singleProductUrl }}' class="single_photo_page__link">
                {{ $product->name }}
            </a>
        </div>
    </div>
@endsection
