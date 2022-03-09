<template>
    <div class="absolute_message__wrapper">
        <div class="absolute_message__content">
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
