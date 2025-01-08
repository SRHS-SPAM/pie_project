import { f as store_get, d as attr, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { s as sro3 } from "../../../../../chunks/심사배경.js";
import { w as wh } from "../../../../../chunks/투명.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
const yhan = "/_app/immutable/assets/%EC%9A%94%ED%95%9C%20%EC%84%A0%EB%B0%B0%EB%8B%98.BImOzoHf.png";
const yhan2 = "/_app/immutable/assets/%EC%9A%94%ED%95%9C%20%EC%84%A0%EB%B0%B0%EB%8B%982.Cj2OgtMD.png";
const yes = "/_app/immutable/assets/%EC%8A%A4%ED%8C%B8%20yes.DBwG6-At.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let spamId;
  const stories = [
    {
      img: sro3,
      simtext: "최고의 동아리 SPAM에 가입하시겠습니까?",
      he: yhan,
      he2: yhan2
    },
    {
      img: sro3,
      simtext: "이 언어들을 모두 공부해 오십시오. 못하시겠습니까?",
      pro: yes,
      tu: wh
    },
    { img: sro3, simtext: "죽으십시오.", tu: wh },
    { img: ba, text: "스팸 파이 엔딩" }
  ];
  spamId = +store_get($$store_subs ??= {}, "$page", page).params.spamId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (spamId == 2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1y04cyh"><img${attr("alt", `${spamId}번이미지`)}${attr("src", stories[spamId - 1].tu)} class="tu svelte-1y04cyh"></button> <div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-1y04cyh"></div> <div class="textbox svelte-1y04cyh"><div><img${attr("alt", `${spamId}프로그래밍`)}${attr("src", stories[spamId - 1].pro)} class="pro svelte-1y04cyh"></div> <p class="simtext2 svelte-1y04cyh">${escape_html(stories[spamId - 1].simtext)}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (spamId == 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-1y04cyh"><img${attr("alt", `${spamId}번이미지`)}${attr("src", stories[spamId - 1].tu)} class="tu svelte-1y04cyh"></button> <div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-1y04cyh"></div> <div class="textbox2 svelte-1y04cyh"><p class="simtext3 svelte-1y04cyh">${escape_html(stories[spamId - 1].simtext)}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (spamId == 4) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="bot svelte-1y04cyh"><div class="botten svelte-1y04cyh">돌아가기</div></button> <div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-1y04cyh"></div> <div class="textbox3 svelte-1y04cyh"><div class="text2 svelte-1y04cyh">${escape_html(stories[spamId - 1].text)}</div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (stories[spamId - 1]) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<div><img${attr("alt", `${spamId}번스토리`)}${attr("src", stories[spamId - 1].img)} class="story svelte-1y04cyh"></div> <div class="textbox svelte-1y04cyh"><p class="simtext svelte-1y04cyh">${escape_html(stories[spamId - 1].simtext)}</p></div> <div class="ctextbox svelte-1y04cyh"><div class="chose svelte-1y04cyh"><button class="cbutton svelte-1y04cyh">yes</button> <button class="cbutton svelte-1y04cyh">no</button></div></div> <div class="hebox svelte-1y04cyh"><img${attr("alt", `${spamId}반전 요한 선배님`)}${attr("src", stories[spamId - 1].he2)} class="he2 svelte-1y04cyh"> <img${attr("alt", `${spamId}요한 선배님`)}${attr("src", stories[spamId - 1].he)} class="he svelte-1y04cyh"></div>`;
        } else {
          $$payload.out += "<!--[!-->";
          $$payload.out += `존재하지 않는 페이지`;
        }
        $$payload.out += `<!--]-->`;
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
