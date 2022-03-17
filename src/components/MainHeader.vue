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

            <div class="hamburger" :class="activeMenu === true ? 'active' : ''">
                <i class="fas fa-bars"
                @click="setMenu()"></i>
                <ol class="nav-link">
                    <li :class="activeLink === i ? 'active' : ''" 
                    v-for="(link, i) in links" :key="i"
                    @click="setActive(i)">
                        <a href="#">{{ link }}</a>
                    </li>
                </ol>
            </div>

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
            activeMenu: true,
        }
    },
    methods: {
        setActive: function(index) {
            this.activeLink = index;
        },
        setMenu: function() {
            return this.activeMenu = !this.activeMenu;
        }

    },
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';
@import '../assets/scss/mixins.scss';

#navbar {
    background-color: $colorBack;
    position: relative;

    .navbar {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        gap: 25px;
        
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

        .hamburger {
            font-size: 1.75rem;
            vertical-align: middle;
            display: none;

            &.active .nav-link  {
                @include hamburger;
                background-color: $colorBack;
            }

            &:hover {
                cursor: pointer;
            }

            i:hover {
                color: $color;
            }
        }

        .search_bar {
            margin-left: auto;
        }
    }
}

@media screen and (max-width: 768px) {

    #navbar {
        .navbar {
            .nav-link {
                display: none;
            }

            .hamburger {
                display: block;
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