<template>
    <nav class="navBar">
        <ul class="navBar__link">
            <li><router-link :to="{ name: 'MainPage' }">Main</router-link></li>
            <li><router-link :to="{ name: 'AboutPage' }">About</router-link> </li>
            <li><router-link :to="{ name: 'UsersPage' }">Users</router-link> </li>
            <li><router-link :to="{ name: 'Categories' }">Categories</router-link></li>
            <li><router-link :to="{ name: 'SaveProduct' }">Add product</router-link></li>
            <li><router-link :to="{ name: 'Products' }">Products</router-link> </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

