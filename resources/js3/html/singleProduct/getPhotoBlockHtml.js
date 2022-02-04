import getSmallPhotosBlockHtml from './getSmallPhotosBlockHtml';
import getBigPhotoBlockHtml from './getBigPhotoBlockHtml';

export default function getPhotoBlockHtml(productId, photosArr) {
    const photoCount = photosArr.length;
    return `<section class="single_product__all_photo_wrapper">
                ${ photoCount > 1 ? getSmallPhotosBlockHtml(productId, photosArr) : `` }
                ${ getBigPhotoBlockHtml(productId, photosArr) }
            </section>`;
}
