

<script >
	import { goto } from "$app/navigation";
    import beststory from "/src/public/illustration/엔딩/진엔딩.png"

</script>



<div>
    <button class="best" style="cursor:pointer" on:click={()=>goto('/')}><img class="img" src={beststory} alt="진엔딩"></button>
    <div class="caption" style="font-size: x-large;">상금으로 신약을 얻어 가족들을 치료후,<br>유명한 파이 가게 창립에 까지 성공하여<br>출세를 하게 되었다!</div>
</div>


<slot/>

<style>
    .best{
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
        color: white;
        margin-top: -190px;
    }
</style>