import el from './../el';

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
        el('[data-main-photo]').src = el(largePhotoSelector).src;
    }
}
