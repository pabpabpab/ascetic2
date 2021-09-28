<template>
    <div class="quantity_per_page__wrapper">
        <p class="quantity_per_page__label">Показывать по</p>
        <select id="qpp" class="quantity_per_page__select_input"
                v-model="customQuantityPerPage"
                @change="divideIntoPages({entity, customQuantityPerPage});">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="300">300</option>
            <option value="1000000">Все</option>
        </select>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "QuantityPerPageOfPagination",
    props: ['entity'],
    data() {
        return {
            customQuantityPerPage: 0,
        };
    },
    methods: {
        ...mapActions([
            'divideIntoPages',
        ]),
    },
    computed: {
        ...mapGetters('pagination', [
            'quantityPerPage',
        ]),
    },
    watch: {
        quantityPerPage() {
            this.customQuantityPerPage = this.quantityPerPage(this.entity);
        },
    },
    mounted() {
        this.customQuantityPerPage = this.quantityPerPage(this.entity);
    },
}
</script>
