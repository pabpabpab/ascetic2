export default function getSmallPhotosBlockHtml(productId, photosArr) {
    const photoCount = photosArr.length;
    return `<div class="single_product__small_photos__wrapper">

                ${
                    photoCount > 5
                        ? `<div id="smallPhotos-scrollButtonUp"
                            class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top display_none">
                            <div class="single_product__small_photos__scroll_button_top__content">
                            </div>
                          </div>`
                        : ``
                }

                <div id="smallPhotos" class="single_product__small_photos">
                    ${_getSmallPhotos(productId, photosArr)}
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

function _getSmallPhotos(productId, photosArr) {
    const smallPhotoFolder = "/storage/products-photos-size5/";

    const phArr = photosArr.map((item, i) => {
        return `<img src='${smallPhotoFolder}${productId}s5-${item}'
                    alt=''
                    data-small-photo="${i + 1}"
                    class="photo_size2"/>`;
    });
    return phArr.join('');
}
