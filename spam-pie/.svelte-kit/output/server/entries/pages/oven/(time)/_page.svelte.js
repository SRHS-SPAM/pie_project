import { d as attr, b as pop, j as stringify, p as push } from "../../../../chunks/vendor.js";
import "../../../../chunks/client.js";
import { b as background } from "../../../../chunks/background.js";
import { n as next } from "../../../../chunks/nextbotten.js";
const chep = "/_app/immutable/assets/%ED%8C%8C%EC%9D%B4%EA%B5%BD%EA%B8%B0%20%EA%B0%84%ED%8C%90.CS4dcF8q.png";
const oven = "/_app/immutable/assets/oven.ntRreY-n.png";
const danger = "/_app/immutable/assets/choseoven.ClJZWpgF.png";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-13q14u4"> <link rel="preconnect" href="https://fonts.gstatic.com" class="svelte-13q14u4"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet" class="svelte-13q14u4"> <div class="container svelte-13q14u4"><div class="back svelte-13q14u4"><img${attr("src", background)} alt="배경" class="svelte-13q14u4"></div> <button class="n svelte-13q14u4"><img${attr("src", next)} alt="다음" class="svelte-13q14u4"></button> <div class="c svelte-13q14u4"><img${attr("src", chep)} alt="단계" class="svelte-13q14u4"></div> <div class="foot svelte-13q14u4"><button id="thr"${attr("class", `thr svelte-13q14u4 ${stringify([""].filter(Boolean).join(" "))}`)} type="button">0:30</button> <button id="one"${attr("class", `one svelte-13q14u4 ${stringify([""].filter(Boolean).join(" "))}`)} type="button">1:00</button> <button id="onethr"${attr("class", `onethr svelte-13q14u4 ${stringify([""].filter(Boolean).join(" "))}`)} type="button">1:30</button> <button id="eig"${attr("class", `eig svelte-13q14u4 ${stringify([""].filter(Boolean).join(" "))}`)} type="button">8:00</button></div> <div${attr("class", `dan svelte-13q14u4 ${stringify([""].filter(Boolean).join(" "))}`)}><img${attr("src", danger)} alt="경고" class="svelte-13q14u4"></div> <div class="o svelte-13q14u4"><img${attr("src", oven)} alt="오븐" id="oven" class="oven svelte-13q14u4"></div></div>`;
  pop();
}
export {
  _page as default
};
