<template>
    <div class="categories__list">
        <component
            v-for="(category, index) of categories[$route.params.entity]"
            :key="category.id"
            :category="category"
            :index="index"
            :is="currentComponentsNames['id' + category.id]"
            @change-item-component="changeItemComponent">
        </component>

        <transition name="fade">
            <categories-context-menu
                v-if="showContextMenu('Categories')"
                :entity="$route.params.entity"
                @change-item-component="changeItemComponent">
            </categories-context-menu>
        </transition>

        <transition name="fade">
            <seo-manager entity="category" v-if="showSeoManager && $route.params.entity === 'categories'"></seo-manager>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CategoryItemEditForm from "./CategoryItemEditForm";
import CategoryItem from "./CategoryItem";
import CategoriesContextMenu from "../ContextMenu/CategoriesContextMenu";
import categoriesItemsMethods from './someMethods/categoriesItemsMethods';
import SeoManager from "../SeoManager/SeoManager";

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
            simpleListItemComponentName: 'CategoryItem',
            editionComponentName: 'CategoryItemEditForm',
        };
    },
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('seoManager', [
            'showSeoManager',
        ]),
        ...mapGetters('contextMenu', [
            'showContextMenu',
        ]),
    },
    methods: {
        ...mapActions([
            'closeContextMenu',
        ]),

        ...categoriesItemsMethods,

        _initComponentsNames(categories) {
            const temp = {};
            categories.forEach((item) => {
                temp['id' + item.id] = this.simpleListItemComponentName;
            });
            this.currentComponentsNames = {...temp};
        },
    },
    watch: {
        categories(newCategories) {
            const categories = [...newCategories[this.$route.params.entity]];
            this._initComponentsNames(categories);
        },
        collapseItemsCommand(newValue) {
            if (newValue === true) {
                this._collapseItems();
            }
        },
    },
    mounted() {
        this.$store.dispatch('categories/showCategories', this.$route.params.entity);
    },
}

</script>


