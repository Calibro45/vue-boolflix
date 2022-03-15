<template>
    <div>
        
        <input type="text" name="search" placeholder="Ricerca Film" v-model="search" @keyup="fetchFilm()">
        <button @click="setRicerca, fetchFilm()">Ricerca</button>

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
        }
    },

    methods: {
        setRicerca: function() {
            state.ricerca = this.search;
            this.search = '';
            console.log(state.ricerca);
        },

        fetchFilm: function() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '11a0338b86751aa1750a4d8dbcad1fdc',
                    query: this.search,
                    language: 'it-IT',
                }
            })
            .then( res => {
                //console.log(res.data);
                state.movies = res.data.results;
            })
            .catch( error => {
                console.log(error.response);
            })
        },
    },

    
}
</script>

<style lang="scss" scoped>
    
</style>