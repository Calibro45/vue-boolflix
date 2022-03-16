<template>
    <div class="card-wrap">
        
        <figure class="card-poster">
            <img :src="poster + element.poster_path">
        </figure>

        <div class="card-body">
            <h4 class="title">{{ element.title || element.name }}</h4>
            <h4 class="original-title" v-show="(element.title === element.original_title) ? false : true ">
                {{ element.original_title || element.original_name }}
            </h4>
        </div>

        <div class="card-footer">
            <img :src="flags[element.original_language]" class="flags"
            v-if="flags[element.original_language]">
            <span class="rating" v-else>{{ element.original_language }}</span>
            <p>{{ setVote(element.vote_average) }}</p>
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
    }
}

</script>

<style lang="scss" scoped>

.card-wrap {

    .card-poster {

        img {
            object-fit: contain;
            object-position: center;
        }
   
    }

    .card-body {

    }

    .card-footer {
        
        .flags {
            height: 30px;
        }
    }
           
}
    
</style>