<template>
    <div id="background">
        <h1 class="title">רקע להקמת החיל</h1>
        <p v-for="(part , index) in background.opening" :key="index">{{ part }}</p>
        <h3>הסיבות להקמת החיל</h3>
        <p>{{ background.reasons }}</p>
        <h3>חזון החיל</h3>
        <p>{{ background.vision }}</p>
        <h3>ייעוד חיל האיסוף הקרבי</h3>
        <ol>
            <li v-for="(item , index) in background.purpose" :key="index">{{ item }}</li>
        </ol>
        <div class="nav">
            <div class="footer" @click="navigate('history')">
                <img src="../../assets/navs/next.png" class="navpic">
                <p>היסטוריית החיל</p>
            </div>
        </div>
    </div>
</template>

<script>
import background from "../../assets/texts/background.json"
export default {
    data(){
        return{
            background,
        }
    },
    methods : {
        navigate(pageName){
            this.$router.push(pageName);
        }
    }
}
</script>

<style scoped>
@font-face {
        font-family: 'sans';
        src: url("../../assets/fonts/OpenSans-Regular.ttf");
    }
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
    h3{
        text-align: right !important;
    }
    .footer{
        height: 13vmin;
        text-align: left;
        padding: 2vmin;
        direction: ltr;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
    }
    .navpic{
        height: 150%;
        width: 20%;
        display: block;
    }
    .nav{
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        padding: 3%;
        padding-top:10% ;
    }
</style>