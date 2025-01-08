import { d as attr, c as slot, b as pop, j as stringify, p as push } from "../../../../../chunks/vendor.js";
import { b as background } from "../../../../../chunks/background.js";
import { n as next } from "../../../../../chunks/nextbotten.js";
import { b as bowl } from "../../../../../chunks/nodelete.js";
import { d as dot1 } from "../../../../../chunks/nodelete1.js";
const imageUrl3 = "/_app/immutable/assets/fly.BIBHufLo.png";
const imageUrl4 = "/_app/immutable/assets/default.CV3SZTg8.png";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <div class="allbox svelte-5rt1jn"><div class="back svelte-5rt1jn"><img${attr("src", background)} alt="배경" class="pieback svelte-5rt1jn"></div> <div class="box svelte-5rt1jn"><img${attr("src", imageUrl3)} alt="현수막" class="fly svelte-5rt1jn"> <button class="bot svelte-5rt1jn"><img${attr("src", next)} alt="단추" class="button svelte-5rt1jn"></button> <img${attr("src", bowl)} alt="점1" class="on1 svelte-5rt1jn"> <img${attr("src", dot1)} alt="점2" class="on2 svelte-5rt1jn"> <img${attr("src", imageUrl4)} alt="그릇" class="default svelte-5rt1jn"> <div class="wall svelte-5rt1jn"><button id="Strong"${attr("class", `Strong svelte-5rt1jn ${stringify([""].filter(Boolean).join(" "))}`)} type="button">강력분</button> <button id="middle"${attr("class", `middle svelte-5rt1jn ${stringify([""].filter(Boolean).join(" "))}`)} type="button">중력분</button> <button id="park"${attr("class", `park svelte-5rt1jn ${stringify([""].filter(Boolean).join(" "))}`)} type="button">박력분</button> <button id="butter"${attr("class", `butter svelte-5rt1jn ${stringify([""].filter(Boolean).join(" "))}`)} type="button">버터</button> <button id="margarine"${attr("class", `margarine svelte-5rt1jn ${stringify([""].filter(Boolean).join(" "))}`)} type="button">마가린</button></div></div></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
