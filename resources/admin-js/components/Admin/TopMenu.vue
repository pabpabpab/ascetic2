<template>
    <nav class="top_menu">

        <div class="top_menu__left">

            <a href="https://asceticshop.ru" data-logo="link" class="logo__link">
                AsceticShop.ru
            </a>

            <ul data-menu="left-short" class="top_menu__ul">
                <li class="top_menu__li">
                    <router-link :to="{ name: 'SaveProduct' }" :class="saveProductLinkClass">
                        Добавить
                    </router-link>
                </li>
                <li class="top_menu__li">
                    <router-link
                        :to="{ name: 'Products' }"
                        class="top_menu__link"
                        :class="productsLinkClass">
                        Товары
                    </router-link>
                </li>
            </ul>


            <ul data-menu="left" class="top_menu__ul">
                <li class="top_menu__li">
                    <router-link :to="{ name: 'SaveProduct' }" :class="saveProductLinkClass">
                        Добавить товар
                    </router-link>
                </li>

                <li class="top_menu__li">
                    <router-link
                        :to="{ name: 'Products' }"
                        class="top_menu__link"
                        :class="productsLinkClass">
                        Товары

                        <div class="top_menu__link_trigram">
                            <div class="top_menu__drop_menu show_block">
                                <ul class="top_menu__drop_menu__ul">
                                    <li class="top_menu__drop_menu__li">
                                        <router-link
                                            :to="{ name: 'TrashedProducts' }"
                                            class="top_menu__drop_menu__link">
                                            Удаленные
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </router-link>
                </li>

                <li data-li="category" class="top_menu__li">
                    <router-link
                        :to="{ name: 'Categories', params: { entity: 'categories' } }"
                        class="top_menu__link"
                        :class="categoriesLinkClass">Категории

                        <div class="top_menu__link_trigram">
                            <div class="top_menu__drop_menu show_block">
                                <ul class="top_menu__drop_menu__ul">
                                    <li class="top_menu__drop_menu__li">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'categories' } }"
                                            class="top_menu__drop_menu__link tal">
                                            Категории
                                        </router-link>
                                    </li>
                                    <li class="top_menu__drop_menu__li tal">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'materials' } }"
                                            class="top_menu__drop_menu__link">
                                            Материалы
                                        </router-link>
                                    </li>
                                    <li class="top_menu__drop_menu__li">
                                        <router-link
                                            :to="{ name: 'Categories', params: { entity: 'colors' } }"
                                            class="top_menu__drop_menu__link tal">
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


        <ul data-menu="right" class="top_menu__ul">

            <li class="top_menu__li">
                <router-link
                    :to="{ name: 'Users' }"
                    class="top_menu__link"
                    :class="usersLinkClass">
                    Пользователи

                    <div class="top_menu__link_trigram">
                        <div class="top_menu__drop_menu show_block">
                            <ul class="top_menu__drop_menu__ul">
                                <li class="top_menu__drop_menu__li">
                                    <router-link :to="{ name: 'SaveUser' }"
                                                 class="top_menu__drop_menu__link">
                                        Создать
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </router-link>
            </li>

            <li class="top_menu__li">
                <router-link :to="{ name: 'SettingsMenu' }" :class="settingsPageLinkClass">
                    Настройки
                </router-link>
            </li>

            <li class="top_menu__li">
                <router-link :to="{ name: 'Help' }" :class="helpPageLinkClass">
                    Помощь
                </router-link>
            </li>
        </ul>


        <ul data-menu="right" data-mobile-menu="icon" class="top_menu__ul">
            <li @click.stop="showMobileMenu()"
                class="top_menu__li top_menu__li__mobile_menu_icon">
                <img :src="mobileMenuIcon"
                     alt=""
                     class="top_menu__li__mobile_menu_icon__img">
            </li>
        </ul>
    </nav>
</template>

<script>
import mobileMenuIcon from "../../../assets/mobileMenuIcon.svg"
import {mapActions} from "vuex";

export default {
    name: 'TopMenu',
    data() {
        return {
            mobileMenuIcon: mobileMenuIcon,
        };
    },
    computed: {
        saveProductLinkClass() {
            return {
                'top_menu__link': true,
                'top_menu__link_active': this.$route.name === 'SaveProduct',
            }
        },
        productsLinkClass() {
            return {
                'top_menu__link': true,
                'top_menu__link_active': this.$route.name === 'Products',
            }
        },
        categoriesLinkClass() {
            const cats = ['categories', 'materials', 'colors'];
            return {
                'top_menu__link': true,
                'top_menu__link_active': cats.includes(this.$route.params.entity),
            }
        },
        usersLinkClass() {
            return {
                'top_menu__link': true,
                'top_menu__link_active': this.$route.name === 'Users',
            }
        },
        settingsPageLinkClass() {
            return {
                'top_menu__link': true,
                'top_menu__link_active': this.$route.name === 'Settings',
            }
        },
        helpPageLinkClass() {
            return {
                'top_menu__link': true,
                'top_menu__link_active': this.$route.name === 'Help',
            }
        },
    },
    methods: {
        ...mapActions([
            'showMobileMenu',
        ]),
    },
}
</script>

