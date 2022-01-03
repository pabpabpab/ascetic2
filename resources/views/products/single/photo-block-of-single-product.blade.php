
@php
    //$photoSeo - наследовано из родительского view
    //dd($photoSeo);
    // преобразование Collection в массив
    $objPhotoSet = $photoSeo->toArray();
    $photoCount = count($objPhotoSet);
    // $objPhotoSet - список таких объектов
    /*
     *  "photo_id" => null,
     *  "filename" => $photoName,
     *  "alt_text" => "",
     *  "page_title" => "",
     *  "page_description" => "",
     */

    $smallPhotoFolder = "/storage/products-photos-size2/";
@endphp

<section class="single_product__all_photo_wrapper">

    @if ($photoCount > 1)
        <div class="single_product__small_photos__wrapper">
            @if ($photoCount > 5)
                <div
                    class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top">
                    <div class="single_product__small_photos__scroll_button_top__content">
                    </div>
                </div>
            @endif

            <div id="smallPhotos" class="single_product__small_photos">
                @foreach ($objPhotoSet as $photo)
                    @php
                        $photoAltText = (bool) $photo->alt_text
                            ? $photo->alt_text
                            : $pageTitle . " (фото " . $loop->iteration . ")";

                        $singlePhotoUrl = null;
                        if ($photo->page_title) {
                            $singlePhotoUrl = route('products.singlePhotoPage', [
                                'product' => $product->id,
                                'photoSlug' => \Illuminate\Support\Str::of($photo->page_title)->slug('_'),
                                'photoId' => $photo->photo_id
                            ]);
                            ///product/{product}/photo/{photoSlug}-{photoId}
                        }
                    @endphp
                    @if ($singlePhotoUrl)
                        <a href="{{ $singlePhotoUrl }}">
                            <img src="{{ $smallPhotoFolder . $product->id }}s2-{{ $photo->filename }}"
                                 alt="{{ $photoAltText }}"
                                 data-small-photo="{{ $loop->iteration }}"
                                 class="photo__size2 mb5"/>
                        </a>
                    @else
                        <img src="{{ $smallPhotoFolder . $product->id }}s2-{{ $photo->filename }}"
                             alt="{{ $photoAltText }}"
                             data-small-photo="{{ $loop->iteration }}"
                             class="photo__size2"/>
                    @endif
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

        <div data-main-photo-container data-big-photo-version="desktop" class="single_product__big_photo__content">
            @if ($photoCount > 1)
                <img src="/storage/products-photos-size4/{{ $product->id }}s4-{{ $objPhotoSet[0]->filename }}"
                     alt="{{ (bool) $objPhotoSet[0]->alt_text ? $objPhotoSet[0]->alt_text : $pageTitle }}"
                     data-main-photo
                     class="photo__size4"/>
            @else
                <img src="/storage/products-photos-size5/{{ $product->id }}s5-{{ $objPhotoSet[0]->filename }}"
                     alt="{{ (bool) $objPhotoSet[0]->alt_text ? $objPhotoSet[0]->alt_text : $pageTitle }}"
                     data-main-photo
                     class="photo__size4"/>
            @endif
        </div>

{{--
        <div data-big-photo-version="mobile"
             class="single_product__big_photo__content_mobile" style="display: none;">
            {{getAllBigPhotos }}
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
--}}
        <div class="single_product__big_photo__photo_number_indicator">
            {{ 1 }}/{{ $photoCount }}
        </div>
    </div>
</section>
