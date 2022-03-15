<template>
    <main>
        
        <searchBar />

        <ol v-for="movie in movies" :key="movie.id">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li class="languages">
                <img :src="setLanguage(movie.original_language)" alt="">
            </li>
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
    data() {
        return {
            img: {
                ita: require('@/assets/img/ita.png'),
                eng: require('@/assets/img/eng.png'),
            },
        }
    },

    methods: {

        setLanguage: function(language) {

            if (language === 'it') {
                return this.img.ita;
            } else {
                return this.img.eng;
            }
        },
    },

    computed: {

        movies: function() {
            return state.movies;
        }
    }
}
</script>

<style lang="scss" scoped>

.languages {
    width: 25px;
    height: 25px;

    img {
        object-fit: cover;
        object-position: center;
    }
}

</style>