<script >
	import { goto } from "$app/navigation";
    import mainmenu from "/src/public/illustration/메인화면.png"

</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<img class="img" src={mainmenu} alt="메인메뉴">
<div class="ab" style="font-size: x-large"><a href="/make_sheet1/seatpowder" style="color: red;">●게임시작</a>
    <br><a href="/howtoplay" style="color: red;">●게임방법</a>
    <br><a href="/storys/1"style="color: red;">●스토리 다시보기</a>
    <br><a href="/storyss/bad/bad1" style="color: red;">●포기하기</a>
</div>





<slot/>


<style>
    .img{
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

    .ab{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:white;    
        opacity: 0.7;
        height: 250px;
        width: 320px;
        margin: 0 auto;
        color: red;
        margin-top: -300px;
        text-decoration-line: none;
        font-family: "Jua", sans-serif;
        text-decoration: none;
    }

    .ab:link{
        color: red;
    }
    .ab:visited{
    color: red;
    }

    .ab a { text-decoration: none; }
</style>