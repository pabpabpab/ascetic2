<template>
    <div class="mobile_menu">
        <div class="mobile_menu__content">
            <mobile-menu-content></mobile-menu-content>

            <div class='mobile_menu__collapse_icon'
                 @click="hideMobileMenu()">
                &#215;
            </div>
        </div>
    </div>
</template>

<script>
import MobileMenuContent from "./Blocks/MobileMenuContent";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "MobileMenu",
    components: {
        MobileMenuContent,
    },
    computed: {
        ...mapGetters('mobileMenu', [
            'mobileMenuVisibility',
        ]),
    },
    methods: {
        ...mapActions([
            'hideMobileMenu',
        ]),
    },
}
</script>
