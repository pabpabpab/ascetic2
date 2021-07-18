<template>
    <div>
        <h1>Категории товаров</h1>
        <component
            :is="currentAddingComponent"
            @change-adding-component="changeAddingComponent()">
        </component>
        <categories
            :rollChildItems="rollChildItems"
            @close-adding-component="closeAddingComponent()">
        </categories>
    </div>
</template>

<script>
import AddCategoryButton from "./Products/AddCategoryButton";
import CategoryForm from "./Products/CategoryForm";
import Categories from "./Products/Categories";
import {mapActions} from "vuex";
export default {
    name: "CategoriesPage",
    components: {
        AddCategoryButton,
        Categories,
        CategoryForm,
    },
    data() {
        return {
            currentAddingComponent: 'AddCategoryButton',
            rollChildItems: false,
        };
    },
    methods: {
        changeAddingComponent() {
            if (this.currentAddingComponent === 'AddCategoryButton') {
                this.currentAddingComponent = 'CategoryForm';
                this.rollChildItems = true;
                this.$store.dispatch('categories/cleanValidationErrors');
            } else {
                this.currentAddingComponent = 'AddCategoryButton';
                this.rollChildItems = false;
            }
        },
        closeAddingComponent() {
            this.currentAddingComponent = 'AddCategoryButton';
            this.rollChildItems = false;
        },
    },
    /*
    computed: {
        currentAddingComponent() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
    */
}
</script>
