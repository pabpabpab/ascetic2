import el from './../el';

export default class LargePhotoViewer {
    constructor() {
        this.mainPhotoRatio = 0;

        el('#mainPhotoContainer').addEventListener('mouseover', (e) => {
            this._startViewLargePhoto();
        });
        el('#mainPhotoContainer').addEventListener('mousemove', (e) => {
            this._viewLargePhoto(e);
        });
        el('#mainPhotoContainer').addEventListener('mouseleave', (e) => {
            this._finishViewLargePhoto();
        });
    }

    _startViewLargePhoto() {
        el('#mainPhoto').className = 'photo__size5';

        const wrapper = el('#mainPhotoContainer').getBoundingClientRect();
        this.mainPhotoRatio = 1600/(wrapper.right - wrapper.left); // 1600px ширина фото под лупой
    }


    _viewLargePhoto(e) {
        const container = el('#mainPhotoContainer');

        const photoContainer = container.getBoundingClientRect();
        const xWay = e.x - photoContainer.left;
        const yWay = e.y - photoContainer.top;

        container.scrollLeft = xWay * this.mainPhotoRatio/1.5;
        container.scrollTop = yWay * this.mainPhotoRatio/1.5;
        // 1.5 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
    }

    _finishViewLargePhoto() {
        el('#mainPhoto').className = 'photo__size4';

        const container = el('#mainPhotoContainer');
        container.scrollLeft = 0;
        container.scrollTop = 0;
    }
}
