<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    goto("/storys/1"); 
  });
</script>

<main>
  <h1>Loading...</h1>
  <p>잠시만 기다려 주세요. 다른 페이지로 이동 중입니다.</p>
</main>

<div class="flex justify-center items-center">
    <h6>main page입니당!</h6>
    <h6>위에 저거 100퍼 장승원이다 ㅋㅋ</h6>
    <h6>위에 이건 이준석이다</h6>
    <h6>야 장승원 왜 내가 쓴거 지움?</h6>
    <h6>위에 100퍼 이윤솔</h6>
    <h6>오늘 급식 뭐지</h6>
    <h6>오늘 안에 끝낼게요</h6>
</div>

