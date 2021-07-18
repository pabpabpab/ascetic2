<template>
    <div id="app" class="app" @click="closePopupErrorsBox()">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <popup-errors v-if="hasPopupErrors"></popup-errors>
        <absolute-message v-if="hasAbsoluteMessage"></absolute-message>
        <confirmation-dialog-box v-if="hasConfirmationRequest"></confirmation-dialog-box>
        <full-screen-stub v-if="showFullScreenStub"></full-screen-stub>
    </div>
</template>

<script>
// import './styles/appx.scss'
import {mapActions, mapGetters} from 'vuex';
import NavBar from "./components/Admin/NavBar";
import PopupErrors from "./components/Admin/Blocks/PopupErrors";
import AbsoluteMessage from "./components/Admin/Blocks/AbsoluteMessage";
import ConfirmationDialogBox from "./components/Admin/Blocks/ConfirmationDialogBox";
import FullScreenStub from "./components/Admin/Blocks/FullScreenStub";

export default {
    name: 'app',
    components: {
        NavBar,
        AbsoluteMessage,
        PopupErrors,
        ConfirmationDialogBox,
        FullScreenStub,
    },
    computed: {
        ...mapGetters([
            'hasPopupErrors',
            'hasAbsoluteMessage',
            'hasConfirmationRequest',
            'showFullScreenStub',
        ]),
    },
    methods: {
        ...mapActions([
            'closePopupErrorsBox',
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
}
</script>
