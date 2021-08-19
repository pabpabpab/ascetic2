<template>
    <div :class="contextMenuClassObject" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header context_menu__li_header_black">
                «{{ product.name }}»
            </li>
            <li @click="editProduct(product.id)" class="context_menu__li context_menu__li_black">
                Редактировать
            </li>
            <li @click="showProductPhotoManager(product)" class="context_menu__li context_menu__li_black">
                Фото изменить / добавить
            </li>
            <li class="context_menu__li context_menu__li_black" style="border: 0;"
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
        contextMenuClassObject() {
            return {
                'context_menu__wrapper context_menu__wrapper_black': true,
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
</script>
