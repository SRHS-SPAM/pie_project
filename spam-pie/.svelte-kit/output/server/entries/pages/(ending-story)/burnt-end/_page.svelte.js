import { d as attr, c as slot, b as pop, p as push } from "../../../../chunks/vendor.js";
import "../../../../chunks/client.js";
import { b as ba } from "../../../../chunks/검은사진.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <div><botten class="end svelte-1anru9g" style="cursor:pointer"><img class="end svelte-1anru9g"${attr("src", ba)} alt="엔딩"></botten></div> <div class="caption svelte-1anru9g" style="cursor:pointer">석탄 엔딩</div> <button class="bot svelte-1anru9g"><div class="botten svelte-1anru9g">돌아가기</div></button> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
