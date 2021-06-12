<template>
    <div class="home">
        <h1>
            {{ count }}
        </h1>
        <button class="btn" @click="$store.commit('increment')">increment</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MainPage',
    computed: {
        ...mapState({
            count: state => state.count
        }),
    }
}
</script>
