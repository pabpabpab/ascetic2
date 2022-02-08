import getCookie from './../../cookie/getCookie';


export default function getFavoriteIconBlockHtml(productId) {
    const idsStr = getCookie('favoriteIds');
    const idsArr = Boolean(idsStr) ? idsStr.split(',') : [];

    let text, imgName;
    if (idsArr.includes(String(productId))) {
        text = 'ИЗ ИЗБРАННОГО';
        imgName = 'filledFavoriteIcon.svg';
    } else {
        text = 'В ИЗБРАННОЕ';
        imgName = 'favoriteIcon.svg';
    }

    return `<div id="quickProductFavIcon-wrapper-${productId}" class="single_product__favorite_icon__wrapper">
                <img id="quickProductFavIcon-img-${productId}" alt=""
                    src="/images/${imgName}"
                    class="single_product__favorite_icon__img">
                <span id="quickProductFavIcon-text-${productId}" class="single_product__favorite_icon__text">
                    ${text}
                </span>
            </div>`;
}
