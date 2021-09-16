<template>
    <div :class="editScreenClass">

        <div class="edit_manager__content_wrapper">

            <div class="edit_manager__header">
                <img  alt="" :src="photoSrc" :class="imgClass" class="edit_manager__header__photo"/>
                <h1>{{ getHeader }}</h1>
            </div>

            <div class="edit_manager__content pdt20 pdb20">
                <product-form action="edit" :saveCmd="saveCmd"></product-form>
            </div>


            <div class="edit_manager__button_panel">
                <button class="edit_manager__save_button"
                        @click="save()">
                    Сохранить
                </button>
            </div>

            <div class='edit_manager__collapse_icon'
                 @click="closeProductEditManager()">
                &#215;
            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import _fitTextareaHeight from './functions/fitTextareaHeight';
//import getFormattedPrice from "./functions/getFormattedPrice";

export default {
    name: "EditManager",
    components: {
        ProductForm: () => import('./ProductForm.vue'),
    },
    data() {
        return {
            photoSizeIndex: 2,
            saveCmd: false
            //localProduct: {},
            //photos: [],
        };
    },
    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
            'enabledFadingCss',
        ]),

        editScreenClass() {
            return {
                'edit_manager__screen': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        },

        ...mapGetters([
            'imgFolderPrefix',
        ]),

        noData() {

            const product = this.singleProductFromServer?.product;

            if (!product) {
                return true;
            }

            return false;
        },

        getHeader() {
            if (this.noData) {
                return '';
            }

            // js-оператор ?.
            const productName = this.singleProductFromServer.product.name;
            const productPrice = this.singleProductFromServer.product.price;

            return `Товар «${productName}» ${productPrice} ₽`;
        },








        photoSrc() {
            if (this.noData) {
                return '';
            }
            return `${this.folderName}/${this.fileNamePrefix}${this.photoName}`;
        },
        photoName() {
            return JSON.parse(this.singleProductFromServer.product.photo_set)[0];
        },
        folderName() {
            return `/storage/${this.imgFolderPrefix}${this.photoSizeIndex}`;
        },
        fileNamePrefix() {
            return  `${this.singleProductFromServer.product.id}s${this.photoSizeIndex}-`;
        },
        imgClass() {
            return `photo__size${this.photoSizeIndex}`;
        },






    },
    methods: {
        ...mapActions('products', [
            'closeProductEditManager',
            //'saveProduct',
        ]),
        fitTextareaHeight(event) {
            _fitTextareaHeight(event);
        },
        save() {
            this.saveCmd = true;

            setTimeout(() => {
                this.saveCmd = false;
            }, 100);
        },
    },

}
</script>


