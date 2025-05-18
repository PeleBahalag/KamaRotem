<template>
 <div id="topoone">
    <h3>טופוגרפיה - הגדרה</h3>
    <p v-for="(line, index) in topo.def" :key="index">{{ line }}</p>
    <ol>
        <li v-for="(item , index) in topo.defList" :key="index">{{ item }}</li>
    </ol>
    <h3>תבליט</h3>
    <p>{{ topo.tavlitOpening }}</p>
    <img src="../../assets/graphics/topo/1.png" class="graphic1">
    <p v-for="(line , index) in topo.tavlitText" :key="index">{{ line }}</p>
    <img src="../../assets/graphics/topo/2.png" class="graphic1">
    <p v-for="(line , index) in topo.crater" :key="index">{{ line }}</p>
    <!--crater graphic-->
    <p>{{ topo.kavEfes}}</p>
    <div class="dottedLine"></div>
    <p>{{ topo.roundedheightline }}</p>
    <div class="straightLine"></div>
    <h4>גובה מוחלט</h4>
    <p>{{ topo.absoluteHeight }}</p>
    <h4>גובה יחסי</h4>
    <p>{{ topo.relativeHeight[0] }}</p>
    <p class="bold">{{ topo.relativeHeight[1] }}</p>
    <img src="../../assets/graphics/topo/3.png" class="graphic1">
    <h4>נ. גובה</h4>
    <p>{{ topo.heightPoint }}</p>
    <!--little hp graphic-->
    <h4>נ. טריאנגולציה\נ. טריג</h4>
    <p>{{ topo.triPoint }}</p>
    <!--another little graphic-->
    <h3>צורות תבליט בסיסיות</h3>
    <h4>כיפה</h4>
    <p>{{ topo.dome }}</p>
    <img src="../../assets/graphics/topo/4.png" class="graphic1">
    <h4>שלוחה</h4>
    <p>{{ topo.proxy }}</p>
    <h4>גיא</h4>
    <p>{{ topo.valley }}</p>
    <img src="../../assets/graphics/topo/5.png" class="graphic1">
    <h3>סוגי מדרונות</h3>
    <h4>מדרון קצוב</h4>
    <p v-for="(line , index) in topo.midronKazuv" :key="index">{{ line }}</p>
    <img src="../../assets/graphics/topo/6.png" class="graphic1">
    <h4>מדרון קעור וקמור</h4>
    <p>{{ topo.midronKamur }}</p>
    <img src="../../assets/graphics/topo/7.png" class="graphic1">
    <h4>מדרון כתף</h4>
    <p>{{ topo.midronKatef }}</p>
    <img src="../../assets/graphics/topo/8.png" class="graphic1">
    <h4>אוכף</h4>
    <p>{{ topo.saddle }}</p>
    <img src="../../assets/graphics/topo/9.png" class="graphic1">
    <h4>כיפה סמויה</h4>
    <p v-for="(line , index) in topo.hiddenDome" :key="index">{{ line }}</p>
    <img src="../../assets/graphics/topo/10.png" class="graphic1">
    <h4>כיצד נבדיל בין כיפה סמויה לכתף?</h4>
    <p>{{ topo.katefVhd }}</p>
    <img src="../../assets/graphics/topo/11.png" class="graphic1">
    <div class="footer">
            <div class="item" @click="navigate('2')">
                <img src="../../assets/navs/next.png" class="navs">
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
    methods : {
        navigate(child){
            this.$router.push(child)
        }
    }
}
</script>

<style>
#topoone{
    text-align: right ;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 4.5vmin;
    line-height: 1;
}

.dottedLine{
    height: 1vmin;
    width:90%;
    border-top: dashed 5px rgb(70, 43, 13);
    padding: 1%;
}

.straightLine{
    height: 1vmin;
    width:90%;
    border-top: solid 5px rgb(0, 0, 0);
    padding: 1%;
}

.bold{
    font-weight: bold;
    

}

.footer{
    display: flex;
    flex-flow: row nowrap;
    height: 13vmin;
    width: 100%;
    justify-content: flex-end;
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

.graphic1{
    width: 100%;
    margin: 1%;
}
</style>