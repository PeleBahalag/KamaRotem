<template>
    <div id="education">
        <h3 id="section-title">1. חינוך</h3>
        <img src="../../assets/navs/home.png" class="rth" @click="rth">
        <div class="scrollable">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
   name:'education-layout',
   data(){
    return{}
   },
   methods : {
        rth(){
            this.$router.push("/KamaRotem") 
        }
    }
   }

</script>

<style>
@font-face {
    font-family: 'open-sans';
    src: url("../../assets/fonts/OpenSans-Regular.ttf");
}

@font-face {
    font-family: 'miri';
    src: url("../../assets/fonts/miriwin-webfont.ttf");
}

#education{
    height: 100vh;
    width: 100vw;
    position: fixed;
    top:0%;
    right:0%;
    left:0%;
    background-image: url("../../assets/background/contentbg.png");
    background-size: 100% 100%;
    color: white;
    direction: rtl;
    overflow: hidden;
}

#section-title{
    position: absolute;
    width: 100%;
    top:-0.25%;
    right:3%;
    text-align: right;
    font-weight: bold;
    font-family: 'miri';
    font-size: 4vmin;
}

.rth{
    height: 8.5vh;
    width: 8.5vh;
    position:fixed ;
    top:0.5%;
    left:0.5%;
    z-index: 4;
}

.scrollable{
    width: 100%;
    overflow-y: auto;
    padding: 2vh 2vw; /* Optional spacing */
    box-sizing: border-box;
    position: relative;
    margin-top: 2.5vh; /* or try padding-top if it feels better */
    height: calc(100vh - 10vh); /* account for the margin or header height */
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 2;
}

@media (min-width: 1025px){
    #education{
        background-image: url("../../assets/background/desktopContent.png");
    }
    #section-title{
        top:-3%;
    }
}

</style>