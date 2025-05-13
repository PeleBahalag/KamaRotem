<template>
    <div id="weapon">
        <h1 class="title">לומדות נשק</h1>
        <div class="links-container">
            <a href="https://open.ann-ed.net/bookLesson/TPOF/57a6cda81637f90ab9c8af8a7fdcefb0?NC=1"><div class="item">עקרונות הקליעה M16</div></a>
            <a href="https://open.ann-ed.net/bookLesson/idfDemoLink/a45e292dc7d8258af8222fd5a47f9f62?NC=1"><div class="item">איפוס הנשק</div></a>
            <a href="https://open.ann-ed.net/bookLesson/M16RFO/40daf62d24260800578ba1b8a1efc551?NC=1"><div class="item">הת"ת M16</div></a>
            <a href="https://open.ann-ed.net/bookLesson/OOR/ffbae10b20c351eb20238d44628e73c3?NC=1"><div class="item">תפעול מעצורים</div></a>
            <a href="https://open.ann-ed.net/bookLesson/FM/9aab09d19a99476825e8b15993242390?NC=1"><div class="item">מצבי ירי</div></a>
        </div>
    </div>
</template>

<script>
export default {
    
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
    #weapon{
        width: 100%;
        text-align: right;
        color: white;
        text-align: center;
    }
    .title{
        font-family: 'migdal';
        font-size: 12vmin;
        margin: 0!important;
        text-align: right;
        position: relative;
        top:10vh;
    }
    .links-container{
        position: absolute;
        top:19vh;
        left:50%;
        transform: translateX(-50%);
        height: 40vh;
        width: 80vw;
        display: flex;
        flex-flow:column nowrap ;
        justify-content: space-evenly;
    }
    .item{
        color:black;
        background-color: #bce4eb !important;
        border: 2px solid #e5f6f9 !important;
        border-radius: 30px;
        padding: 5%;
        font-size: 4.5vmin;
        font-weight: bolder;
        
    }
    a{
        text-decoration: none !important;
    }
</style>