<template>
    <div ref="cat" class="category_item"
         :class="draggableItemClass"
         :style="{
                'top': topByIndex(index),
            }"
         @mousedown="myDragStart({index: index, event: $event})">

        <span
            @mouseover="showContextMenu({
                event: $event,
                target: 'Categories',
                data: {
                    category: category,
                    currentListIndex: index,
                    lastListIndex: lastListIndex
                }
            })"
            class="context_menu__icon__category">
            &#8942;
        </span>

        <div class="category_item__name">
            <router-link
                :to="{
                name: 'ProductsByCategory',
                params: {
                    categoryEntity: singularEntityName,
                    slug: category.slug,
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
                }
            }" class="category_item__products_count__link">
            {{category.products_count}}
        </router-link>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
/*
import arrow_up_icon from "./../../../../assets/arrow_up_icon.jpg"
import arrow_down_icon from "./../../../../assets/arrow_down_icon.jpg"
import edit_icon from "./../../../../assets/edit_icon.jpg"
import delete_icon from "./../../../../assets/delete_icon.png"
*/
export default {
    name: "CategoryItem",
    props: ['category', 'index'],
    /*
    data() {
        return {
            draggableIndex: -1,
            //dragLeft: 0,
            dragTop: 0,
        };
    },*/
    /*
    data() {
        return {
            edit_icon: edit_icon,
            delete_icon: delete_icon,
            arrow_up_icon: arrow_up_icon,
            arrow_down_icon: arrow_down_icon,
        };
    },
*/
    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        ...mapGetters('dragAndDropByY', [
            'isDragging',
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
        draggableItemClass() {
            return {
                'draggableCategory': this.isDragging(this.index),
                //'underDraggableCategory': this.underDraggable(this.index) && !this.isDragging(this.index),
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
        this.$store.dispatch('dragAndDropByY/resetYCoordinates', this.index).then(
            () => {
                const y = this.$refs.cat.getBoundingClientRect().y;
                this.$store.commit('dragAndDropByY/addYIntoYCoordinates', y);
            }
        );
    },
}

</script>
