<template>
    <div class="category_form__wrapper mauto relative"
         :class="animationClass">
        <h1 class="tal">{{ getCreationHeader }}</h1>

        <div>
            <div class="input_text__container display_flex">
                <input class="input_text category_form__input_text"
                       :class="{ 'input_alarm': isAlarmingInput('name') }"
                       type="text" maxlength="50" placeholder=" "
                       v-model="localCategory.name"
                       @keyup="typeinValidation({
                            entity: $route.params.entity,
                            category: localCategory
                        })">

                <label class="input_text__label">{{ getLabelText }}</label>

                <button class="category_save_button"
                    @click.stop="saveCategory({
                        entity: $route.params.entity,
                        category: localCategory
                    })">
                    Ok
                </button>
            </div>

            <p class="validation_message_at_input"
               v-html="typeinErrors('name')">
            </p>
        </div>

        <div class='collapse_category_form__icon'
             @click="changeAddingComponent()">
            &#215;
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryForm",
    data() {
        return {
            creationHeader: {
                categories: 'Создать категорию товаров',
                materials: 'Добавить материал',
                colors: 'Добавить цвет',
            },
            labelText: {
                categories: 'Название категории',
                materials: 'Название материала',
                colors: 'Название цвета',
            },


            localCategory: {
                id: 0,
                name: '',
            },
            zeroCategory: {},
            animationClass: {
                'category_form__animation_open pd20 mt20': true,
                'category_form__animation_collapse': false
            },
        };
    },

    computed: {
        ...mapGetters('categories', [
            'singleCategoryFromServer',
        ]),
        ...mapGetters([
            'typeinErrors',
            'isAlarmingInput',
        ]),
        getCreationHeader() {
            return this.creationHeader[this.$route.params.entity];
        },
        getLabelText() {
            return this.labelText[this.$route.params.entity];
        },
    },

    methods: {
        ...mapActions('categories', [
            'saveCategory',
            'typeinValidation'
        ]),
        changeAddingComponent() {
            this.animationClass = {
                'category_form__animation_open': false,
                'category_form__animation_collapse': true
            };
            setTimeout(() => {
                this.$emit('change-adding-component');
            }, 300);
        },
    },


    watch: {
        singleCategoryFromServer(newServerCategory, oldServerCategory) {
            if (newServerCategory.name.length > 0) {
                this.localCategory = {...this.zeroCategory};
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
<h1 class="tal" v-if="action==='edit'">Редактировать наименование <br>«{{categoryNameHeader}}»</h1>
        <h1 class="tal" v-else>{{ getCreationHeader }}</h1>
 */
</script>

