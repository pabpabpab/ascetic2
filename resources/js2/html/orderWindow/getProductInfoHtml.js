export default function getProductInfoHtml(product) {
    if (!product) {
        return '';
    }
    return `<div class="order_window__photo_wrapper">
                ${ _getPhotoBlockHtml(product)}
                <p class="order_window__product_name">
                    ${ product.name }
                </p>
            </div>`;
}


function _getPhotoBlockHtml(product) {
    if (!product.photos[0]) {
        return '';
    }
    const photoFolder = "/storage/products-photos-size3/";
    return `<p class="order_window__photo">
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    class="order_window__photo_img"/>
            </p>`;
}
