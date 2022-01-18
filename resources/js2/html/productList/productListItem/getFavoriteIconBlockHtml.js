export default function getFavoriteIconBlockHtml(productId) {
    return `<div id="favIcon-wrapper-${productId}" class="product_item__favorite_icon__wrapper">
                <img id="favIcon-img-${productId}" alt=""
                    src="images/favoriteIcon.svg"
                    class="product_item__favorite_icon__img">
            </div>`;
}





/*
import getCookie from './../../../cookie/getCookie';

export default function getFavoriteIconBlockHtml(productId) {
    const idsStr = getCookie('favoriteIds');
    const idsArr = Boolean(idsStr) ? idsStr.split(',') : [];

    let imgName, setOpacityClass;
    if (idsArr.includes(String(productId))) {
        imgName = 'filledFavoriteIcon.svg';
        setOpacityClass = 'set-opacity';
    } else {
        imgName = 'favoriteIcon.svg';
        setOpacityClass = '';
    }



    return `<div id="favIcon-wrapper-${productId}" class="product_item__favorite_icon__wrapper ${setOpacityClass}">
                <img id="favIcon-img-${productId}" alt=""
                    src="images/${imgName}"
                    class="product_item__favorite_icon__img">
            </div>`;
}
*/
