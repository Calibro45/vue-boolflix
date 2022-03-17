<template>
    <header id="navbar">

        <nav class="navbar">
            <figure class="logo">
                <img src="../assets/img/boolfix.svg" alt="">
            </figure>

            <figure class="logo-sm">
                <img src="../assets/img/B.svg" alt="">
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

        .logo-sm {
            height: 50px;
            display: none;

            img {
                aspect-ratio: 1;
            }
        }
    }
}

@media screen and (max-width: 576px) {
     
    #navbar {
        .navbar {
            .logo {
                display: none;
            }
            
            .logo-sm {
                display: block;
            }
        }
    }
}

    
</style>