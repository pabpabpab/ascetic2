export default {

    endTouchHandler(event) {
        const touchObj = event.changedTouches[0];
        const distanceX = touchObj.pageX - this.startTouchX;
        const distanceY = touchObj.pageY - this.startTouchY;
        const elapsedTime = new Date().getTime() - this.startTouchTime;

        if (elapsedTime < 1000 && distanceX > 30 && Math.abs(distanceY) < 120) {
            this.scrollBigPhotos(-1);
        }

        if (elapsedTime < 1000 && distanceX < -30 && Math.abs(distanceY) < 120) {
            this.scrollBigPhotos(1);
        }
    }
}
