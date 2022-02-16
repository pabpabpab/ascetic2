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


export default {
    name: "LotNumberControl",
    data() {
        return {
            showInput: false,
            lotNumber: '',
        };
    },
    filters: {
        numeric (value) {

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
        lotNumber(value) {
            this.lotNumber = Number(value);
            if (this.lotNumber === 0 || isNaN(this.lotNumber)) {
                this.lotNumber = '';
            }
            this.$store.dispatch('products/makeSearchByLotNumber', this.lotNumber + 0);
        }
    },

}
</script>
