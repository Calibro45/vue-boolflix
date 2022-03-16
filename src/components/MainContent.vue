<template>
    <main id="film">

        <!-- <ol v-for="movie in movies" :key="movie.id">
            <li>Titolo: {{ movie.title }}</li>
            <li v-show="(movie.title === movie.original_title) ? false : true ">
                Titolo Originale: {{ movie.original_title }}
            </li>
            <li class="languages">
                <img :src="setLanguage(movie.original_language)" :alt="movie.original_language">
            </li>
            <li>Rating: {{ movie.vote_average }}</li>
        </ol> -->

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