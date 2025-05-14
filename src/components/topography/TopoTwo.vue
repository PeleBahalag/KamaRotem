<template>
    <div id="topotwo">
        <h3>תכסית</h3>
        <p v-for="(line , index) in topo.tachsitDef" :key="index">{{ line }}</p>
        <ul>
            <li v-for="(item , index) in topo.tachsitTypes" :key="index">{{ item }}</li>
        </ul>
        <img src="../../assets/graphics/topo/map.jpg" class="graphic">
        <img src="../../assets/graphics/topo/mikra.jpeg" class="graphic">
        <h3>רשת קורדינאטות</h3>
        <p v-for="(line , index) in topo.coordinates" :key="index">{{ line }}</p>
        <h4>מציאת נ.צ</h4>
        <p>{{ topo.csDef }}</p>
        <img src="../../assets/graphics/topo/12.png" class="graphic">
        <h4>מדקו</h4>
        <p v-for="(line , index) in topo.madko" :key="index">{{ line }}</p>
        <h3>קנה מידה</h3>
        <p>{{ topo.proportaion }}</p>
        <h4>במפה של 1:50,000</h4>
        <p>{{ topo.oneToFiftyK }}</p>
        <h4>במפה של1:100,000</h4>
        <p>{{ topo.oneToHundrendK }}</p>
        <div class="footer">
            <div class="item" @click="navigate('1')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>תבליט</p>
            </div>
            <div class="item next" @click="navigate('3')">
                <img src="../../assets/navs/next.png" class="navs ">
                <p>אזימוט<br>מדידת מרחק</p>
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
#topotwo{
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
        justify-content:space-between;
        padding-top: 2vmin;
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