<template>
    <div>
        
        <input type="text" name="search" placeholder="Ricerca Film" v-model="search" @keyup.enter="setRicerca">
        <button @click="setRicerca">Ricerca</button>

    </div>
</template>

<script>

import state from '../store.js';

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
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>