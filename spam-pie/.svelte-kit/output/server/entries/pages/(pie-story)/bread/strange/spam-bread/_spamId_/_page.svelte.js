import { f as store_get, d as attr, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../../../chunks/vendor.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/client.js";
import { s as sro1 } from "../../../../../../../chunks/심사위원배경.js";
import { g as goodspambread } from "../../../../../../../chunks/spam-bread.js";
import { w as wh } from "../../../../../../../chunks/투명.js";
import { b as ba } from "../../../../../../../chunks/검은사진.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let spamId;
  const stories = [
    {
      img: sro1,
      text: "모양은 그럴싸한데 이상한 맛이 나는걸? 넌 탈락이야.s",
      simtext: "심사위원",
      pieimg: goodspambread,
      tu: wh
    },
    { img: ba, text: "이상한 엔딩" }
  ];
  spamId = +store_get($$store_subs ??= {}, "$page", page).params.spamId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (spamId == 2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="bot svelte-157tj"><div class="botten svelte-157tj">돌아가기</div></button> <div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-157tj"></div> <div class="textbox2 svelte-157tj"><div class="text2 svelte-157tj">${escape_html(stories[spamId - 1].text)}</div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (stories[spamId - 1]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-157tj"><img${attr("alt", `${spamId}번이미지`)}${attr("src", stories[spamId - 1].tu)} class="tu svelte-157tj"></button> <div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-157tj"></div> <div class="piebox svelte-157tj"><img${attr("alt", `${spamId}파이`)}${attr("src", stories[spamId - 1].pieimg)} class="pie svelte-157tj"> <img${attr("alt", `${spamId}파이`)}${attr("src", stories[spamId - 1].pieimg)} class="pie svelte-157tj"> <img${attr("alt", `${spamId}파이`)}${attr("src", stories[spamId - 1].pieimg)} class="pie svelte-157tj"></div> <div class="textbox svelte-157tj"><p class="simtext svelte-157tj">${escape_html(stories[spamId - 1].simtext)}</p> <p class="textmal svelte-157tj">${escape_html(stories[spamId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `존재하지 않는 페이지`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
