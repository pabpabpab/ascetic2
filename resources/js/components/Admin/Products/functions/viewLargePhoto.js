export default {

    startViewLargePhoto() {
        if (!this.$refs.mainPhotoDiv) {
            return;
        }
        if (this.viewingLargePhotoWasStarted) {
            return;
        }
        this.viewingLargePhotoWasStarted = true;
        const wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect();
        //this.$refs.mainPhotoDiv.style.height = (wrapper.bottom - wrapper.top) + 'px';
        this.mainPhotoRatio = 1600/(wrapper.right - wrapper.left); // 1600px ширина фото под лупой
        this.mainPhotoSizeIndex = 5;
    },

    viewLargePhoto(event) {
        if (!this.$refs.mainPhotoDiv) {
            return;
        }
        const photo = this.$refs.mainPhotoDiv.getBoundingClientRect();
        const xWay = event.x-photo.left;
        const yWay = event.y-photo.top;

        this.$refs.mainPhotoDiv.scrollLeft = xWay * this.mainPhotoRatio/1.5;
        this.$refs.mainPhotoDiv.scrollTop = yWay * this.mainPhotoRatio/1.5;
        // 1.5 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
    },

    showInitialPhoto() {
        this.mainPhotoSizeIndex = 4;
        this.$refs.mainPhotoDiv.scrollLeft = 0;
        this.$refs.mainPhotoDiv.scrollTop = 0;
        this.viewingLargePhotoWasStarted = false;
    },
}
