<template>
  <div id="history">
    <h1 class="title">היסטורית החיל</h1>
    <p>גללו בציר הזמן, לחצו על השנה כדי לראות מה קרה.</p>
    <div class="timeline-container">
        <div class="timeline-row">
            <div class="timeline-bar"></div>
            <div class="circle-container">
                <div class="circle" @click="yearClicked('1969')" >1969</div>
                <div class="circle" @click="yearClicked('1973')" >1973</div>
                <div class="circle" @click="yearClicked('1974')" >1974</div>
                <div class="circle" @click="yearClicked('1976')" >1976</div>
                <div class="circle" @click="yearClicked('1987')">1987</div>
                <div class="circle" @click="yearClicked('1993')" >1993</div>
                <div class="circle" @click="yearClicked('1998')" >1998</div>
                <div class="circle" @click="yearClicked('2000')" >2000</div>
                <div class="circle" @click="yearClicked('2003')" >2003</div>
                <div class="circle" @click="yearClicked('2009')" >2009</div>
                <div class="circle" @click="yearClicked('2012')" >2012</div>
                <div class="circle" @click="yearClicked('2013')" >2013</div>
                <div class="circle" @click="yearClicked('2015')" >2015</div>
                <div class="circle" @click="yearClicked('2017')" >2017</div>
            </div>
        </div>
        <div class="signifiers">
            <p>עבר</p>
            <p>המשך יבוא...</p>
        </div>
        <div class="cards-container">
            <div class="my-card" :class="{showCard : currentYear === '1969'}">
                1969
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1973'}">
                1973
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1974'}">
                74
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1976'}">76</div>
            <div class="my-card" :class="{showCard : currentYear === '1987'}">87</div>
            <div class="my-card" :class="{showCard : currentYear === '1993'}">93</div>
            <div class="my-card" :class="{showCard : currentYear === '1998'}">98</div>
            <div class="my-card" :class="{showCard : currentYear === '2000'}">2000</div>
            <div class="my-card" :class="{showCard : currentYear === '2003'}">2003</div>
            <div class="my-card" :class="{showCard : currentYear === '2009'}">2009</div>
            <div class="my-card" :class="{showCard : currentYear === '2012'}">2012</div>
            <div class="my-card" :class="{showCard : currentYear === '2013'}">2013</div>
            <div class="my-card" :class="{showCard : currentYear === '2015'}">2015</div>
            <div class="my-card" :class="{showCard : currentYear === '2017'}">2017</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentYear : '',

        }
    },
    methods : {
        yearClicked(year){
            this.currentYear = year;
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
    @font-face {
        font-family: 'miri';
        src: url('../../assets/fonts/miriwin-webfont.ttf');
    }
    #history{
        width: 100%;
        text-align: right;
        color: white;
        text-align: center;
    }
    .title{
        font-family: 'migdal';
        font-size: 11vmin;
        margin: 0!important;
        text-align: right;
        position: relative;
        top:10vh;
    }
    p{
        text-align: right;
        position: relative;
        top:10vh;
    }
    .timeline-container{
        padding: 3%;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        right: 0;
        top:10vh;
        height: auto;
    }
    .timeline-row{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        right :0;
        height: 10vh;
        width: 200vw;
    }
    .timeline-bar{
        font-family: 'miri';
        height: 1vh;
        border-radius: 12px;
        margin-bottom: 10px;
        width:765vw;
        position: absolute;
        top: 35%;
        right: 0;
        background-color: white;
        transform: translateY(-50%);
        border-radius: 12px;
        z-index: 1;
    }
    .circle-container{
        width: 700vw;
        position: absolute;
        display: flex;
        gap: 40vw;
        flex-wrap: nowrap;
        justify-content: center;
        z-index: 2;
        right:32vw;
    }
    .signifiers{
        position: absolute;
        right:0;
        width: 735vw;
        display: flex;
        justify-content: space-between;
        font-family: 'miri';
        margin: 0;
        padding: 0%;
        top:-4vmin;
    }
    .circle{
        height: 7vh;
        width: 15vh;
        border-radius: 40px;
        background-color: rgb(0, 195, 255);
        border: 2px rgb(0, 127, 177) solid;
        font-size: 6vmin;
        display: flex;
        color: black;
        flex-flow: column;
        justify-content: center;
        padding-right:3px;
        text-align: center;
    }
    .cards-container{
        position: relative;
        width:792vw;
        top:0;
        right:-20vw;
        height: 40vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        overflow-x: auto;
        padding-right:12vw ;
    }
    .my-card{
        width: 52vw;
        height:100%;
        background-color: rgba(255, 255, 255, 0.726);
        pointer-events: none;
        z-index: 5;
        color: black;
        border-radius: 20px;
        padding: .25%;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .showCard{
        opacity: 1 !important;
    }
</style>