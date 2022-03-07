export default function getProductInfoHtml(product) {
    if (!product) {
        return '';
    }
    return `<div class="order_window__photo_wrapper">
                ${ _getPhotoBlockHtml(product)}
                <div class="order_window__product_name">
                    ${ product.name }
                </div>
            </div>`;
}


function _getPhotoBlockHtml(product) {
    if (!product.photos[0]) {
        return '';
    }
    const photoFolder = "/storage/products-photos-size3/";
    return `<div class="order_window__photo">
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    class="order_window__photo_img"/>
            </div>`;
}
