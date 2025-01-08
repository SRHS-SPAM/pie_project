import { f as store_get, d as attr, e as escape_html, h as html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../../../chunks/vendor.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/client.js";
import { s as sro1 } from "../../../../../../../chunks/심사위원배경.js";
import { g as goodapplebread } from "../../../../../../../chunks/apple-bread.js";
import { w as wh } from "../../../../../../../chunks/투명.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let appleId;
  const stories = [
    {
      img: sro1,
      text: "이봐, 대회 규정 좀 읽어봐. 파이라니까, 빵이 아니라.\n 넌 탈락이야.",
      simtext: "심사위원",
      pieimg: goodapplebread,
      tu: wh
    }
  ];
  appleId = +store_get($$store_subs ??= {}, "$page", page).params.appleId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (stories[appleId - 1]) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-3abuuu"><img${attr("alt", `${appleId}번이미지`)}${attr("src", stories[appleId - 1].tu)} class="tu svelte-3abuuu"></button> <div><img${attr("alt", `${appleId}번스토리`)}${attr("src", stories[appleId - 1].img)} class="story svelte-3abuuu"></div> <div class="piebox svelte-3abuuu"><img${attr("alt", `${appleId}파이`)}${attr("src", stories[appleId - 1].pieimg)} class="pie svelte-3abuuu"> <img${attr("alt", `${appleId}파이`)}${attr("src", stories[appleId - 1].pieimg)} class="pie svelte-3abuuu"> <img${attr("alt", `${appleId}파이`)}${attr("src", stories[appleId - 1].pieimg)} class="pie svelte-3abuuu"></div> <div class="textbox svelte-3abuuu"><p class="simtext svelte-3abuuu">${escape_html(stories[appleId - 1].simtext)}</p> <p class="textmal svelte-3abuuu">${html(stories[appleId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `존재하지 않는 페이지`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
