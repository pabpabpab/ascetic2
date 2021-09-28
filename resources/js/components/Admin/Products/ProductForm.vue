<template>
    <div class="show_block">


        <h1 v-if="action==='create'">Добавить товар</h1>

        <div @click.self="closeAllCheckboxesLists()" class="content_block content_block__product_form">


            <p @click="closeAllCheckboxesLists()" class="product_form__property_header mt20">Название товара</p>
            <div class="input_text__container">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('name') }"
                       type="text" maxlength="50"
                       placeholder=" "
                       @click="closeAllCheckboxesLists()"
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.name">

                <p class="validation_message_at_input"
                   v-html="typeinErrors('name')">
                </p>
            </div>



            <div class="selectedCategories__wrapper mt30">
                <p @click="closeAllCheckboxesLists()" class="product_form__property_header">Категория</p>

                <div class="selectedCategories">
                    <div @click.self="changeCheckboxesVisibility('categories')" class="selectedCategories__items">
                        <p class="selectedCategories__item show_block"
                           v-for="cat of selectedCats('category')"
                           :key="cat.id">
                            {{ cat.name }}
                            <span class="selectedCategories__item__collapse_icon"
                                  @click.stop="deleteSelectedItem('category_ids', cat.id)">
                                &#215;
                            </span>
                        </p>
                    </div>
                    <div @click="changeCheckboxesVisibility('categories')" class="selectedCategories__arrow">
                        &#709;
                    </div>
                </div>


                <div class="relative_checkboxes_wrapper" v-if="getCheckboxesVisibility('categories')">
                    <div class="absolute_checkboxes_list show_block">
                        <p v-for="category of categories['categories']" :key="category.id" class="checkbox_input__item tal">

                            <input class="checkbox_input"
                                   type="checkbox"
                                   :id="`category${category.id}`"
                                   :value="category.id"
                                   @change="typeinValidation(localProduct)"
                                   v-model="localProduct.category_ids">

                            <label class="checkbox_label"
                                   :for="`category${category.id}`">
                                {{ category.name }}
                            </label>

                        </p>
                    </div>
                </div>

                <p class="validation_message_at_input ml_minus3"
                   v-html="typeinErrors('category_ids')">
                </p>

            </div>





                <div class="selectedCategories__wrapper mt30">
                    <p @click="closeAllCheckboxesLists()" class="product_form__property_header">Материал</p>


                    <div class="selectedCategories">
                        <div @click.self="changeCheckboxesVisibility('materials')" class="selectedCategories__items">
                            <p class="selectedCategories__item"
                               v-for="cat of selectedCats('material')"
                               :key="cat.id">
                                {{ cat.name }}
                                <span class="selectedCategories__item__collapse_icon"
                                      @click.stop = "deleteSelectedItem('material_ids', cat.id)">
                                    &#215;
                                </span>
                            </p>
                        </div>
                        <div @click="changeCheckboxesVisibility('materials')" class="selectedCategories__arrow">
                            &#709;
                        </div>
                    </div>



                    <div class="relative_checkboxes_wrapper" v-if="getCheckboxesVisibility('materials')">
                        <div class="absolute_checkboxes_list show_block">
                            <p v-for="material of categories['materials']" :key="material.id" class="checkbox_input__item tal">

                                <input class="checkbox_input"
                                       type="checkbox"
                                       :id="`material${material.id}`"
                                       :value="material.id"
                                       @change="typeinValidation(localProduct)"
                                       v-model="localProduct.material_ids">
                                <label class="checkbox_label"
                                       :for="`material${material.id}`">
                                    {{ material.name }}
                                </label>
                            </p>
                        </div>
                    </div>

                    <p class="validation_message_at_input ml_minus3"
                       v-html="typeinErrors('material_ids')">
                    </p>
                </div>




                <div class="selectedCategories__wrapper mt30">
                    <p @click="closeAllCheckboxesLists()" class="product_form__property_header">Цвет</p>

                    <div class="selectedCategories">
                        <div @click.self="changeCheckboxesVisibility('colors')" class="selectedCategories__items">
                            <p class="selectedCategories__item"
                               v-for="cat of selectedCats('color')"
                               :key="cat.id">
                                {{ cat.name }}
                                <span class="selectedCategories__item__collapse_icon"
                                      @click.stop = "deleteSelectedItem('color_ids', cat.id)">
                                    &#215;
                                </span>
                            </p>
                        </div>
                        <div @click="changeCheckboxesVisibility('colors')" class="selectedCategories__arrow">
                            &#709;
                        </div>
                    </div>


                    <div class="relative_checkboxes_wrapper" v-if="getCheckboxesVisibility('colors')">
                        <div class="absolute_checkboxes_list show_block">
                            <p v-for="color of categories['colors']" :key="color.id" class="checkbox_input__item tal">

                                <input class="checkbox_input"
                                       type="checkbox"
                                       :id="`color${color.id}`"
                                       :value="color.id"
                                       @change="typeinValidation(localProduct)"
                                       v-model="localProduct.color_ids">

                                <label class="checkbox_label"
                                       :for="`color${color.id}`">
                                    {{ color.name }}
                                </label>
                            </p>
                        </div>
                    </div>

                    <p class="validation_message_at_input ml_minus3"
                       v-html="typeinErrors('color_ids')">
                    </p>
                </div>



            <p @click="closeAllCheckboxesLists()" class="product_form__property_header mt40">Описание товара</p>
            <div class="input_text__container">
                <textarea class="input_text input_textarea input_text__product_form"
                    :class="{ 'input_alarm': isAlarmingInput('description') }"
                    placeholder=" "
                    @click="closeAllCheckboxesLists()"
                    @keyup="typeinValidation(localProduct);"
                    @input="fitTextareaHeight($event);"
                    v-model="localProduct.description">
                </textarea>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('description')">
                </p>
            </div>


            <p @click="closeAllCheckboxesLists()" class="product_form__property_header mt30">Цена товара</p>
            <div class="input_text__container">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('price') }"
                       type="text" maxlength="21"
                       placeholder=" "
                       @click="closeAllCheckboxesLists()"
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.price">

                <label class="input_text__label">в рублях</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('price')">
                </p>
            </div>


            <files-input
                @closeAllCheckboxesLists="closeAllCheckboxesLists()"
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
import _fitTextareaHeight from './functions/fitTextareaHeight';
import getFormattedPrice from './functions/getFormattedPrice';

