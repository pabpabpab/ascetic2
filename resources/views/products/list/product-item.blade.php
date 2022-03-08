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

<div data-product-item="{{ $product->id }}" class="product_item__wrapper">
    <div class="product_item">
        <div class="product_item__content">

            <div class="product_item__photo_wrapper">
                <div class="product_item__quick_view_link__wrapper">
                    <a data-quick-view="{{ $product->id }}" href='{{ $singleProductUrl }}' class="product_item__quick_view_link">
                        Быстрый просмотр
                    </a>
                </div>

                @if ($photoSrc)
                    <a href='{{ $singleProductUrl }}'>
                        <img src="{{ $photoSrc }}"
                            alt="{{ $product->name }}"
                            data-product-item-link="{{ $product->id }}"
                            class="product_item__photo__img"/>
                    </a>
                @else
                    <a href='{{ $singleProductUrl }}'>
                        <img src="{{ asset('/images/nophoto.png') }}"
                             alt="Нет фото"
                             data-product-item-link="{{ $product->id }}"
                             class="product_item__photo__img"/>
                    </a>
                @endif
            </div>

            <div>
                <div class="product_item__price_and_order">
                    <div class="product_item__price">
                        {{ $price }} ₽
                    </div>
                    <div data-order-button="{{ $product->id }}"
                        class="product_item__order_icon__wrapper">
                        <img data-order-button="{{ $product->id }}"
                             alt=""
                             src="{{ asset('images/orderIcon.svg') }}"
                             class="product_item__order_icon__img">
                    </div>
                </div>
                <div class="product_item__name">
                    <a href='{{ $singleProductUrl }}' data-product-item-link="{{ $product->id }}" class="product_item__name__link">
                        {{ $product->name }}
                    </a>
                </div>
            </div>

            <div class="product_item__bottom_info__relative_wrapper">
                <div class="product_item__bottom_info__absolute">

                    <p title="Категория" class="product_item__bottom_info__text">
                        @foreach ($categoriesArr as $category)
                            @php
                                $catUrl = route('products.byCategory', [
                                    'category' => $category->slug
                                ]);
                            @endphp
                            <a href="{{ $catUrl }}"
                               data-link-section-name="productCategory"
                               data-link-category-id="{{ $category->id }}"
                               data-link-category-slug="{{ $category->slug }}"
                               data-link-category-name="{{ $category->name }}"
                               class="product_item__category_link">
                                {{ $category->name }}</a>@if (!$loop->last), @endif
                        @endforeach
                    </p>

                    <p title="Материал" class="product_item__bottom_info__text">
                        @foreach ($materialsArr as $material)
                            {{ $material->name }}@if (!$loop->last), @endif
                        @endforeach
                    </p>

                    <p title="Цвет" class="product_item__bottom_info__text">
                        @foreach ($colorsArr as $color)
                            {{ $color->name }}@if (!$loop->last), @endif
                        @endforeach
                    </p>

                </div>
            </div>

        </div>

        <div id="favIcon-wrapper-{{ $product->id }}" class="product_item__favorite_icon__wrapper">
            <img id="favIcon-img-{{ $product->id }}" alt=""
            src="{{ asset('images/favoriteIcon.svg') }}"
            class="product_item__favorite_icon__img">
        </div>
    </div>
</div>
