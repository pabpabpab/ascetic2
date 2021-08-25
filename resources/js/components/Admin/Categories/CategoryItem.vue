<template>
    <div ref="cat" class="category__item" :class="draggableItemClass"
         :style="{
                'top': topOfIndex(index),
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

        <span class="category__item__name">
            {{category.name}}
        </span>

        <span class="category__item__products_count">
            {{category.products_count}}
        </span>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import categoriesDragAndDropMethods from "./someMethods/categoriesDragAndDropMethods";
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
        ...mapGetters('dragAndDrop', [
            'isDragging',
            'topOfIndex',
        ]),
        lastListIndex() {
            return this.categories[this.$route.params.entity].length - 1;
        },
        draggableItemClass() {
            return {
                'draggableCategory': this.isDragging(this.index),
            };
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
        ...mapActions('dragAndDrop', [
            'myDragStart',
        ]),
    },

    mounted() {
        this.$store.dispatch('dragAndDrop/resetYCoordinates', this.index).then(
            () => {
                const y = this.$refs.cat.getBoundingClientRect().y;
                this.$store.commit('dragAndDrop/addYIntoYCoordinates', y);
            }
        );
    },
}

</script>
