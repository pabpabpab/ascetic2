<template>
    <div id="app" class="app" @click="closeAllByClickOnAppTag($event);">
        <nav-bar></nav-bar>

        <div class="content_wrapper">
            <router-view :key="$route.path"></router-view>
        </div>

        <transition name="popup_right">
            <popup-errors v-if="showPopupErrors"></popup-errors>
        </transition>

        <transition name="fade">
            <confirmation-dialog-box v-if="showConfirmationRequest"></confirmation-dialog-box>
        </transition>

        <transition name="transparent-fade">
            <waiting-screen v-if="showWaitingScreen"></waiting-screen>
        </transition>

        <absolute-flash-message v-if="showAbsoluteFlashMessage"></absolute-flash-message>
        <absolute-flash-filters-message v-if="showAbsoluteFlashFiltersMessage"></absolute-flash-filters-message>
    </div>
</template>

<script>
// import './styles/appx.scss'
import {mapActions, mapGetters} from 'vuex';
import NavBar from "./components/Admin/NavBar";
import PopupErrors from "./components/Admin/Blocks/PopupErrors";
import AbsoluteFlashMessage from "./components/Admin/Blocks/AbsoluteFlashMessage";
import ConfirmationDialogBox from "./components/Admin/Blocks/ConfirmationDialogBox";
import WaitingScreen from "./components/Admin/Blocks/WaitingScreen";
import AbsoluteFlashFiltersMessage from "./components/Admin/Blocks/AbsoluteFlashFiltersMessage";

export default {
    name: 'app',
    components: {
        NavBar,
        AbsoluteFlashMessage,
        PopupErrors,
        ConfirmationDialogBox,
        WaitingScreen,
        AbsoluteFlashFiltersMessage,
    },
    computed: {
        ...mapGetters('popupErrors', [
            'showPopupErrors',
        ]),
        ...mapGetters('absoluteFlashMessage', [
            'showAbsoluteFlashMessage',
        ]),
        ...mapGetters('waitingScreen', [
            'showWaitingScreen',
        ]),
        ...mapGetters('confirmationDialog', [
            'showConfirmationRequest',
        ]),
        ...mapGetters('absoluteFlashFiltersMessage', [
            'showAbsoluteFlashFiltersMessage',
        ]),
    },
    methods: {
        ...mapActions([
            'closeAllByClickOnAppTag',
        ]),
    },
    // при переходе по страницам отматывать страницу к верху
    watch: {
        $route(to, from) {
            if (from.name) {
                window.scrollBy(0, -1000000);
            }
        },
    },

    mounted() {
        this.$store.dispatch('updateCSRF');

        window.addEventListener('scroll', () => {
            this.$store.dispatch('closeContextMenu');
        });
    },
    destroyed () {
        window.removeEventListener('scroll', () => {
            this.$store.dispatch('closeContextMenu');
        });
    },
}
</script>
