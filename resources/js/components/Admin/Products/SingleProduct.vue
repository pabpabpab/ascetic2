<template>
    <div class="single_product__content">

        <div v-if="numberOfPhotos > 0" class="single_product__all_photo_wrapper">
            <div class="single_product__small_photos__wrapper">

                <div v-show="notScrolledAllTheWayToTheTop() && numberOfPhotos > 5"
                     @click="scrollSmallPhoto(200, 'down')"
                     class="single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top">
                        <div class="single_product__small_photos__scroll_button_top__content">
                        </div>
                </div>

                <div ref="smallPhotoDiv"
                     @mouseover="changeMainPhotoBySmallPhoto($event)"
                     class="single_product__small_photos"
                     v-html="getPhotos">
                </div>

                <div v-if="numberOfPhotos > 5 && (notScrolledAllTheWayToTheBottom() || indexOfMainPhoto === 0)"
                     @click="scrollSmallPhoto(200, 'up')"
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
              @mouseover="showContextMenu({
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
        }
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

        scrollSmallPhoto(distance, direction) {
            const iterationTime = Math.round(400/distance); // время в милисекундах на 1px, 1000(400) - одна секунды
            const coveredDistance = 0; // пройденное расстояние
            this._scrollSmallPhoto(iterationTime, distance, coveredDistance, direction)
        },
        _scrollSmallPhoto(iterationTime, distance, coveredDistance, direction) {
            //console.log(coveredDistance);
            if (coveredDistance > distance) {
                return;
            }
            const step = 1; // 1px
            if (direction === 'down') {
                this.$refs.smallPhotoDiv.scrollTop -= step;
            } else {
                this.$refs.smallPhotoDiv.scrollTop += step;
            }
            coveredDistance += step;
            setTimeout(() => {
                this._scrollSmallPhoto(iterationTime, distance, coveredDistance, direction);
            }, iterationTime);
        },

        startViewLargePhoto() {
            if (!this.$refs.mainPhotoDiv) {
                return;
            }
            const wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect();
            //this.$refs.mainPhotoDiv.style.height = (wrapper.bottom - wrapper.top) + 'px';
            this.mainPhotoRatio = 1600/(wrapper.right - wrapper.left); // 1600px ширина фото под лупой
            //console.log(wrapper);
            this.mainPhotoSizeIndex = 5;
        },
        viewLargePhoto(event) {
            if (!this.$refs.mainPhotoDiv) {
                return;
            }
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
        if (this.from === 'singleProductPage') {
            this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
        }
    }
}
</script>
