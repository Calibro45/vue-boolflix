<template>
    <main>
        
        <searchBar />

        <ol v-for="movie in movies" :key="movie.id">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ol>

    </main>
</template>

<script>

import searchBar from '../components/SearchBar.vue';
import state from '../store.js';

export default {
    name: 'mainContent',
    components: {
        searchBar,
    },
    computed: {
        search: function() {
            return state.ricerca;
        },
        movies: function(){
            return state.movies;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>