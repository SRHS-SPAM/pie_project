<script >
	import { goto } from "$app/navigation";
    import end from "/src/public/illustration/미사용/검은사진.jpeg"
    

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div>
    <botten class="end" style="cursor:pointer" ><img class="end" src={end} alt="엔딩"></botten>
</div>

<div class="caption" style="cursor:pointer" >
    석탄 엔딩
</div>

    <button class="bot" onclick={() => goto('/main_menu')}>
            <div class="botten">돌아가기</div>
    </button>



<slot/>

<style>
    .end{
    height: 100vh;
    width: 100vw; 
    overflow: hidden;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 0; 
    position: relative; 
    z-index: 0;
    cursor:default;
    } 



    .caption{
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    margin: 0 auto;
    overflow: hidden;
    margin-top: -50vh;
    cursor: default;
    color: white;
    width: 100vw;
    height: 100px;
    font-family: "Jua", sans-serif;
    font-size: 100px;

    }

    .botten {
        display: flex;
        position: absolute;
        background-color: #FFD400;

        font-size: 48px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.8;

        text-align: center;

        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        width: 180px;
        height: 11vh;
        z-index: 1;
        margin-top: 150px;
        margin-left: 120px;

        align-items: center;
        justify-content: center;
    }
    .botten:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .bot {
        position: absolute;
        top: 60vh;
        left: 140vh;
    }

</style>