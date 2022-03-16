<template>
    <main id="film">

        <cardItem v-for="movie in movies" :key="movie.id" :element="movie"/>

    </main>
</template>

<script>

import state from '../store.js';
import cardItem from './CardItem.vue';

export default {
    name: 'mainContent',
    components: {
        cardItem,
    },

    computed: {

        movies: function() {
            return state.movies;
        }
    }
}

</script>

<style lang="scss" scoped>

#film {
    padding: 20px 10px;
}

</style>