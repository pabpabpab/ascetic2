<template>
    <div class="context_menu__wrapper" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ category.name }}»
            </li>
            <li v-if="lastListIndex !== 0" class="context_menu__li_multiple">
                Сдвинуть
                <span v-if="currentListIndex > 0"
                      title="вверх"
                      class="context_menu__li_multiple__item"
                      @click="changePosition({
                          entity: $route.params.entity,
                          categoryId: category.id,
                          direction: 'up'
                      })">
                     &uarr;
                </span>
                <span v-if="currentListIndex < lastListIndex"
                      title="вниз"
                      class="context_menu__li_multiple__item"
                      @click="changePosition({
                          entity: $route.params.entity,
                          categoryId: category.id,
                          direction: 'down'
                      })">
                    &darr;
                </span>
            </li>
            <li class="context_menu__li"
                @click="$emit('change-item-component', category.id)">
                Редактировать
            </li>
            <li v-if="entity==='categories'" class="context_menu__li"
                @click="showSeoManager({entity: 'category', data: {id: category.id}})">
                <span v-if="hasSeoData" title="уже есть данные" class='has_data_blue'>&#10004;</span>
                SEO
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
    props: ['entity'],
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'currentListIndex',
            'lastListIndex',
            'category',
        ]),
        ...mapGetters('categories', [
            'seoData',
        ]),
        hasSeoData() {
            const item = this.seoData.find(item => item.category_id === this.category.id);
            if (!item) {
                return false;
            }
            return Boolean(item.page_title) || Boolean(item.page_description);
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
