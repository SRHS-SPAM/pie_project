import { d as attr, c as slot, b as pop, p as push } from "../../../../../../chunks/vendor.js";
import "../../../../../../chunks/client.js";
const bad1 = "/_app/immutable/assets/%EB%B0%B0%EB%93%9C%EC%97%94%EB%94%A9-1.CysVZlNw.png";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <div><button class="bad1 svelte-10aou8s" style="cursor:pointer"><img class="img svelte-10aou8s"${attr("src", bad1)} alt="진엔딩"></button> <div class="caption svelte-10aou8s" style="font-size: xx-large;">대회에서의 우승은 물론,<br>상금마저 타지 못한 주인공.......</div></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
