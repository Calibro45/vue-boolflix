<template>
    <div>
        
        <figure>
            <img :src="poster + element.poster_path" alt="">
        </figure>
        <div>
            <h3>{{ element.title }}</h3>
            <h3 v-show="(element.title === element.original_title) ? false : true ">
                {{ element.original_title }}
            </h3>
        </div>
        <div>
            <img :src="flags[element.original_language]" alt="" v-if="flags[element.original_language]">
            <span v-else>{{ element.original_language }}</span>
            <p>{{ element.vote_average }}</p>
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
            poster: 'https://image.tmdb.org/t/p/w342',
            flags: {
                it: require('@/assets/img/ita.png'),
                en: require('@/assets/img/eng.png'),
            },
        };
    },
    methods: {
        setFlags: function() {
        }
    },
}

</script>

<style lang="scss" scoped>
    
</style>