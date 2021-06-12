<template>
    <div class="confirmation__dialog_wrapper">
        <div class="confirmation__dialog_div">
            <div>{{confirmationRequestText}} {{finalRedirectRoute}}</div>
            <div class="confirmation__buttons_div">
                <button v-if="yesButtonText"
                    @click="callYesAction()"
                    class="confirmation__button">
                    {{yesButtonText}}
                </button>
                <button
                    @click="closeConfirmationDialog()"
                    class="confirmation__button">
                    {{cancelButtonText}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import edit_icon from "../../../../assets/edit_icon.jpg";
import delete_icon from "../../../../assets/delete_icon.png";

export default {
    name: "ConfirmationDialogBox",
    data() {
        return {
            _finalRedirectRoute: '',
        };
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
    computed: {
        ...mapGetters([
            'confirmationRequestText',
            'yesButtonText',
            'cancelButtonText',
            'yesAction',
            'cancelAction',
            'yesPayload',
            'finalRedirectRoute',
        ]),
    },
    mounted() {
        // сохранить копию, так как оригинал сбрасывается раньше чем нужен
        this._finalRedirectRoute = this.$store.getters.finalRedirectRoute;
    },
}
</script>
