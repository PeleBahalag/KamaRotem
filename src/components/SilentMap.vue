<template>
    <div>
        <p class="instruction">בכל פעם יצבע איזור במפה - לחצו על<br> השם שלו. אם הצלחתם יצבע איזור נוסף
        </p>
        <div class="game-container">
            <div class="answers">
                <div class="myBtn" v-if="!found[0].found" @click="checkAnswer('negev')">הנגב</div>
                <div class="myBtn" v-if="!found[2].found" @click="checkAnswer('hula')">עמק החולה</div>
                <div class="myBtn" v-if="!found[3].found" @click="checkAnswer('mishor')">מישור החוף</div>
                <div class="myBtn" v-if="!found[4].found" @click="checkAnswer('arava')">ערבה + בקעת הירדן</div>
                <div class="myBtn" v-if="!found[5].found" @click="checkAnswer('hermon')">החרמון</div>
                <div class="myBtn" v-if="!found[6].found" @click="checkAnswer('carmel')">הכרמל + השומרון</div>
                <div class="myBtn" v-if="!found[7].found" @click="checkAnswer('galil')">הגליל</div>
                <div class="myBtn" v-if="!found[8].found" @click="checkAnswer('yehuda')">יהודה</div>
                <div class="myBtn" v-if="!found[1].found" @click="checkAnswer('golan')">רמת הגולן</div>
                <div class="myBtn" v-if="!found[9].found" @click="checkAnswer('amakim')">איזור העמקים</div>
            </div>
            <div class="map-container">
                <!--right answer indicators-->
                <div class="dropzones">
                    <img src="../assets/map/amakim.png" id="amakim-right" v-show="found[9].found || currentArea === 'amakim'"/>
                    <img src="../assets/map/arava.png" id="arava-right" v-show="found[4].found || currentArea === 'arava'"/>
                    <img src="../assets/map/carmelShomron.png" id="carmelShomron-right" v-show="found[6].found || currentArea === 'carmel'"/>
                    <img src="../assets/map/golan.png" id="golan-right" v-show="found[1].found || currentArea === 'golan'"/>
                    <img src="../assets/map/hermon.png" id="hermon-right" v-show="found[5].found || currentArea === 'hermon'"/>
                    <img src="../assets/map/hula.png" id="hula-right" v-show="found[2].found || currentArea === 'hula'"/>
                    <img src="../assets/map/mishorHof.png" id="mishor-right" v-show="found[3].found || currentArea === 'mishor'"/>
                    <img src="../assets/map/negev.png" id="negev-right" v-show="found[0].found || currentArea === 'negev'"/>
                    <img src="../assets/map/yehuda.png" id="yehuda-right" v-show="found[8].found || currentArea === 'yehuda'"/>
                    <img src="../assets/map/galil.png" id="galil-right" v-show="found[7].found || currentArea === 'galil'"/>
                </div>
            </div>
        </div>
        <p class="feedback" :style="{color:feedbackColor}">{{ feedback }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            found : [{name:'negev' , found:false} , //0
            {name:'golan' , found:false} ,//1
            {name:'hula' , found:false} ,//2
            {name:'mishor' , found:false} ,//3
            {name:'arava' , found:false} ,//4
            {name:'hermon' , found:false} ,//5
            {name:'carmel' , found:false} ,//6
            {name:'galil' , found:false} ,//7
            {name:'yehuda' , found:false} ,//8
            {name:'amakim' , found:false} //9
            ], 
            currentArea : '',
            areas : ['negev' , 'golan' , 'hula' , 'mishor' , 'arava' , 'hermon' , 'carmel' , 'galil' ,'yehuda' , 'amakim'], //we will shuffle this array on mounted tu ensure random order each time.
            stage:0,
            feedback : '',
            positive : "תשובה נכונה! קדימה לאיזור הבא.",
            negative : "טעות, נסו עוד פעם.",
            feedbackColor : ''
        }
    },
    methods : {
        checkAnswer(response){
            setTimeout(() => {
                if(response === this.currentArea){
                this.feedback = this.positive;
                this.feedbackColor = '#00ff44';
                this.found.forEach(element => {
                    if(element.name === response){
                        element.found = true;
                    }
                });
                if(this.stage === this.areas.length-1){
                    this.feedback = "כל הכבוד! מצאתם את כל האיזורים!"
                }
                else{
                    this.stage++;
                    this.currentArea = this.areas[this.stage];
                }
                
            }
            else{
                this.feedback = this.negative;
                this.feedbackColor = 'red';
            }
        } , 250)
            
        }
    },
    mounted(){
        let currentIndex = this.areas.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.areas[currentIndex], this.areas[randomIndex]] = [
            this.areas[randomIndex], this.areas[currentIndex]];
        }
        console.log("new array is: " + this.areas)
        this.currentArea = this.areas[0];
    }
}
</script>

