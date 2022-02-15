<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Количество товаров на странице</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="PerPage"
                v-model="localSettings.perPage"
                :settings="localSettings"
                entity="perPage"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Количество товаров на странице в списке товаров на сайте"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "PerPage",
    components: {SettingsInput},
    data() {
        return {
            subject: 'pagination',
            localSettings: {
                perPage: '',
            },
            disableAllInputsCmd: false,
        };
    },
    computed: {
        ...mapGetters('settingsManager', [
            'settings',
        ]),
        data() {
            return this.settings(this.subject);
        },
    },
    methods: {
        ...mapActions('settingsManager', [
            'saveSettings',
            'loadSettings'
        ]),
        saveSettings() {
            this.disableAllInputsCmd = true;
            setTimeout(() => {
                this.disableAllInputsCmd = false
            },100);

            this.$store.dispatch('settingsManager/saveSettings', {
                subject: this.subject,
                data: this.localSettings,
            })
        },
    },
    watch:{
        data(value) {
            //console.log(value);
            this.localSettings = { ...value };
        },
    },
    mounted() {
        this.$store.dispatch('settingsManager/loadSettings', {subject: this.subject});
    },
}
</script>
