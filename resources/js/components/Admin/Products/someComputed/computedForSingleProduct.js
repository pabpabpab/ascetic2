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
        const folderName = `/storage/${this.imgFolderPrefix}5`;
        const fileNamePrefix = `${product.id}s5-`;
        const cssClass = `photo__size${this.mainPhotoSizeIndex}`;

        const mainPhotoName = photoInfoArr[this.indexOfMainPhoto];

        return `<img alt=""
                    src="${folderName}/${fileNamePrefix}${mainPhotoName}"
                    class="${cssClass}" />`;
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

    /*
    getCategories() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        //console.log(parametersArr.categories);
        const categoriesArr = parametersArr.categories.map(function(item) {
            return `${item.id} ${item.name}`;
        });
        return categoriesArr.join(', ');
    },

    getMaterials() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        const materialsArr = parametersArr.materials.map(function(item) {
            return `${item.id} ${item.name}`;
        });
        return materialsArr.join(', ');
    },

    getColors() {
        if (this.noData) {
            return '';
        }
        const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
        const colorsArr = parametersArr.colors.map(function(item) {
            return `${item.id} ${item.name}`;
        });
        return colorsArr.join(', ');
    },
    */


    getDescription() {
        if (this.noData) {
            return '';
        }
        return this.singleProductFromServer.description.description;
    },
}
