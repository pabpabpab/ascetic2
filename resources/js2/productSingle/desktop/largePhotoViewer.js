import el from '../../auxiliaryFunctions/el';
import needMobileVersion from "../needMobileVersionOfSingleProductKit";

export default class DesktopLargePhotoViewer {
    constructor() {
        if (!el('#mainPhotoContainer')) {
            return;
        }

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

        this.photoContainer.addEventListener('mouseover', (e) => {
            this._startViewLargePhoto();
        });
        this.photoContainer.addEventListener('mousemove', (e) => {
            this._viewLargePhoto(e);
        });
        this.photoContainer.addEventListener('mouseleave', (e) => {
            this._finishViewLargePhoto();
        });
    }

    _startViewLargePhoto() {
        el('#mainPhotoContainer').style.display = 'block';
        el('#mainPhoto').className = 'photo__size5';

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
        el('#mainPhoto').className = 'photo__size4';
        this.photoContainer.scrollLeft = 0;
        this.photoContainer.scrollTop = 0;
    }
}
