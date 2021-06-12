<template>
    <div class="absolute_message_wrapper">
        <div class="absolute_message_div">
            {{absoluteMessage}}
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AbsoluteMessage",
    methods: {
        ...mapActions([
            'closeAbsoluteMessageBox',
        ]),
    },
    computed: {
        ...mapGetters([
            'absoluteMessage',
            // 'hasAbsoluteMessage',
        ]),
    },
}
</script>
