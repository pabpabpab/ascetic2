export default function getNoPhotoBlockHtml(product) {
    return `<a href='/product/${product.slug}-${product.id}'>
                <img src='/images/nophoto.png'
                    alt=""
                    data-product-item-link="${product.id}"
                    class="product_item__photo__img"/>
            </a>`;
}
