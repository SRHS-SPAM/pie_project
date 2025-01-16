<script>
    // @ts-nocheck    
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    const ASSETS_PREFIX = '/src/public/element/otherthing/otherelement';

    import background1 from "/src/public/element/otherthing/otherelement/background.png";
    import next_button from "/src/public/element/otherthing/otherelement/nextbotten.png";
    import bowl from "/src/public/element/otherthing/otherelement/nodelete.png";
    import ganpan from "/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    import dot1 from "/src/public/element/otherthing/otherelement/nodelete1.png";
    import dot2 from "/src/public/element/otherthing/otherelement/nodelete.png";
    import warn from "/src/public/element/otherthing/otherelement/liquid_warn.png";
    
    // 액체 이미지 임포트
    import ion from "/src/public/element/otherthing/otherelement/ion2.png";
    import bod from "/src/public/element/otherthing/otherelement/bod2.png";
    import juice from "/src/public/element/otherthing/otherelement/juice2.png";
    import water from "/src/public/element/otherthing/otherelement/water2.png";
    import milk from "/src/public/element/otherthing/otherelement/milk2.png";
    import yorg from "/src/public/element/otherthing/otherelement/yorg2.png";
    
    import bowl_powder3_maga from "/src/public/element/otherthing/otherelement/bowl_powder3_maga.png";
    import bowl_powder3_butter from "/src/public/element/otherthing/otherelement/bowl_powder3_butter.png";
    import bowl_powder1_butter from "/src/public/element/otherthing/otherelement/bowl_powder1_butter.png";
    import bowl_powder1_maga from "/src/public/element/otherthing/otherelement/bowl_powder1_maga.png";
    import bowl_powder2_butter from "/src/public/element/otherthing/otherelement/bowl_powder2_butter.png";
    import bowl_powder2_maga from "/src/public/element/otherthing/otherelement/bowl_powder2_maga.png";

    // 그릇 이미지 매핑
    const bowlImages = {
        'parkmargarine': bowl_powder3_maga,
        'parkbutter': bowl_powder3_butter,
        'strongbutter': bowl_powder1_butter,
        'strongmargarine': bowl_powder1_maga,
        'middlebutter': bowl_powder2_butter,
        'middlemargarine': bowl_powder2_maga
    };
    
    // 액체 매핑
    const liquidImages = {
        'ion2': ion,
        'milk2': milk,
        'water2': water,
        'bod2': bod,
        'juice2': juice,
        'yorg2': yorg
    };
    
    const liquidIds = {
        'ion2': 'ion',
        'milk2': 'milk',
        'water2': 'water',
        'bod2': 'vodka',
        'juice2': 'juice',
        'yorg2': 'yorg'
    };
    
    let selectedIngredient = null;
    let selectedliquid = null;
    let id = null;
    let id_liquid = null;
    
    onMount(() => {
        const queryParams = new URLSearchParams($page.url.search);
        id = queryParams.get('id');
        const dotElement = document.querySelector('.dot');
        if (dotElement && bowlImages[id]) {
            dotElement.src = bowlImages[id];
        }
    });
    
    function updateIngredientImage(ingredient) {
        selectedIngredient = ingredient;
        selectedliquid = ingredient;
        document.querySelector('.bowl').src = liquidImages[ingredient];
    }
    
    function send() {
        if (selectedliquid) {
            id_liquid = liquidIds[selectedliquid];
        }
    }
    
    function go() {
        send();
        const dot2Element = document.querySelector('.dot2');
        
        if (!selectedIngredient) {
            dot2Element.src = warn;
            setTimeout(() => {
                dot2Element.src = dot1;
            }, 1500);
        } else {
            window.location.href = `make_sheet2/ingredient/main_ingre?id=${id}&id_liquid=${id_liquid}`;
        }
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="allbox">
    <img src={background1} alt="메인보드" class="paochai">


    <img class="bowl" src={bowl} alt="액체">
    <img src={dot1} alt="노딜리트" class="dot">
    <img src={dot2} alt="노딜리트2" class="dot2">

    <button  onclick={go()} class= "bugton">
        <img src={next_button} alt="버튼" class="buten"/>
    </button>


    <div class="sidebar">
        <div class="Button">
            <button
                class="ion {selectedIngredient === 'ion' ? 'selected' : ''}"
                onclick={() => updateIngredientImage('ion2')}>이온음료
            </button>

            <button
            class="bod {selectedIngredient === 'bod' ? 'selected' : ''}"
            onclick={() => updateIngredientImage('bod2')}
            >보드카</button>


            <button
                class="juice {selectedIngredient === 'juice' ? 'selected' : ''}"
                onclick={() => updateIngredientImage('juice2')}
                >주스</button>
        </div>

        <div class="Button2">
            <button
                class="yorg {selectedIngredient === 'yorg' ? 'selected' : ''}"
                onclick={() => updateIngredientImage('yorg2')}
                >요구르트</button>

            <button
                class="water {selectedIngredient === 'water' ? 'selected' : ''}"
                onclick={() => updateIngredientImage('water2')}
                >물</button>

            <button
                class="milk {selectedIngredient === 'milk' ? 'selected' : ''}"
                onclick={() => updateIngredientImage('milk2')}
                >우유</button>
    
        </div>

    </div>
    


</div>



<img class="pan" src={ganpan} alt="간판">


<style>
    :global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
    
    .allbox{
        width: 100vw;
		height: 100vh;
		background-color: #b071cd;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
    }
    .paochai {
        width: 100%;
        height: 100%;
    }
    
    
    .bowl {
        width: 44%;
        margin-bottom: 17%;

        opacity: 0.8;
        
        position: absolute;
        z-index: 4;
    }
    
    .dot {
        width: 45%;
        margin-bottom: 17%;
        position: absolute;
        z-index: 3;
    }

    .dot2 {
        position: absolute;
        z-index: 7;
    }
    
    .sidebar {
        width: 75%;
        height: 35%;
        margin-top: 60vh;

        background-color: #9744bf;
        border-radius: 10px;

        position: absolute;
        z-index: 4;
    }
    

    .Button {
        width: 100%;
        height: 50%;

        display: flex; 
        justify-content: space-around;
        align-items: center;
    }

    .Button2 {
        width: 100%;
        height: 50%;

        display: flex; 
        justify-content: space-around;
        align-items: center;
    }

    .ion, .bod, .juice, .water, .milk, .yorg {
        position: relative;

        min-width: 25%; 
        height: 13vh;   
        white-space: nowrap; 

        background-color: #FFD400;

        font-size: 65px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;

        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    

    .pan {
        position: absolute;
        width: 15%;
        height: 50%;
        top: 20px;
        left: 20px;
        margin-bottom: 20px;
        padding: 0;
        z-index: 1;
    }
    

    

    .bugton {
        margin-left: 60vw;

        background-color: rgba(0, 0, 0, 0);
        border: none;

        position: absolute;
        z-index: 5;
    }

    .buten {
        width: 10vh;
        height: 10vh;

        display: flex;  
        align-items: center;

        position: absolute;
        z-index: 1;
        
    }


/*버튼 반짝*/
    .ion:hover, .bod:hover, .milk:hover, .water:hover, .juice:hover, .yorg:hover
    {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .ion:active, .bod:active, .milk:active, .water:active, .juice:active, .yorg:active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
</style>