<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    import  sro1  from "/src/public/illustration/미사용/심사위원배경.png";
    import  sro3  from "/src/public/illustration/pie-ending/야생 마크 화면 1.png";
    import pie from "/src/public/element/pie/goodpie/pumpkin-pie.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    import ba from "/src/public/illustration/미사용/검은사진.jpeg";
    import sta from "/src/public/illustration/pie-ending/스티브_정면.png";
    import sta2 from "/src/public/illustration/pie-ending/뛰는 스티브.png";

    let pumpkinId: number;

    const posX = tweened(0, { duration: 600, easing: cubicOut });
    const posY = tweened(0, { duration: 600, easing: cubicOut });

    $: pumpkinId = +$page.params.pumpkinId;

    const stories = [
        {
            img: sro1,
            text: "호박 파이가 참 특이하게 생겼...",
            simtext: "심사위원3",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "툭-",
            simtext: "",
            pieimg:pie,
            steve: sta,
            tu:wh,
        },
        {
            img: sro3,
            text: "스티브가 호박파이를 훔치고 야생으로 달아나 버렸다...",
            simtext: "",
            pieimg:pie,
            steve:sta2,
            tu:wh
        },
        {
            img: ba,
            text: "호박 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };

    function moveToPositions() {
        posX.set(0); 
        posY.set(0);  

        setTimeout(() => {
            posX.set(0);  
            posY.set(220);  
        }, 500);
    }

    $: if (pumpkinId === 2) {
        moveToPositions();
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



{#if (pumpkinId == 2)}
    <button on:click|stopPropagation={() => refresh(`/pumpkin-pie/${pumpkinId + 1}`)} class="button">
        <img alt={`${pumpkinId}번이미지`} src={stories[pumpkinId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${pumpkinId}번스토리`} src={stories[pumpkinId - 1].img} class="story"/>
    </div>
    <div class="stevebox">
        <img alt={`${pumpkinId}스티브`} src={stories[pumpkinId - 1].steve} class="steve" style="transform: translate({$posX}px, {$posY}px);"/>
    </div>
    <div class="piebox">
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[pumpkinId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[pumpkinId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else if pumpkinId == 3}
    <button on:click|stopPropagation={() => refresh(`/pumpkin-pie/${pumpkinId + 1}`)} class="button">
        <img alt={`${pumpkinId}번이미지`} src={stories[pumpkinId - 1].tu} class="tu"/>
    </button>
    <div class="stevebox2">
        <img alt={`${pumpkinId}스티브`} src={stories[pumpkinId - 1].steve} class="steve2"/>
    </div>
    <div>
        <img alt={`${pumpkinId}번스토리`} src={stories[pumpkinId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[pumpkinId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[pumpkinId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else if pumpkinId == 4}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${pumpkinId}번스토리`} src={stories[pumpkinId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[pumpkinId - 1].text}
        </div>  
    </div>
{:else if stories[pumpkinId - 1]}
    <button on:click|stopPropagation={() => refresh(`/pumpkin-pie/${pumpkinId + 1}`)} class="button">
        <img alt={`${pumpkinId}번이미지`} src={stories[pumpkinId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${pumpkinId}번스토리`} src={stories[pumpkinId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
        <img alt={`${pumpkinId}파이`} src={stories[pumpkinId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[pumpkinId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[pumpkinId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

    .stevebox {
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 3;
    }

    .steve{
        width: 20%;
        height: 35vh;
        margin-bottom: 50vh;

        position: absolute;
        z-index: 3;
    }

    .stevebox2{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 3;
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
        z-index: 3;
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
        height: 38vh;
        margin-top: 62vh;

        display: flex;
        justify-content: center;
        

        position: absolute;
        z-index: 2;
    }

    .pie{
        width: 16%;
        height: 25vh;
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