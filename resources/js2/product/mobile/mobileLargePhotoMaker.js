import el from './../../el';

export default class MobileLargePhotoMaker {
    constructor() {
        this.largePhotosHtmlWasDone = false;
        el('#singleProduct').addEventListener('touchstart', (e) => {
            //console.log('touchstart');
            e.preventDefault();
            this._makeLargePhotos();
        });
        el('#singleProduct').addEventListener('mouseover', (e) => {
            //console.log('mouseover');
            this._makeLargePhotos();
        });
    }


    _makeLargePhotos() {
        if (!el('#smallPhotos')) {
            return;
        }
        if (this.largePhotosHtmlWasDone) {
            return;
        }
        /*
        if (el('#largePhotos')) {
            return;
        }
        */
        this.largePhotosHtmlWasDone = true;


        const nodes = document.querySelectorAll('[data-small-photo]');


        const photoArr = [];
        for (let node of nodes) {
            let src = node.src;
            src = src.replace("products-photos-size2", "products-photos-size5");
            src = src.replaceAll("s2-", "s5-");

            /*
            let photo = '';
            if (photoArr.length === 0) {
                photo = `<img alt="" src="${src}" id="mainPhoto" class="photo__size4" />`;
            } else {
                photo = `<img alt="" src="${src}" class="photo__size4" />`;
            }
            */

            const photo = `<img alt="" src="${src}" class="photo__size4" />`;



            photoArr.push(photo);
            //console.log(node.src);
        }
        const photosHtml = photoArr.join('');


        //el('#mainPhotoContainer').style.width = '3000px';

        if (el('#mainPhoto')) {
            el('#mainPhoto').remove();
        }
        el('#mainPhotoContainer').insertAdjacentHTML('afterbegin', photosHtml);


    }
}
