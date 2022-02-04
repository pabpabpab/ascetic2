export default function getBigPhotoBlockHtml(productId, photosArr) {
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
