<template>
    <div class="context_menu__wrapper context_menu__wrapper_black" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header context_menu__li_header_black">
                «{{ product.name }}»
            </li>

            <template v-if="isTrashedProduct">
                <li class="context_menu__li context_menu__li_black"
                    @click="showProductEditManager(product.id)">
                    Редактировать
                </li>
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
                    <span v-if="hasSeoData" title="уже есть данные" class='has_data_green'>&#10004;</span>
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
            'product',
        ]),
        ...mapGetters('products', [
            'seoData',
            'singleProductFromServer',
        ]),
        isTrashedProduct() {
            return Boolean(this.product.deleted_at);
        },
        hasSeoData() {
            return this.hasSeoData1 || this.hasSeoData2;
        },
        hasSeoData1() {
            const item = this.seoData.find(item => item.product_id === this.product.id);
            if (!item) {
                return false;
            }
            return Boolean(item.page_title) || Boolean(item.page_description);
        },
        hasSeoData2() {
            if (this.$route.name !== 'SingleProduct') {
                return false;
            }
            const singleProductSeo = this.singleProductFromServer.product.seo_text;
            if (!singleProductSeo) {
                return false;
            }
            if (singleProductSeo.product_id !== this.product.id) {
                return false;
            }
            return Boolean(singleProductSeo.page_title) || Boolean(singleProductSeo.page_description);
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
    },

}
</script>
