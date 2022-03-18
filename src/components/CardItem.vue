<template>
    <div class="card-wrap">
        
        <figure class="card-header" :class="img === posterNull ? 'no-poster' : ''">
            <img :src="img">
        </figure>

        <div class="card-body">

            <div class="card-description">
                <h4 class="title">{{ element.title || element.name }}</h4>
                <h4 class="original-title" v-show="(element.title === element.original_title) ? false : true ">
                    {{ element.original_title || element.original_name }}
                </h4>
            </div>

            <div class="card-info">
                <img :src="flags[element.original_language]" class="flags"
                v-if="flags[element.original_language]">
                <span class="language" v-else>{{ element.original_language }}</span>
                <p class="rating">
                    <i :class="(n <= setVote(element.vote_average)) ? 'fas fa-star red' : 'far fa-star red'" 
                    v-for="n in 5" :key="n"></i>
                </p>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: 'cardItem',
    props: {
        element: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            poster: 'https://image.tmdb.org/t/p/w342/',
            posterNull: require('@/assets/img/B.svg'),
            flags: {
                it: require('@/assets/img/ita.png'),
                en: require('@/assets/img/eng.png'),
                de: require('@/assets/img/de.png'),
                es: require('@/assets/img/es.png'),
                fr: require('@/assets/img/fr.png'),
                cn: require('@/assets/img/cn.png'),
            },
        };
    },
    methods: {
        setVote: function(voto) {
            const rating = voto / 2;
            return Math.round(rating);
        }
    },
    computed: {
        img: function() {
            if(this.element.poster_path != null) {
                return this.poster + this.element.poster_path;
            }else {
                return this.posterNull;
            }
        }
    },
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';
@import '../assets/scss/mixins.scss';

.card-wrap {
    @include cardWrap;

    &::after {
        @include cardAfter;
    }

    &:hover::after,
    &:hover .card-body {
        display: block;
        cursor: pointer;
    }


    .card-header {
        flex-grow: 1;

        &.no-poster {
            display: flex;
            align-items: center;
            background-color: $colorBack;

            img {
                height: 70px;
            }
        }

        img {
            margin: 0 auto;
        }
    }

    .card-body {
        @include cardBody;

        .card-description {
            font-size: 14px;
            margin-bottom: 0.75rem;

            .title {
                margin-bottom: 0.5rem;
            }
        }

        .card-info {

            display: flex;
            align-items: center;
            justify-content: space-between;

            .flags {
                height: 30px;
            }

            .language {
                text-transform: uppercase;
            }

            .rating {

                .red {
                    color: $color;
                    font-size: 14px;
                }
            }
        }

    }
}

</style>