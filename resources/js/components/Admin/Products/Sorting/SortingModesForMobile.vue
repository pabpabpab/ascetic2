<template>
    <div>

        <div @click.stop="changeSelectVisibility" class="sorting_modes_for_mobile__selected_mode__wrapper">
            <div class="sorting_modes_for_mobile__selected_mode">
                {{ selectedMode }}
            </div>
            <div
                class="sorting_modes_for_mobile__arrow"
                :class="{sorting_modes_for_mobile__arrow_up: selectIsVisible}">
                &#9660;
            </div>
        </div>

        <div @click.stop
             v-if="selectIsVisible" class="sorting_modes_for_mobile__relative_wrapper_for_drop">
            <div class="sorting_modes_for_mobile__absolute_items_list show_block">
                <p @click.stop="doSort('position')" class="sorting_modes_for_mobile__absolute_item">
                    По умолчанию
                </p>
                <p @click.stop="doSort('priceUp')" class="sorting_modes_for_mobile__absolute_item">
                    По цене min
                </p>
                <p @click.stop="doSort('priceDown')" class="sorting_modes_for_mobile__absolute_item">
                    По цене max
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
//&#709;
export default {
    name: "SortingModesForMobile",
    computed: {
        ...mapGetters('products', [
            'sortingMode',
            'visibility',
        ]),
        selectIsVisible() {
            return this.visibility('productSortingSelectForMobile');
        },
        selectedMode() {
            const textBook = {
                position: 'По умолчанию',
                priceUp: 'По цене min',
                priceDown: 'По цене max',
            }
            return textBook[this.sortingMode];
        },
    },
    methods: {
        changeSelectVisibility() {
            this.$store.commit('products/setVisibility', {
                componentName: 'productSortingSelectForMobile',
                value: !this.visibility('productSortingSelectForMobile')
            });
        },
        doSort(mode) {
            this.$store.commit('products/setVisibility', {
                componentName: 'productSortingSelectForMobile',
                value: false
            });
            this.$store.dispatch('products/setSortingMode', mode)
                .then(() => {
                    this.$store.dispatch('products/doSort', mode);
                });
        },
    },
}
</script>
