<template>
    <div class="show_block">

        <h1 class="pd0 mb0">Настройки сайта</h1>
        <div class="content_block mainPage">
                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'contacts' } }"
                            class="mobile_menu__link">
                            Контакты сайта
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'mainPageSeo' } }"
                            class="mobile_menu__link">
                            SEO главной страницы сайта
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'visibleCategoriesLimit' } }"
                            class="mobile_menu__link">
                            Количество видимых категорий в верхнем меню
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'perPage' } }"
                            class="mobile_menu__link">
                            Количество товаров на странице в списке товаров на сайте
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'cacheLimit' } }"
                            class="mobile_menu__link">
                            Лимит кэширования
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'photoQuality' } }"
                            class="mobile_menu__link">
                            Качество фото
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile_menu__ul">
                    <li class="mobile_menu__li">
                        <router-link
                            :to="{ name: 'Settings', params: { subject: 'adminEmail' } }"
                            class="mobile_menu__link">
                            E-mail администратора
                        </router-link>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingsPage',
}
</script>
