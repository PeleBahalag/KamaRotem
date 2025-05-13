<template>
    <div id="education">
        <h3 id="section-title">{{ dynamicTitle }}</h3>
        <img src="../../assets/navs/home.png" class="rth" @click="rth">
        <div class="scrollable" :class="{map:isMap}">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
   name:'education-layout',
   data(){
    return{

    }
   },
   methods : {
        rth(){
            this.$router.push("/KamaRotem");
        }
    },
    computed : {
        dynamicTitle(){
            const path = this.$route.path;
            if(path.includes('spirit') || path.includes('decleration') || path.includes('war') || path.includes('vips') || path.includes('holidays')) {return "1. חינוך"} 
            if(path.includes('map')){return "2. מפה אילמת"}
            if(path.includes('background') || path.includes('history') || path.includes('gdudim')){return "3. מורשת החיל"}
            else{ return "4. טופוגרפיה"}
            
        },
        isMap(){
            if(this.$route.path.includes('map')) {return true}
            return false;
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
    font-family: 'open-sans';
}

#section-title{
    position: absolute;
    width: 100%;
    top:1%;
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
    padding: 2vh 2vw; /* Optional spacing */
    box-sizing: border-box;
    position: relative;
    margin-top: 5vh; /* or try padding-top if it feels better */
    height: calc(100vh - 10vh); /* account for the margin or header height */
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 2;
}

.map{
    overflow-y: hidden !important;
}

@media (min-width: 1025px){
    #education{
        background-image: url("../../assets/background/desktopContent.png");
    }
    #section-title{
        top:0%;
    }
}

</style>