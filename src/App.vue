<script>
import HomeScreen from './components/HomeScreen.vue'
  export default{
  components: { HomeScreen },
    data(){
      return{
        currentPage: 'home'
      }
    },
    methods : {
      navigate(pageName){
        this.currentPage = pageName;
      }
    }
  }
</script>

<template>
  <div id="app">
    <home-screen v-if="currentPage === 'home'" @move-page="navigate"></home-screen>
  </div>
</template>

<style scoped>
#app{
  height: 100vw;
  width: 100vh;
}
</style>
