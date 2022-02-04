import el from '../../el';

export default class MainPhotoChanger {
    constructor() {
        el('#smallPhotos').addEventListener('mouseover', (e) => {
            if (e.target.dataset.smallPhoto) {
                this._changeMainPhoto(e.target.dataset.smallPhoto);
            }
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
