<template>
    <div class="absolute_message_wrapper">
        <div class="absolute_message_div">
            {{text}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "AbsoluteFlashMessage",

    computed: {
        ...mapGetters('absoluteFlashMessage', [
            'text',
        ]),
    },
}
</script>
