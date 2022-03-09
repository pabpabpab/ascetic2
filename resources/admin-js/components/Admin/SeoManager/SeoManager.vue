<template>
    <div class="seo_manager__screen">

        <div :class="contentWrapperClass">

            <div :title="getHeaderHint" class="seo_manager__header">
                <p v-if="entity !== 'category'" v-html="getHeaderPhoto"></p>
                <h1>{{ getHeader }}</h1>
            </div>

            <div class="seo_manager__content">

                <div v-if="entity === 'photo'">
                    <label class="seo_manager__input_label">{{getAltInputLabel}}</label>
                    <textarea class="seo_manager__input_textarea seo_manager__input_textarea_alt"
                              placeholder=" "
                              @click="fitTextareaHeight($event);"
                              @input="fitTextareaHeight($event);"
                              v-model="localData.imgAlt">
                    </textarea>
                </div>

                <label class="seo_manager__input_label">{{getTitleInputLabel}}</label>
                <textarea class="seo_manager__input_textarea seo_manager__input_textarea_title"
                          placeholder=" "
                          @click="fitTextareaHeight($event);"
                          @input="fitTextareaHeight($event);"
                          v-model="localData.pageTitle">
                </textarea>

                <label class="seo_manager__input_label">{{getDescriptionInputLabel}}</label>
                <textarea class="seo_manager__input_textarea seo_manager__input_textarea_description"
                          placeholder=" "
                          @click="fitTextareaHeight($event);"
                          @input="fitTextareaHeight($event);"
                          v-model="localData.pageDescription">
                </textarea>

            </div>


            <div class="seo_manager__button_panel">
                <button class="seo_manager__save_button"
                            @click.stop="saveSeoData({entity: entity, data: localData})">
                        Сохранить
                </button>
            </div>

            <div class='seo_manager__collapse_icon'
                 @click="closeSeoManager()">
                &#215;
            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import _fitTextareaHeight from '../Products/functions/fitTextareaHeight';

export default {
    name: "SeoManager",
    props: ['entity'],
    data() {
        return {
            serverData: {

            },
            photoSizeIndex: 2,
            localData: {
                entityId: 0,
                pageTitle: '',
                pageDescription: '',
                imgAlt: '',
                photoName: '',
            },
        };
    },
    computed: {
        ...mapGetters('seoManager', [
            'seoData',
        ]),

        contentWrapperClass() {
            return this.entity === 'photo'
                ? 'seo_manager__content_wrapper seo_manager__content_wrapper__from_photo_manager'
                : 'seo_manager__content_wrapper';
        },

        ...mapGetters([
            'imgFolderPrefix',
        ]),

        serverSeoDataValue() {
            return this.seoData(this.entity);
        },

        noData() {
            return Object.keys(this.serverData).length === 0;
        },

        getHeader() {
            if (this.noData) {
                return '';
            }

            // js-оператор ?.
            const categoryName = this.serverData.category?.name;
            const productName = this.serverData.product?.name;
            const productPrice = this.serverData.product?.price;

            const header = {
                category: `Категория «${categoryName}»`,
                product: `Товар «${productName}» ${productPrice} ₽`,
                photo: `Фото товара «${productName}» ${productPrice} ₽`,
            };

            return header[this.entity];
        },

        getHeaderHint() {
            if (this.noData) {
                return '';
            }

            // js-оператор ?.
            const categoryDescription = '';
            const productDescription = this.serverData.product?.description?.description;

            const headerHint = {
                category: `${categoryDescription}`,
                product: `${productDescription}`,
                photo: `${productDescription}`,
            };

            return headerHint[this.entity];
        },


        getDescriptionInputLabel() {
            const labelText = {
                category: `Description страницы этой категории товаров`,
                product: `Description страницы этого товара`,
                photo: `Description страницы этого фото`,
            };
            return labelText[this.entity];
        },

        getTitleInputLabel() {
            const labelText = {
                category: `Title страницы этой категории товаров`,
                product: `Title страницы этого товара`,
                photo: `Title страницы этого фото`,
            };
            return labelText[this.entity];
        },

        getAltInputLabel() {
            const labelText = {
                category: ``,
                product: ``,
                photo: `Alt-атрибут этого фото`,
            };
            return labelText[this.entity];
        },

        getHeaderPhoto() {
            if (this.noData) {
                return '';
            }

            const photoNameBook = {
                category: '',
                product: JSON.parse(this.serverData.product.photo_set) ? JSON.parse(this.serverData.product.photo_set)[0] : '',
                photo: this.localData.photoName ?? '',
            };
            const photoName = photoNameBook[this.entity];

            if (!photoName) {
                return '';
            }

            const folderName = `/storage/${this.imgFolderPrefix}${this.photoSizeIndex}`;
            const fileNamePrefix = `${this.serverData.product.id}s${this.photoSizeIndex}-`;

            return `<img alt=""
                        src="${folderName}/${fileNamePrefix}${photoName}"
                        class="photo_size${this.photoSizeIndex} seo_manager__header__photo" />`;
        },

    },
    methods: {
        ...mapActions('seoManager', [
            'closeSeoManager',
            'saveSeoData',
        ]),
        fitTextareaHeight(event) {
            _fitTextareaHeight(event);
        },
    },
    watch: {
        serverSeoDataValue(val) {
            if (Object.keys(val).length === 0) {
                return;
            }
            this.serverData = { ...val };

            const entityId = {
                category: val.category?.id,
                product: val.product?.id,
                photo: val.product?.id,
            };
            this.localData.entityId = entityId[this.entity];


            this.localData.pageTitle = val?.seo?.page_title;
            this.localData.pageDescription = val?.seo?.page_description;
            this.localData.imgAlt = val?.seo?.alt_text;

            this.localData.photoName = val?.photoName;
        },
    },

}
</script>

