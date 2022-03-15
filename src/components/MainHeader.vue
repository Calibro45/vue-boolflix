<template>
    <header id="navbar">

        <nav class="navbar">
            <figure class="logo">
                <img src="../assets/img/boolfix.png" alt="">
            </figure>

            <searchBar />
        </nav>

    </header>
</template>

<script>

import searchBar from '../components/SearchBar.vue';

export default {
    name: 'mainHeader',
    components: {
        searchBar,
    }
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';

#navbar {
    background-color: $colorBack;

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px;
        
        .logo {
            width: 150px;
        }
        
        img {
            object-fit: contain;
            object-position: center;
        }
    }
}

    
</style>