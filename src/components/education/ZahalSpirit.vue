<template>
    <div id="spirit">
        <h1 class="title">רוח צה"ל</h1>
        <p class="content">{{ education.firstPara }}</p>
        <h5>ערכי היסוד</h5>
        <ul>
            <li v-for="(index , item) in education.baseValues" :key="index">
                {{ item.title }} - {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import education from "../../assets/texts/education.json"
export default {
    data() {
        return{
            education,
        }
    }
}
</script>

<style>
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
        border: 2px red solid;
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

    @media (min-width: 1025px){
        .content{
            font-size: 3vmin;
        }
        h5{
            font-size: 4vmin;
        }
        li{
            font-size: 3vmin;
        }
    }

    
</style>