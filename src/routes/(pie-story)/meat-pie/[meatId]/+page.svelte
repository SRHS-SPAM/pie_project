<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import  sro1  from "/src/public/illustration/미사용/심사위원배경.png";
    import  sro3  from "/src/public/illustration/미사용/심사위원배경2.png";
    import pie from "/src/public/element/pie/goodpie/meat-pie.png";
    import pie2 from "/src/public/illustration/pie-ending/생고기 파이.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    import ba from "/src/public/illustration/미사용/검은사진.jpeg";
    import no from "/src/public/illustration/미사용/2.png";
    
    let meatId: number;

    $: meatId = +$page.params.meatId;

    const stories = [
        {
            img: sro1,
            text: "미트 파이가 정말 맛있네요.",
            simtext: "심사위원1",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro3,
            text: "미투~!",
            simtext: "심사위원2",
            pieimg:pie,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: "심사위원2는 굿바이 선언 포즈를 취했다...",
            simtext: "",
            pieimg:pie,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: ".",
            simtext: "",
            pieimg:pie,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: "...",
            simtext: "",
            pieimg:pie,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: "..................",
            simtext: "",
            pieimg:pie,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: "싸해진 분위기 속에 고기파이가 식어버렸다...",
            simtext: "",
            pieimg:pie2,
            sim: no,
            tu:wh
        },
        {
            img: ba,
            text: "고기 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (meatId == 1)}
    <button on:click|stopPropagation={() => refresh(`/meat-pie/${meatId + 1}`)} class="button">
        <img alt={`${meatId}번이미지`} src={stories[meatId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${meatId}번스토리`} src={stories[meatId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[meatId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[meatId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else if meatId == 8}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${meatId}번스토리`} src={stories[meatId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[meatId - 1].text}
        </div>  
    </div>
{:else if stories[meatId - 1]}
    <button on:click|stopPropagation={() => refresh(`/meat-pie/${meatId + 1}`)} class="button">
        <img alt={`${meatId}번이미지`} src={stories[meatId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${meatId}번스토리`} src={stories[meatId - 1].img} class="story"/>
    </div>
    <div class="simbox">
        <img alt={`${meatId}번심사위원`} src={stories[meatId - 1].sim} class="sim"/>
    </div>
    <div class="piebox">
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
        <img alt={`${meatId}파이`} src={stories[meatId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[meatId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[meatId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

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
        margin-right: 10%;

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
        width: 15%;
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
        z-index: 3;
    }

    .pie{
        width: 16%;
        height: 25vh;
    }

    .simbox{
        width: 100%;
        height: 10vh;
        margin-top: 45vh;
        
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .sim{
        width: 35%;
        height: 35vh;
        margin-top: 20vh;

        position: absolute;
        z-index: 2;
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