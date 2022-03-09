<template>
    <div ref="cat" class="category_item"
         :class="[draggedItemClass, beneathDraggedItemClass]"
         :style="{
                'top': topByIndex(index),
            }"
         @mousedown="myDragStart({index: index, event: $event})">

        <div class="category_item__content">

            <span
                @click.stop="showContextMenu({
                    event: $event,
                    target: 'Categories',
                    data: {
                        category: category,
                        currentListIndex: index,
                        lastListIndex: lastListIndex
                    }
                })"
                class="context_menu__icon_category">
                &#8942;
            </span>

            <div class="category_item__name">
                <router-link
                    :to="{
                        name: 'ProductsByCategory',
                        params: {
                            categoryEntity: singularEntityName,
                            slug: category.slug,
                            categoryId: category.id,
                            categoryName: category.name,
                        }
                    }" class="category_item__name__link">
                    {{ category.name }}
                </router-link>
            </div>

            <router-link
                :to="{
                    name: 'ProductsByCategory',
                    params: {
                        categoryEntity: singularEntityName,
                        slug: category.slug,
                        categoryId: category.id,
                        categoryName: category.name,
                    }
                }" class="category_item__products_count_link">
                {{ category.products_count }}
            </router-link>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "CategoryItem",
    props: ['category', 'index'],
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('dragAndDropByY', [
            'isDragging',
            'draggingOccurs',
            'topByIndex',
        ]),
        singularEntityName() {
            const singularEntityName = {
                categories: 'category',
                materials: 'material',
                colors: 'color',
            };
            return singularEntityName[this.$route.params.entity];
        },
        lastListIndex() {
            return this.categories[this.$route.params.entity].length - 1;
        },
        draggedItemClass() {
            return {
                'draggedCategory': this.isDragging(this.index),
            };
        },
        beneathDraggedItemClass() {
            return {
                'beneathDraggedCategory': this.draggingOccurs,
            };
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
        ...mapActions('dragAndDropByY', [
            'myDragStart',
        ]),
    },

    mounted() {
        this.$store.dispatch('dragAndDropByY/resetYCoordinates', this.index)
            .then(() => {
                const y = this.$refs.cat.getBoundingClientRect().y;
                this.$store.commit('dragAndDropByY/addYIntoYCoordinates', y);
            });
    },
}

</script>
