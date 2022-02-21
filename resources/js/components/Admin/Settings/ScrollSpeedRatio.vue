<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Лимит кэширования</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Коэффициент скорости прокрутки"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Рекомендуется 75 (меньше цифра - выше скорость прокрутки)"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "ScrollSpeedRatio",
    components: {SettingsInput},
    data() {
        return {
            subject: 'scroll_speed_ratio',
            localSettings: {
                value: '',
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
            this.localSettings = { ...value };
        },
    },
    mounted() {
        this.$store.dispatch('settingsManager/loadSettings', {subject: this.subject});
    },
}
</script>
