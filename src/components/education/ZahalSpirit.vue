<template>
    <div id="spirit">
        <h1 class="title">רוח צה"ל</h1>
        <p class="content">{{ education.firstPara }}</p>
        <h5>ערכי היסוד</h5>
        <ul>
            <li v-for="(item, index) in education.baseValues" :key="index">
                <strong>{{ item.title }}</strong> {{ item.text }}
            </li>
        </ul>
        <img src="../../assets/graphics/arachim.png" class="arachim">
        <p class="content">{{ education.valuesEnd }}</p>
        <div class="nav">
            <div class="footer" @click="navigate('decleration')">
                <img src="../../assets/navs/next.png" class="navpic">
                <p>מגילת העצמאות</p>
            </div>
        </div>
    </div>
</template>

<script>
import education from "../../assets/texts/education.json"
export default {
    data() {
        return{
            education,
        }
    },
    methods : {
        navigate(child){
            this.$router.push(child);
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
    #spirit{
        width: 100%;
        text-align: right;
        color: white;
    }
    .title{
        font-family: 'migdal';
        font-size: 12vmin;
        margin: 0!important;
    }
    .content{
        font-family: 'sans';
        text-align: center;
    }
    .subtitles{
        font-weight: bold;
    }
    h5{
        font-size: 5vmin;
        margin: 0!important;
    }
    .arachim{
        width: 100%;
    }
    .footer{
        height: 13vmin;
        text-align: left;
        padding: 2vmin;
        direction: ltr;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        margin-bottom: 10vmin;
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

    @media (min-width: 1025px){
        .content{
            font-size: 3vmin;
        }
        h5{
            font-size: 6vmin !important;
        }
        li{
            font-size: 3vmin;
        }
        .arachim{
            width: 30%;
            text-align: center;
            margin: auto;
        }
        .spirit{
            text-align: center;
        }
    }

    
</style>