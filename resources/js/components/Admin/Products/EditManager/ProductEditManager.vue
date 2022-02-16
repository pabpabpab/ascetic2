<template>
    <div class="edit_manager__screen">

        <div class="edit_manager__content_wrapper">

            <div class="edit_manager__header">
                <p v-html="getHeaderPhoto"></p>
                <h1>{{ getHeader }}</h1>
            </div>

            <div class="edit_manager__content pdt20 pdb20">
                <product-form action="edit" :saveCmd="saveCmd"></product-form>
            </div>

            <div class="edit_manager__button_panel">
                <button class="edit_manager__save_button"
                        @click.stop="save()">
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

export default {
    name: "ProductEditManager",
    components: {
        ProductForm: () => import('../ProductForm/ProductForm.vue'),
    },
    data() {
        return {
            photoSizeIndex: 2,
            saveCmd: false,
        };
    },
    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),

        noData() {
            // js-оператор ?.
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

            const productName = this.singleProductFromServer.product.name;
            const productPrice = this.singleProductFromServer.product.price;

            return `Товар «${productName}» ${productPrice} ₽`;
        },

        getHeaderPhoto() {
            if (this.noData) {
                return '';
            }
            if (!this.singleProductFromServer.product.photo_set) {
                return '';
            }

            const photoInfoArr = JSON.parse(this.singleProductFromServer.product.photo_set);

            if (!photoInfoArr) {
                return '';
            }

            if (photoInfoArr.length === 0) {
                return '';
            }

            const photoName = photoInfoArr[0];
            const folderName = `/storage/${this.imgFolderPrefix}${this.photoSizeIndex}`;
            const fileNamePrefix = `${this.singleProductFromServer.product.id}s${this.photoSizeIndex}-`;

            return `<img alt=""
                        src="${folderName}/${fileNamePrefix}${photoName}"
                        class="photo__size${this.photoSizeIndex} edit_manager__header__photo" />`;
        },

    },
    methods: {
        ...mapActions('products', [
            'closeProductEditManager',
        ]),
        save() {
            this.saveCmd = true;

            setTimeout(() => {
                this.saveCmd = false;
            }, 100);
        },
    },

}
</script>


