<template>
    <div class="card-wrap">
        
        <figure class="card-header">
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
                <span class="rating" v-else>{{ element.original_language }}</span>
                <p>
                    <i :class="(n <= setVote(element.vote_average)) ? 'fas fa-star' : 'far fa-star'" 
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
            posterNull: 'https://montagnolirino.it/wp-content/uploads/2015/12/immagine-non-disponibile.png',
            flags: {
                it: require('@/assets/img/ita.png'),
                en: require('@/assets/img/eng.png'),
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

.card-wrap {
    position: relative;
    display: flex;
    flex-direction: column;

    &::after {
        display: none;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        opacity: 0.7;
    }

    &:hover::after,
    &:hover .card-body {
        display: block;
        cursor: pointer;
    }


    .card-header {
        flex-grow: 1;

    }

    .card-body {
        position: absolute;
        bottom: 10px;
        left: 10px;
        padding: 5px 10px;
        z-index: 1;
        display: none;

        .flags {
            height: 30px;
        }
    }
}

</style>