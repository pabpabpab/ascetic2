<template>
    <div :class="contextMenuClass" :style="coordinates">
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
            <li class="context_menu__li"
                @click="preDeleteCategory({
                    entity: $route.params.entity,
                    categoryId: category.id
                })">
                Удалить
            </li>
            <li v-if="entity==='categories'" class="context_menu__li" style="border: 0;"
                @click="showSeoManager({entity: 'category', data: {id: category.id}})" >
                SEO
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoriesContextMenu",
    props: ['entity'],
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'currentListIndex',
            'lastListIndex',
            'category',
            'enabledFadingCss'
        ]),
        contextMenuClass() {
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
        ...mapActions('seoManager', [
            'showSeoManager',
        ]),
    },

}
</script>
