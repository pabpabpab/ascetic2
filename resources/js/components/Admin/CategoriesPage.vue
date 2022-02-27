<template>
    <div class="show_block"
         @mousemove="myDragMove($event);"
         @mouseup="myDragStop({ event: $event, entity: $route.params.entity })">
        <div class="categories_header">
            <reload-icon></reload-icon>
            <h1 class="pd0 mb0 mauto">{{ getHeader }}</h1>
        </div>
        <div class="content_block content_block_of_categories">
            <component
                :is="currentAddingComponent"
                @change-adding-component="changeAddingComponent()">
            </component>
            <categories
                :collapseItemsCommand="collapseItemsCommand"
                @close-adding-component="closeAddingComponent()">
            </categories>
        </div>
    </div>
</template>

<script>
import AddCategoryButton from "./Categories/AddCategoryButton";
import CategoryForm from "./Categories/CategoryForm";
import Categories from "./Categories/Categories";
import ReloadIcon from "./Blocks/ReloadIcon";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoriesPage",
    components: {
        AddCategoryButton,
        CategoryForm,
        Categories,
        ReloadIcon,
    },
    data() {
        return {
            currentAddingComponent: 'AddCategoryButton',
            collapseItemsCommand: false,
            header: {
                categories: 'Категории товаров',
                materials: 'Материалы',
                colors: 'Цвета',
            },
        };
    },
    computed: {
        ...mapGetters('dragAndDropByY', [
            'currentIndex',
            'draggingOccurs',
        ]),
        getHeader() {
            const entity = this.$route.params.entity;
            return this.header[entity];
        },
    },
    methods: {
        ...mapActions('dragAndDropByY', [
            'myDragMove',
            'myDragStop',
        ]),
        changeAddingComponent() {
            if (this.currentAddingComponent === 'AddCategoryButton') {
                this.currentAddingComponent = 'CategoryForm';
                this.collapseItemsCommand = true;
                this.$store.dispatch('categories/cleanValidationErrors');
            } else {
                this.currentAddingComponent = 'AddCategoryButton';
                this.collapseItemsCommand = false;
            }
        },
        closeAddingComponent() {
            this.currentAddingComponent = 'AddCategoryButton';
            this.collapseItemsCommand = false;
        },
        collapseAll() {
            this.closeAddingComponent();
            this.collapseItemsCommand = false;
            setTimeout(() => {
                this.collapseItemsCommand = true;
            }, 100);
        },
    },
    watch: {
        draggingOccurs(value) {
            if (!value) {
                return;
            }
            this.collapseAll();
        },
    },
}
</script>
