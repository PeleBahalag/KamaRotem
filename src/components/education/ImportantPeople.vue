<template>
    <div id="vips">
        <h1 class="title">אישים חשובים</h1>
        <div class="accordion accordion-flush custom-accordion" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    נשיאים
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <table>
                        <tr v-for="(line , index) in vips.presidents" :key="index">
                            <td v-for="(cell , index) in line" :key="index">{{ cell }}</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    רמטכ"לים
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <table>
                        <tr v-for="(line , index) in vips.generals" :key="index">
                            <td v-for="(cell , index) in line" :key="index">{{ cell }}</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    ראשי ממשלה
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <table>
                        <tr v-for="(line , index) in vips.primeMinisters" :key="index">
                            <td v-for="(cell , index) in line" :key="index">{{ cell }}</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="item" @click="navigate('wars')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>מלחמות ומבצעים</p>
            </div>
            <div class="item next" @click="navigate('holidays')">
                <img src="../../assets/navs/next.png" class="navs ">
                <p>חגים ומועדים</p>
            </div>
        </div>
    </div>
</template>

<script>
import vips from "../../assets/texts/vips.json"
export default {
    data(){
        return{
            vips,
        }
    },
    methods : {
        navigate(pageName){
            this.$router.push(pageName);
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
#vips{
        width: 100%;
        text-align: right;
        color: white;
    }
    .title{
        font-family: 'migdal';
        font-size: 11.5vmin;
        margin: 0!important;
        text-align: right;
    }
    .footer{
        display: flex;
        flex-flow: row nowrap;
        height: 13vmin;
        width: 100%;
        justify-content: space-between;
        padding-top: 2vmin;
    }
    .navs{
        height:100%;
        width: 50%;
    }
    .item{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        background-color: rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(4px);
    }
    .accordion-item{
        background: rgba(0, 0, 0, 0.28);
    }
    .custom-accordion {
        --bs-accordion-bg: rgba(0, 0, 0, 0.28);
    }
    table{
        width:100%;
        text-align: center;
        color: white;
        font-size: 4.5vmin;
    }
</style>