export default function getPhotoBlockHtml(product) {
    return `<div class="product_item__photo_wrapper">
                <div class="product_item__quick_view_link__wrapper">
                    <a data-quick-view="${product.id}"
                        href='/product/${product.slug}-${product.id}'
                        class="product_item__quick_view_link">
                            Быстрый просмотр
                    </a>
                </div>

                <div class="product_item__no_photo">
                    НЕТ ФОТО
                </div>
            </div>`;
}
