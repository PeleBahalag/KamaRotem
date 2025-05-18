<template>
  <div id="history">
    <h1 class="title">היסטורית החיל</h1>
    <p class="instruct">גללו בציר הזמן, לחצו על השנה כדי לראות מה קרה.</p>
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
                <h5>{{ timeline.sixtynine.title }}</h5>
                <p v-for="(line , index) in timeline.sixtynine.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1973'}">
                <h5>{{ timeline.seventythree.title }}</h5>
                <p v-for="(line , index) in timeline.seventythree.text" :key="index"> {{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1974'}">
                <h5>{{ timeline.seventyfour.title }}</h5>
                <img src="../../assets/graphics/414.png" class="gdud-logo">
                <p v-for="(line , index) in timeline.seventyfour.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1976'}">
                <h5>{{ timeline.seventysix.title }}</h5>
                <img src="../../assets/graphics/869.png" class="gdud-logo">
                <p v-for="(line , index) in timeline.seventysix.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1987'}">
                <h5>{{ timeline.eightyseven.title }}</h5>
                <p v-for="(line , index) in timeline.eightyseven.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1993'}">
                <h5>{{ timeline.ninetythree.title }}</h5>
                <img src="../../assets/graphics/636.png" class="gdud-logo">
                <p v-for="(line , index) in timeline.ninetythree.text" :key="index">{{ line }}</p>
                <!--636 image-->
            </div>
            <div class="my-card" :class="{showCard : currentYear === '1998'}">
                <h5>{{ timeline.ninetyeight.title }}</h5>
                <p v-for="(line , index) in timeline.ninetyeight.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2000'}">
                <h5>{{ timeline.alpayim.title }}</h5>
                <p >{{ timeline.alpayim.text }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2003'}">
                <h5>{{ timeline.three.title }}</h5>
                <p>{{ timeline.three.opening }}</p>
                <ul>
                    <li v-for="(item , index) in timeline.three.list" :key="index">{{ item }}</li>
                </ul>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2009'}">
                <h5>{{ timeline.nine.title }}</h5>
                <p v-for="(line , index) in timeline.nine.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2012'}">
                <h5>{{ timeline.twelve.title }}</h5>
                <img src="../../assets/graphics/727.png" class="gdud-logo">
                <p v-for="(line , index) in timeline.twelve.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2013'}">
                <h5>{{ timeline.thirteen.title }}</h5>
                <img src="../../assets/graphics/595.png" class="gdud-logo">
                <p v-for="(line , index) in timeline.thirteen.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2015'}">
                <h5>{{ timeline.fifteen.title }}</h5>
                <p v-for="(line , index) in timeline.fifteen.text" :key="index">{{ line }}</p>
            </div>
            <div class="my-card" :class="{showCard : currentYear === '2017'}">
                <h5>{{ timeline.seventeen.title }}</h5>
                <p v-for="(line , index) in timeline.seventeen.text" :key="index">{{ line }}</p>
            </div>
        </div>
    </div>
    <div class="footer">
            <div class="item" @click="navigate('background')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>רקע על החיל</p>
            </div>
        </div>
  </div>
</template>

<script>
import timeline from "../../assets/texts/timline.json"
export default {
    data(){
        return{
            currentYear : '',
            timeline
        }
    },
    methods : {
        yearClicked(year){
            this.currentYear = year;
        },
        navigate(child){
            this.$router.push(child) ;
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
        top:4vh;
    }
    .instruct{
        text-align: right;
        position: relative;
        top:4.5vh;
    }
    .timeline-container{
        padding: 3%;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        right: 0;
        top:4.5vh;
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
        width: 778vw;
        display: flex;
        justify-content: space-between;
        font-family: 'miri';
        margin: 0;
        padding: 0%;
        top:15vmin;
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
        top:0vh;
        right:-20vw;
        height: 60vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        overflow-x: auto;
        padding-right:12vw ;
    }
    .my-card{
        width: 52vw;
        height: auto;
        max-height: 60vh;
        background-color: rgba(255, 255, 255, 0.726);
        z-index: 5;
        color: black;
        border-radius: 30px;
        padding: .5%;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow-y: auto;
        margin-bottom:1% ;
    }

    .showCard{
        opacity: 1 !important;
    }
    .gdud-logo{
        height: 20%;
        width: 50%;
    }
    .footer{
        position: fixed;
        bottom: 4%;
        display: flex;
        flex-flow: row nowrap;
        height: 13vmin;
        width: 100%;
        justify-content: space-between;
        padding-top: 2vmin;
        z-index: 13;
        margin-bottom: 10vmin;
    }
    .navs{
        height:100%;
        width: 50%;
    }
    .item{
        height: 100%;
        width: 30%;
    }
</style>