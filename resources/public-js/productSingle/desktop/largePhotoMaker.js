import el from '../../auxiliaryFunctions/el';

export default class LargePhotoMaker {
    constructor() {
        this.largePhotosHtmlWasDone = false;
        if (!el('#singleProduct')) {
            return;
        }
        if (!el('#smallPhotos')) {
            return;
        }
        el('#singleProduct').addEventListener('mouseover', (e) => {
            this._makeLargePhotos();
        });
    }


    _makeLargePhotos() {
        if (this.largePhotosHtmlWasDone) {
            return;
        }
        if (el('#largePhotos')) {
            return;
        }
        this.largePhotosHtmlWasDone = true;

        const smallPhotosHtml = el('#smallPhotos').innerHTML;
        let largePhotosHtml = smallPhotosHtml.replaceAll("products-photos-size2", "products-photos-size5");
        largePhotosHtml = largePhotosHtml.replaceAll("s2-", "s5-");
        largePhotosHtml = largePhotosHtml.replaceAll("data-small-photo", "data-large-photo");
        largePhotosHtml = `<div id="largePhotos" class="display-none">${largePhotosHtml}</div>`;
        el('#singleProduct').insertAdjacentHTML('beforeend', largePhotosHtml);
        //console.log(largePhotosHtml);
    }
}


/*
export default class DesktopLargePhotoMaker {
    constructor() {
        this.largePhotosHtmlWasDone = false;
        el('body').addEventListener('mouseover', (e) => {
            if (!el('#singleProduct')) {
                return;
            }
            if (!el('#smallPhotos')) {
                return;
            }
            if (needMobileVersion()) {
                return;
            }
            if (el('#largePhotos')) {
                return;
            } else {
                this.largePhotosHtmlWasDone = false;
            }
            this._makeLargePhotos();
        });
    }
*/
