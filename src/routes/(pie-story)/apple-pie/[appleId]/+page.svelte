<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import  sro1  from "/src/public/illustration/미사용/심사위원배경.png";
    import  sro3  from "/src/public/illustration/미사용/심사위원배경3.png";
    import pie from "/src/public/element/pie/goodpie/apple-pie.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    
    let appleId: number;

    $: appleId = +$page.params.appleId;

    const stories = [
        {
            img: sro1,
            text: "흠...",
            simtext: "심사위원",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "흐음?!",
            simtext: "심사위원",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "이...이 맛은?!?!!!?",
            simtext: "심사위원",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro3,
            text: "할머니가 해주시던 맛이야ㅜㅠㅠ",
            simtext: "심사위원",
            pieimg:pie,
            tu:wh
        },
        {
            img: sro1,
            text: "그래, 이거야말로 레전드 오브 파이!!!",
            simtext: "심사위원",
            pieimg:pie,
            tu:wh
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">




{#if appleId == 5}
    <button on:click={() => refresh(`/storyss/best/best1`)} class="button">
        <img alt={`${appleId}번이미지`} src={stories[appleId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${appleId}번스토리`} src={stories[appleId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[appleId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[appleId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else if stories[appleId - 1]}
    <button on:click|stopPropagation={() => refresh(`/apple-pie/${appleId + 1}`)} class="button">
        <img alt={`${appleId}번이미지`} src={stories[appleId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${appleId}번스토리`} src={stories[appleId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
        <img alt={`${appleId}파이`} src={stories[appleId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[appleId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[appleId - 1].text.replace(/\n/g, "<br>")}
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

    .tu{
        width: 100%;
        height: 90vh;
    }




</style>