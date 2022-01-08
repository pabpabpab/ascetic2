export default function getSingleProductHtml(product) {
    //console.log(product);

    return `<div id="quickProduct" class="quick_view_manager__screen">
                <div class="quick_view_manager__content_wrapper">
                    <div class="quick_view_manager__content">



                    <div id="singleProduct" class="single_product_page__content_wrapper">
                        <div class="single_product__content">

                        ${
                            product.photos.length > 0
                                ? _getPhotoBlock(product.id, product.photos)
                                : ''
                        }

                            <section class="single_product__top_characteristics
                                ${
                                    product.photos.length > 0
                                        ? 'single_product__top_characteristics__margin_left'
                                        : ''
                                }">

                                <h1 class="single_product__h1">
                                    ${product.name}
                                </h1>
                                <div class="single_product__price">
                                    ${product.price} ₽
                                </div>
                                <div class="single_product__categories">
                                    Категория:
                                    ${_getListOfCategories(product.categories)}
                                </div>
                                <div class="single_product__categories">
                                    Материал:
                                    ${_getListOfMaterials(product.materials)}
                                </div>
                                <div class="single_product__categories">
                                    Цвет:
                                    ${_getListOfColors(product.colors)}
                                </div>
                                <div id="productDescriptionContainer" class="single_product__description">
                                </div>


                                <div id="favIcon-wrapper-${product.id}" class="single_product__favorite_icon__wrapper">
                                    <img id="favIcon-img-${product.id}" alt=""
                                        src="/images/favoriteIcon.svg"
                                        class="single_product__favorite_icon__img">
                                    <span id="favIcon-text-${product.id}" class="single_product__favorite_icon__text">
                                        В ИЗБРАННОЕ
                                    </span>
                                </div>

                            </section>

                        </div>
                    </div>



                    </div>
                    <div class='quick_view_manager__collapse_icon'>&#215;</div>
                </div>
            </div>`;
}


function _getPhotoBlock(productId, photosArr) {
    const photoCount = photosArr.length;
    return `<section class="single_product__all_photo_wrapper">
                ${ photoCount > 1 ? _getSmallPhotosBlock(productId, photosArr) : `` }
                ${ _getBigPhotoBlock(productId, photosArr) }
            </section>`;
}


function _getSmallPhotosBlock(productId, photosArr) {
    const photoCount = photosArr.length;
    return `<div class="single_product__small_photos__wrapper">

                ${
                    photoCount > 5
                        ? `<div id="smallPhotos-scrollButtonUp"
                            class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top display-none">
                            <div class="single_product__small_photos__scroll_button_top__content">
                            </div>
                        </div>`
                        : ``
                }
                <div id="smallPhotos" class="single_product__small_photos">
                    ${ _getSmallPhotos(productId, photosArr) }
                </div>
                ${
                    photoCount > 5
                        ? `<div id="smallPhotos-scrollButtonDown"
                            class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom">
                            <div class="single_product__small_photos__scroll_button_bottom__content">
                            </div>
                        </div>`
                        : ``
                }

            </div>`;

}


function _getBigPhotoBlock(productId, photosArr) {
    const photoCount = photosArr.length;

    return `<div class="single_product__big_photo__wrapper">

                <div id="mainPhotoContainer" class="single_product__big_photo__content">
                    <img src="/storage/products-photos-size5/${productId}s5-${photosArr[0]}"
                        alt=""
                        id="mainPhoto"
                        class="photo__size4"/>
                </div>

                ${
                    photoCount > 1
                        ? `<div id="largePhotoScrollLeftButton"
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
                                <span id="photoNumberIndicator">1</span>/${photoCount}
                           </div>`
                        : ``
                 }

            </div>`;
}


function _getSmallPhotos(productId, photosArr) {
    const photoCount = photosArr.length;
    const smallPhotoFolder = "/storage/products-photos-size5/";

    const phArr = photosArr.map((item, i) => {
        return `<img src='${smallPhotoFolder}${productId}s5-${item}'
                    alt=''
                    data-small-photo="${i + 1}"
                    class="photo__size2"/>`;
    });
    return phArr.join('');
}

/*
function _getSmallPhotos(productId, photosArr) {
    const photoCount = photosArr.length;
    const smallPhotoFolder = "/storage/products-photos-size2/";

    const phArr = photosArr.map((item, i) => {
        return `<img src='${smallPhotoFolder}${productId}s2-${item}'
                    alt=''
                    data-small-photo="${i + 1}"
                    class="photo__size2"/>`;
    });
    return phArr.join('');
}
*/


function _getListOfCategories(categoriesArr) {
    const catsArr = categoriesArr.map(item => {
        return `<a href='products/${item.slug}' class='single_product__category_item__link'>${item.name}</a>`;
    });
    return catsArr.join(', ');
}

function _getListOfMaterials(materialsArr) {
    const catsArr = materialsArr.map(item => item.name);
    return catsArr.join(', ');
}

function _getListOfColors(colorsArr) {
    const catsArr = colorsArr.map(item => item.name);
    return catsArr.join(', ');
}
