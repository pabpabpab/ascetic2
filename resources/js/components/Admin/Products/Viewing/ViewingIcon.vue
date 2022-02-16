<template>
    <div class="viewing_icon__wrapper">
        <div @click="changeViewingMode"
             :data-title="title"
             class="icon_with_hint icon_with_right_hint viewing_icon__content">
            <img :src="src" alt="" class="viewing_icon__img">
        </div>
    </div>
</template>

<script>
import bigViewIcon from "../../../../../assets/viewingIconOfBigItems.svg"
import smallViewIcon from "../../../../../assets/viewingIconOfSmallItems.svg"
import {mapGetters} from "vuex";

export default {
    name: "ViewingIcon",
    data() {
        return {
            bigViewIcon: bigViewIcon,
            smallViewIcon: smallViewIcon,
        };
    },
    computed: {
        ...mapGetters('products', [
            'viewingMode',
        ]),
        src() {
            return this.viewingMode === 'bigItems' ? smallViewIcon : bigViewIcon;
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
