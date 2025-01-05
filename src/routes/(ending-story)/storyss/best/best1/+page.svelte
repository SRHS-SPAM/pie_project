

<script >
	import { goto } from "$app/navigation";
    import beststory1 from "/src/public/illustration/엔딩/진엔딩-1.png"

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div>
    <button class="best1" style="cursor:pointer" on:click={()=>goto('/storyss/best/best2')}><img class="img" src={beststory1} alt="진엔딩-1"></button>
    <div class="caption" style="font-size: xx-large;">대회에서 1등을 차지해,<br>큰 돈을 상금으로 거머쥐게 된 주인공!</div>
</div>


<slot/>

<style>
    .best1{
    height: 100vh;
    width: 100vw; 
    overflow: hidden;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 0; 
    position: relative; 
    z-index: 0;
     



    } 
    .img{
    height: 100%;
    width: 100%;
    object-fit:cover;
    cursor: default;
    }


        .caption{
        display: flex;
        position: relative;
        z-index: 2;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: black;    
        opacity: 0.7;
        height: 190px;
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        font-family: "Jua", sans-serif;
        color: white;
        margin-top: -190px;
    }
</style>