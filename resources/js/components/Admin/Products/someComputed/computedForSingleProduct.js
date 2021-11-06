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
        if (!photoInfoArr) {
            return '';
        }
        const folderName = `/storage/${this.imgFolderPrefix}5`;
        const fileNamePrefix = `${product.id}s5-`;
        const cssClass = `photo__size${this.mainPhotoSizeIndex}`;
        const mainPhotoName = photoInfoArr[this.indexOfMainPhoto];

        return `<img alt=""
                    src="${folderName}/${fileNamePrefix}${mainPhotoName}"
                    class="${cssClass}" />`;
    },

    numberOfPhotos() {
        if (this.noData) {
            return 0;
        }
        const product = this.singleProductFromServer.product;
        const photoInfoArr = JSON.parse(product.photo_set);
        if (!photoInfoArr) {
            return 0;
        }
        return photoInfoArr.length;
    },


    getPhotos() {
        if (this.noData) {
            return '';
        }
        const product = this.singleProductFromServer.product;
        const photoInfoArr = JSON.parse(product.photo_set);
        if (!photoInfoArr) {
            return '';
        }
        const folderName = `/storage/${this.imgFolderPrefix}2`;
        const fileNamePrefix = `${product.id}s2-`;

        const photoArr = photoInfoArr.map(function (timeName, index) {
            return `<img data-photoindex="${index}" alt="" src="${folderName}/${fileNamePrefix}${timeName}" class="photo__size2" />`;
        });
        return photoArr.join('');
    },


    getPrice() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        const price = parametersArr.price ?? '';
        return price ? price + ' ₽' : '';
    },

    getCategories() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        return parametersArr.categories;
    },

    getMaterials() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        return parametersArr.materials;
    },

    getColors() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        return parametersArr.colors;
    },

    getDescription() {
        if (this.noData) {
            return '';
        }
        return this.singleProductFromServer.product.description.description;
    },
}
