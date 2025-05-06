<template>
    <div>
        <p class="instruction">גררו את שם האיזור למקום המתאים במפה. <br>אם צדקתם, האיזור יצבע בצבע המתאים.
        </p>
        <div class="game-container">
            <div class="answers">
                <div class="myBtn" style="background-color:#ffde59" draggable="true" @dragstart="startDrag('negev')" v-if="!negevFound">הנגב</div>
                <div class="myBtn" style="background-color:#28a808" draggable="true" @dragstart="startDrag('golan')" v-if="!golanFound">רמת הגולן</div>
                <div class="myBtn" style="background-color:#a7cceb" draggable="true" @dragstart="startDrag('hula')" v-if="!hulaFound">עמק החולה</div>
                <div class="myBtn" style="background-color:#ff914d" draggable="true" @dragstart="startDrag('mishor')" v-if="!mishorFound">מישור החוף</div>
                <div class="myBtn" style="background-color:#8c756a" draggable="true" @dragstart="startDrag('arava')" v-if="!aravaFound">ערבה + בקעת הירדן</div>
                <div class="myBtn" style="background-color:white" draggable="true" @dragstart="startDrag('hermon')" v-if="!hermonFound">החרמון</div>
                <div class="myBtn" style="background-color:#5ce1e6" draggable="true" @dragstart="startDrag('carmel')" v-if="!carmelFound">הכרמל + השומרון</div>
                <div class="myBtn" style="background-color:#f8716b" draggable="true" @dragstart="startDrag('galil')" v-if="!galilFound">הגליל</div>
                <div class="myBtn" style="background-color:#c1b654" draggable="true" @dragstart="startDrag('yehuda')" v-if="!yehudaFound">יהודה</div>
                <div class="myBtn" style="background-color:#8c52ff" draggable="true" @dragstart="startDrag('amakim')" v-if="!amakimFound">אזור העמקים</div>
            </div>
            <div class="map-container">
                <!--dropzones-->
                <div class="dropzones">
                    <div id="hermon-dz" @dragover.prevent @drop="handleDrop('hermon')"></div>
                    <div id="golan-dz" @dragover.prevent @drop="handleDrop('golan')"></div>
                    <div id="hula-dz" @dragover.prevent @drop="handleDrop('hula')"></div>
                    <div id="galil-dz" @dragover.prevent @drop="handleDrop('galil')"></div>
                    <div id="amakim-dz" @dragover.prevent @drop="handleDrop('amakim')"></div>
                    <div id="carmel-dz" @dragover.prevent @drop="handleDrop('carmel')"></div>
                    <div id="yehuda-dz" @dragover.prevent @drop="handleDrop('yehuda')"></div>
                    <div id="mishor-dz" @dragover.prevent @drop="handleDrop('mishor')"></div>
                    <div id="negev-dz" @dragover.prevent @drop="handleDrop('negev')"></div>
                    <div id="arava-dz" @dragover.prevent @drop="handleDrop('arava')"></div>
                </div>
                <!--right answer indicators-->
                <div class="dropzones">
                    <img src="../assets/map/amakim.png" id="amakim-right" v-show="amakimFound"/>
                    <img src="../assets/map/arava.png" id="arava-right" v-show="aravaFound"/>
                    <img src="../assets/map/carmelShomron.png" id="carmelShomron-right" v-show="carmelFound"/>
                    <img src="../assets/map/galil.png" id="galil-right" v-show="galilFound"/>
                    <img src="../assets/map/golan.png" id="golan-right" v-show="golanFound"/>
                    <img src="../assets/map/hermon.png" id="hermon-right" v-show="hermonFound"/>
                    <img src="../assets/map/hula.png" id="hula-right" v-show="hulaFound"/>
                    <img src="../assets/map/mishorHof.png" id="mishor-right" v-show="mishorFound"/>
                    <img src="../assets/map/negev.png" id="negev-right" v-show="negevFound"/>
                    <img src="../assets/map/yehuda.png" id="yehuda-right" v-show="yehudaFound"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            negevFound : false,
            amakimFound : false, 
            aravaFound : false ,
            carmelFound :false ,
            galilFound : false, 
            golanFound : false ,
            hermonFound : false,
            hulaFound : false,
            mishorFound : false, 
            yehudaFound : false,
            currentRegion : null,

        }
    },
    methods : {
        startDrag(name){
            this.currentRegion = name;
        },
        handleDrop(zoneName){
            if(zoneName === this.currentRegion){
                switch(zoneName) {
                    case 'arava':
                        this.aravaFound = true;
                        break;
                    case 'yehuda':
                        this.yehudaFound = true;
                        break;
                    case 'amakim': 
                        this.amakimFound;
                        break;
                    case 'hermon':
                        this.hermonFound;
                        break;
                    case 'galil':
                        this.galilFound = true;
                        break;
                    case 'golan' :
                        this.golanFound = true;
                        break;
                    case 'negev' :
                        this.negevFound = true;
                        break;
                    case 'hula' :
                        this.hulaFound = true;
                        break;
                    case 'carmel' :
                        this.carmelFound = true;
                        break;
                    case 'mishor' :
                        this.mishorFound = true;
                        break;
                    default:
                        console.log("nothing");
                        break;
                }
                this.currentRegion = null;
            }
        }
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
        width:38%;
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
    }

    .dropzones{
        height:100%;
        width: 100%;
    }

    #hermon-dz{
        height: 5%;
        width:7%;
        position: absolute;
        top:-1%;
        right:41.5%;
    }

    #golan-dz{
        height: 13%;
        width:5%;
        position: absolute;
        top:5%;
        right:41.5%;
    }

    #hula-dz{
        height: 15%;
        width:3%;
        position:absolute;
        top:3%;
        right:48%;
    }
    #galil-dz{
        height: 10%;
        width:11%;
        position:absolute;
        top:6%;
        right:54%;
    }
    #amakim-dz{
        height: 13%;
        width:3%;
        position:absolute;
        top:12%;
        right:61%;
        transform: rotate(-43deg);
    }
    #carmelShomron-dz{
        height: 10%;
        width:11%;
        position:absolute;
        top:25%;
        right:57%;
    }
    #yehuda-dz{
        height: 16%;
        width:17%;
        position:absolute;
        top:38%;
        right:59%;
        transform: rotate(15deg);
    }
    #mishor-dz{
        height: 25%;
        width:17%;
        position:absolute;
        top:25%;
        right:75%;
        transform: rotate(23deg);
    }
    #negev-dz{
        height: 30%;
        width:13%;
        position:absolute;
        top:56%;
        right:73%;
    }
    #arava-dz{
        height: 70%;
        width:4%;
        position:absolute;
        top:20%;
        right:56%;
        transform: rotate(10deg);
    }
    #arava-right{
        height: 80%;
        width:29%;
        position:absolute;
        top:18%;
        right:49.5%;
    }
    #negev-right{
        height: 45.8%;
        width:32.5%;
        position:absolute;
        top:52.2%;
        right:62.1%;
    }
    #yehuda-right{
        height: 24%;
        width:23%;
        position:absolute;
        top:34%;
        right:57%;
    }
    #mishor-right{
        height: 35.4%;
        width:28%;
        position:absolute;
        top:22.6%;
        right:70%;
    }
    #carmelShomron-right{
        height: 23%;
        width:20%;
        position:absolute;
        top:14%;
        right:54%;
    }
    #amakim-right{
        height: 13%;
        width:15.5%;
        position:absolute;
        top:12%;
        right:53.5%;
    }
    #galil-right{
        height: 18%;
        width:17%;
        position:absolute;
        top:3.5%;
        right:50%;
    }
    #hula-right{
        height: 14.5%;
        width:5%;
        position:absolute;
        top:3.5%;
        right:47.5%;
    }
    #golan-right{
        height: 14.5%;
        width:8%;
        position:absolute;
        top:4%;
        right:41%;
    }
    #hermon-right{
        height: 2.75%;
        width:5.4%;
        position:absolute;
        top:1.5%;
        right:42.5%;
    }

</style>