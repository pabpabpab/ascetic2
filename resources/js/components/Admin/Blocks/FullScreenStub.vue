<template>
    <div :class="fullScreenStubClassObject">
        <img :src="spinner_icon"
             alt="Spinner"
             class="full_screen_stub__spinner_icon">
    </div>
</template>

<script>
import spinner_icon from "./../../../../assets/spinner.gif"
import {mapGetters} from "vuex";

export default {
    name: "FullScreenStub",
    data() {
        return {
            spinner_icon: spinner_icon,
        };
    },
    computed: {
        ...mapGetters('fullScreenStub', [
            'enabledFadingCss',
        ]),
        fullScreenStubClassObject() {
            return {
                'full_screen_stub': true,
                'show_transparent_block': !this.enabledFadingCss,
                'hide_transparent_block': this.enabledFadingCss,
            };
        }
    },
}
</script>
