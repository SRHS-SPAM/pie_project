<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import img from "/src/public/illustration/미사용/심사위원배경.png";
    import img2 from "/src/public/illustration/미사용/검은사진.jpeg";
    import pieimg from"/src/public/element/pie/little-pie/pumpkin-pie.png";
    import tu from"/src/public/illustration/미사용/투명.png";
    
    let pumpkinId: number;

    $: pumpkinId = +$page.params.pumpkinId;

    const stories = [
        {
            img: img,
            text: "너무 탔잖아? 넌 탈락이야.",
            simtext: "심사위원",
            pieimg: pieimg,
            tu: tu
        },
        {
            img: img2,
            text: "탄 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

{#if stories[pumpkinId - 1]}
    <button on:click|stopPropagation={() => refresh(`/storyss/bad/bad1`)} class="button">
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