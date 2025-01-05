<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    import  sro3  from "/src/public/illustration/미사용/심사배경.png";
    import pie from "/src/public/element/pie/goodpie/herring-pie.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    import ba from "/src/public/illustration/미사용/검은사진.jpeg";
    import garen from "/src/public/illustration/pie-ending/고든램지.png";
    import sad from "/src/public/illustration/미사용/우울.png";
    import wat from "/src/public/illustration/미사용/진짜수조.png";
    import bigsad from "/src/public/illustration/미사용/대우울.png";
    import garen2 from "/src/public/illustration/pie-ending/고든램지2.png";
    import fish2 from "/src/public/illustration/pie-ending/날뛰는_물고기2.png";
    import fish from "/src/public/illustration/pie-ending/날뛰는_물고기.png";
    import fu from "/src/public/illustration/미사용/킹받.png";
    
    let herringId: number;

    const posX = tweened(0, { duration: 600, easing: cubicOut });
    const posY = tweened(0, { duration: 600, easing: cubicOut });

    $: herringId = +$page.params.herringId;

    const stories = [
        {
            img: sro3,
            text: "Fuxx off, It's fuxxing raw! Get out!",
            simtext: "고든램지",
            pieimg:pie,
            tu:wh,
            he:garen,
            she:sad,
            sujo:wat
        },
        {
            img: sro3,
            text: "(풍덩)",
            simtext: "",
            pieimg:pie,
            tu:wh,
            he:garen,
            she:bigsad,
            sujo:wat
        },
        {
            img: sro3,
            text: "What the fuxxing that!!!!",
            simtext: "고든램지",
            pieimg:fish2,
            tu:wh,
            he:garen2,
            she:bigsad,
            sujo:wat
        },
        {
            img: sro3,
            text: "(촬싹!)",
            simtext: "고든램지",
            pieimg:fish,
            tu:wh,
            he:garen2,
            she:fu,
            sujo:wat
        },
        {
            img: ba,
            text: "정어리 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };

    function moveToPositions() {
        posX.set(500); 
        posY.set(-400);  

        setTimeout(() => {
            posX.set(550);  
            posY.set(-20);  
        }, 500);
    }

    function moveToPositions2() {
        posX.set(500); 
        posY.set(-200);  

        setTimeout(() => {
            posX.set(-200);  
            posY.set(70);  
        }, 500);
    }

    function moveToPositions3() {
        posX.set(-200);  
        posY.set(70); 
    }

    $: if (herringId === 2) {
        moveToPositions();
    }
    else if (herringId === 3){
        moveToPositions2();
    }
    else if(herringId === 4){
        moveToPositions3();
    }
    else {
        posX.set(0);
        posY.set(0);
    }
    console.log(posX);
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (herringId == 2)}
    <button on:click|stopPropagation={() => refresh(`/herring-pie/${herringId + 1}`)} class="button">
        <img alt={`${herringId}번이미지`} src={stories[herringId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${herringId}번스토리`} src={stories[herringId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${herringId}파이`} src={stories[herringId - 1].pieimg} class="pie" style="transform: translate({$posX}px, {$posY}px);"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[herringId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[herringId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${herringId}수조`} src={stories[herringId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar">
        <img alt={`${herringId}고든램지`} src={stories[herringId - 1].he} class="he"/>
        <img alt={`${herringId}쥔공`} src={stories[herringId - 1].she} class="she"/>
    </div>
{:else if herringId == 3}
    <button on:click|stopPropagation={() => refresh(`/herring-pie/${herringId + 1}`)} class="button">
        <img alt={`${herringId}번이미지`} src={stories[herringId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${herringId}번스토리`} src={stories[herringId - 1].img} class="story"/>
    </div>
    <div class="fishbox">
        <img alt={`${herringId}파이`} src={stories[herringId - 1].pieimg} class="fish" style="transform: translate({$posX}px, {$posY}px);"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[herringId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[herringId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${herringId}수조`} src={stories[herringId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar2">
        <img alt={`${herringId}고든램지`} src={stories[herringId - 1].he} class="he2"/>
        <img alt={`${herringId}쥔공`} src={stories[herringId - 1].she} class="she2"/>
    </div>
{:else if herringId == 4}
    <button on:click|stopPropagation={() => refresh(`/herring-pie/${herringId + 1}`)} class="button">
        <img alt={`${herringId}번이미지`} src={stories[herringId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${herringId}번스토리`} src={stories[herringId - 1].img} class="story"/>
    </div>
    <div class="fishbox">
        <img alt={`${herringId}파이`} src={stories[herringId - 1].pieimg} class="fish2" style="transform: translate({$posX}px, {$posY}px);"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[herringId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[herringId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${herringId}수조`} src={stories[herringId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar2">
        <img alt={`${herringId}고든램지`} src={stories[herringId - 1].he} class="he2"/>
        <img alt={`${herringId}쥔공`} src={stories[herringId - 1].she} class="she3"/>
    </div>
{:else if herringId == 5}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${herringId}번스토리`} src={stories[herringId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[herringId - 1].text}
        </div>  
    </div>
{:else if stories[herringId - 1]}
    <button on:click|stopPropagation={() => refresh(`/herring-pie/${herringId + 1}`)} class="button">
        <img alt={`${herringId}번이미지`} src={stories[herringId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${herringId}번스토리`} src={stories[herringId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${herringId}파이`} src={stories[herringId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[herringId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[herringId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${herringId}수조`} src={stories[herringId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar">
        <img alt={`${herringId}고든램지`} src={stories[herringId - 1].he} class="he"/>
        <img alt={`${herringId}쥔공`} src={stories[herringId - 1].she} class="she"/>
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

    .sujobox{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .sujo{
        width: 25%;
        height: 45vh;

        margin-top: 26vh;
        margin-left: 75vw;
    }

    .upbar {
        width: 100%;
        height: 100vh;
        gap: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .he{
        width: 40%;
        height: 40vh;
        margin-top: 24vh;
    }

    .she{
        width: 20%;
        height: 40vh;
        margin-top: 24vh;
    }

    .upbar2 {
        width: 100%;
        height: 100vh;
        gap: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .she2{
        width: 20%;
        height: 40vh;
        margin-top: 24vh;
    }

    .he2{
        width: 20%;
        height: 40vh;
        margin-top: 24vh;
        margin-right: 18vw;
    }

    .she3{
        width: 20%;
        height: 40vh;
        margin-top: 28vh;
    }

    .story {
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;
    }

    .button {
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0);
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 4;
    }

    .textbox2{
        
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 4;
    }

    .text2{
        color: white;
        font-size: 15vh;
        font-family: "Jua", sans-serif;
    }


    .textbox {
        margin-left: 20%;
        margin-top: 80vh;
        padding: 5vh;

        width: 60%;
        height: 9vh;

        background-color: black;

        display: flex;
        align-items: center;

        position: absolute;
        z-index: 4;
    }

    .textmal{
        width: 85%;
        height: 9vh;
        margin-right: 20%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;
        
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
    .simtext{
        width: 40%;
        height: 9vh;
        margin-bottom: 7%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
    }


    .piebox{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        
        position: absolute;
        z-index: 2;
    }

    .pie{
        width: 26%;
        height: 50vh;
        margin-top: 46vh;
    }

    .fishbox{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        

        position: absolute;
        z-index: 3;
    }

    .fish{
        width: 15%;
        height: 20vh;
        margin-top: 46vh;
    }

    .fish2{
        width: 20%;
        height: 23vh;
        margin-top: 46vh;
    }


    .tu{
        width: 100%;
        height: 90vh;
    }

    .botten {
        display: flex;
        position: absolute;
        background-color: #FFD400;

        font-size: 6vb;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.8;

        text-align: center;

        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        width: 13vw;
        height: 11vh;
        z-index: 5;

        margin-top: 10vh;
        margin-left: 10vw;

        align-items: center;
        justify-content: center;
    }
    .botten:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .bot {
        position: absolute;

        top: 70vh;
        margin-left: 72%;
    }


</style>