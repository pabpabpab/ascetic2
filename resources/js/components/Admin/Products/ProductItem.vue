<template>
    <div ref="product"
         class="product_item"
         :class="draggableProductItemClass"
         :style="{
            'left': entity === 'Product' ? leftByIndex(index) : 0,
            'top': entity === 'Product' ? topByIndex(index) : 0,
         }"
         @mousedown="myDragStart({index: index, event: $event, entity: 'Product'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: index, entity: 'Product' })">


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

        <a v-if="$route.params.which !== 'trashed'"
            @click.prevent="showProductQuickViewManager(product.id)"
            href='#'
            class="product_item__quick_view_link">
            Быстрый просмотр
        </a>

        <template v-if="$route.params.which !== 'trashed'">
            <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }">
                <div ref="mainPhotoDiv"
                     @mousemove="changeMainPhoto($event)"
                     @mouseout="setFirstMainPhoto()"
                     v-html="getMainPhoto">
                </div>
            </router-link>
        </template>
        <template v-else>
            <div ref="mainPhotoDiv"
                @mousemove="changeMainPhoto($event)"
                @mouseout="setFirstMainPhoto()"
                v-html="getMainPhoto">
            </div>
        </template>

        <div class="product_item__photo_indicator">
            <span v-for="n in numberOfPhotos" :key="n"
                  class="product_item__photo_indicator_item"
                  :class="{
                     product_item__photo_indicator_inactive: indexOfMainPhoto + 1 !== n,
                     product_item__photo_indicator_active: indexOfMainPhoto + 1 === n,
                  }">
            </span>
        </div>

        <div class="product_item__name" :style="{ cursor: cursorType }">
            <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }"
                class="product_item__name__link">
                {{ product.name }}
            </router-link>
        </div>
        <div class="product_item__price" :style="{ cursor: cursorType }">
            {{ getPrice }}
        </div>
        <div @mouseover="changeMainPhotoBySmallPhoto($event)" @mouseout="setFirstMainPhoto()"
             class="product_item__small_photos"
             v-html="getPhotos">
        </div>


        <div class="product_item__bottom_info__relative_wrapper">
            <div class="product_item__bottom_info__absolute">
                <p title="Категория" v-html="getCategories" class="product_item__bottom_info__text"></p>
                <p title="Материал" v-html="getMaterials" class="product_item__bottom_info__text"></p>
                <p title="Цвет" v-html="getColors" class="product_item__bottom_info__text"></p>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import computedForProductItem from './someComputed/computedForProductItem';

export default {
    name: "ProductItem",
    props: ['product', 'index'],
    data() {
        return {
            indexOfMainPhoto: 0,
        }
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
            'sortingMode',
        ]),

        ...computedForProductItem,

        numberOfPhotos() {
            const photoInfoArr = JSON.parse(this.product.photo_set);
            if (!photoInfoArr) {
                return 0;
            }
            return photoInfoArr.length;
        },

        xPerPhoto() {
            if (this.numberOfPhotos < 2) {
                return 0;
            }
            return 250/this.numberOfPhotos; // 250px ширина фото
        },

        draggableProductItemClass() {
            return {
                'draggableProduct': this.isDragging(this.index) && this.entity === 'Product',
            };
        },

        defaultSorting() {
            return this.sortingMode === 'position';
        },

        cursorType() {
            return this.defaultSorting ? 'move' : 'default';
        },
    },


    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
        ...mapActions('dragAndDropByXY', [
            'myDragStart',
            'myDragStop',
        ]),
        ...mapActions('products', [
            'showProductQuickViewManager',
        ]),

        changeMainPhoto(event) {
            if (this.xPerPhoto === 0) {
                return;
            }
            const xy = this.$refs.mainPhotoDiv.getBoundingClientRect();
            const xWay = event.x-xy.x;

            if (xWay < 0) {
                return;
            }

            this.indexOfMainPhoto = Math.ceil(xWay/this.xPerPhoto) - 1;
        },

        changeMainPhotoBySmallPhoto(event) {
            if (event.target.className === 'photo__size1') {
                this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
            }
        },

        setFirstMainPhoto() {
            this.indexOfMainPhoto = 0;
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

