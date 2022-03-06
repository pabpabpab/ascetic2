import el from '../../auxiliaryFunctions/el';
import MobileLargePhotosScrollerExecutor from "./mobileLargePhotosScrollerExecutor";

export default class MobileLargePhotosScrollerBySwipe extends MobileLargePhotosScrollerExecutor {
    constructor() {
        super();

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

        if (elapsedTime < 1000 && distanceX > 30 && Math.abs(distanceY) < 120) {
            this._showNextPhoto(-1);
        }

        if (elapsedTime < 1000 && distanceX < -30 && Math.abs(distanceY) < 120) {
            this._showNextPhoto(1);
        }
    }
}
