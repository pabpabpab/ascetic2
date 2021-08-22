<template>
    <div :class="photoScreenClassObject">
        <div class="photo_management__content_wrapper">

            <div class="photo_management__content">
                <h1>Фото товара «{{ product.name }}» {{ product.price }} ₽</h1>
                <div class="photo_management__photos">
                    <photo-manager-item
                        v-for="(photoName, index) of product.photo_set"
                        :key="photoName"
                        :photoName="photoName"
                        :productId="product.id"
                        :length="product.photo_set.length"
                        :index="index">
                    </photo-manager-item>

                    <photos-context-menu
                        v-if="showPhotosContextMenu">
                    </photos-context-menu>
                </div>
            </div>


            <div class="photo_input__panel">
                <files-input
                    :key="resetFilesInputKey"
                    v-model="photos"
                    owner="ProductPhotoManager">
                </files-input>

                <div v-if="showButtonsPanel" class="send_cancel_buttons__panel">
                    <button class="button__save_product"
                            @click.stop="sendPhotos()">
                        Добавить
                    </button>

                    <div class='photo_management__collapse_icon'
                         @click="resetPhotos()">
                        &#215;
                    </div>
                </div>
            </div>

            <div class='photo_management__collapse_icon'
                 @click="closeProductPhotoManager()">
                &#215;
            </div>
        </div>
    </div>
</template>

<script>
import PhotoManagerItem from "./PhotoManagerItem";
import FilesInput from "./FilesInput";
import PhotosContextMenu from "./../ContextMenu/PhotosContextMenu";
import {mapActions, mapGetters} from "vuex";
export default {
    name: "ProductsPhotoManagement",
    components: {
        PhotoManagerItem,
        FilesInput,
        PhotosContextMenu,
    },
    data() {
        return {
            product: {
                id: 0,
                name: '',
                price: '',
                photo_set: []
            },
            photos: [],
            resetFilesInputKey: 0,
        };
    },
    computed: {
        ...mapGetters('products', [
            'enabledFadingCss',
            'singleProductFromServer'
        ]),
        photoScreenClassObject() {
            return {
                'photo_management__screen': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        },
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        ...mapGetters('contextMenu', [
            'showPhotosContextMenu',
        ]),
        showButtonsPanel() {
            return this.photos.length > 0;
        }
    },
    methods: {
        ...mapActions('products', [
            'closeProductPhotoManager',
            'addPhotos',
        ]),
        resetPhotos() {
            this.photos = [...[]];
            // изменение resetFilesInputKey заставит перерисоваться компонент <files-input>
            this.resetFilesInputKey++;
        },
        sendPhotos() {
            this.$store.dispatch('products/addPhotos', {
                productId: this.product.id,
                photos: this.photos
            }).then(
                () => this.resetPhotos()
            );
        },
    },

    watch:{
        singleProductFromServer(val) {
            if (!val) {
                return;
            }
            // console.log(val);
            const parameters = JSON.parse(val.product.parameters);
            this.product = {
                id: val.product.id,
                category_id: val.product.category_id,
                name: val.product.name,
                price: parameters.price,
                photo_set: JSON.parse(val.product.photo_set)
            }
        },
    },

    mounted() {
        this.$store.dispatch('updateCSRF', 5);
    },
}
</script>
