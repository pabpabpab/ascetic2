<template>
    <div class="show_block">


        <h1 v-if="action==='edit'">Редактировать товар <br>«{{productNameHeader}}»</h1>
        <h1 v-else>Добавить товар</h1>

        <div class="content_block content_block__product_form">




            <div class="input_text__container mt20">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('name') }"
                       type="text" maxlength="50"
                       placeholder=" "
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.name">

                <label class="input_text__label">Введите название товара</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('name')">
                </p>
            </div>




            <div class="input_text__container mt30">
                <select required
                    class="input_select input_text__product_form"
                    :class="{ 'input_alarm': isAlarmingInput('category_id') }"
                    @change="typeinValidation(localProduct)"
                    v-model="localProduct.category_id">

                    <option disabled></option>
                    <option
                        v-for="category of categories['categories']"
                        :key="category.id"
                        :value="category.id">
                        {{category.name}}
                    </option>
                </select>

                <label class="input_select__label">Выберите категорию</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('category_id')">
                </p>
            </div>


            <div class="materials_colors_block mt30">

                <div>
                    <p class="product_form__property_header">Материал</p>
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
                    <p class="validation_message_at_input mt10 ml_minus3"
                       v-html="typeinErrors('material_ids')">
                    </p>
                </div>


                <div>
                    <p class="product_form__property_header">Цвет</p>
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

                    <p class="validation_message_at_input mt10 ml_minus3"
                       v-html="typeinErrors('color_ids')">
                    </p>
                </div>

            </div>


            <div class="input_text__container mt40">
                <textarea class="input_text input_textarea input_text__product_form"
                    :class="{ 'input_alarm': isAlarmingInput('description') }"
                    :style="textarea.style"
                    placeholder=" "
                    @keyup="typeinValidation(localProduct);"
                    @input="fitTextareaHeight($event);"
                    v-model="localProduct.description">
                </textarea>

                <label class="input_text__label">Введите описание товара</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('description')">
                </p>
            </div>



            <div class="input_text__container mt30">
                <input class="input_text input_text__product_form"
                       :class="{ 'input_alarm': isAlarmingInput('price') }"
                       type="text" maxlength="21"
                       placeholder=" "
                       @keyup="typeinValidation(localProduct)"
                       v-model="localProduct.price">

                <label class="input_text__label">Введите цену товара (в рублях)</label>

                <p class="validation_message_at_input"
                   v-html="typeinErrors('price')">
                </p>
            </div>


            <files-input v-model="photos"></files-input>

            <button class="button__save_product mauto mt30"
                @click.stop="saveProduct({localProduct, photos})">
                Сохранить
            </button>


        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilesInput from "./FilesInput";

export default {
    name: "ProductForm",
    components: {FilesInput},
    data() {
        return {
            localProduct: {
                id: 0,
                category_id: 0,
                name: '',
                price: '',
                description: '',
                material_ids: [],
                color_ids: [],
            },
            photos: [],
            zeroProduct: {},
            action: 'create', // create/edit
            productNameHeader: '',
            animationClassObject: {
                'product_form__animation_open pd20 mt20': true,
                'product_form__animation_close': false
            },

            textarea: {
                style: {
                    // height: '100px'
                },
                prevLength: 0,
            }
        };
    },

    methods: {
        ...mapActions('products', [
            'saveProduct',
            'typeinValidation'
        ]),


        fitTextareaHeight(event) {
            if (event.target.scrollHeight > event.target.clientHeight) {
                this.textarea.prevLength = event.target.value.length;
                if (event.target.clientHeight > 500) {
                    return;
                }
                this._increaseTextareaHeight(event);
                return;
            }

            if (!this._hasDecreaseInTextareaLength(event)) {
                return;
            }

            this._resetTextareaHeight();

            setTimeout(() => {
                this.fitTextareaHeight(event);
            },10);
        },

        _increaseTextareaHeight(event) {
            const style = {
                height: event.target.scrollHeight + 20 + 'px'
            }
            this.textarea.style = { ...style };
        },

        _hasDecreaseInTextareaLength(event) {
            if (event.target.value.length / this.textarea.prevLength < 0.85) {
                this.textarea.prevLength = event.target.value.length;
                return true;
            }
            return false;
        },

        _resetTextareaHeight() {
            const style = {};
            this.textarea.style = { ...style };
        },
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

    watch:{
        localPrice(value) {
            this.$store.dispatch('products/formatPrice', value).then((data) => {
                this.localProduct.price = data;
            });
            //this.localProduct.price = this.$options.filters.priceFormat(value);
        },
    },

    mounted() {
        // в этом хуке localProduct нулевая
        // скопировать для reset'а в будущем при create
        this.zeroProduct = {...this.localProduct};
        this.$store.dispatch('categories/loadCategories', 'categories');
        this.$store.dispatch('categories/loadCategories', 'materials');
        this.$store.dispatch('categories/loadCategories', 'colors');
    },
}
</script>
