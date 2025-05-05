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
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
