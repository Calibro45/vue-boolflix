<template>
    <header id="navbar">

        <nav class="navbar">
            <figure class="logo">
                <img src="../assets/img/boolfix.svg" alt="">
            </figure>
             <figure class="logo-sm">
                <img src="../assets/img/B.svg" alt="">
            </figure>

            <ol class="nav-link">
                <li :class="activeLink === i ? 'active' : ''" 
                v-for="(link, i) in links" :key="i"
                @click="setActive(i)">
                    <a href="#">{{ link }}</a>
                </li>
            </ol>

            <searchBar class="search_bar"/>
        </nav>

    </header>
</template>

<script>

import searchBar from '../components/SearchBar.vue';

export default {
    name: 'mainHeader',
    components: {
        searchBar,
    },
    data() {
        return {
            links: [
                'home',
                'film',
                'serie tv',
            ],
            activeLink: '',
        }
    },
    methods: {
        setActive: function(index) {
            this.activeLink = index;
        }
    }
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';
@import '../assets/scss/mixins.scss';

#navbar {
    background-color: $colorBack;

    .navbar {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        gap: 25px;
        
        .logo {
            width: 150px;
        }

        .nav-link {
            display: contents;

            li {
                @include navLink;
                font-size: 14px;
                padding: 5px 8px;

                &.active a::after {
                    display: block;
                }

                a {
                    position: relative;

                    &::after {
                        @include linkAfter;
                        display: none;
                    }

                    &:hover::after {
                        @include linkAfter;
                    }
                }
            }
        }

        .logo-sm {
            height: 50px;
            display: none;

            img {
                aspect-ratio: 1;
            }
        }

        .search_bar {
            margin-left: auto;
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