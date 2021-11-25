<template>
    <div class="show_block">
        <div class="content_block mainPage">
            <mobile-menu-content></mobile-menu-content>
        </div>
    </div>
</template>

<script>
import MobileMenuContent from "./Blocks/MobileMenuContent";
export default {
    name: 'MainPage',
    components: {
        MobileMenuContent,
    },
}
</script>
