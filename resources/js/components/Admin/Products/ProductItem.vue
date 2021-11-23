<template>
    <div ref="product"
         class="product_item"
         :class="[draggedProductClass, beneathDraggedProductClass]"
         :style="{
            'left': draggedEntity === 'Product' ? leftByIndex(index) : 0,
            'top': draggedEntity === 'Product' ? topByIndex(index) : 0,
         }"
         @mousedown="myDragStart({index: index, event: $event, entity: 'Product'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: index, entity: 'Product' })">

        <div class="product_item__content">

            <a @click.prevent="showProductQuickViewManager(product.id)"
               href='#'
               class="product_item__quick_view_link">
                Быстрый просмотр
            </a>

            <template v-if="numberOfPhotos > 0">
                <router-link :to="{ name: 'SingleProduct', params: {  slug: product.slug, id: product.id } }">
                    <div ref="mainPhotoDiv"
                         @mousemove="changeMainPhoto($event)"
                         @mouseout="setFirstMainPhoto()"
                         v-html="getMainPhoto">
                    </div>
                </router-link>
            </template>
            <template v-else>
                <div ref="mainPhotoDiv" class="product_item__no_photo">
                    НЕТ ФОТО
                </div>
            </template>

            <div v-if="numberOfPhotos > 1" class="product_item__photo_indicator">
            <span v-for="n in numberOfPhotos" :key="n"
                  class="product_item__photo_indicator_item"
                  :class="{
                     product_item__photo_indicator_inactive: indexOfMainPhoto + 1 !== n,
                     product_item__photo_indicator_active: indexOfMainPhoto + 1 === n,
                  }">
            </span>
            </div>

            <div :style="{ cursor: cursorType }" :data-anchor_for_dragging="anchorForDragging">
                <div class="product_item__name">
                    <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug, id: product.id } }"
                                 class="product_item__name__link">
                        {{ product.name }}
                    </router-link>
                </div>

                <div class="product_item__price">
                    {{ getPrice }}
                </div>
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
import computedForProductItem from './someComputed/computedForProductItem';
import changeMainPhotoOfItemInList from './functions/changeMainPhotoOfItemInList';

export default {
    name: "ProductItem",
    props: ['product', 'index', 'numberOfItems'],
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
            'draggingOccurs',
        ]),
        ...mapGetters('products', [
            'sortingMode',
        ]),

        ...computedForProductItem,

        draggedEntity() {
            return this.entity;
        },

        draggedProductClass() {
            return {
                'draggedProduct': this.isDragging(this.index) && this.draggedEntity === 'Product',
            };
        },
        beneathDraggedProductClass() {
            return {
                'product_item__beneath_dragged_item': this.draggingOccurs,
            };
        },

        defaultSorting() {
            return this.sortingMode === 'position';
        },

        cursorType() {
            return this.defaultSorting && this.numberOfItems > 1 ? 'move' : 'default';
        },

        anchorForDragging() {
            return this.numberOfItems > 1;
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

        ...changeMainPhotoOfItemInList,
    },

    mounted() {
        this.$store.dispatch('dragAndDropByXY/resetCoordinates', {cycleNumber: this.index, entity: 'Product'})
            .then(() => {
                const xy = this.$refs.product.getBoundingClientRect();
                this.$store.commit('dragAndDropByXY/addXIntoXCoordinates', {x: xy.x, entity: 'Product'});
                this.$store.commit('dragAndDropByXY/addYIntoYCoordinates', {y: xy.y, entity: 'Product'});
            });
    },

}
</script>

