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
            @change-item-component="changeItemComponent">
        </categories-context-menu>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CategoryItemEditForm from "./CategoryItemEditForm";
import CategoryItem from "./CategoryItem";
import CategoriesContextMenu from "../ContextMenu/CategoriesContextMenu";

export default {
    name: "Categories",
    components: {
        CategoryItem,
        CategoryItemEditForm,
        CategoriesContextMenu,
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
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('contextMenu', [
            'showCategoriesContextMenu',
        ]),
    },
    methods: {
        ...mapActions([
            'closeContextMenu',
        ]),

        changeItemComponent(itemId) {
            this.closeContextMenu();
            this.$emit('close-adding-component');

            this._getNewComponentName(itemId).then((newName) => {
                this._collapseItems();
                const temp = {...this.currentComponentsNames};
                temp['id' + itemId] = newName;
                this.currentComponentsNames = {...temp};
            });
        },

        async _getNewComponentName(itemId) {
            if (this.currentComponentsNames['id' + itemId] === this.categoryComponentName) {
                return this.editionComponentName;
            }
            return this.categoryComponentName;
        },

        _collapseItems() {
            const temp = {...this.currentComponentsNames};
            for (let key in temp) {
                temp[key] = this.categoryComponentName;
            }
            this.currentComponentsNames = {...temp};
        },

        _initComponentsNames(categories) {
            const temp = {};
            categories.forEach((item) => {
                temp['id' + item.id] = this.categoryComponentName;
            });
            this.currentComponentsNames = {...temp};
        },

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


