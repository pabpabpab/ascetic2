<template>
    <div :class="contextMenuClass" :style="coordinates">
        <ul class="context_menu__ul">

            <li  class="context_menu__li__multiple_black">
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 270})">
                        &#8635; 90&deg;
                    </span>
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 180})">
                        180&deg;
                    </span>
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 90})">
                        90&deg;&#8634;
                    </span>
            </li>

            <li class="context_menu__li context_menu__li_black"
                v-if="currentListIndex > 0"
                @click="movePhoto({productId, photoName, to: 'first'})">
                Сделать главным
            </li>

            <li class="context_menu__li__multiple_black">
                Сдвинуть
                <span v-if="currentListIndex > 0"
                      title="влево (вверх)"
                      class="context_menu__li__multiple__item_black"
                      @click="movePhoto({productId, photoName, to: 'up'})">
                    &larr; &uarr;
                </span>
                <span v-if="currentListIndex < lastListIndex"
                      title="вправо (вниз)"
                      class="context_menu__li__multiple__item_black"
                      @click="movePhoto({productId, photoName, to: 'down'})">
                    &darr; &rarr;
                </span>
            </li>

            <li class="context_menu__li context_menu__li_black"
                @click="showSeoManager({entity: 'photo', data: {productId, photoName}})" >
                SEO для фото
            </li>

            <li class="context_menu__li context_menu__li_black" style="border: 0;"
                @click="deletePhoto({productId, photoName})">
                Удалить фото
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "PhotosContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'enabledFadingCss',
            'productId',
            'photoName',
            'currentListIndex',
            'lastListIndex',
        ]),
        contextMenuClass() {
            return {
                'context_menu__wrapper context_menu__wrapper_black': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        }
    },
    methods: {
        ...mapActions('products', [
            'deletePhoto',
            'rotatePhoto',
            'movePhoto',
        ]),
        ...mapActions('seoManager', [
            'showSeoManager',
        ]),
    },
}










/*
<template>
    <div :class="contextMenuClass" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ product.name }}»
            </li>
            <li @click="editProduct(product.id)" class="context_menu__li">
                Редактировать
            </li>
            <li @click="showProductPhotoManager(product)" class="context_menu__li">
                Фото добавить / удалить
            </li>
            <li class="context_menu__li" style="border: 0;"
                @click="preDeleteProduct(product.id)">
                Удалить товар
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductsContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'enabledFadingCss',
            'product',
        ]),
        contextMenuClass() {
            return {
                'context_menu__wrapper': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        }
    },
    methods: {
        ...mapActions('products', [
            'preDeleteProduct',
            'showProductPhotoManager',
        ]),
        editProduct(id) {
            this.$router.push({ name: 'EditProduct', params: { id: id } });
        },
    },

}

 */
</script>
