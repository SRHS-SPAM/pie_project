<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import  sro3  from "/src/public/illustration/미사용/심사배경.png";
    import wh from "/src/public/illustration/미사용/투명.png";
    import ba from "/src/public/illustration/미사용/검은사진.jpeg";
    import yhan from "/src/public/illustration/미사용/요한 선배님.png";
    import yhan2 from "/src/public/illustration/미사용/요한 선배님2.png";
    import yes from  "/src/public/illustration/pie-ending/스팸 yes.png";
    
    let spamId: number;

    $: spamId = +$page.params.spamId;

    const stories = [
        {
            img: sro3,
            simtext: "최고의 동아리 SPAM에 가입하시겠습니까?",
            he: yhan,
            he2: yhan2
        },
        {
            img: sro3,
            simtext: "이 언어들을 모두 공부해 오십시오. 못하시겠습니까?",
            pro: yes,
            tu:wh
        },
        {
            img: sro3,
            simtext: "죽으십시오.",
            tu: wh
        },
        {
            img: ba,
            text: "스팸 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (spamId == 2)}
    <button on:click|stopPropagation={() => refresh(`/spam-pie/${spamId + 1}`)} class="button">
        <img alt={`${spamId}번이미지`} src={stories[spamId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <div>
            <img alt={`${spamId}프로그래밍`} src={stories[spamId - 1].pro} class="pro"/>
        </div>
        <p class="simtext2">
            {stories[spamId - 1].simtext}
        </p>
    </div>
{:else if spamId == 3}
    <button on:click|stopPropagation={() => refresh(`/spam-pie/${spamId + 1}`)} class="button">
        <img alt={`${spamId}번이미지`} src={stories[spamId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <p class="simtext3">
            {stories[spamId - 1].simtext}
        </p>
    </div>
{:else if spamId == 4}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox3">
        <div class="text2">
            {stories[spamId - 1].text}
        </div>  
    </div>
{:else if stories[spamId - 1]}
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[spamId - 1].simtext}
        </p>
    </div>
    <div class="ctextbox">
        <div class="chose">
            <button on:click={() => refresh(`/spam-pie/2`)} class="cbutton">yes</button>
            <button on:click={() => refresh(`/spam-pie/3`)} class="cbutton">no</button>
        </div>
    </div>
    <div class="hebox">
            <img alt={`${spamId}반전 요한 선배님`} src={stories[spamId - 1].he2} class="he2"/>
            <img alt={`${spamId}요한 선배님`} src={stories[spamId - 1].he} class="he"/>
        </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

    .textbox3{
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

    .pro{
        width: 100%;
        height: 50vh;
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
        z-index: 5;
    }


    .textbox {
        margin-left: 15%;
        margin-top: 18vh;

        width: 70%;
        height: 70vh;

        background-color: black;

        position: absolute;
        z-index: 2;
    }

    .ctextbox {
        margin-left: 15%;
        margin-top: 18vh;

        width: 70%;
        height: 70vh;

        background-color: rgba(0, 0, 0, 0);

        position: absolute;
        z-index: 3;
    }

    .textbox2 {
        margin-left: 15%;
        margin-top: 18vh;

        width: 70%;
        height: 70vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: black;

        position: absolute;
        z-index: 4;
    }

    .simtext{
        width: 100%;
        height: 6vh;
        margin-top: 10vh;

        color: white;
        text-align: center;
        font-size: xx-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
        justify-content: center;
    }

    .simtext2{
        width: 100%;
        height: 6vh;

        color: white;
        text-align: center;
        font-size: xx-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
        justify-content: center;
    }

    .simtext3{
        width: 100%;
        height: 30vh;
        margin-top: 30vh;

        color: white;
        text-align: center;
        font-size: 400%;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
        justify-content: center;
    }

    .chose{
        width: 100%;
        height: 10vh;

        display: flex;
        justify-content: center;


    }

    .cbutton{
        width: 40%;
        height: 40vh;
        margin-top: 20vh;

        background-color: rgba(0, 0, 0, 0);
        border: none;

        color: white;
        font-size: 15vh;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        
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

    .tu{
        width: 100%;
        height: 90vh;
    }

    .hebox{
        width: 100%;
        height: 40vh;
        gap: 40vh;
        margin-top: 60vh;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 2;
    }

    .he{
        width: 40%;
        height: 40vh;
    }

    .he2{
        width: 40%;
        height: 40vh;
    }


</style>