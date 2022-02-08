import el from '../../el';

export default class MainPhotoChanger {
    constructor() {
        if (!el('#singleProduct')) {
            return;
        }
        if (!el('#smallPhotos')) {
            return;
        }
        el('#smallPhotos').addEventListener('mouseover', (e) => {
            if (e.target.dataset.smallPhoto) {
                this._changeMainPhoto(e.target.dataset.smallPhoto);
            }
        });
    }

    _changeMainPhoto(photoNumber) {
        const largePhotoSelector = `[data-large-photo="${photoNumber}"]`;
        if (!el(largePhotoSelector)) {
            return;
        }
        el('#mainPhoto').src = el(largePhotoSelector).src;
        this._refreshPhotoNumberIndicator(photoNumber);
    }

    _refreshPhotoNumberIndicator(photoNumber) {
        if (!el('#photoNumberIndicator')) {
            return;
        }
        el('#photoNumberIndicator').innerText = photoNumber;
    }
}



/*

export default class DesktopMainPhotoChanger {
    constructor() {
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
            if (!e.target.dataset) {
                return
            }
            if (!e.target.dataset.smallPhoto) {
                return;
            }
            this._changeMainPhoto(e.target.dataset.smallPhoto);
        });
    }

    _changeMainPhoto(photoNumber) {
        const largePhotoSelector = `[data-large-photo="${photoNumber}"]`;
        el('#mainPhoto').src = el(largePhotoSelector).src;

        this._refreshPhotoNumberIndicator(photoNumber);
    }

    _refreshPhotoNumberIndicator(photoNumber) {
        if (!el('#photoNumberIndicator')) {
            return;
        }
        el('#photoNumberIndicator').innerText = photoNumber;
    }
}

 */
