<template>
    <div v-if="showInput"
         class="show_lot_number show_lot_number_with_input">
        <input class="show_lot_number__input"
               type="text" maxlength="10"
               placeholder="Номер товара"
               @input=""
               v-model="lotNumber">
        <div class="show_lot_number_with_input__collapse_icon"
             @click="collapseInput">
            &#215;
        </div>
    </div>
    <div v-else data-title="Показать товар номер..."
         @click="showInput = !showInput"
         class="icon_with_hint icon_with_left_hint show_lot_number">
        №
    </div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
    name: "LotNumberControl",
    data() {
        return {
            showInput: false,
            lotNumber: '',
            lastChangesTime: 0,
        };
    },
    computed: {
        ...mapGetters('pagination', [
            'filteredLength',
        ]),
        filteredProductsLength() {
            return this.filteredLength('products');
        }
    },
    methods: {
        resetThisInput() {
            this.lotNumber = '';
        },
        collapseInput() {
            this.resetThisInput();
            this.showInput = false;
        },
    },
    watch: {
        lotNumber(newValue, oldValue) {
            this.lotNumber = Number(newValue);
            if (this.lotNumber === 0 || isNaN(this.lotNumber)) {
                this.lotNumber = '';
            }
            this.$store.dispatch('products/makeSearchByLotNumber', this.lotNumber + 0);
            if (newValue !== oldValue) {
                const now = new Date();
                this.lastChangesTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
            }
        },
        filteredProductsLength(newValue, oldValue) {
            const now = new Date();
            const currentTime  = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
            // исключить изменения кол-ва товаров в результате ввода lotNumber
            if (currentTime - this.lastChangesTime < 3) {
                return;
            }
            // иначе закрыть input
            if (newValue !== oldValue) {
                this.showInput = false;
            }
        },
    },

}
</script>
