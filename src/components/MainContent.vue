<template>
    <main id="film">

        <ol v-for="movie in movies" :key="movie.id">
            <li>Titolo: {{ movie.title }}</li>
            <li v-show="(movie.title === movie.original_title) ? false : true ">
                Titolo Originale: {{ movie.original_title }}
            </li>
            <li class="languages">
                <img :src="setLanguage(movie.original_language)" :alt="movie.original_language">
            </li>
            <li>Rating: {{ movie.vote_average }}</li>
        </ol>

    </main>
</template>

<script>

import state from '../store.js';

export default {
    name: 'mainContent',

    data() {
        return {
            img: {
                ita: require('@/assets/img/ita.png'),
                eng: require('@/assets/img/eng.png'),
            },
        };
    },

    methods: {

        setLanguage: function(language) {

            if (language === 'it') {
                return this.img.ita;
            } else if (language === 'en') {
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

#film {
    padding: 20px 10px;

    .languages {
        width: 25px;
        height: 25px;
    
        img {
            object-fit: cover;
            object-position: center;
        }
    }
}

</style>