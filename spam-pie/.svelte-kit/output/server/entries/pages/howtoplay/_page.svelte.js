import { d as attr, c as slot, b as pop, p as push } from "../../../chunks/vendor.js";
import "../../../chunks/client.js";
import { b as background } from "../../../chunks/background.js";
const imageUrl3 = "/_app/immutable/assets/%EA%B2%8C%EC%9E%84%EB%B0%A9%EB%B2%95%EA%B0%84%ED%8C%90.Beo0UrAt.png";
const imageUrl4 = "/_app/immutable/assets/%EA%B2%8C%EC%9E%84%EB%B0%A9%EB%B2%95%20%EC%84%A4%EB%AA%85.DJjztZAT.png";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <div class="allbox svelte-z6mhow"><img${attr("src", background)} alt="배경 이미지" class="back svelte-z6mhow"> <img${attr("src", imageUrl3)} alt="현수막" class="fly svelte-z6mhow"> <button class="bot svelte-z6mhow"><div class="botten svelte-z6mhow">돌아가기</div></button> <div class="white svelte-z6mhow"><img${attr("src", imageUrl4)} alt="설명" class="caption svelte-z6mhow"></div></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
