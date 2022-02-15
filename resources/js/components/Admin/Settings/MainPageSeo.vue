<template>
    <div class="show_block">
        <h1 class="pd0 mb0">SEO главной страницы сайта</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Title главной страницы"
                v-model="localSettings.mainPageTitle"
                :settings="localSettings"
                entity="mainPageTitle"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint=""
                class="mt10">
            </settings-input>
            <settings-input
                header="Description главной страницы"
                v-model="localSettings.mainPageDescription"
                :settings="localSettings"
                entity="mainPageDescription"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint=""
                class="mt40">
            </settings-input>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "MainPageSeo",
    components: {SettingsInput},
    data() {
        return {
            subject: 'main_page_seo',
            localSettings: {
                mainPageTitle: '',
                mainPageDescription: '',
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
