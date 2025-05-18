<template>
    <div id="topothree">
        <h3>מציאת כיוונים - אזימוט</h3>
        <p class="bold">{{ topo.azimutDef[0] }}</p>
        <p>{{ topo.azimutDef[1] }}</p>
        <img src="../../assets/graphics/topo/13.png" class="graphic">
        <p class="bold">{{ topo.reverseAzimut }}</p>
        <img src="../../assets/graphics/topo/14.png" class="graphic">
        <h3>מדידת מרחק</h3>
        <p>{{ topo.disMeasure }}</p>
        <ol>
            <li v-for="(item , index) in topo.disList" :key="index">{{ item }}</li>
        </ol>
        <h4>1 - מרחק אווירי</h4>
        <p>{{ topo.rulerAir }}</p>
        <img src="../../assets/graphics/topo/15.png" class="graphic">
        <h4>2 - קיטועים</h4>
        <p>{{ topo.rulerSegments }}</p>
        <img src="../../assets/graphics/topo/16.png" class="graphic">
        <h4>3 - חוט</h4>
        <p>{{ topo.thread }}</p>
        <img src="../../assets/graphics/topo/17.png" class="graphic">
        <div class="footer">
            <div class="item" @click="navigate('2')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>תכסית וקורדינאטות</p>
            </div>

        </div>
    </div>
</template>

<script>
import topo from "../../assets/texts/topo.json"
export default {
    data(){
        return{
            topo
        }
    },
    methods:{
        navigate(pageName){
            this.$router.push(pageName);
        }
    }
}
</script>

<style scoped>
#topothree{
    text-align: right ;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 4.5vmin;
    line-height: 1;
}

.bold{
    font-weight: bold;
}

.footer{
        display: flex;
        flex-flow: row nowrap;
        height: 13vmin;
        width: 100%;
        justify-content:flex-start;
        padding-top: 2vmin;
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
.graphic{
    width: 100%;
    padding:1%;
}
</style>