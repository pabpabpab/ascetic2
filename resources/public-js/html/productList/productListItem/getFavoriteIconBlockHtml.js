export default function getFavoriteIconBlockHtml(productId) {
    return `<div id="favIcon-wrapper-${productId}" class="product_item__favorite_icon__wrapper">
                <img id="favIcon-img-${productId}" alt=""
                    src="/images/favoriteIcon.svg"
                    class="product_item__favorite_icon__img">
            </div>`;
}

