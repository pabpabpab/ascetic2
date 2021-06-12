<template>
    <div class="category_form__div mauto relative"
         :class="animationClassObject">
        <h1 class="tal">Редактировать категорию <br>«{{formHeaderCategoryName}}»</h1>

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


        <div class='icon__collapse_form'
             @click="changeItemComponent(category.id);">
            &#8211;
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "EditCategoryItemForm",
    props: ['category'],
    data() {
        return {
            localCategory: {
                id: 0,
                name: '',
            },
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
        changeItemComponent(itemId) {
            this.animationClassObject = {
                'category_form__animation_open': false,
                'category_form__animation_close': true
            };
            setTimeout(() => {
                this.$emit('change-item-component', itemId);
            }, 300);
        },
    },
    computed: {
        ...mapGetters('categories', [
            'singleCategoryFromServer',
        ]),
        ...mapGetters([
            'isAlarmingInput',
            'typeinErrors',
        ]),
    },

    watch: {
        singleCategoryFromServer(newServerCategory, oldServerCategory) {
            this.localCategory = {...newServerCategory};
            this.formHeaderCategoryName = newServerCategory.name;
        },
    },

    mounted() {
        this.$store.dispatch('categories/cleanValidationErrors');
        if (this.category.id) {
            this.$store.dispatch('categories/loadSingleCategory', this.category.id);
        }
    }

}
</script>
