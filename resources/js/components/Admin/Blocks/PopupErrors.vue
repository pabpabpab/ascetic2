<template>
    <div class="popup_right">
        <div class="popup_right__content">
            Пожалуйста:<br>
            <p v-for="error of popupErrors" class="popup_right__item">
               - {{error[0]}}
            </p>
            <div class='popup_right__collapse_icon'
                @click.prevent="closePopupErrorsBox()">
                &#215;
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
        ...mapGetters('popupErrors', [
            'popupErrors',
        ]),
    },
}
</script>
