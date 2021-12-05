<template>
    <div class="single_product__content">

        <div v-if="numberOfPhotos > 0" class="single_product__all_photo_wrapper">
            <div class="single_product__small_photos__wrapper">

                <div v-show="notScrolledAllTheWayToTheTop() && numberOfPhotos > 5"
                     @click="scrollSmallPhoto(300, 'down')"
                     class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top">
                        <div class="single_product__small_photos__scroll_button_top__content">
                        </div>
                </div>

                <div ref="smallPhotoDiv"
                     @mouseover="changeMainPhotoBySmallPhoto($event)"
                     class="single_product__small_photos"
                     v-html="getSmallPhotos">
                </div>

                <div v-if="numberOfPhotos > 5 && (notScrolledAllTheWayToTheBottom() || indexOfMainPhoto === 0)"
                     @click="scrollSmallPhoto(300, 'up')"
                     class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom">
                        <div class="single_product__small_photos__scroll_button_bottom__content">
                        </div>
                </div>

            </div>

            <div class="single_product__big_photo__wrapper">

                <div ref="mainPhotoDiv"
                    data-big-photo-version="desktop"
                    class="single_product__big_photo__content"
                    v-html="getMainPhoto"
                    @mouseover="startViewLargePhoto()"
                    @mousemove="viewLargePhoto($event)"
                    @mouseleave="showInitialPhoto()">
                </div>

                <div ref="mobileMainPhotoDiv"
                     data-big-photo-version="mobile"
                     class="single_product__big_photo__content_mobile"
                     v-html="getAllBigPhotos">
                </div>

                <div v-show="showLeftScrollButton"
                     @click="showNextBigPhoto(-1)"
                     class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left">
                    <div class="single_product__big_photo__scroll_button_left__content">
                    </div>
                </div>

                <div v-show="showRightScrollButton"
                     @click="showNextBigPhoto(1)"
                     class="single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right">
                    <div class="single_product__big_photo__scroll_button_right__content">
                    </div>
                </div>
            </div>
        </div>

        <div class="single_product__top_characteristics"
             :class="{ single_product__top_characteristics__margin_left: numberOfPhotos > 0 }">
            <h1 class="single_product__h1">
                {{ getHeader }}
            </h1>
            <div class="single_product__price">
                {{ getPrice }}
            </div>
            <div class="single_product__categories">
                Категория:
                <single-product-category-item
                    v-for="(category, index) of getCategories"
                    :key="category.id"
                    :category="category"
                    :index="index"
                    entity-name="category">
                </single-product-category-item>
            </div>
            <div class="single_product__categories">
                Материал:
                <single-product-category-item
                    v-for="(category, index) of getMaterials"
                    :key="category.id"
                    :category="category"
                    :index="index"
                    entity-name="material">
                </single-product-category-item>
            </div>
            <div class="single_product__categories">
                Цвет:
                <single-product-category-item
                    v-for="(category, index) of getColors"
                    :key="category.id"
                    :category="category"
                    :index="index"
                    entity-name="color">
                </single-product-category-item>
            </div>
            <div class="single_product__description">
                {{ getDescription }}
            </div>
        </div>


        <span class="context_menu__icon__single_product"
              :style="{ position: cssPositionOfContextIcon }"
              @click.stop="showContextMenu({
                event: $event,
                target: 'Products',
                data: {
                    product: singleProductFromServer.product,
                }
            })">
            &#9998;
        </span>

    </div>
</template>

<script>
import SingleProductCategoryItem from "./../Products/SingleProductCategoryItem";
import computedForSingleProduct from './../Products/someComputed/computedForSingleProduct';
import {mapActions, mapGetters} from "vuex";
import scrollSmallPhotos from "./functions/scrollSmallPhotos";
import viewLargePhoto from "./functions/viewLargePhoto";
import scrollBigPhotos from "./functions/scrollBigPhotos";

export default {
    name: "SingleProduct",
    props: ['from'],
    components: {
        SingleProductCategoryItem,
    },
    data() {
        return {
            indexOfMainPhoto: 0,
            mainPhotoSizeIndex: 4,
            mainPhotoRatio: 0,
        }
    },
    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),

        ...computedForSingleProduct,

        cssPositionOfContextIcon() {
            return this.from === 'quickViewManager' ? 'absolute' : 'fixed';
        },
        showLeftScrollButton() {
            return this.indexOfMainPhoto > 0;
        },
        showRightScrollButton() {
            return this.indexOfMainPhoto < this.numberOfPhotos - 1;
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),

        ...scrollSmallPhotos,
        ...viewLargePhoto,
        ...scrollBigPhotos,

        changeMainPhotoBySmallPhoto(event) {
            if (event.target.className === 'photo__size2') {
                this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
            }
        },
        showNextBigPhoto(offset) {
            this.scrollBigPhotos(offset);
            /*
            this.indexOfMainPhoto += offset;
            if (this.indexOfMainPhoto < 0) {
                this.indexOfMainPhoto = 0;
            }
            if (this.indexOfMainPhoto > this.numberOfPhotos - 1) {
                this.indexOfMainPhoto = this.numberOfPhotos - 1;
            }
            */
        },
    },
    mounted() {
        if (this.from === 'singleProductPage') {
            this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
        }
    }
}
</script>
