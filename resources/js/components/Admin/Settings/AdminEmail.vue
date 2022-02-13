<template>
    <div class="show_block">
        <h1 class="pd0 mb0">E-mail администратора</h1>
        <div class="content_block mainPage">

            <router-link :to="{ name: 'SettingsMenu' }">
                <button class="button__save_product mauto mt30">
                    Назад
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminEmail"
}
</script>
