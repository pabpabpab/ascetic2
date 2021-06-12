<template>
    <div>
        <div class="product__item">
        <span class="product__item__name">
            {{ product.id }}
        </span>
            <span class="product__item__name">
            {{ product.name }}
        </span>
        <span class="product__item__price">
            {{ product.price }}
        </span>
        </div>
        <div class="product__item">
            <p v-html="`${getMaterials(product.parameters)}
            / ${getColors(product.parameters)}
            / ${getCategory(product.parameters)}`"></p>
        </div>
        <div class="product__item">
            <p v-html="getPhotos(product.id, product.photo_set, 1)"></p>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductItem",
    props: ['product'],
    methods: {
        getCategory(parameters) {
            const parametersArr = JSON.parse(parameters);
            const category = parametersArr.category ?? {id: 0, name: ''};
            return category.name;
        },
        getMaterials(parameters) {
            const parametersArr = JSON.parse(parameters);
            const materialsArr = parametersArr.materials.map(function(item) {
                return `${item.name}`;
            });
            return materialsArr.join(', ');
        },
        getColors(parameters) {
            const parametersArr = JSON.parse(parameters);
            const colorsArr = parametersArr.colors.map(function(item) {
                return `${item.name}`;
            });
            return colorsArr.join(', ');
        },
        getPhotos(productId, photoInfo, sizeIndex) {
            const photoInfoArr = JSON.parse(photoInfo);
            if (!photoInfoArr)
                return;
            const folderName = `/storage/${this.imgFolderPrefix}${sizeIndex}`;
            const fileNamePrefix = `${productId}s${sizeIndex}-`;
            const imgClass = `photo__size${sizeIndex}`;

            const photoArr = photoInfoArr.map(function(timeName) {
                return `<img alt="" src="${folderName}/${fileNamePrefix}${timeName}" class="${imgClass}" />`;
            });
            return photoArr.join('');
        },

    },
    computed: {
        ...mapGetters([
            'imgFolderPrefix',
        ]),
    },

}
</script>

