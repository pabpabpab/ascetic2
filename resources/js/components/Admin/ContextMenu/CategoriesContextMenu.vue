<template>
    <div :class="contextMenuClassObject" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ category.name }}»
            </li>
            <li class="context_menu__li"
                v-if="currentListIndex > 0"
                @click="changePosition({
                    entity: $route.params.entity,
                    categoryId: category.id,
                    direction: 'up'
                })">
                Вверх на 1 позицию
            </li>
            <li class="context_menu__li"
                v-if="currentListIndex < lastListIndex"
                @click="changePosition({
                    entity: $route.params.entity,
                    categoryId: category.id,
                    direction: 'down'
                })">
                Вниз на 1 позицию
            </li>
            <li class="context_menu__li"
                @click="$emit('change-item-component', category.id)">
                Редактировать
            </li>
            <li class="context_menu__li" style="border: 0;"
                @click="preDeleteCategory({
                    entity: $route.params.entity,
                    categoryId: category.id
                })">
                Удалить
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoriesContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'currentListIndex',
            'lastListIndex',
            'category',
            'enabledFadingCss'
        ]),
        contextMenuClassObject() {
            return {
                'context_menu__wrapper': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        }
    },
    methods: {
        ...mapActions('categories', [
            'preDeleteCategory',
            'changePosition',
        ]),
    },

}
</script>
