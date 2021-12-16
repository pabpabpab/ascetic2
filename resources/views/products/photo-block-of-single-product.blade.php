
@php
    dd($photoSeo);

    $smallPhotoFolder = "/storage/products-photos-size2/";
    $bigPhotoFolder = "/storage/products-photos-size4/";

    //$photoSet - наследовано из родительского view
    //$photoCount - наследовано из родительского view

    $bigPhotoSrc = count($photoSet) > 0
        ? $bigPhotoFolder.$product->id."s4-".$photoSet[0]
        : '';
@endphp

<div class="single_product__all_photo_wrapper">

    @if ($photoCount > 1)
        <div class="single_product__small_photos__wrapper">
            @if ($photoCount > 5)
                <div
                    class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top">
                    <div class="single_product__small_photos__scroll_button_top__content">
                    </div>
                </div>
            @endif

            <div class="single_product__small_photos">
                @foreach ($photoSet as $photoName)
                    <img src="{{ $smallPhotoFolder.$product->id }}s2-{{ $photoName }}" alt=""
                         class="photo__size2"/>
                @endforeach
            </div>

            @if ($photoCount > 5)
                <div
                    class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom">
                    <div class="single_product__small_photos__scroll_button_bottom__content">
                    </div>
                </div>
            @endif
        </div>
    @endif

    <div class="single_product__big_photo__wrapper">

        <div data-big-photo-version="desktop" class="single_product__big_photo__content">
            <img src="{{ $bigPhotoSrc }}" alt="{{ $pageTitle }}" class="photo__size4" />
        </div>

        <div data-big-photo-version="mobile"
             class="single_product__big_photo__content_mobile" style="display: none;">
            {{-- getAllBigPhotos --}}
        </div>

        <div
            class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left"
            style="display: none;">
            <div class="single_product__big_photo__scroll_button_left__content">
            </div>
        </div>

        <div
            class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right"
            style="display: none;">
            <div class="single_product__big_photo__scroll_button_right__content">
            </div>
        </div>

        <div class="single_product__big_photo__photo_number_indicator">
            {{ 1 }}/{{ $photoCount }}
        </div>
    </div>
</div>
