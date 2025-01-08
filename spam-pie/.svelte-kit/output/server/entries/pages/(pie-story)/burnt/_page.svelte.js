import { f as store_get, d as attr, u as unsubscribe_stores, b as pop, p as push } from "../../../../chunks/vendor.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/client.js";
import { s as sro1 } from "../../../../chunks/심사위원배경.js";
const burnt = "/_app/immutable/assets/suktan.BjUc3RjO.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).params.storyId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-zow90d"><img alt="1번스토리"${attr("src", sro1)} class="story svelte-zow90d"></button> <div class="textbox svelte-zow90d" style="font-size: xx-large;">이봐, 지금 이걸 지금 먹으라고 주는건가?<br>넌 탈락이야.</div>`;
  }
  $$payload.out += `<!--]--> <div class="pies svelte-zow90d"><img${attr("src", burnt)} alt="apple" class="pie1 svelte-zow90d"> <img${attr("src", burnt)} alt="apple" class="pie2 svelte-zow90d"> <img${attr("src", burnt)} alt="apple" class="pie3 svelte-zow90d"></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
