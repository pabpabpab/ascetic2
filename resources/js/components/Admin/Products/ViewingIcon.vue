<template>
    <div @click="changeViewingMode"
         :data-title="title"
         class="icon_with_hint icon_with_right_hint viewing_icon__wrapper">
        <img :src="src" alt="" class="viewing_icon__img">
    </div>
</template>

<script>
import bigViewingIcon from "./../../../../assets/roundViewBigItemsIcon.svg"
import smallViewingIcon from "./../../../../assets/roundViewSmallItemsIcon.svg"
import {mapGetters} from "vuex";

export default {
    name: "ViewingIcon",
    data() {
        return {
            bigViewingIcon: bigViewingIcon,
            smallViewingIcon: smallViewingIcon,
        };
    },
    computed: {
        ...mapGetters('products', [
            'viewingMode',
        ]),
        src() {
            return this.viewingMode === 'bigItems' ? smallViewingIcon : bigViewingIcon;
        },
        title() {
            return this.viewingMode === 'bigItems' ? 'Показать товары мелкими' : 'Показать товары крупными';
        },
    },
    methods: {
        changeViewingMode() {
            const mode = this.viewingMode === 'bigItems' ? 'smallItems' : 'bigItems';
            this.$store.commit('products/setViewingMode', mode);
            this.$store.dispatch('products/showProducts', this.$route);
        }
    },
}
</script>
