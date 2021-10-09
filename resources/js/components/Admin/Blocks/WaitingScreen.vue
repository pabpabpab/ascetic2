<template>
    <div class="waiting_screen">
        <img :src="spinner_icon"
             alt="Spinner"
             class="waiting_screen__spinner_icon">
    </div>
</template>

<script>
import spinner_icon from "./../../../../assets/spinner.gif"
import {mapGetters} from "vuex";

export default {
    name: "WaitingScreen",
    data() {
        return {
            spinner_icon: spinner_icon,
        };
    },
}
</script>
