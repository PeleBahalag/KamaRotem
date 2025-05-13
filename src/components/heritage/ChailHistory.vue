<template>
  <div id="history">
    <h1 class="title">היסטורית החיל</h1>
    <p>גללו בציר הזמן, לחצו על השנה כדי לראות מה קרה.</p>
    <div class="timeline-container">
        <div class="timeline-row">
            <div class="timeline-bar"></div>
            <div class="circle-container">
                <div class="circle" @click="yearClicked('1969' , 'circ69')" ref="circ69">1969</div>
                <div class="circle" @click="yearClicked('1973' , 'circ73')" ref="circ73">1973</div>
                <div class="circle" @click="yearClicked('1974' , 'circ74')" ref="circ74">1974</div>
                <div class="circle" @click="yearClicked('1976' , 'circ76')" ref="circ76">1976</div>
                <div class="circle" @click="yearClicked('1987' , 'circ87')" ref="circ87">1987</div>
                <div class="circle" @click="yearClicked('1993' , 'circ93')" ref="circ93">1993</div>
                <div class="circle" @click="yearClicked('1998' , 'circ98')" ref="circ98">1998</div>
                <div class="circle" @click="yearClicked('2000' , 'circ2000')" ref="circ2000">2000</div>
                <div class="circle" @click="yearClicked('2003' , 'circ03')" ref="circ03">2003</div>
                <div class="circle" @click="yearClicked('2009' , 'circ09')" ref="circ09">2009</div>
                <div class="circle" @click="yearClicked('2012' , 'circ12')" ref="circ12">2012</div>
                <div class="circle" @click="yearClicked('2013' , 'circ13')" ref="circ13">2013</div>
                <div class="circle" @click="yearClicked('2015' , 'circ15')" ref="circ15">2015</div>
                <div class="circle" @click="yearClicked('2017' , 'circ17')" ref="circ17">2017</div>
            </div>
        </div>
        <div class="signifiers">
            <p>עבר</p>
            <p>המשך יבוא...</p>
        </div>
        <div class="cards-container">
            <div class="my-card" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati perferendis quas, at quisquam unde quaerat iusto voluptatibus nemo quod qui, eligendi omnis quidem. Nobis at doloribus sint illum perspiciatis.</div>
            <div class="my-card" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit illo hic quibusdam molestiae incidunt consectetur facilis est rem placeat, harum vero voluptate, laudantium, quas soluta doloribus eius? Hic, molestiae.</div>
            <div class="my-card" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae odio dolorem. Ut placeat, tempore culpa nisi explicabo dicta ea quia iure odit accusamus porro repellat accusantium quisquam dolore illo.</div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
            <div class="my-card" ></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentYear : '',
            activeCardLeft : 0,
        }
    },
    methods : {
        yearClicked(year , refName){
            this.currentYear = year;
            this.$nextTick(() => {
                const circleEl = this.$refs[refName];
                if (circleEl) {
                const rect = circleEl.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const containerRect = this.$el.getBoundingClientRect(); // history component
                this.activeCardLeft = centerX - containerRect.left - (cardWidth / 2);
                }
            })
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
        width:715vw;
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
        right:15vw;
    }
    .signifiers{
        position: absolute;
        right:0;
        width: 510vw;
        display: flex;
        justify-content: space-between;
        font-family: 'miri';
        margin: 0;
        padding: 0%;
        top:-30px;
    }
    .circle{
        height: 7vh;
        width: 10vh;
        border-radius: 40px;
        background-color: rgb(0, 195, 255);
        border: 2px rgb(0, 127, 177) solid;
        font-size: 5vmin;
        display: flex;
        color: black;
        flex-flow: column;
        justify-content: center;
    }
    .cards-container{
        position: relative;
        width:755vw;
        top:-5vh;
        background-color: rgba(224,156,13,0.2);
        right:-20vw;
        height: 40vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        overflow-x: auto;
        padding-right:15vw ;
    }
    .my-card{
        width: 50vw;
        height:100%;
        background-color: blue;
        pointer-events: none;
        z-index: 5;
    }
    .showCard{
        opacity: 1 !important;
        pointer-events: auto;
    }
</style>