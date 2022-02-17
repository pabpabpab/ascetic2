<template>
    <div class="show_block">
        <h1 class="pd0 mb0">E-mail администратора</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="E-mail администратора"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="E-mail еще одного или нового администратора (если несколько, то через запятую)"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "AdminEmail",
    components: {SettingsInput},
    data() {
        return {
            subject: 'admin_email',
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
            //console.log(value);
            this.localSettings = { ...value };
        },
    },
    mounted() {
        this.$store.dispatch('settingsManager/loadSettings', {subject: this.subject});
    },
}
</script>

