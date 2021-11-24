<template>
    <div class="show_block">
        <div class="content_block mainPage">
            <ul class="mainPage__ul">

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


                <li class="mainPage__li mainPage__li_with_border">
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



                <li class="mainPage__li mainPage__li_with_border">
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

                <li class="mainPage__li mainPage__li_with_border">
                    <router-link
                        :to="{ name: 'Help' }"
                        class="mainPage__link">
                        Помощь
                    </router-link>
                </li>

                <li class="mainPage__li mainPage__li_with_border">
                    <a href="http://asceticshop.ru"
                       class="mainPage__link mainPage__link_with_top_offset">
                        AsceticShop.ru
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainPage',
}
</script>
