1<template>
    <div @click="closeAllCheckboxesLists()" class="show_block">


        <h1 v-if="action==='create'">Добавить товар</h1>

        <div class="content_block content_block__product_form">


            <p class="product_form__property_header mt20">Название товара</p>
            <div class="input_text__container">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('name') }"
                       type="text" maxlength="50"
                       placeholder=" "
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.name">

                <p class="validation_message_at_input"
                   v-html="typeinErrors('name')">
                </p>
            </div>

            <checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="localProduct.category_ids"
                :local-product="localProduct"
                entity="category"
                header="Категория"
                class="mt30">
            </checkboxes-list>

            <checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="localProduct.material_ids"
                :local-product="localProduct"
                entity="material"
                header="Материал"
                class="mt30">
            </checkboxes-list>

            <checkboxes-list
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
                :close-list-cmd="closeCheckboxesListsCmd"
                v-model="localProduct.color_ids"
                :local-product="localProduct"
                entity="color"
                header="Цвет"
                class="mt30">
            </checkboxes-list>


            <p class="product_form__property_header mt40">Описание товара</p>
            <div class="input_text__container">
                <textarea class="input_text input_textarea input_text__product_form"
                          :class="{ 'input_alarm': isAlarmingInput('description') }"
                          placeholder=" "
                          @keyup="typeinValidation(localProduct);"
                          @input="fitTextareaHeight($event);"
                          v-model="localProduct.description">
                </textarea>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('description')">
                </p>
            </div>


            <p class="product_form__property_header mt30">Цена товара</p>
            <div class="input_text__container">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('price') }"
                       type="text" maxlength="21"
                       placeholder=" "
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.price">

                <label class="input_text__label">в рублях</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('price')">
                </p>
            </div>


            <files-input
                v-if="action==='create'"
                v-model="photos"
                owner="ProductForm"
                class="mt30">
            </files-input>

            <button v-if="action==='create'" class="button__save_product mauto mt30"
                    @click.stop="saveProduct({localProduct, photos});closeAllCheckboxesLists();">
                Сохранить
            </button>


        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilesInput from "./FilesInput";
import CheckboxesList from "./CheckboxesList";
import _fitTextareaHeight from './functions/fitTextareaHeight';
import getFormattedPrice from './functions/getFormattedPrice';

export default {
    name: "ProductForm",
    components: {FilesInput, CheckboxesList},
    props: ['action', 'saveCmd'],
    data() {
        return {
            localProduct: {
                id: 0,
                name: '',
                price: '',
                description: '',
                category_ids: [],
                material_ids: [],
                color_ids: [],
            },
            photos: [],
            closeCheckboxesListsCmd: false,
        };
    },

    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters([
            'isAlarmingInput',
            'typeinErrors',
        ]),
        localPrice() {
            return this.localProduct.price;
        },
    },


    methods: {
        ...mapActions('products', [
            'saveProduct',
            'typeinValidation'
        ]),
        fitTextareaHeight(event) {
            _fitTextareaHeight(event);
        },
        setLocalProduct(product) {
            const parameters = JSON.parse(product.parameters);
            this.localProduct = {
                id: product.id,
                name: product.name,
                price: parameters.price,
                description: product.description.description,
                category_ids: parameters.categories.map((item) => item.id),
                material_ids: parameters.materials.map((item) => item.id),
                color_ids: parameters.colors.map((item) => item.id),
            }
        },
        closeAllCheckboxesLists() {
            this.closeCheckboxesListsCmd = true;
            setTimeout(() => {
                this.closeCheckboxesListsCmd = false;
            }, 100);
        },
    },

    watch:{
        localPrice(value) {
            this.localProduct.price = getFormattedPrice(value);
        },
        singleProductFromServer(val) {
            if (!val) {
                return;
            }
            this.setLocalProduct(val.product);
        },
        saveCmd(val) {
            if (!val) {
                return;
            }
            this.closeAllCheckboxesLists()
            this.$store.dispatch('products/saveProduct', {
                localProduct: this.localProduct,
                photos: this.photos
            });
        },
    },

    mounted() {
        this.$store.dispatch('resetTypeinErrors');
        this.$store.dispatch('categories/loadCategories', 'categories');
        this.$store.dispatch('categories/loadCategories', 'materials');
        this.$store.dispatch('categories/loadCategories', 'colors');
    },
}


</script>

