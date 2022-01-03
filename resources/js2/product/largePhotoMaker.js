import el from './../el';

export default class LargePhotoMaker {
    constructor() {
        this.largePhotosHtmlWasDone = false;
        el('#singleProduct').addEventListener('mouseover', (e) => {
            this._makeLargePhotos();
        });

        /*
        el('[data-small-photo]').addEventListener('mouseover', (e) => {
            this._getLargePhotos();
        });
        */

        // data-main-photo-container
    }


    _makeLargePhotos() {
        if (!el('#smallPhotos')) {
            return;
        }
        if (this.largePhotosHtmlWasDone) {
            return;
        }
        this.largePhotosHtmlWasDone = true;

        const smallPhotosHtml = el('#smallPhotos').innerHTML;
        let largePhotosHtml = smallPhotosHtml.replaceAll("products-photos-size2", "products-photos-size5");
        largePhotosHtml = largePhotosHtml.replaceAll("s2-", "s5-");
        largePhotosHtml = largePhotosHtml.replaceAll("data-small-photo", "data-large-photo");
        largePhotosHtml = `<div class="display-none">${largePhotosHtml}</div>`;
        el('#singleProduct').insertAdjacentHTML('beforeend', largePhotosHtml);
        //console.log(largePhotosHtml);
    }



    /*
    _getLargePhotos() {
        if (this.sourceOfLargePhotosWasCalculated) {
            return;
        }
        this.sourceOfLargePhotosWasCalculated = true;

        const container = el('#smallPhotos');
        let nodes = container.querySelectorAll('[data-small-photo]');
        let src;
        for (let node of nodes) {
            src = node.src;
            src = src.replace("size2", "size5");
            src = src.replace("s2-", "s5-");
            node.src = src;
        }
    }

     */
}
