import MobileLargePhotosScrollerExecutor from "./mobileLargePhotosScrollerExecutor";

export default class MobileLargePhotosScrollerByClick extends MobileLargePhotosScrollerExecutor {
    constructor() {
        super();

        this.buttonLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            this._showNextPhoto(-1);
        });
        this.buttonRight.addEventListener('click', (e) => {
            e.stopPropagation();
            this._showNextPhoto(1);
        });
    }
}
