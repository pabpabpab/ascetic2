export default {

    startTouchHandler(event) {
        const touchObj = event.changedTouches[0];
        this.startTouchX = touchObj.pageX;
        this.startTouchY = touchObj.pageY;
        this.startTouchTime = new Date().getTime();
    }
}
