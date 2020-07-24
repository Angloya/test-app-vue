<template>
  <div
    id="app"
    class="app__content">
    <router-view/>
    <RightSideContent/>
  </div>
</template>

<script>
import RightSideContent from '@/components/RightSideContent.vue'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getPersons')
  },
  components: {
    RightSideContent
  }
}
</script>

<style lang="scss">
  html {
    background: #f2f3f5;
  }
  * {
    box-sizing: border-box;
  }
  .app__content {
      font-family: 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0 auto;
      width: 1200px;
      height: 100%;
      min-height: 400px;
      display: flex;
      justify-content: center;
    }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
      opacity: 0;
      transform: translateY(30px);
    }
</style>