<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import  sro1  from "/src/public/illustration/미사용/심사위원배경.png";
    import  sro3  from "/src/public/illustration/미사용/심사배경.png";
    import pie from "/src/public/element/pie/goodpie/blueberry-pie.png";
    import pie2 from "/src/public/illustration/pie-ending/날라가버린 블루베리 파이.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    import ba from "/src/public/illustration/미사용/검은사진.jpeg";
    import no from "/src/public/illustration/미사용/1.png";
    
    let blueberryId: number;

    $: blueberryId = +$page.params.blueberryId;

    const stories = [
        {
            img: sro1,
            text: "저 파이가 파랑색이라는데에 내 손목을 걸지.",
            simtext: "심사위원1",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "아니?, 저 파이가 보라색이라는데에 내 발목을 걸겠어.",
            simtext: "심사위원2",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "안타깝지만, 둘다 틀렸어요.",
            simtext: "심사위원3",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "이 파이는 #353B5C색 이에요!!!!!!",
            simtext: "심사위원3",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro3,
            text: "꺄아아아ㅏ아ㅏㅏㅏ-",
            simtext: "심사위원1, 심사위원2",
            pieimg:pie2,
            sim: no,
            tu:wh
        },
        {
            img: sro3,
            text: "파이가 날아가 엎어져버렸다...",
            simtext: "",
            sim: no,
            tu:wh
        },
        {
            img: ba,
            text: "블루베리 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (blueberryId == 5)}
    <button on:click|stopPropagation={() => refresh(`/blueberry-pie/${blueberryId + 1}`)} class="button">
        <img alt={`${blueberryId}번이미지`} src={stories[blueberryId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${blueberryId}번스토리`} src={stories[blueberryId - 1].img} class="story"/>
    </div>
    <div class="piebox2">
        <img alt={`${blueberryId}파이`} src={stories[blueberryId - 1].pieimg} class="pie2"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[blueberryId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[blueberryId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="simbox">
        <img alt={`${blueberryId}번심사위원`} src={stories[blueberryId - 1].sim} class="sim"/>
    </div>
{:else if blueberryId == 6}
    <button on:click|stopPropagation={() => refresh(`/blueberry-pie/${blueberryId + 1}`)} class="button">
        <img alt={`${blueberryId}번이미지`} src={stories[blueberryId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${blueberryId}번스토리`} src={stories[blueberryId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[blueberryId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[blueberryId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="simbox">
        <img alt={`${blueberryId}번심사위원`} src={stories[blueberryId - 1].sim} class="sim"/>
    </div>
{:else if blueberryId == 7}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${blueberryId}번스토리`} src={stories[blueberryId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[blueberryId - 1].text}
        </div>  
    </div>
{:else if stories[blueberryId - 1]}
    <button on:click|stopPropagation={() => refresh(`/blueberry-pie/${blueberryId + 1}`)} class="button">
        <img alt={`${blueberryId}번이미지`} src={stories[blueberryId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${blueberryId}번스토리`} src={stories[blueberryId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${blueberryId}파이`} src={stories[blueberryId - 1].pieimg} class="pie"/>
        <img alt={`${blueberryId}파이`} src={stories[blueberryId - 1].pieimg} class="pie"/>
        <img alt={`${blueberryId}파이`} src={stories[blueberryId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[blueberryId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[blueberryId - 1].text.replace(/\n/g, "<br>")}
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

    .piebox2{
        width: 100%;
        height: 70vh;

        display: flex;
        justify-content: center;
        align-items: center;
        

        position: absolute;
        z-index: 2;
    }

    .pie2{
        width: 25%;
        height: 35vh;
        margin-left: 10%;
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

    .simbox{
        width: 100%;
        height: 12vh;
        margin-top: 45vh;
        
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .sim{
        width: 60%;
        height: 60vh;
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