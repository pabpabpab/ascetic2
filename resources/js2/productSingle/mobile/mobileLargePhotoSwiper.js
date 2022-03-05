import el from '../../auxiliaryFunctions/el';

export default class MobileLargePhotoSwiper {
    constructor() {
        if (!el('#smallPhotos')) {
            return;
        }
        this.container = el('#mainPhotoContainer');
        this.buttonLeft = el('#largePhotoScrollLeftButton');
        this.buttonRight = el('#largePhotoScrollRightButton');
        this.photoNumberIndicator = el('#photoNumberIndicator');

        this.indexOfMainPhoto = 0;
        this.numberOfPhotos = this._getPhotoCount();

        this.startTouchX = 0;
        this.startTouchY = 0;
        this.startTouchTime = 0;

        el('#mainPhotoContainer').addEventListener('touchstart', (e) => {
            this._startTouchHandler(e);
        });
        el('#mainPhotoContainer').addEventListener('touchend', (e) => {
            this._endTouchHandler(e);
        });
    }

    _startTouchHandler(e) {
        const touchObj = e.changedTouches[0];
        this.startTouchX = touchObj.pageX;
        this.startTouchY = touchObj.pageY;
        this.startTouchTime = new Date().getTime();
    }

    _endTouchHandler(e) {
        const touchObj = e.changedTouches[0];
        const distanceX = touchObj.pageX - this.startTouchX;
        const distanceY = touchObj.pageY - this.startTouchY;
        const elapsedTime = new Date().getTime() - this.startTouchTime;

        if (elapsedTime < 500 && distanceX > 35 && Math.abs(distanceY) < 120) {
            this._showNextPhoto(-1);
        }

        if (elapsedTime < 500 && distanceX < -35 && Math.abs(distanceY) < 120) {
            this._showNextPhoto(1);
        }
    }



    _showNextPhoto(offset) {
        this._changeButtonsVisibilityWhenScrollClick(offset);

        const wrapper = this.container.getBoundingClientRect();
        const photoWidth = wrapper.right - wrapper.left;

        this.container.scrollLeft = this.indexOfMainPhoto * photoWidth;
        const startX = this.container.scrollLeft;

        this.indexOfMainPhoto += offset;

        if (offset < 0 && this.indexOfMainPhoto < 0) {
            this.indexOfMainPhoto = 0;
            return;
        }
        if (offset > 0 && this.indexOfMainPhoto >= this.numberOfPhotos) {
            this.indexOfMainPhoto = this.numberOfPhotos - 1;
            return;
        }

        this._scrollLargePhotos(offset, startX, photoWidth);
    }


    _scrollLargePhotos(offset, startX, photoWidth) {
        const _coveredDistance = Math.abs(this.container.scrollLeft - startX);
        if (_coveredDistance > photoWidth - 10) { // 10 - возможная погрешность
            this.container.scrollLeft = this.indexOfMainPhoto * photoWidth;
            this._changeButtonsVisibilityWhenScrollFinish();
            this._refreshPhotoNumberIndicator(this.indexOfMainPhoto + 1);
            return;
        }
        const step = 10; // px
        this.container.scrollLeft += offset * step;
        setTimeout(() => {
            this._scrollLargePhotos(offset, startX, photoWidth);
        }, 1);
    }

    _changeButtonsVisibilityWhenScrollClick(offset) {
        if (offset > 0) {
            this.buttonLeft.style.display = 'block';
        } else {
            this.buttonRight.style.display = 'block';
        }
    }

    _changeButtonsVisibilityWhenScrollFinish() {
        if (this.container.scrollLeft < 10) {
            this.buttonLeft.style.display = 'none';
            this.buttonRight.style.display = 'block';
            return;
        }

        const scrollLeft = this.container.scrollLeft;
        const clientWidth = this.container.clientWidth;
        const scrollWidth = this.container.scrollWidth;
        if (scrollWidth - (scrollLeft + clientWidth) < 10) {
            this.buttonRight.style.display = 'none';
            this.buttonLeft.style.display = 'block';
        }
    }

    _refreshPhotoNumberIndicator(photoNumber) {
        if (!this.photoNumberIndicator) {
            return;
        }
        this.photoNumberIndicator.innerText = photoNumber;
    }






    _getPhotoCount() {
        const nodes = document.querySelectorAll('[data-small-photo]');
        return nodes.length;
    }
}
