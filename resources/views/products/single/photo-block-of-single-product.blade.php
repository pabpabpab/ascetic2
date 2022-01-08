
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
                <div id="smallPhotos-scrollButtonUp"
                    class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top display-none">
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
                <div id="smallPhotos-scrollButtonDown"
                    class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom">
                    <div class="single_product__small_photos__scroll_button_bottom__content">
                    </div>
                </div>
            @endif
        </div>
    @endif

    <div class="single_product__big_photo__wrapper">

        <div id="mainPhotoContainer" class="single_product__big_photo__content">
            <img src="/storage/products-photos-size5/{{ $product->id }}s5-{{ $objPhotoSet[0]->filename }}"
                 alt="{{ (bool) $objPhotoSet[0]->alt_text ? $objPhotoSet[0]->alt_text : $pageTitle }}"
                 id="mainPhoto"
                 class="photo__size4"/>
        </div>


        @if ($photoCount > 1)
            <div id="largePhotoScrollLeftButton"
                class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left display-none">
                <div class="single_product__big_photo__scroll_button_left__content">
                </div>
            </div>
            <div id="largePhotoScrollRightButton"
                 class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right">
                <div class="single_product__big_photo__scroll_button_right__content">
                </div>
            </div>

            <div class="single_product__big_photo__photo_number_indicator">
                <span id="photoNumberIndicator">{{ 1 }}</span>/{{ $photoCount }}
            </div>
        @endif

    </div>


</section>
