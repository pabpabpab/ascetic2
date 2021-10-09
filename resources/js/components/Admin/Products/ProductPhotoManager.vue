<template>
    <div class="photo_manager__screen"
         @mousemove.stop="myDragMove({event: $event, entity: 'Product'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: -1, entity: 'Photo' })">

        <div class="photo_manager__content_wrapper">

            <div class="photo_manager__top_row_container_for_collapse_icon">
                <div class='photo_manager__collapse_icon photo_manager__collapse_icon_main'
                     @click="closeProductPhotoManager()">
                    &#215;
                </div>
            </div>

            <div class="photo_manager__content">
                <h1>Фото товара «{{ product.name }}» {{ product.price }} ₽</h1>
                <div class="photo_manager__photos">
                    <photo-manager-item
                        v-for="(photoName, photoIndex) of product.photo_set"
                        :key="photoName"
                        :photoName="photoName"
                        :productId="product.id"
                        :length="product.photo_set.length"
                        :photoIndex="photoIndex">
                    </photo-manager-item>


                    <transition name="fade">
                        <photos-context-menu v-if="showPhotosContextMenu"></photos-context-menu>
                    </transition>


                    <transition name="fade">
                        <seo-manager entity="photo" v-if="showSeoManager"></seo-manager>
                    </transition>
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

                    <div class='photo_manager__collapse_icon photo_manager__collapse_icon_for_photo_input_panel'
                         @click="resetPhotos()">
                        &#215;
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import PhotoManagerItem from "./PhotoManagerItem";
import FilesInput from "./FilesInput";
import PhotosContextMenu from "./../ContextMenu/PhotosContextMenu";
import SeoManager from "./../Blocks/SeoManager";

import {mapActions, mapGetters} from "vuex";
export default {
    name: "ProductsPhotoManagement",
    components: {
        PhotoManagerItem,
        FilesInput,
        PhotosContextMenu,
        SeoManager,
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
            'singleProductFromServer'
        ]),
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        ...mapGetters('contextMenu', [
            'showPhotosContextMenu',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
        showButtonsPanel() {
            return this.photos.length > 0;
        },
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
        ...mapActions('dragAndDropInAbsDiv', [
            'myDragMove',
            'myDragStop',
        ]),
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

    /*
    mounted() {
        this.$store.dispatch('updateCSRF', 5);
    },
    */
}
</script>
