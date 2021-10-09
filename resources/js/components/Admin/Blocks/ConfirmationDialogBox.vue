<template>
    <div class="confirmation_dialog__wrapper">
        <div class="confirmation_dialog__content">
            <div>{{ text }}</div>
            <div class="confirmation_dialog__buttons_div">
                <button v-if="yesButtonText"
                        @click="callYesAction()"
                        class="confirmation_button">
                    {{ yesButtonText }}
                </button>
                <button
                    @click="closeConfirmationDialog()"
                    class="confirmation_button">
                    {{ cancelButtonText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ConfirmationDialogBox",
    data() {
        return {
            _finalRedirectRoute: '',
        };
    },

    computed: {
        ...mapGetters('confirmationDialog', [
            'text',
            'yesButtonText',
            'cancelButtonText',
            'yesAction',
            'cancelAction',
            'yesPayload',
            'finalRedirectRoute',
        ]),
    },

    methods: {
        ...mapActions([
            'closeConfirmationDialog',
        ]),
        callYesAction() {
            this.$store.dispatch(this.yesAction, this.yesPayload);

            if (!this._finalRedirectRoute) {
                return;
            }

            if (this.$route.name !== this._finalRedirectRoute) {
                this.$router.push({ name: this._finalRedirectRoute });
            }
        },
    },

    mounted() {
        // сохранить копию, так как оригинал сбрасывается раньше чем нужен
        this._finalRedirectRoute = this.$store.getters.finalRedirectRoute;
    },
}
</script>
