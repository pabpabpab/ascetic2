<template>
    <div class="category__item">
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
        lastListIndex() {
            return this.categories[this.$route.params.entity].length - 1;
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
    },
}


/*


        <img :src="edit_icon"
             alt="Редактировать" title="Редактировать"
             class="category__item__icon_edit"
             @click="$emit('change-item-component', category.id)">


<router-link class="user__nameLink" :to="'/admin/products_js/category/edit/' + category.id">
            <img :src="edit_icon" alt="Редактировать" title="Редактировать" class="category__item__icon_edit">
        </router-link>
 */
</script>
