<template>
    <div class="single_product__content_block">

        <div class="single_product__first_wrapper">

            <div class="single_product__all_photo_wrapper">
                <div class="single_product__small_photos__wrapper">

                    <div v-show="notScrolledAllTheWayToTheTop() && getPhotoCount > 5"
                         @click="scrollSmallPhotoDown(300)"
                        class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top">
                        <div class="single_product__small_photos__scroll_button_top__content">
                        </div>
                    </div>

                    <div ref="smallPhotoDiv"
                         @mouseover="changeMainPhotoBySmallPhoto($event)"
                         class="single_product__small_photos"
                         v-html="getPhotos">
                    </div>

                    <div v-if="getPhotoCount > 5 && (notScrolledAllTheWayToTheBottom() || indexOfMainPhoto === 0)"
                        @click="scrollSmallPhotoUp(300)"
                        class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom">
                        <div class="single_product__small_photos__scroll_button_bottom__content">
                        </div>
                    </div>

                </div>
                <div ref="mainPhotoDiv" class="single_product__big_photo_wrapper"
                     v-html="getMainPhoto"
                     @mouseover="startViewLargePhoto()"
                     @mousemove="viewLargePhoto($event)"
                     @mouseleave="showInitialPhoto()">
                </div>
            </div>

            <div class="single_product__top_characteristics">
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
        </div>



        <span class="context_menu__icon__single_product"
              @mouseover="showContextMenu({
                event: $event,
                target: 'Products',
                data: {
                    product: singleProductFromServer.product,
                }
            })">
            &#9998;
        </span>

        <transition name="fade">
            <products-context-menu v-if="showProductsContextMenu"></products-context-menu>
        </transition>


        <transition name="fade">
            <product-edit-manager v-if="showProductEditManager"></product-edit-manager>
        </transition>
        <transition name="fade">
            <product-photo-manager v-if="showProductPhotoManager"></product-photo-manager>
        </transition>
        <transition name="fade">
            <seo-manager entity="product" v-if="showSeoManager && !showProductPhotoManager"></seo-manager>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SingleProductCategoryItem from "./Products/SingleProductCategoryItem";
import ProductsContextMenu from "./ContextMenu/ProductsContextMenu";
import ProductPhotoManager from "./Products/ProductPhotoManager";
import SeoManager from "./Blocks/SeoManager";
import ProductEditManager from "./Products/ProductEditManager";
import computedForSingleProduct from './Products/someComputed/computedForSingleProduct';

export default {
    name: "SingleProductPage",
    components: {
        SingleProductCategoryItem,
        ProductPhotoManager,
        SeoManager,
        ProductEditManager,
        ProductsContextMenu,
    },
    data() {
        return {
            indexOfMainPhoto: 0,
            mainPhotoSizeIndex: 4,
            //mainPhotoWrapperHeight: 0,
            mainPhotoRatio: 0,
        }
    },
    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
            'showProductEditManager',
            'showProductPhotoManager',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        ...mapGetters('contextMenu', [
            'showProductsContextMenu',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),

        ...computedForSingleProduct,

        showScrollBottomButton() {
            return
        },

    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),

        changeMainPhotoBySmallPhoto(event) {
            if (event.target.className === 'photo__size2') {
                this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
            }
        },

        notScrolledAllTheWayToTheTop() {
            if (!this?.$refs?.smallPhotoDiv) {
                return false;
            }
            return this.$refs.smallPhotoDiv.scrollTop > 5;
        },

        notScrolledAllTheWayToTheBottom() {
            if (!this?.$refs?.smallPhotoDiv) {
                return false;
            }
            const scrollTop = this.$refs.smallPhotoDiv.scrollTop;
            const clientHeight = this.$refs.smallPhotoDiv.clientHeight;
            const scrollHeight = this.$refs.smallPhotoDiv.scrollHeight;
            return scrollHeight - (scrollTop + clientHeight) > 10;
        },

        scrollSmallPhotoUp(step) {
            this.$refs.smallPhotoDiv.scrollTop += step;
        },
        scrollSmallPhotoDown(step) {
            this.$refs.smallPhotoDiv.scrollTop -= step;
        },

        startViewLargePhoto() {
            const wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect();
            //this.$refs.mainPhotoDiv.style.height = (wrapper.bottom - wrapper.top) + 'px';
            this.mainPhotoRatio = 1600/(wrapper.right - wrapper.left); // 1600px ширина фото под лупой
            //console.log(wrapper);
            this.mainPhotoSizeIndex = 5;
        },

        viewLargePhoto(event) {
            const photo = this.$refs.mainPhotoDiv.getBoundingClientRect();
            const xWay = event.x-photo.left;
            const yWay = event.y-photo.top;

            this.$refs.mainPhotoDiv.scrollLeft = xWay * this.mainPhotoRatio/1.6;
            this.$refs.mainPhotoDiv.scrollTop = yWay * this.mainPhotoRatio/1.6;
            // 1.6 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
        },

        showInitialPhoto() {
            this.mainPhotoSizeIndex = 4;
        },
    },
    mounted() {
        this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
    }
}
</script>
