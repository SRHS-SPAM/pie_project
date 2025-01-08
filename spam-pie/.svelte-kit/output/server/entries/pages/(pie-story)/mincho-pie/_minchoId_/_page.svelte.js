import { f as store_get, d as attr, h as html, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
import { w as wh } from "../../../../../chunks/투명.js";
const whpie1 = "/_app/immutable/assets/%EA%B4%B4%EC%8B%9D%EC%97%94%EB%94%A9-1.C3R9eEf2.png";
const whpie2 = "/_app/immutable/assets/%EA%B4%B4%EC%8B%9D%EC%97%94%EB%94%A9-2.DWIXkVOR.png";
const whpie3 = "/_app/immutable/assets/%EA%B4%B4%EC%8B%9D%EC%97%94%EB%94%A9-3.ClgEmCTV.png";
const whpie4 = "/_app/immutable/assets/%EA%B4%B4%EC%8B%9D%EC%97%94%EB%94%A9-4.DRuJZODA.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let minchoId;
  const stories = [
    {
      img: whpie1,
      text: "정체불명의 식별 불가 괴식 파이를 만든 주인공...",
      tu: wh
    },
    {
      img: whpie2,
      text: "이 파이에 모든 심사위원들은 경악에 혹평을 하지만,\n 단 한명의 심사위원만이 이 파이를 마음에 들어한다.",
      tu: wh
    },
    {
      img: whpie3,
      text: "알고보니 그 심사위원은 그런 괴상한 파이가 취향이었고,\n 이에 그런 주인공에게 지원금과 일자리를 내어준다.",
      tu: wh
    },
    {
      img: whpie4,
      text: "새 직장에서 번 돈으로 신약을 구입하여 아픈 가족들을 치료해내고,\n 심사위원과 동업하며 무난하게 살게 된다.",
      tu: wh
    },
    { img: ba, text: "히든 엔딩" }
  ];
  minchoId = +store_get($$store_subs ??= {}, "$page", page).params.minchoId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (minchoId == 4) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1pg3v2x"><img${attr("alt", `${minchoId}번이미지`)}${attr("src", stories[minchoId - 1].tu)} class="tu svelte-1pg3v2x"></button> <div><img${attr("alt", `${minchoId}번스토리`)}${attr("src", stories[minchoId - 1].img)} class="story svelte-1pg3v2x"></div> <div class="textbox svelte-1pg3v2x">${html(stories[minchoId - 1].text.replace(/\n/g, "<br>"))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (minchoId == 5) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="bot svelte-1pg3v2x"><div class="botten svelte-1pg3v2x">돌아가기</div></button> <div><img${attr("alt", `${minchoId}번스토리`)}${attr("src", stories[minchoId - 1].img)} class="story svelte-1pg3v2x"></div> <div class="textbox3 svelte-1pg3v2x"><div class="text2 svelte-1pg3v2x">${escape_html(stories[minchoId - 1].text)}</div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (stories[minchoId - 1]) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="button svelte-1pg3v2x"><img${attr("alt", `${minchoId}번이미지`)}${attr("src", stories[minchoId - 1].tu)} class="tu svelte-1pg3v2x"></button> <div><img${attr("alt", `${minchoId}번스토리`)}${attr("src", stories[minchoId - 1].img)} class="story svelte-1pg3v2x"></div> <div class="textbox svelte-1pg3v2x">${html(stories[minchoId - 1].text.replace(/\n/g, "<br>"))}</div>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `존재하지 않는 페이지`;
      }
      $$payload.out += `<!--]-->`;
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
