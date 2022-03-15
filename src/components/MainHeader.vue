<template>
    <header id="navbar">
        <nav class="navbar">
            <figure class="logo">
                <img src="../assets/img/boolfix.png" alt="">
            </figure>
        </nav>
    </header>
</template>

<script>


export default {
    name: 'mainHeader',
}

</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';

#navbar {
    background-color: $colorBack;

    .navbar {

        padding: 15px 10px;
        
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