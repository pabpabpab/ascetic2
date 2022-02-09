export default function getPhotoBlockHtml(product, viewMode) {
    const bigView = viewMode === 'bigView' ? 'big_view' : '';
    const photoFolder = "/storage/products-photos-size3/";
    return `<div class="product_item__photo_wrapper">
                <div class="product_item__quick_view_link__wrapper">
                    <a data-quick-view="${product.id}"
                        href='/product/${product.slug}-${product.id}'
                        class="product_item__quick_view_link">
                            Быстрый просмотр
                    </a>
                </div>

                <a href='/product/${product.slug}-${product.id}'>
                    <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                       alt=""
                       data-product-item-link="${product.id}"
                       class="photo__size3 ${bigView}"/>
                </a>
            </div>`;
}
