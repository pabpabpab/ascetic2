<template>
    <div class="product_item">

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

        <template v-if="numberOfPhotos > 0">
            <div ref="mainPhotoDiv"
                 @mousemove="changeMainPhoto($event)"
                 @mouseout="setFirstMainPhoto()"
                 v-html="getMainPhoto">
            </div>
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

        <div class="product_item__name">
            {{ product.name }}
        </div>
        <div class="product_item__price">
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
import computedForProductItem from "./../someComputed/computedForProductItem";
import changeMainPhotoOfItemInList from './../functions/changeMainPhotoOfItemInList';

export default {
    name: "TrashedProductItem",
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

        ...computedForProductItem,
    },

    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),

        ...changeMainPhotoOfItemInList,
    },
}
</script>
