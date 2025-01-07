<script>
    // @ts-nocheck
    import { page } from '$app/stores';
    import { onMount } from 'svelte';   
    import background1 from "/src/public/element/otherthing/otherelement/background.png";
    import next_button from "/src/public/element/otherthing/otherelement/nextbotten.png";
    import bowl from "/src/public/element/otherthing/otherelement/what.png";
    import ganpan from "/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    import dot1 from "/src/public/element/otherthing/otherelement/nodelete1.png";
    import warn from "/src/public/element/otherthing/otherelement/waring_main.png";
    
    // 재료 이미지 임포트
    import apple from "/src/public/element/otherthing/otherelement/bowlapple.png";
    import berry from "/src/public/element/otherthing/otherelement/bowlberry.png";
    import mint from "/src/public/element/otherthing/otherelement/bowlmincho.png";
    import inseon from "/src/public/element/otherthing/otherelement/bowlinseon.png";
    import pump from "/src/public/element/otherthing/otherelement/bowlpump.png";
    import spam from "/src/public/element/otherthing/otherelement/bowlspam.png";
    import meat from "/src/public/element/otherthing/otherelement/bowlmeat.png";
    
    // 재료 매핑
    const ingredientImages = {
        'bowlapple': apple,
        'bowlberry': berry,
        'bowlmincho': mint,
        'bowlinseon': inseon,
        'bowlpump': pump,
        'bowlspam': spam,
        'bowlmeat': meat
    };
    
    const ingredientIds = {
        'bowlapple': 'apple',
        'bowlinseon': 'inseon',
        'bowlberry': 'blueberry',
        'bowlmincho': 'mintchoco',
        'bowlmeat': 'meat',
        'bowlpump': 'pump',
        'bowlspam': 'spam'
    };
    
    let selectedIngredient = null;
    let id;
    let id_liquid;
    let id_main;
    
    function updateIngredientImage(ingredient) {
        selectedIngredient = ingredient;
        document.querySelector('.main').src = ingredientImages[ingredient];
    }
    
    onMount(() => {
        const queryParams = new URLSearchParams($page.url.search);
        id = queryParams.get('id');
        id_liquid = queryParams.get('id_liquid');
    });
    
    function send() {
        if (selectedIngredient) {
            id_main = ingredientIds[selectedIngredient];
        }
    }
    
    function go() {
        send();
        const dotElement = document.querySelector('.dot');
        
        if (!selectedIngredient) {
            dotElement.src = warn;
            setTimeout(() => {
                dotElement.src = dot1;
            }, 1500);
        } else {
            window.location.href = `/oven?id=${id}&id_liquid=${id_liquid}&main_ingredient=${id_main}`;
        }
    }
    </script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="main_box">
    <img class="pan" src={ganpan} alt="간판">

    <img src={background1} alt="메인보드" class="paochai">
    
    
    <img class="main" src={bowl} alt="메인재료">
    <img src={dot1} alt="노딜리트" class="dot">

    <button  onclick={go()} class= "bugton">
        <img src={next_button} alt="버튼" class="buton"/>
    </button>


    <div class="sidebar">
        <div class="Button">
                <button
                    class="spam {selectedIngredient === 'spam' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlspam')}>스팸</button>
                <button
                    class="apple {selectedIngredient === 'apple' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlapple')}>사과</button>
                <button
                    class="berry {selectedIngredient === 'berry' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlberry')}>베리</button>

                <button
                        class="inseon {selectedIngredient === 'inseon' ? 'selected' : ''}"
                        onclick={() => updateIngredientImage('bowlinseon')}>정어리</button>
                </div>
            <div class="Button2">
                <button
                    class="mincho {selectedIngredient === 'mint' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlmincho')}>민초</button>
                <button
                    class="meat {selectedIngredient === 'meat' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlmeat')}>고기</button>
                <button
                    class="pump {selectedIngredient === 'pump' ? 'selected' : ''}"
                    onclick={() => updateIngredientImage('bowlpump')}>호박</button>
            </div>

    </div>
    
</div>
<style>

    .main_box{
        width: 100vw;
		height: 100vh;
		background-color: #b071cd;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
    }
    
    /*배경 대각선 그거*/
    .paochai{
        height: 100%;
        width: 100%;
        
    }

    .dot{
        position: absolute;
        z-index: 7;
    }
    
    .sidebar{
        width: 67%;
        height: 35%;
        margin-top: 60vh;

        background-color: #9744bf;
        border-radius: 10px;

        position: absolute;
        z-index: 4;
    }

    .Button2{
        width: 100%;
        height: 50%;
        gap: 3%;

        display: flex; 
        justify-content: center;
        align-items: center;
    }

    .Button {
        width: 100%;
        height: 50%;

        display: flex; 
        justify-content: space-around;
        align-items: center;
    }/*재료 버튼*/

/*next 버튼*/
    .bugton {        
        margin-left: 55vw;

        background-color: rgba(0, 0, 0, 0);
        border: none;

        position: absolute;
        z-index: 5;
    }
    .buton{
        width: 10vh;
        height: 10vh;

        display: flex;  
        align-items: center;

        position: absolute;
        z-index: 1;
    }

    
    .main{
        overflow: hidden;
        position: absolute;
        margin-bottom: 25vh;
        width: 60vh;
        height: 60vh;
    }

    .pan{
        position: absolute;
        width: 15%;
        height: 50%;
        top: 20px;
        left: 20px;
        margin-bottom: 20px;
        padding: 0;
        z-index: 1;
    }

    

    .spam,.apple,.berry,.inseon{
        position: relative;

        min-width: 22%; 
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

    
    .meat,.mincho,.pump{
        position: relative;

        min-width: 22%; 
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

/*버튼 반짝*/
.apple:hover, .inseon:hover, .berry:hover, .pump:hover, .meat:hover, .mincho:hover, .spam:hover,
.apple:active, .inseon:active, .berry:active, .pump:active, .meat:active, .mincho:active, .spam:active 
{
    background-color: #FDFECF;
    border: 4px solid yellow;
}
.selected {
    background-color: #FDFECF;
    border: 4px solid yellow;
}
</style>