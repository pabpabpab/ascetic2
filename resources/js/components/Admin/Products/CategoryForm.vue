<template>
    <div class="category_form__div mauto relative"
         :class="animationClassObject">
        <h1 class="tal" v-if="action==='edit'">Редактировать категорию <br>«{{formHeaderCategoryName}}»</h1>
        <h1 class="tal" v-else>Создать категорию товаров</h1>

        <div>
            <div class="input__wrapper display-flex">
                <p class="input__validation_message"
                   v-html="typeinErrors('name')">
                </p>
                <label>
                    <input type="text" maxlength="50"
                         placeholder="Ведите название категории"
                         class="input__text"
                         :class="{ 'input_alarm': isAlarmingInput('name') }"
                         @keyup="typeinValidation(localCategory)"
                         v-model="localCategory.name">
                </label>
                <button @click="saveCategory(localCategory)" class="button__save_category">
                    Ok
                </button>
            </div>
        </div>


        <div class='icon__collapse_form' v-if="action==='edit'">
            &#8211;
        </div>
        <div class='icon__collapse_form' v-else
             @click="changeAddingComponent()">
            &#8211;
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryForm",
    props: ['categoryId'],
    data() {
        return {
            localCategory: {
                id: 0,
                name: '',
                //description: '',
            },
            zeroCategory: {},
            action: 'create', // create/edit
            formHeaderCategoryName: '',
            animationClassObject: {
                'category_form__animation_open pd20 mt20': true,
                'category_form__animation_close': false
            },
        };
    },
    methods: {
        ...mapActions('categories', [
            'saveCategory',
            'typeinValidation'
        ]),
        changeAddingComponent() {
            this.animationClassObject = {
                'category_form__animation_open': false,
                'category_form__animation_close': true
            };
            setTimeout(() => {
                this.$emit('change-adding-component');
            }, 300);
        },
    },
    computed: {
        ...mapGetters('categories', [
            'singleCategoryFromServer',
        ]),
        ...mapGetters([
            'typeinErrors',
            'isAlarmingInput',
        ]),
    },

    watch: {
        categoryId() {
            // при переключении маршрутов (страниц) сбросить ошибки
            this.$store.dispatch('categories/cleanValidationErrors');


            // categoryId в props
            if (this.categoryId > 0) {
                this.action = 'edit';
                this.$store.dispatch('categories/loadSingleCategory', this.categoryId);
            } else {
                this.action = 'create';
                this.localCategory = {...this.zeroCategory};
                this.formHeaderCategoryName = '';
            }
        },

        singleCategoryFromServer(newServerCategory, oldServerCategory) {
            // при редактировании категории
            if (this.action === 'edit')  {
                this.localCategory = newServerCategory;
                this.formHeaderCategoryName = newServerCategory.name;
                return;
            }

            // при создании новой категории (обнулить ввод после save)
            if (this.action === 'create')  {
                if (newServerCategory.name.length > 0) {
                    this.localCategory = {...this.zeroCategory};
                }
            }
        },
    },

    mounted() {
        // в этом хуке localCategory нулевая
        // скопировать для reset'а в будущем при create
        this.zeroCategory = {...this.localCategory};
    },
}



/*
 <div class="input__wrapper">
            <label>
                <input type="text" maxlength="50"
                       placeholder="Ведите описание категории"
                       class="input__text"
                       :class="{ 'input_alarm': isAlarmingInput('description') }"
                       @keyup="typeinValidation(localCategory)"
                       v-model="localCategory.description">
            </label>
            <p class="input__validation_message"
               v-html="typeinValidationErrors('description')">
            </p>
        </div>
 */
</script>

