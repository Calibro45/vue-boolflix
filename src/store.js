
import Vue from 'vue';

const state = Vue.observable(
    {
        ricerca: '',
        movies: [],
        series: [],
    }
)

export default state;