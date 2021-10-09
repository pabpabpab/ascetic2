<template>
    <div class="context_menu__wrapper context_menu__wrapper_black" :style="coordinates">
        <ul class="context_menu__ul">

            <li  class="context_menu__li__multiple_black">
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 270})">
                        &#8635; 90&deg;
                    </span>
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 180})">
                        180&deg;
                    </span>
                    <span class="context_menu__li__multiple__item_black"
                          @click="rotatePhoto({productId, photoName, angle: 90})">
                        90&deg;&#8634;
                    </span>
            </li>

            <li class="context_menu__li context_menu__li_black"
                v-if="currentListIndex > 0"
                @click="movePhoto({productId, photoName, to: 'first'})">
                Сделать главным
            </li>

            <li class="context_menu__li__multiple_black">
                Сдвинуть
                <span v-if="currentListIndex > 0"
                      title="влево (вверх)"
                      class="context_menu__li__multiple__item_black"
                      @click="movePhoto({productId, photoName, to: 'up'})">
                    &larr; &uarr;
                </span>
                <span v-if="currentListIndex < lastListIndex"
                      title="вправо (вниз)"
                      class="context_menu__li__multiple__item_black"
                      @click="movePhoto({productId, photoName, to: 'down'})">
                    &darr; &rarr;
                </span>
            </li>

            <li class="context_menu__li context_menu__li_black"
                @click="showSeoManager({entity: 'photo', data: {productId, photoName}})" >
                <span v-if="hasSeoData" title="уже есть данные" class='has_data_green'>&#10004;</span>
                SEO для фото
            </li>

            <li class="context_menu__li context_menu__li_black" style="border: 0;"
                @click="deletePhoto({productId, photoName})">
                Удалить фото
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "PhotosContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'productId',
            'photoName',
            'currentListIndex',
            'lastListIndex',
        ]),
        ...mapGetters('products', [
            'photoSeoData',
        ]),
        hasSeoData() {
            const item = this.photoSeoData.find(item => item.filename === this.photoName);
            if (!item) {
                return false;
            }
            return Boolean(item.alt_text) || Boolean(item.page_title) || Boolean(item.page_description);
        }
    },
    methods: {
        ...mapActions('products', [
            'deletePhoto',
            'rotatePhoto',
            'movePhoto',
        ]),
        ...mapActions('seoManager', [
            'showSeoManager',
        ]),
    },
}
</script>
