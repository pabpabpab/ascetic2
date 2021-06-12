<template>
    <div class="category__item">
        <img :src="edit_icon"
             alt="Редактировать" title="Редактировать"
             class="category__item__icon_edit"
             @click="$emit('change-item-component', category.id)">
        <img :src="delete_icon"
             alt="Удалить" title="Удалить"
             class="category__item__icon_delete"
             @click="preDeleteCategory(category.id)">
        <span class="category__item__name">
            {{category.name}}
        </span>
        <span class="category__item__products_count">
            {{category.products_count}}
        </span>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import edit_icon from "./../../../../assets/edit_icon.jpg"
import delete_icon from "./../../../../assets/delete_icon.png"

export default {
    name: "CategoryItem",
    props: ['category'],

    data() {
        return {
            edit_icon: edit_icon,
            delete_icon: delete_icon,
        };
    },
    methods: {
        ...mapActions('categories', [
            'preDeleteCategory',
        ]),
    },
}
// :src="require('./../../../../static/edit_icon.jpg')"
// <img :src="edit_icon" alt="Редактировать" class="category__item__icon">

/*
<router-link class="user__nameLink" :to="'/admin/products_js/category/edit/' + category.id">
            <img :src="edit_icon" alt="Редактировать" title="Редактировать" class="category__item__icon_edit">
        </router-link>
 */
</script>
