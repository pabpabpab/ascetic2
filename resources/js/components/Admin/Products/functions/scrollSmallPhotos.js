export default  {

    notScrolledAllTheWayToTheTop() {
        if (!this?.$refs?.smallPhotoDiv) {
            return false;
        }
        return this.$refs.smallPhotoDiv.scrollTop > 5;
    },
    notScrolledAllTheWayToTheBottom() {
        if (!this?.$refs?.smallPhotoDiv) {
            return false;
        }
        const scrollTop = this.$refs.smallPhotoDiv.scrollTop;
        const clientHeight = this.$refs.smallPhotoDiv.clientHeight;
        const scrollHeight = this.$refs.smallPhotoDiv.scrollHeight;
        return scrollHeight - (scrollTop + clientHeight) > 10;
    },

    scrollSmallPhoto(distance, direction) {
        const coveredDistance = 0; // пройденное расстояние
        this._scrollSmallPhoto(distance, coveredDistance, direction)
    },
    _scrollSmallPhoto(distance, coveredDistance, direction) {
        if (coveredDistance > distance) {
            return;
        }
        const step = 3; // px
        if (direction === 'down') {
            this.$refs.smallPhotoDiv.scrollTop -= step;
        } else {
            this.$refs.smallPhotoDiv.scrollTop += step;
        }
        coveredDistance += step;
        setTimeout(() => {
            this._scrollSmallPhoto(distance, coveredDistance, direction);
        }, 1);
    },

}
