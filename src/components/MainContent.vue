<template>
    <main id="main-content">

        <section id="film">

            <h2 v-if="movies.length > 0">Film</h2>

            <div class="card-wrapper">
                <cardItem v-for="movie in movies" :key="movie.id" :element="movie"
                class="card-item"/>
            </div>

        </section>

        <section id="series">

            <h2 v-if="series.length > 0">Serie Tv</h2>

            <div class="card-wrapper">
                <cardItem v-for="serie in series" :key="serie.id" :element="serie"
                class="card-item"/>
            </div>

        </section>


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
        },

        series: function() {
            return state.series;
        }
    }
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';

#main-content {
    padding: 20px 10px;
    background-color: rgba($colorBack, 0.9);
    flex-grow: 1;overflow-x: hidden;
    overflow-y: scroll;

    
    #film, #series {
        
        .card-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 20px 1%;

            .card-item {
                width: calc( 95% / 6 );
            }
        }
    }
}

</style>