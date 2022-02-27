export default  {

    xPerPhoto() {
        if (this.numberOfPhotos < 2) {
            return 0;
        }
        return 250/this.numberOfPhotos; // 250px ширина фото
    },

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
        const imgClass = `product_item__photo_img`;

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

    numberOfPhotos() {
        if (!this.product.photo_set) {
            return 0;
        }
        const photoInfoArr = JSON.parse(this.product.photo_set);
        if (!photoInfoArr) {
            return 0;
        }
        return photoInfoArr.length;
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
