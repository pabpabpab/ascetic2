<template>
    <div class="selectedCategories__wrapper product_filters__selectedCategories__wrapper">
        <p class="product_form__property_header">
            {{ header }}
        </p>

        <div @click.stop="changeCheckboxesVisibility()" class="selectedCategories bgWhite">
            <div class="selectedCategories__items">
                <p @click.stop class="selectedCategories__item show_block"
                   v-for="cat of selectedCats"
                   :key="cat.id">
                    {{ cat.name }}
                    <span class="selectedCategories__item__collapse_icon"
                          @click.stop="deleteSelectedItem(cat.id)">
                        &#215;
                    </span>
                </p>
            </div>
            <div
                class="selectedCategories__arrow"
                :class="{selectedCategories__arrow_up: checkboxesAreVisible}">
                &#709;
            </div>
        </div>


        <div @click.stop class="relative_checkboxes_wrapper" v-if="checkboxesAreVisible">
            <div class="absolute_checkboxes_list show_block">

                <p v-for="cat of localCategories" :key="cat.id" class="checkbox_input__item product_filters__checkbox_input__item tal">
                    <input class="checkbox_input"
                           type="checkbox"
                           :id="`cat${cat.id}`"
                           :value="cat.id"
                           v-model="search[entity + '_ids']">

                    <label class="checkbox_label"
                           :for="`cat${cat.id}`">
                        {{ cat.name }}
                    </label>
                </p>
            </div>
        </div>

    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "FiltersCheckboxesList",
    // пропс value, потому что в родителе v-model
    props: ['value', 'search', 'header', 'entity', 'closeListCmd'],
    data() {
        return {
            checkboxesVisibility: false,
        };
    },
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        localCategories() {
            const entityBook = {
                category: 'categories',
                material: 'materials',
                color: 'colors'
            }
            const entities = entityBook[this.entity];
            return this.categories[entities];
        },
        checkboxesAreVisible() {
            return this.checkboxesVisibility;
        },
        selectedCats() {
            if (!this.localCategories[0]) {
                return;
            }

            // событие input, потому что в родителе v-model
            this.$emit('input', this.search[this.entity + '_ids']);

            return this.search[this.entity + '_ids'].map((id) => {
                return {
                    id: id,
                    name: this.localCategories.find(item => item.id === id).name
                };
            }); // selected cats array
        },
    },
    methods: {
        changeCheckboxesVisibility() {
            const val = this.checkboxesVisibility;
            this.$emit('closeAllCheckboxesLists');
            setTimeout(() => {
                this.checkboxesVisibility = !val;
            }, 100);
        },
        deleteSelectedItem(val) {
            const search = this.search;
            const index = search[this.entity + '_ids'].findIndex(item => item === val);
            search[this.entity + '_ids'].splice(index, 1); // с позиции index удалить 1 элемент
            //this.search = { ...search };
        },
        closeThisCheckboxes() {
            this.checkboxesVisibility = false;
        },
    },
    watch:{
        closeListCmd(val) {
            if (!val) {
                return;
            }
            this.closeThisCheckboxes();
        },
    },

}
</script>
