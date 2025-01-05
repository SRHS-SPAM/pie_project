<script>
// @ts-nocheck
    import { goto } from "$app/navigation";
    import imageUrl1  from "/src/public/element/otherthing/otherelement/background.png";
    import  imageUrl3  from "/src/public/element/otherthing/otherelement/게임방법간판.png";
    import  imageUrl4  from"/src/public/element/otherthing/otherelement/게임방법 설명.png";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="allbox">  
    <img src={imageUrl1} alt="배경 이미지" class="back" />

    <img src={imageUrl3} alt="현수막" class="fly" />

    <button class="bot" onclick={() => goto('/main_menu')}>
        <div class="botten">돌아가기</div>
    </button>
    
    <div class="white">
        <img src={imageUrl4} alt="설명" class="caption"/>
    </div>
</div>

<slot />

<style>
    .allbox {
		width: 100vw;
		height: 100vh;
		background-color: #b071cd;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}

    

    .fly {
        position: absolute;
		width: 15%;
		height: 50%;
		top: 20px;
		left: 20px;
		margin-bottom: 20px;
		padding: 0;
		z-index: 2;
    }

    .white {
        position: absolute;
        background-color: white;
        width: 130vh;
        height: 70vh;
        margin-bottom: 5%;
        z-index: 1;
        opacity: 0.7;
        border-radius: 50px;
    }

    .caption {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
        width: 78%;
        height: 50vh;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    .back {
        width: 100%;
        height: 100%;
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
        margin-left: 45%;
    }
</style>
