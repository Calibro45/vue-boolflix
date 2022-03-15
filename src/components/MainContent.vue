<template>
    <main>
        
        <searchBar />
        <p>{{ search }}</p>

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
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>