<template>
    <div class="content_block single_product__content_block">

        <div class="single_product__first_wrapper">
            <div @mouseover="changeMainPhotoBySmallPhoto($event)" class="single_product__small_photos"
                v-html="getPhotos">
            </div>
            <div ref="mainPhotoDiv" class="single_product__big_photo_wrapper"
                 v-html="getMainPhoto"
                 @mouseover="startViewLargePhoto()"
                 @mousemove.stop="viewLargePhoto($event)"
                 @mouseleave="showInitialPhoto()">
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
    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SingleProductCategoryItem from "./Products/SingleProductCategoryItem";
import computedForSingleProduct from './Products/someComputed/computedForSingleProduct';

export default {
    name: "SingleProductPage",
    components: {
        SingleProductCategoryItem,
    },
    data() {
        return {
            indexOfMainPhoto: 0,
            mainPhotoSizeIndex: 4,
            mainPhotoWrapperHeight: 0,
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


    },
    methods: {

        changeMainPhotoBySmallPhoto(event) {
            if (event.target.className === 'photo__size2') {
                this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
            }
        },

        startViewLargePhoto() {
            const wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect();
            this.mainPhotoWrapperHeight = wrapper.bottom - wrapper.top;
            this.$refs.mainPhotoDiv.style.height = this.mainPhotoWrapperHeight + 'px';
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

            //console.log(event);
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
