import el from '../../auxiliaryFunctions/el';

export default class MobileLargePhotoMaker {
    constructor() {
        if (!el('#smallPhotos')) {
            return;
        }
        this.largePhotosHtmlWasDone = false;
        /*
        el('#singleProduct').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this._makeLargePhotos();
        });
        el('#singleProduct').addEventListener('mouseover', (e) => {
            this._makeLargePhotos();
        });*/

        // задержка чтобы главное фото загрузилось сначала
        setTimeout(() => {
            this._makeLargePhotos();
        }, 1000);
    }

    _makeLargePhotos() {
        if (this.largePhotosHtmlWasDone) {
            return;
        }
        if (el('#tapeOfLargePhotos')) {
            return;
        }
        this.largePhotosHtmlWasDone = true;

        const nodes = document.querySelectorAll('[data-small-photo]');

        const photoArr = [];
        Object.values(nodes).forEach((node) => {
            let src = node.src;
            src = src.replace("products-photos-size2", "products-photos-size5");
            src = src.replaceAll("s2-", "s5-");
            const photo = `<img alt="" src="${src}" class="photo_size4" />`;
            photoArr.push(photo);
        });
        const largePhotosHtml = `<div id="tapeOfLargePhotos" class="display_flex">
                                    ${photoArr.join('')}
                                 </div>`;

        if (el('#mainPhoto')) {
            el('#mainPhoto').remove();
        }
        el('#mainPhotoContainer').insertAdjacentHTML('afterbegin', largePhotosHtml);
    }
}
