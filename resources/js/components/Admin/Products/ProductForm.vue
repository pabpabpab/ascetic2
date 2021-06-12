<template>
    <div class="product_form__div mauto"
         :class="animationClassObject">
        <h1 class="tal" v-if="action==='edit'">Редактировать товар <br>«{{formHeaderProductName}}»</h1>
        <h1 class="tal" v-else>Добавить товар</h1>

        <div>
            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('category_id')">
                </p>
                <label>
                    <select
                        class="input__text__product"
                        :class="{ 'input_alarm': isAlarmingInput('category_id') }"
                        @change="typeinValidation(localProduct)"
                        v-model="localProduct.category_id">
                        <option disabled value="">Выберите категорию</option>
                        <option
                            v-for="category of categories"
                            :key="category.id"
                            :value="category.id">
                            {{category.name}}
                        </option>
                    </select>
                </label>
            </div>


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('name')">
                </p>
                <label>
                    <input type="text" maxlength="50"
                           placeholder="Ведите название товара"
                           class="input__text__product"
                           :class="{ 'input_alarm': isAlarmingInput('name') }"
                           @keyup="typeinValidation(localProduct)"
                           v-model="localProduct.name">
                </label>
            </div>


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('material_ids')">
                </p>

                <p class="tal">Материал</p>
                <p v-for="material of materials" :key="material.id" class="tal">
                    <input type="checkbox"
                           :id="`material${material.id}`"
                           :value="material.id"
                           @change="typeinValidation(localProduct)"
                           v-model="localProduct.material_ids">
                    <label :for="`material${material.id}`">{{material.name}}</label>
                </p>
            </div>


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('color_ids')">
                </p>

                <p class="tal">Цвет</p>
                <p v-for="color of colors" :key="color.id" class="tal">
                    <input type="checkbox"
                           :id="`color${color.id}`"
                           :value="color.id"
                           @change="typeinValidation(localProduct)"
                           v-model="localProduct.color_ids">
                    <label :for="`color${color.id}`">{{color.name}}</label>
                </p>
            </div>




            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('description')">
                </p>
                <label>
                    <textarea
                        placeholder="Введите описание товара"
                        class="input__text__product input__textarea"
                        :class="{ 'input_alarm': isAlarmingInput('description') }"
                        @keyup="typeinValidation(localProduct)"
                        v-model="localProduct.description">
                    </textarea>
                </label>
            </div>


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('price')">
                </p>
                <label>
                    <input type="text" maxlength="21"
                           placeholder="Ведите цену товара"
                           class="input__text__product"
                           :class="{ 'input_alarm': isAlarmingInput('price') }"
                           @keyup="typeinValidation(localProduct);"
                           v-model="localProduct.price">
                </label>
            </div>

            <files-input v-model="photos"></files-input>

            <button @click="saveProduct({localProduct, photos})" class="button__save_product mauto">
                Ok
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
            formHeaderProductName: '',
            animationClassObject: {
                'product_form__animation_open pd20 mt20': true,
                'product_form__animation_close': false
            },
        };
    },

    methods: {
        ...mapActions('products', [
            'saveProduct',
            'typeinValidation'
        ]),
    },

    computed: {
        ...mapGetters('products', [
            'singleProductFromServer',
        ]),
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('materials', [
            'materials',
        ]),
        ...mapGetters('colors', [
            'colors',
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
        this.$store.dispatch('categories/loadCategories');
        this.$store.dispatch('materials/loadMaterials');
        this.$store.dispatch('colors/loadColors');
    },
}
//this.nonGraphicNames = [];
//this.graphicSrc = [];
/*


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('material_id')">
                </p>
                <label>
                    <select multiple
                        class="input__text__product"
                        :class="{ 'input_alarm': isAlarmingInput('material_id') }"
                        v-model="localProduct.material_id">
                        <option disabled value="">Укажите материал</option>
                        <option
                            v-for="material of materials"
                            :key="material.id"
                            :value="material.id">
                            {{material.name}}
                        </option>
                    </select>
                </label>
            </div>





            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('color_id')">
                </p>
                <label>
                    <select multiple
                        class="input__text__product"
                        :class="{ 'input_alarm': isAlarmingInput('color_id') }"
                        v-model="localProduct.color_id">
                        <option disabled value="">Укажите цвет</option>
                        <option
                            v-for="color of colors"
                            :key="color.id"
                            :value="color.id">
                            {{color.name}}
                        </option>
                    </select>
                </label>
            </div>





let photoCounter = 0;
for (let i = 0; i < this.photos.length; i++) {
    const photo = this.photos[i];

    if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
        this.nonGraphicNames.push({
            name: photo.name,
            index: i
        });
        photoCounter++;
        continue;
    }

    const reader = new FileReader();
    reader.onload = () => {
        this.graphicSrc.push({
            url: reader.result,
            index: i
        });
    }
    reader.readAsDataURL(photo);
    photoCounter++;
}*/
</script>
