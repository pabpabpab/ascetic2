<template>
    <div class="category_edit_form_item__border_top">
        <div class="category_form__div m20px_auto relative"
             :class="animationClass">
            <h1 class="tal">Редактировать «{{ categoryNameHeader }}»</h1>

            <div>
                <div class="display-flex">
                    <input type="text" maxlength="50"
                           placeholder="Введите название"
                           class="input_text input_text__category_form"
                           :class="{ 'input_alarm': isAlarmingInput('name') }"
                           v-model="localCategory.name"
                           @keyup="typeinValidation({
                                entity: $route.params.entity,
                                category: localCategory
                            })">

                    <button class="button__save_category"
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

            <div class='icon__collapse_category_form'
                 @click="changeItemComponent(category.id);">
                &#215;
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryItemEditForm",
    props: ['category'],
    data() {
        return {
            localCategory: {
                id: 0,
                name: '',
            },
            categoryNameHeader: '',
            animationClass: {
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
            this.animationClass = {
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
            this.categoryNameHeader = newServerCategory.name;
        },
    },

    mounted() {
        this.$store.dispatch('categories/cleanValidationErrors');
        if (this.category.id) {
            this.$store.dispatch(
                'categories/loadSingleCategory',
                {
                    entity: this.$route.params.entity,
                    categoryId: this.category.id
                 }
            );
        }
    },

}
</script>
