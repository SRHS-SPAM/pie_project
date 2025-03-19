<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import sro1 from "/src/public/illustration/미사용/심사위원배경.png";
    import bread from "/src/public/element/cookie/tan-cookie/meat-cookie.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    
    let meatId: number;

    $: meatId = +$page.params.meatId;

    const stories = [
        {
            img: sro1,
            text: "이봐, 대회 규정 좀 읽어봐. 파이라니까, 쿠키가 아니라. \n 게다가, 너무 탔잖아? 넌 탈락이야.",
            simtext: "심사위원",
            pieimg:bread,
            tu:wh
        },
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if stories[meatId - 1]}
    <button on:click|stopPropagation={() => refresh(`/storyss/bad/bad1`)} class="button">
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
            {@html stories[meatId - 1].text.replace(/\n/g, "<br>")}
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



</style>