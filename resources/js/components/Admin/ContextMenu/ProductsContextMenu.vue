<template>
    <div :class="contextMenuClass" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header context_menu__li_header_black">
                «{{ product.name }}»
            </li>

            <template v-if="isTrashedProduct">
                <li class="context_menu__li context_menu__li_black" style="border: 0;"
                    @click="restoreProduct(product.id)">
                    Восстановить товар
                </li>
                <li class="context_menu__li context_menu__li_black" style="border: 0;"
                    @click="preDeleteProduct(product)">
                    Удалить безвозвратно
                </li>
            </template>
            <template v-else>
                <li class="context_menu__li context_menu__li_black"
                    @click="showProductEditManager(product.id)">
                    Редактировать
                </li>
                <li class="context_menu__li context_menu__li_black"
                    @click="showProductPhotoManager(product)">
                    Фото-менеджер
                </li>
                <li class="context_menu__li context_menu__li_black"
                    @click="showSeoManager({entity: 'product', data: {id: product.id}})" >
                    SEO для товара
                </li>
                <li class="context_menu__li context_menu__li_black" style="border: 0;"
                    @click="preDeleteProduct(product)">
                    Удалить товар
                </li>
            </template>

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
                'context_menu__wrapper context_menu__wrapper_black': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        },
        isTrashedProduct() {
            return Boolean(this.product.deleted_at);
        },
    },
    methods: {
        ...mapActions('products', [
            'preDeleteProduct',
            'restoreProduct',
            'showProductEditManager',
            'showProductPhotoManager',
        ]),
        ...mapActions('seoManager', [
            'showSeoManager',
        ]),
        /*
        editProduct(id) {
            this.$router.push({ name: 'EditProduct', params: { id: id } });
        },*/
    },

}
</script>
