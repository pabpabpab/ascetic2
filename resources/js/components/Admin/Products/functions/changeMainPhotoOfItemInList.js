export default {

    changeMainPhoto(event) {
        if (this.numberOfPhotos < 2) {
            return;
        }
        if (this.xPerPhoto === 0) {
            return;
        }
        const xy = this.$refs.mainPhotoDiv.getBoundingClientRect();
        const xWay = event.x-xy.x;

        if (xWay < 0) {
            return;
        }

        this.indexOfMainPhoto = Math.ceil(xWay/this.xPerPhoto) - 1;
    },

    changeMainPhotoBySmallPhoto(event) {
        if (this.numberOfPhotos < 2) {
            return;
        }
        if (event.target.className === 'photo__size1') {
            this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
        }
    },

    setFirstMainPhoto() {
        this.indexOfMainPhoto = 0;
    },
}
