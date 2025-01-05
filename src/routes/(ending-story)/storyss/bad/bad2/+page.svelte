<script >
	import { goto } from "$app/navigation";
    import bad2 from "/src/public/illustration/엔딩/배드엔딩-2.png"

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div>
    <button class="bad2" style="cursor:pointer" on:click={()=>goto('/storyss/bad/bad3')}><img class="img" src={bad2} alt="배드엔딩"></button>
<div class="caption" style="font-size: xx-large;">더이상 병원비를 지불 할 수 없던 주인공은<br>결국 병으로 떠난 가족들의 장례식을 지켜본다.</div>
</div>



<slot/>

<style>
    .bad2{
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