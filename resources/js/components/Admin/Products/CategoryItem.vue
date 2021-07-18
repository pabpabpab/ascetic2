<template>
    <div class="category__item">
        <img v-if="index > 0" :src="arrow_up_icon"
             alt="Поднять вверх на 1 позицию" title="Поднять вверх на 1 позицию"
             class="category__item__icon_arrow"
             @click="changePosition({categoryId: category.id, direction: 'up'})">
        <div v-else class="category__item__stub_icon"> </div>

        <img v-if="index < lastCategory" :src="arrow_down_icon"
             alt="Опустить вниз на 1 позицию" title="Опустить вниз на 1 позицию"
             class="category__item__icon_arrow"
             @click="changePosition({categoryId: category.id, direction: 'down'})">
        <div v-else class="category__item__stub_icon"> </div>

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
import {mapActions, mapGetters} from "vuex";
import arrow_up_icon from "./../../../../assets/arrow_up_icon.jpg"
import arrow_down_icon from "./../../../../assets/arrow_down_icon.jpg"
import edit_icon from "./../../../../assets/edit_icon.jpg"
import delete_icon from "./../../../../assets/delete_icon.png"

export default {
    name: "CategoryItem",
    props: ['category', 'index'],

    data() {
        return {
            edit_icon: edit_icon,
            delete_icon: delete_icon,
            arrow_up_icon: arrow_up_icon,
            arrow_down_icon: arrow_down_icon,
        };
    },

    computed: {
        ...mapGetters('categories', [
            'categories',
        ]),
        lastCategory() {
            return this.categories.length - 1;
        },
    },
    methods: {
        ...mapActions('categories', [
            'preDeleteCategory',
            'changePosition',
        ]),
        /*
        ...mapActions([
            'showFullScreenStub',
            'closeFullScreenStub',
        ]),
        upCategory(id) {
            this.showFullScreenStub();
        },
        downCategory(id) {
            this.closeFullScreenStub();
        },
        */
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
