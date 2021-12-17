
@php
    //$photoSet - наследовано из родительского view
    //$photoCount - наследовано из родительского view
    $smallPhotoFolder = "/storage/products-photos-size2/";
    $bigPhotoFolder = "/storage/products-photos-size4/";

    //dd($photoSeo);

    // преобразование Collection (photoSeo - наследовано из родительского view) в массив
    $photoSeoArr = $photoSeo->toArray();

    $objPhotoSet = [];
    // скрестить $photoSet и $photoSeoArr
    foreach ($photoSet as $photoName) {
        $func = function (object $item) use($photoName): bool {
            return $item->filename === $photoName;
        };
        $filtered = array_filter($photoSeoArr, $func);

        $_photoSeo = array_shift($filtered);
        if (!$_photoSeo) {
            $_photoSeo = (object) array(
                    "filename" => $photoName,
                    "alt_text" => "",
                    "page_title" => "",
                    "page_description" => "",
                );
        }
        $objPhotoSet[] = $_photoSeo;
    }
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
                @foreach ($objPhotoSet as $photo)
                    @php
                        $singlePhotoUrl = null;
                        if ($photo->page_title) {
                            $singlePhotoUrl = route('products.singlePhotoPage', [
                                'product' => $product->id,
                                'photoSlug' => \Illuminate\Support\Str::of($photo->page_title)->slug('_'),
                                'photoName' => explode(".", $photo->filename)[0]
                            ]);
                            ///product/{product}/photo/{photoSlug}-{photoName}
                        }
                    @endphp
                    @if ($singlePhotoUrl)
                        <a href="{{ $singlePhotoUrl }}">
                            <img src="{{ $smallPhotoFolder . $product->id }}s2-{{ $photo->filename }}"
                                 alt="{{ $photo->alt_text }}"
                                 class="photo__size2 mb5"/>
                        </a>
                    @else
                        <img src="{{ $smallPhotoFolder . $product->id }}s2-{{ $photo->filename }}"
                             alt="{{ $photo->alt_text }}"
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

        <div data-big-photo-version="desktop" class="single_product__big_photo__content">
            <img src="{{ $bigPhotoFolder . $product->id }}s4-{{ $objPhotoSet[0]->filename }}"
                 alt="{{ (bool) $objPhotoSet[0]->alt_text ? $objPhotoSet[0]->alt_text : $pageTitle }}"
                 class="photo__size4"/>
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
</div>
