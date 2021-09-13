<template>
    <div class="categories">
        <component
            v-for="(category, index) of categories[$route.params.entity]"
            :key="category.id"
            :category="category"
            :index="index"
            :is="currentComponentsNames['id' + category.id]"
            @change-item-component="changeItemComponent">
        </component>

        <categories-context-menu
            v-if="showCategoriesContextMenu"
            :entity="$route.params.entity"
            @change-item-component="changeItemComponent">
        </categories-context-menu>

        <seo-manager entity="category" v-if="showSeoManager && $route.params.entity === 'categories'"></seo-manager>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CategoryItemEditForm from "./CategoryItemEditForm";
import CategoryItem from "./CategoryItem";
import CategoriesContextMenu from "../ContextMenu/CategoriesContextMenu";
import categoriesItemsMethods from './someMethods/categoriesItemsMethods';
import SeoManager from "./../Blocks/SeoManager";

export default {
    name: "Categories",
    components: {
        CategoryItem,
        CategoryItemEditForm,
        CategoriesContextMenu,
        SeoManager,
    },
    props: ['collapseItemsCommand'],
    data() {
        return {
            currentComponentsNames: {
                // id1: 'CategoryItem',
                // id2: 'CategoryItem',
                // id3: 'CategoryItem',
            },
            categoryComponentName: 'CategoryItem',
            editionComponentName: 'CategoryItemEditForm',
        };
    },
    methods: {
        ...mapActions([
            'closeContextMenu',
        ]),
        ...categoriesItemsMethods,
    },
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
        ...mapGetters('contextMenu', [
            'showCategoriesContextMenu',
        ]),
    },

    watch: {

        categories(newCategories, oldCategories) {
            const categories = [...newCategories[this.$route.params.entity]];
            this._initComponentsNames(categories);
        },

        collapseItemsCommand(newValue, oldValue) {
            if (newValue === true) {
                this._collapseItems();
            }
        },
    },

    mounted() {
        this.$store.dispatch('categories/loadCategories', this.$route.params.entity);
    },
}

</script>


