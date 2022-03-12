<template>
    <div>
        <ul class="mobile_menu__ul mobile_menu__ul_with_bg">
            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'SaveProduct' }"
                    class="mobile_menu__link">
                    Добавить товар
                </router-link>
            </li>

            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Products' }"
                    class="mobile_menu__link">
                    Товары
                </router-link>
            </li>

            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'TrashedProducts' }"
                    class="mobile_menu__link mobile_menu__link_with_left_offset">
                    Удаленные товары
                </router-link>
            </li>
        </ul>

        <ul class="mobile_menu__ul">
            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'categories' } }"
                    class="mobile_menu__link">
                    Категории
                </router-link>
            </li>

            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'materials' } }"
                    class="mobile_menu__link">
                    Материалы
                </router-link>
            </li>

            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'colors' } }"
                    class="mobile_menu__link">
                    Цвета
                </router-link>
            </li>
        </ul>

        <ul class="mobile_menu__ul mobile_menu__ul_with_bg">
            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Users' }"
                    class="mobile_menu__link">
                    Пользователи
                </router-link>
            </li>

            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'SaveUser' }"
                    class="mobile_menu__link mobile_menu__link_with_left_offset">
                    Создать пользователя
                </router-link>
            </li>
        </ul>


        <ul class="mobile_menu__ul">
            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'SettingsMenu' }"
                    class="mobile_menu__link">
                    Настройки сайта
                </router-link>
            </li>
        </ul>

        <ul class="mobile_menu__ul mobile_menu__ul_with_bg">
            <li class="mobile_menu__li">
                <router-link
                    :to="{ name: 'Help' }"
                    class="mobile_menu__link">
                    Помощь
                </router-link>
            </li>
        </ul>

        <ul class="mobile_menu__ul">
            <li class="mobile_menu__li">
                <a href="https://asceticshop.ru"
                   class="mobile_menu__link mobile_menu__link_with_top_offset">
                    AsceticShop.ru
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "MobileMenuContent"
}
</script>
