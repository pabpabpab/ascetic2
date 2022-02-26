export default function getPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<a href='/product/${product.slug}-${product.id}'>
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    data-product-item-link="${product.id}"
                    class="product_item__photo__img"/>
            </a>`;
}
