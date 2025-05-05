<template>
    <div class="independence">
        <h1 class="title">מגילת<br> העצמאות</h1>
        <p class="content">{{ education.opening }}</p>
        <h5>המגילה נחלקת לשלושה חלקים :</h5>
        <ol>
            <li v-for="(item, index) in education.parts" :key="index">{{ item }}</li>
        </ol>
        <h5>סמלי המדינה</h5>
        <p>{{ education.semelDef }}</p>
        <h4>סמלי מדינת ישראל:</h4>
        <div class="accordion accordion-flush custom-accordion" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    סמל המדינה
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <p v-for="(line , index) in education.countrySymbol" :key="index">{{ line }}</p>
                    <img src="../../assets/graphics/semel.png" class="semel">
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    הדגל
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <ul>
                        <li v-for="(item , index) in education.degel" :key="index"> {{ item }}</li>
                    </ul>
                    <img src="../../assets/graphics/flag.jpg" class="degel">
                    <p class="psa">הנפת דגל הדיו במלחמת העצמאות</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    המנון המדינה
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {{ education.anthem }}
                </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="item" @click="navigate('spirit')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>רוח צהל</p>
            </div>
            <div class="item" @click="navigate('wars')">
                <img src="../../assets/navs/next.png" class="navs">
                <p>מלחמות ומבצעים</p>
            </div>
        </div>

    </div>
</template>

<script>
import education from "../../assets/texts/education.json"
export default {
    data(){
        return{
            education,
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
    @font-face {
        font-family: 'sans';
        src: url("../../assets/fonts/OpenSans-Regular.ttf");
    }
    @font-face {
        font-family: 'migdal';
        src: url("../../assets/fonts/migdalfontwin-webfont.ttf");
    }
    #independence{
        width: 100%;
        text-align: right;
        color: white;
    }
    .title{
        font-family: 'migdal';
        font-size: 12vmin;
        margin: 0!important;
        text-align: right;
    }
    .content{
        font-family: 'sans';
        text-align: center;
    }
    h5{
        font-size: 5vmin;
        margin: 0!important;
        text-align: right;
    }
    ol{
        text-align: right;
    }
    .footer{
        display: flex;
        flex-flow: row nowrap;
        height: 13vmin;
        width: 100%;
        justify-content: space-between;
        padding: 2vmin;
    }
    .navs{
        height:80%;
        width: 20%;
    }
    .item{
        height: 100%;
        width: 50%;
    }
    .accordion{
        direction: rtl !important;
        z-index: 1;
        background: transparent !important;
        --bs-accordion-bg: rgba(0, 0, 0, 0.28);
    }
    .accordion-button{
        background-color: #bce4eb !important;
        border: 2px solid #e5f6f9 !important;
    }
    .accordion-body{
        background-color: transparent;
        backdrop-filter: blur(4px);
    }
    .accordion-item{
        background: transparent;
    }
    .custom-accordion {
        --bs-accordion-bg: rgba(0, 0, 0, 0.28);
    }
    .semel{
        height: 20%;
        width: 20%;
    }
    .degel{
        width: 50%;
        height: 40%;
    }
    .psa{
        font-size: smaller;
    }

</style>