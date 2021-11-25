<template>
    <div>
        <ul class="mainPage__ul mainPage__ul_with_bg">
            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'SaveProduct' }"
                    class="mainPage__link">
                    Добавить товар
                </router-link>
            </li>

            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Products' }"
                    class="mainPage__link">
                    Товары
                </router-link>
            </li>

            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'TrashedProducts' }"
                    class="mainPage__link mainPage__link_with_left_offset">
                    Удаленные товары
                </router-link>
            </li>
        </ul>

        <ul class="mainPage__ul">
            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'categories' } }"
                    class="mainPage__link">
                    Категории
                </router-link>
            </li>

            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'materials' } }"
                    class="mainPage__link">
                    Материалы
                </router-link>
            </li>

            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Categories', params: { entity: 'colors' } }"
                    class="mainPage__link">
                    Цвета
                </router-link>
            </li>
        </ul>

        <ul class="mainPage__ul mainPage__ul_with_bg">
            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Users' }"
                    class="mainPage__link">
                    Пользователи
                </router-link>
            </li>

            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'SaveUser' }"
                    class="mainPage__link mainPage__link_with_left_offset">
                    Создать пользователя
                </router-link>
            </li>
        </ul>

        <ul class="mainPage__ul">
            <li class="mainPage__li">
                <router-link
                    :to="{ name: 'Help' }"
                    class="mainPage__link">
                    Помощь
                </router-link>
            </li>
        </ul>

        <ul class="mainPage__ul mainPage__ul_with_bg">
            <li class="mainPage__li">
                <a href="http://asceticshop.ru"
                   class="mainPage__link mainPage__link_with_top_offset">
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
