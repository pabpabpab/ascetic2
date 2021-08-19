<template>
    <div class="product__item">
        <div>
            <span class="product__item__name">
                {{ product.id }}
            </span>
            <span class="product__item__name">
                {{ product.name }}
            </span>
            <span class="product__item__price">
                {{ getPrice(product.parameters) }}
            </span>
        </div>
        <div>
            <p v-html="`${getMaterials(product.parameters)}
            / ${getColors(product.parameters)}
            / ${getCategory(product.parameters)}`"></p>
        </div>
        <div>
            <p v-html="getMainPhoto(product.id, product.photo_set)"></p>
            <p v-html="getPhotos(product.id, product.photo_set, 1)"></p>
        </div>

        <span class="context_menu__icon__product"
            @mouseover="showContextMenu({
                event: $event,
                target: 'Products',
                data: {
                    product: product,
                }
            })">
            &#8942;
        </span>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductItem",
    props: ['product'],
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),

        getPrice(parameters) {
            const parametersArr = JSON.parse(parameters);
            const price = parametersArr.price ?? '';
            return price ? price + ' ₽' : '';
        },
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

        getMainPhoto(productId, photoInfo, sizeIndex = 3) {
            const photoInfoArr = JSON.parse(photoInfo);
            if (!photoInfoArr)
                return;
            const folderName = `/storage/${this.imgFolderPrefix}${sizeIndex}`;
            const fileNamePrefix = `${productId}s${sizeIndex}-`;
            const imgClass = `photo__size${sizeIndex}`;

            const mainPhotoTimeName = photoInfoArr[0];

            return `<img alt=""
                    src="${folderName}/${fileNamePrefix}${mainPhotoTimeName}"
                    class="${imgClass}" />`;
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

