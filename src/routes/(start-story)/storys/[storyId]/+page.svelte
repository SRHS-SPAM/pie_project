<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import sto1 from "/src/public/illustration/game-story/1.png";
    import sto2 from "/src/public/illustration/game-story/2.png";
    import sto3 from "/src/public/illustration/game-story/3.png";
    import sto4 from "/src/public/illustration/game-story/4.png";
    import sto6 from "/src/public/illustration/game-story/6.png";
    
    let storyId: number;

    $: storyId = +$page.params.storyId;

    const stories = [
        {
            img: sto1,
            text: "치료제가 없는 불치병에 몸서리를 치는 주인공의 가족들.\n 병원비를 지불해야 하는 주인공의 지갑은 점점\n 비어가는데...",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: sto2,
            text: "그러던 어느날 기적적으로 가족들의 병을 치료할 수 있는 신약이 개발되지만,\n 이 약을 사기 위해서 주인공은 막대한 돈이 필요했다.",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: sto3,
            text: "평소처럼 야간근무를 끝내고 퇴근하던 어느 날.\n 주인공은 막대한 상금이 걸려있는 세계적인 요리대회의\n 참가자 모집 공고를 보고, 상금을 타기위해 대회에 참가한다.",
            tu:"/src/public/illustration/미사용/투명.png"
        },  
        {
            img: sto4,
            text: "집안 대대로 내려져 오던 전설의 파이 레시피를 잘만 사용한다면,\n 우승 따윈 식은 죽 먹기 일테지만...",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: sto6,
            text: "어째서인지 파이의 레시피가 잘 기억나지 않는다!\n 주인공은 과연 끝내 파이의 레시피를 기억해내어\n 우승을 거머쥘 수 있을까?",
            tu:"/src/public/illustration/미사용/투명.png"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (storyId == 5)}
    <button on:click|stopPropagation={() => refresh(`/main_menu`)} class="button">
        <img alt={`${storyId}번이미지`} src={stories[storyId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${storyId}번스토리`} src={stories[storyId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        {@html stories[storyId - 1].text.replace(/\n/g, "<br>")}
    </div>
{:else if stories[storyId - 1]}
    <button on:click|stopPropagation={() => refresh(`/storys/${storyId + 1}`)} class="button">
        <img alt={`${storyId}번이미지`} src={stories[storyId - 1].tu} class="tu"/>
    </button>
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">SKIP ></div>
    </button>
    <div>
        <img alt={`${storyId}번스토리`} src={stories[storyId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        {@html stories[storyId - 1].text.replace(/\n/g, "<br>")}
    </div>
{:else}
    존재하지 않는 페이지.
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
        margin-top: 75vh;
        padding: 5vh;

        width: 60%;
        height: 15vh;

        background-color: black;
        opacity: 0.7;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        text-align: center;
        font-size: xx-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        position: absolute;
        z-index: 2;

        
    }

    .tu{
        width: 100%;
        height: 98vh;
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

        width: 12vw;
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

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 2vh;
        margin-left: 87%;
    }
</style>
