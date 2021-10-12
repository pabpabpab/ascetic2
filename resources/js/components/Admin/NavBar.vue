<template>
    <nav class="navBar">

        <div class="navBar_left">
            <a href="http://asceticshop.ru" class="logo__link">AsceticShop.ru</a>
            <ul class="navBar__ul">
                <li class="navBar__li">
                    <router-link :to="{ name: 'SaveProduct' }" :class="saveProductLinkClass">Добавить товар</router-link>
                </li>

                <li class="navBar__li">
                    <router-link
                        :to="{ name: 'Products', params: { which: 'active' } }"
                        class="navBar__link_with_trigram"
                        :class="productsLinkClass">
                        Товары

                        <div class="navBar__link__trigram">
                            <div class="navBar__drop_menu show_block">
                                <ul class="navBar__drop_menu__ul">
                                    <li class="navBar__drop_menu__li">
                                        <router-link :to="{ name: 'Products', params: { which: 'trashed' } }"
                                                     class="navBar__drop_menu__link">
                                            Удаленные
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </router-link>
                </li>

                <li class="navBar__li">
                    <router-link
                        :to="{ name: 'Categories', params: { entity: 'categories' } }"
                        class="navBar__link_with_trigram"
                        :class="categoriesLinkClass">Категории

                        <div class="navBar__link__trigram">
                            <div class="navBar__drop_menu show_block">
                                <ul class="navBar__drop_menu__ul">
                                    <li class="navBar__drop_menu__li">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'categories' } }"
                                            class="navBar__drop_menu__link tal">
                                            Категории
                                        </router-link>
                                    </li>
                                    <li class="navBar__drop_menu__li tal">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'materials' } }"
                                            class="navBar__drop_menu__link">
                                            Материалы
                                        </router-link>
                                    </li>
                                    <li class="navBar__drop_menu__li">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'colors' } }"
                                            class="navBar__drop_menu__link tal">
                                            Цвета
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </router-link>
                </li>
            </ul>
        </div>


        <ul class="navBar__ul">

            <li class="navBar__li">
                <router-link
                    :to="{ name: 'Users' }"
                    class="navBar__link_with_trigram"
                    :class="usersLinkClass">
                    Пользователи

                    <div class="navBar__link__trigram">
                        <div class="navBar__drop_menu show_block">
                            <ul class="navBar__drop_menu__ul">
                                <li class="navBar__drop_menu__li">
                                    <router-link :to="{ name: 'SaveUser' }"
                                                 class="navBar__drop_menu__link">
                                        Создать
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </router-link>
            </li>

            <li class="navBar__li">
                <router-link :to="{ name: 'Main' }" :class="mainPageLinkClass">Помощь</router-link>
            </li>
        </ul>

    </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'navbar',
    computed: {
        saveProductLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.name === 'SaveProduct',
            }
        },
        productsLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.name === 'Products' && this.$route.params.which === 'active',
            }
        },
        categoriesLinkClass() {
            const cats = ['categories', 'materials', 'colors'];
            return {
                'navBar__link': true,
                'navBar__link_active': cats.includes(this.$route.params.entity),
            }
        },
        /*
        materialsLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.params.entity === 'materials',
            }
        },
        colorsLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.params.entity === 'colors',
            }
        },

         */
        usersLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.name === 'Users',
            }
        },
        mainPageLinkClass() {
            return {
                'navBar__link': true,
                'navBar__link_active': this.$route.name === 'Main',
            }
        },
    },
}
</script>

