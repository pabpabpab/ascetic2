<template>
    <div ref="product"
         class="product__item"
         :class="draggableProductItemClass"
         :style="{
            'left': entity === 'Product' ? leftByIndex(index) : 0,
            'top': entity === 'Product' ? topByIndex(index) : 0,
         }"
         @mousedown="myDragStart({index: index, event: $event, entity: 'Product'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: index, entity: 'Product' })">
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
            / ${getCategories(product.parameters)}`"></p>
        </div>
        <div>
            <p v-html="getMainPhoto(product.id, product.photo_set)"></p>
            <p v-html="getPhotos(product.id, product.photo_set, 1)"></p>
        </div>

        <span class="context_menu__icon__product"
            @mouseover.click="showContextMenu({
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
    props: ['product', 'index'],
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
        ...mapActions('dragAndDropByXY', [
            'myDragStart',
            'myDragStop',
        ]),

        getPrice(parameters) {
            const parametersArr = JSON.parse(parameters);
            const price = parametersArr.price ?? '';
            return price ? price + ' ₽' : '';
        },
        getCategories(parameters) {
            const parametersArr = JSON.parse(parameters);
            const categoriesArr = parametersArr.categories.map(function(item) {
                return `${item.name}`;
            });
            return categoriesArr.join(', ');
            /*
            const category = parametersArr.category ?? {id: 0, name: ''};
            return category.name;*/
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
        ...mapGetters('dragAndDropByXY', [
            'entity',
            'isDragging',
            'leftByIndex',
            'topByIndex',
        ]),
        ...mapGetters('products', [
            'showProductPhotoManager',
        ]),
        draggableProductItemClass() {
            return {
                'draggableProduct': this.isDragging(this.index) && this.entity === 'Product',
            };
        },
    },

    mounted() {
        this.$store.dispatch('dragAndDropByXY/resetCoordinates', {cycleNumber: this.index, entity: 'Product'}).then(
            () => {
                const xy = this.$refs.product.getBoundingClientRect();
                this.$store.commit('dragAndDropByXY/addXIntoXCoordinates', {x: xy.x, entity: 'Product'});
                this.$store.commit('dragAndDropByXY/addYIntoYCoordinates', {y: xy.y, entity: 'Product'});
            }
        );
    },

}
</script>

