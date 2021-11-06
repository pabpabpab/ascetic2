export default  {

    getMainPhoto() {
        if (!this.product.photo_set) {
            return '';
        }
        const photoInfoArr = JSON.parse(this.product.photo_set);
        if (!photoInfoArr) {
            return '';
        }

        const folderName = `/storage/${this.imgFolderPrefix}3`;
        const fileNamePrefix = `${this.product.id}s3-`;
        const imgClass = `photo__size3`;

        const mainPhotoName = photoInfoArr[this.indexOfMainPhoto];

        return `<img alt=""
                    src="${folderName}/${fileNamePrefix}${mainPhotoName}"
                    class="${imgClass}" />`;
    },


    getPhotos() {
        if (!this.product.photo_set) {
            return '';
        }

        const photoInfoArr = JSON.parse(this.product.photo_set);
        if (!photoInfoArr) {
            return '';
        }

        const folderName = `/storage/${this.imgFolderPrefix}3`;
        const fileNamePrefix = `${this.product.id}s3-`;

        const photoArr = photoInfoArr.map(function(timeName, index) {
            return `<img data-photoindex="${index}" alt="" src="${folderName}/${fileNamePrefix}${timeName}" class="photo__size1" />`;
        });
        return photoArr.join('');
    },



    getPrice() {
        const parametersArr = JSON.parse(this.product.parameters);
        const price = parametersArr.price ?? '';
        return price ? price + ' ₽' : '';
    },

    getCategories() {
        const parametersArr = JSON.parse(this.product.parameters);
        const categoriesArr = parametersArr.categories.map(function(item) {
            return `${item.name}`;
        });
        return categoriesArr.join(', ');
    },
    getMaterials() {
        const parametersArr = JSON.parse(this.product.parameters);
        const materialsArr = parametersArr.materials.map(function(item) {
            return `${item.name}`;
        });
        return materialsArr.join(', ');
    },
    getColors() {
        const parametersArr = JSON.parse(this.product.parameters);
        const colorsArr = parametersArr.colors.map(function(item) {
            return `${item.name}`;
        });
        return colorsArr.join(', ');
    },

}
