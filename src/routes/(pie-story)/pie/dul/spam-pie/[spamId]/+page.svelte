<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import img1 from '/src/public/illustration/미사용/심사위원배경.png';
    import tu from '/src/public/illustration/미사용/투명.png';
    import pieimg from '/src/public/element/pie/dul-pie/spam-pie.png';
    
    let spamId: number;

    $: spamId = +$page.params.spamId;

    const stories = [
        {
            img: img1,
            text: "덜 익었잖아? 넌 탈락이야.",
            simtext: "심사위원",
            pieimg: pieimg,            
            tu: tu
        },
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (spamId == 2)}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[spamId - 1].text}
        </div>  
    </div>
{:else if stories[spamId - 1]}
    <button on:click|stopPropagation={() => refresh(`/pie/dul/spam-pie/${spamId + 1}`)} class="button">
        <img alt={`${spamId}번이미지`} src={stories[spamId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[spamId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[spamId - 1].text.replace(/\n/g, "<br>")}
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