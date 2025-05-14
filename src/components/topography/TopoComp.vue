<template>
  <div>
    <h1 class="title">טופוגרפיה</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>
@font-face {
        font-family: 'migdal';
        src: url("../../assets/fonts/migdalfontwin-webfont.ttf");
    }
    #background{
        width: 100%;
        text-align: right;
        color: white;
        text-align: center;
    }
.title{
        font-family: 'migdal';
        font-size: 12vmin;
        margin: 0!important;
        text-align: right;
    }
</style>