export default function getPhotoBlockHtml(product, viewMode) {
    const bigView = viewMode === 'bigView' ? 'big_view' : '';
    const photoFolder = "/storage/products-photos-size3/";
    return `<a href='/product/${product.slug}-${product.id}'>
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    data-product-item-link="${product.id}"
                    class="photo__size3 ${bigView}"/>
            </a>`;
}
