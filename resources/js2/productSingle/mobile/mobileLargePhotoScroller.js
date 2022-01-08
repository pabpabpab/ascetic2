import el from '../../el';

export default class MobileLargePhotoScroller {
    constructor() {
        this.container = el('#mainPhotoContainer');
        this.buttonLeft = el('#largePhotoScrollLeftButton');
        this.buttonRight = el('#largePhotoScrollRightButton');
        this.photoNumberIndicator = el('#photoNumberIndicator');

        this.indexOfMainPhoto = 0;
        this.numberOfPhotos = this._getPhotoCount();

        this.buttonLeft.addEventListener('click', (e) => {
            this._showNextPhoto(-1);
        });
        this.buttonRight.addEventListener('click', (e) => {
            this._showNextPhoto(1);
        });
    }


    _getPhotoCount() {
        const nodes = document.querySelectorAll('[data-small-photo]');
        return nodes.length;
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

}
