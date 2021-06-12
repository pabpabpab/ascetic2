<template>
    <div :class="popupClassObject">
        <div class="popup_right__content">
            Пожалуйста:<br>
            <p v-for="error of popupErrors" class="popup_right__item">
               - {{error[0]}}
            </p>
            <div class='popup_right__close'
                @click.prevent="closePopupErrorsBox()">
                &#9746;
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "PopupErrors",
    methods: {
        ...mapActions([
            'closePopupErrorsBox',
        ]),
    },
    computed: {
        ...mapGetters([
            'popupErrors',
            'hasPopupErrors',
        ]),
        popupClassObject() {
            return {
                'popup_right': this.hasPopupErrors,
                'display-none': !this.hasPopupErrors
            };
        }
    },
}
</script>
