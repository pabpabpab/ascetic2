<template>
    <div class="absolute_filters_message_div">
        {{text}}
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "AbsoluteFlashFiltersMessage",

    computed: {
        ...mapGetters('absoluteFlashFiltersMessage', [
            'text',
        ]),
    },
}
</script>
