export default {

    scrollBigPhotos(offset) {
        const wrapper = this.$refs.mobileMainPhotoDiv.getBoundingClientRect();
        const photoWidth = wrapper.right - wrapper.left;

        this.$refs.mobileMainPhotoDiv.scrollLeft = this.indexOfMainPhoto * photoWidth;
        const startX = this.$refs.mobileMainPhotoDiv.scrollLeft;

        this.indexOfMainPhoto += offset;

        if (offset < 0 && this.indexOfMainPhoto < 0) {
            this.indexOfMainPhoto = 0;
            return;
        }
        if (offset > 0 && this.indexOfMainPhoto >= this.numberOfPhotos) {
            this.indexOfMainPhoto = this.numberOfPhotos - 1;
            return;
        }

        this._scrollBigPhotos(offset, startX, photoWidth);
    },

    _scrollBigPhotos(offset, startX, photoWidth) {
        const _coveredDistance = Math.abs(this.$refs.mobileMainPhotoDiv.scrollLeft - startX);
        if (_coveredDistance > photoWidth - 10) { // 10 - возможная погрешность
            this.$refs.mobileMainPhotoDiv.scrollLeft = this.indexOfMainPhoto * photoWidth;
            return;
        }
        const step = 10; // px
        this.$refs.mobileMainPhotoDiv.scrollLeft += offset * step;
        setTimeout(() => {
            this._scrollBigPhotos(offset, startX, photoWidth);
        }, 1);
    },

}
