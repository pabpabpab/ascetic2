import el from '../../auxiliaryFunctions/el';

export default class SmallPhotoScroller {
    constructor() {
        if (!el('#smallPhotos-scrollButtonDown')) {
            return;
        }

        this.container = el('#smallPhotos');
        this.buttonDown = el('#smallPhotos-scrollButtonDown');
        this.buttonUp = el('#smallPhotos-scrollButtonUp');

        this.buttonDown.addEventListener('click', (e) => {
            this.scrollSmallPhoto(350,'down');
        });
        this.buttonUp.addEventListener('click', (e) => {
            this.scrollSmallPhoto(350,'up');
        });
    }

    scrollSmallPhoto(distance, direction) {
        this._changeButtonsVisibilityWhenScrollClick(direction);
        const coveredDistance = 0; // пройденное расстояние
        this._scrollSmallPhoto(distance, coveredDistance, direction)
    }
    _scrollSmallPhoto(distance, coveredDistance, direction) {
        if (coveredDistance > distance) {
            this._changeButtonsVisibilityWhenScrollFinish();
            return;
        }
        const step = 3; // px
        if (direction === 'down') {
            this.container.scrollTop += step;
        } else {
            this.container.scrollTop -= step;
        }
        coveredDistance += step;
        setTimeout(() => {
            this._scrollSmallPhoto(distance, coveredDistance, direction);
        }, 1);
    }


    _changeButtonsVisibilityWhenScrollClick(direction) {
        if (direction === 'down') {
            this.buttonUp.style.display = 'block';
        } else {
            this.buttonDown.style.display = 'block';
        }
    }
    _changeButtonsVisibilityWhenScrollFinish() {
        if (this.container.scrollTop < 5) {
            this.buttonUp.style.display = 'none';
            return;
        }

        const scrollTop = this.container.scrollTop;
        const clientHeight = this.container.clientHeight;
        const scrollHeight = this.container.scrollHeight;
        if (scrollHeight - (scrollTop + clientHeight) < 10) {
            this.buttonDown.style.display = 'none';
        }
    }
}
