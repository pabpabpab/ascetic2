export default {

    noData() {
        const product = this.singleProductFromServer?.product;

        if (!product) {
            return true;
        }

        return false;
    },


    getHeader() {
        if (this.noData) {
            return '';
        }
        return this.singleProductFromServer.product.name;
    },


    getMainPhoto() {
        if (this.noData) {
            return '';
        }
        const product = this.singleProductFromServer.product;
        const photoInfoArr = JSON.parse(product.photo_set);
        if (!photoInfoArr)
            return;
        const folderName = `/storage/${this.imgFolderPrefix}4`;
        const fileNamePrefix = `${product.id}s4-`;

        const mainPhotoName = photoInfoArr[this.indexOfMainPhoto];

        return `<img alt=""
                    src="${folderName}/${fileNamePrefix}${mainPhotoName}"
                    class="photo__size4" />`;
    },


    getPhotos() {
        if (this.noData) {
            return '';
        }
        const product = this.singleProductFromServer.product;
        const photoInfoArr = JSON.parse(product.photo_set);
        if (!photoInfoArr)
            return;
        const folderName = `/storage/${this.imgFolderPrefix}2`;
        const fileNamePrefix = `${product.id}s2-`;

        const photoArr = photoInfoArr.map(function (timeName, index) {
            return `<img data-photoindex="${index}" alt="" src="${folderName}/${fileNamePrefix}${timeName}" class="photo__size2" />`;
        });
        return photoArr.join('');
    },
}
