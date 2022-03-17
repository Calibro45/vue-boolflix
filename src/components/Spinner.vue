<template>
    <div class="spinner">
        <i class="fas fa-circle-notch"></i>
    </div>
</template>

<script>

export default {
    name: 'spinnerIcon'
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/variabili.scss';
    
.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color;
    font-size: 10rem;
    filter: drop-shadow(2px 3px 6px);
    
    i {
        animation: spin 2s linear infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>