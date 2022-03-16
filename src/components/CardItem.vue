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
            <p>{{ element.original_language }}</p>
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
            img: {
                ita: require('@/assets/img/ita.png'),
                eng: require('@/assets/img/eng.png'),
            },
        };
    },

    methods: {

        setLanguage: function(language) {

            if (language === 'it') {
                return this.img.ita;
            } else if (language === 'en') {
                return this.img.eng;
            }
        },
    },
}

</script>

<style lang="scss" scoped>
    
</style>