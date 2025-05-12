<template>
    <div class="wars">
        <h1 class="title"> מלחמות ומבצעים</h1>
        <table>
            <thead>
                <tr>
                    <th v-for="(col , index) in wars.cols" :key="index">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in wars.rows" :key="index">
                    <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
        <div class="footer">
            <div class="item" @click="navigate('decleration')">
                <img src="../../assets/navs/prev.png" class="navs prev">
                <p>מגילת העצמאות</p>
            </div>
            <div class="item next" @click="navigate('vips')">
                <img src="../../assets/navs/next.png" class="navs ">
                <p>אישים חשובים</p>
            </div>
        </div>
    </div>
</template>

<script>
import wars from "../../assets/texts/wars.json"
export default {
    data(){
        return{
            wars,
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
    @font-face {
        font-family: 'sans';
        src: url("../../assets/fonts/OpenSans-Regular.ttf");
    }
    @font-face {
        font-family: 'migdal';
        src: url("../../assets/fonts/migdalfontwin-webfont.ttf");
    }
    @font-face {
        font-family: 'rubik';
        src: url("../../assets/fonts/Rubik-ExtraBold.ttf");
    }
    .wars{
        width: 100%;
        text-align: right;
        color: white;
    }
    .title{
        font-family: 'migdal';
        font-size: 9vmin;
        margin: 0!important;
        text-align: right;
    }
    th{
        border: 2px white solid;
        text-align: center;
    }
    thead th{
        position: sticky;
        font-size: 4.5vmin;
        top: 0;
        background-color: #38586e; /* make sure it's not transparent */
        z-index: 2;
        border: 2px white solid;
        font-family: 'rubik';
    }
    td{
        border: 2px white solid;
        padding: 1%;
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
    }
    .next{
        display: flex;
        flex-flow: column;
        align-items: flex-end;
    }
</style>