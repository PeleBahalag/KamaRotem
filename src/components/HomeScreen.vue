<template>
    <div id="home-screen">
        <div class="banner">
            <img src="../assets/navs/tazam.png" class="logo tazam">
            <img src="../assets/navs/bahalag.png" class="logo bahalag">
            <img src="../assets/navs/pele.png" class="logo pele">
        </div>
        <div class="container">
            <h2 class="title">הכנה לקמא רותם</h2>
            <p class="instruction">
                ברוכה הבאה! הלומדה מכילה 4 נושאים עם תרגולים שיעזרו לך להגיע לקמ"א הכי מוכנה שאפשר. בחרי נושא כדי להתחיל (תמיד אפשר לחזור לכאן).
            </p>
            <div class="nav-container">
                <img src="../assets/navs/edu.png" class="nav" @click="navigate('education')">
                <img src="../assets/navs/map.png" class="nav" @click="navigate('education/map')">
                <img src="../assets/navs/heritage.png" class="nav moreshet" @click="navigate('education/heritage')">
                <img src="../assets/navs/topo.png" class="nav" @click="navigate('education/topography')">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'home-screen' , 
    data(){
        return{

        }
    },
    methods : {
        navigate(pageName){
            this.$router.push(`/KamaRotem/${pageName}`);
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'rubik';
    src: url("../assets/fonts/Rubik-ExtraBold.ttf");
}

@font-face {
    font-family: 'open-sans';
    src: url("../assets/fonts/OpenSans-Regular.ttf");
}

#home-screen{
    height: 100vh;
    width: 100vw;
    position: absolute;
    top : 0%;
    right : 0%;
    background-image: url("../assets/background/homebg.png");
    background-size: 100% 100%;
    direction: rtl;
}

.banner{
    height: 9.5%;
    width:100%;
    position: absolute;
    top:3%;
    right:0%;
}

.container{
    height: 70%;
    width: 90%;
    position: absolute;
    top:15%;
    left:50%;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,0.6);
    color:black;
    padding: 2%;
    border-radius: 40px;
}

.nav-container{
    height: 60%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}

.title{
    font-family: 'rubik';
    font-size: 10vmin;
    text-align: center;
}

.instruction{
    font-family: "open-sans";
    position: static;
    color: black;
    text-align: center;
}

.nav{
    height:50%;
    width: 50%;
    cursor: pointer;
}
.moreshet{
    height:52% !important;
}

.logo{
    height: 100%;
    width:20%;
    position: absolute;
    top:1%;
}

.pele{
    right: 1%;
}

.bahalag{
    left:1%;
}

.tazam{
    left:21%;
}

@media (min-width: 1025px){
    .title{
        font-size: 7vmin !important;
    }
    .instruction{
        font-size: 3vmin;
    }
    .logo{
        width:5%;
    }
    .tazam{
        left: 7%;
    }
    .nav{
        width: 23%;
        height: 85%;
    }
    .moreshet{
        height:87% !important;
    }
    .nav-container{
        justify-content: space-between;
    }
    #home-screen{
        background-image: url("../assets/background/desktopHome.jpg");
    }
}
</style>