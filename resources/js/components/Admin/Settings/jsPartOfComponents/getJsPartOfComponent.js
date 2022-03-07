import {mapActions, mapGetters} from "vuex";
export default {
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
            }, 100);

            this.$store.dispatch('settingsManager/saveSettings', {
                subject: this.subject,
                data: this.localSettings,
            })
        },
    },
    watch: {
        data(value) {
            this.localSettings = {...value};
        },
    },
    mounted() {
        this.$store.dispatch('settingsManager/loadSettings', {subject: this.subject});
    },
}
