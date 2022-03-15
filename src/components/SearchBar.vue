<template>
    <div>
        
        <input type="text" name="search" placeholder="Ricerca Film" class="search-bar"
        v-model="search" @keyup="fetchFilm()">
        <button class="search-cta"
        @click="fetchFilm()">Ricerca</button>

    </div>
</template>

<script>

import state from '../store.js';
import axios from 'axios';

export default {
    name: 'searchBar',

    data() {
        return {
            search: '',
            url: 'https://api.themoviedb.org/3',
            apiKey: '11a0338b86751aa1750a4d8dbcad1fdc',
            language: 'it-IT',
        }
    },

    methods: {

        fetchFilm: function() {

            if (this.search != '') {

                axios.get(`${this.url}/search/movie`, {
                    params: {
                        api_key: this.apiKey,
                        query: this.search,
                        language: this.language,
                    }
                })
                .then( res => {
                    //console.log(res.data);
                    state.movies = res.data.results;
                    }
                )
                .catch( error => {
                    console.log(error.response);
                })
            } 
            state.movies = [];
        },
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/mixins.scss';
@import '../assets/scss/variabili.scss';

.search-bar {
    @include input;
    font-size: 18px;
    margin-right: 2px;

    &:focus {
        outline: 1px solid $color;
    }
}
    
.search-cta {
    @include button;
    font-size: 18px;
    opacity: 0.9;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}

</style>