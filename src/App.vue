<template>
  <div id="app">

    <mainHeader />
    
    <mainContent />

  </div>
</template>

<script>

import mainContent from './components/MainContent.vue';
import mainHeader from './components/MainHeader.vue';

export default {
  name: 'App',
  components: {
    mainContent,
    mainHeader,
  }
}

</script>

<style lang="scss">

@import './assets/scss/common.scss';

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
