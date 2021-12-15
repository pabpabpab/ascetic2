<template>
    <div id="app" class="app" @click="closeAllByClickOnAppTag($event);">
        <top-menu></top-menu>
        <transition name="mobile_menu">
            <mobile-menu v-if="mobileMenuVisibility"></mobile-menu>
        </transition>


        <div class="content_wrapper">
            <router-view :key="$route.path"></router-view>
        </div>


        <transition name="popup_right">
            <popup-errors v-if="showPopupErrors"></popup-errors>
        </transition>

        <transition name="fade">
            <confirmation-dialog-box v-if="showConfirmationRequest"></confirmation-dialog-box>
        </transition>

        <transition name="transparent_block">
            <waiting-screen v-if="showWaitingScreen"></waiting-screen>
        </transition>

        <absolute-flash-message v-if="showAbsoluteFlashMessage"></absolute-flash-message>
        <absolute-flash-filters-message v-if="showAbsoluteFlashFiltersMessage"></absolute-flash-filters-message>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import TopMenu from "./components/Admin/TopMenu";
import PopupErrors from "./components/Admin/Blocks/PopupErrors";
import AbsoluteFlashMessage from "./components/Admin/Blocks/AbsoluteFlashMessage";
import ConfirmationDialogBox from "./components/Admin/Blocks/ConfirmationDialogBox";
import WaitingScreen from "./components/Admin/Blocks/WaitingScreen";
import AbsoluteFlashFiltersMessage from "./components/Admin/Blocks/AbsoluteFlashFiltersMessage";
import MobileMenu from "./components/Admin/MobileMenu";

export default {
    name: 'app',
    components: {
        MobileMenu,
        TopMenu,
        AbsoluteFlashMessage,
        PopupErrors,
        ConfirmationDialogBox,
        WaitingScreen,
        AbsoluteFlashFiltersMessage,
    },
    computed: {
        ...mapGetters('mobileMenu', [
            'mobileMenuVisibility',
        ]),
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