export default {
    name: "ProductForm",
    components: {FilesInput},
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

            checkboxesDivVisibility: {
                categories: false,
                materials: false,
                colors: false,
            }
        };
    },

    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters('categories', [
            'categories',
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
        selectedCats(prop) {
            const propsBook = {
                category: 'categories',
                material: 'materials',
                color: 'colors',
            }
            const property = propsBook[prop];
            const catsBook = this.categories[property];
            if (!catsBook[0]) {
                return;
            }
            return this.localProduct[prop + '_ids'].map((id) => {
                let bookItem = catsBook.find(item => item.id === id);
                return {
                    id: id,
                    name: bookItem.name
                };
            }); // selected cats array
        },
        deleteSelectedItem(prop, val) {
            const product = this.localProduct;
            const index = product[prop].findIndex(item => item === val);
            product[prop].splice(index, 1); // с позиции index удалить 1 элемент
            this.localProduct = product;
        },
        getCheckboxesVisibility(entity) {
            return this.checkboxesDivVisibility[entity];
        },
        changeCheckboxesVisibility(entity) {
            const val = this.checkboxesDivVisibility[entity];
            this.closeAllCheckboxesLists();
            this.checkboxesDivVisibility[entity] = !val;
        },
        closeAllCheckboxesLists() {
            const temp = {...this.checkboxesDivVisibility};
            for (let key in temp) {
                temp[key] = false;
            }
            this.checkboxesDivVisibility = {...temp};
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