<style>
    @font-face {
        font-family: 'sans';
        src: url("../assets/fonts/OpenSans-Regular.ttf");
    }
    .instruction{
        font-family: 'sans';
        color:white;
        font-size: 4vmin;
        text-align: right;
        position: absolute;
        top:0;
    }
    .game-container{
        height:80%;
        width:97%;
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        top:12%;
        padding: 2%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .answers{
        background-color: rgba(0,0,0,0.6);
        height: 100%;
        color: black !important;
        width:40%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        padding: 1%;
        border-radius: 13px;
    }

    .map-container{
        width:60%;
        height:100%;
        background-image: url("../assets/map/outline.png");
        background-size: 100% 100%;
    }

    .myBtn{
        font-family: 'sans';
        border-radius: 25px;
        font-size: 5vmin;
        font-weight: bold;
        padding: 3%;
        background-color: white;
        border : 2px solid #588baf;
    }

    .myBtn:active{
        transform: scale(0.95);
        background-color: rgba(87, 87, 87, 0.685);
    }

    .dropzones{
        height:100%;
        width: 100%;
    }

    #arava-right{
        height: 80%;
        width:29%;
        position:absolute;
        top:18%;
        right:49.5%;
        animation: appear 0.3 ease;
    }
    #negev-right{
        height: 45.8%;
        width:32.5%;
        position:absolute;
        top:52.2%;
        right:62.1%;
        animation: appear 0.3 ease;
    }
    #yehuda-right{
        height: 24%;
        width:23%;
        position:absolute;
        top:34%;
        right:57%;
        animation: appear 0.3 ease;
    }
    #mishor-right{
        height: 35.4%;
        width:28%;
        position:absolute;
        top:22.6%;
        right:70%;
        animation: appear 0.3 ease;
    }
    #carmelShomron-right{
        height: 23%;
        width:20%;
        position:absolute;
        top:14%;
        right:54%;
        animation: appear 0.3 ease;
    }
    #amakim-right{
        height: 13%;
        width:15.5%;
        position:absolute;
        top:12%;
        right:53.5%;
        animation: appear 0.3 ease;
    }
    #galil-right{
        height: 18%;
        width:17%;
        position:absolute;
        top:3.5%;
        right:50%;
        animation: appear 0.3 ease;
    }
    #hula-right{
        height: 14.5%;
        width:5%;
        position:absolute;
        top:3.5%;
        right:47.5%;
        animation: appear 0.3 ease;
    }
    #golan-right{
        height: 14.5%;
        width:8%;
        position:absolute;
        top:4%;
        right:41%;
        animation: appear 0.3 ease;
    }
    #hermon-right{
        height: 2.75%;
        width:5.4%;
        position:absolute;
        top:1.5%;
        right:42.5%;
        animation: appear 0.3 ease;
    }
    .feedback{
        position: absolute;
        font-size: 5vmin;
        bottom: -2%;
        left: 50%;
        transform: translateX(-50%);

    }
    @keyframes appear {
        0%{
            opacity : 0
        }
        100%{
            opacity: 1;
        }
    }
    @media (min-width: 1025px){
        .game-container{
            width: 30%;
        }
        .myBtn{
            font-size: 3vmin;}
        .answers{
            height: 110%
            ;
        }
    }

</style>