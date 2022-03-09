import el from '../../auxiliaryFunctions/el';

export default class DesktopLargePhotoViewer {
    constructor() {
        if (!el('#mainPhotoContainer')) {
            return;
        }

        this.viewingLargePhotoWasStarted = false;
        this.mainPhotoRatio = 0;
        this.photoContainer = el('#mainPhotoContainer');

        this.photoContainer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        this.photoContainer.addEventListener('touchmove', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        this.photoContainer.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        this.photoContainer.addEventListener('mousemove', (e) => {
            if (!this.viewingLargePhotoWasStarted) {
                this._startViewLargePhoto();
            }
            this._viewLargePhoto(e);
        });
        this.photoContainer.addEventListener('mouseleave', (e) => {
            this._finishViewLargePhoto();
        });
    }

    _startViewLargePhoto() {
        this.viewingLargePhotoWasStarted = true;
        el('#mainPhotoContainer').style.display = 'block';
        el('#mainPhoto').className = 'photo_size5';

        const wrapper = this.photoContainer.getBoundingClientRect();
        this.mainPhotoRatio = 1600/(wrapper.right - wrapper.left); // 1600px ширина фото под лупой
    }


    _viewLargePhoto(e) {
        const wrapper = this.photoContainer.getBoundingClientRect();
        const xWay = e.x - wrapper.left;
        const yWay = e.y - wrapper.top;

        this.photoContainer.scrollLeft = xWay * this.mainPhotoRatio/1.5;
        this.photoContainer.scrollTop = yWay * this.mainPhotoRatio/1.5;
        // 1.5 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
    }

    _finishViewLargePhoto() {
        this.viewingLargePhotoWasStarted = false;
        el('#mainPhoto').className = 'photo_size4';
        this.photoContainer.scrollLeft = 0;
        this.photoContainer.scrollTop = 0;
    }
}
