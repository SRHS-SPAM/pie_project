import { f as store_get, d as attr, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { s as sro1 } from "../../../../../chunks/심사위원배경.js";
import { s as sro3 } from "../../../../../chunks/심사배경.js";
import { g as goodblueberrypie } from "../../../../../chunks/blueberry-pie.js";
import { w as wh } from "../../../../../chunks/투명.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
const pie2 = "/_app/immutable/assets/%EB%82%A0%EB%9D%BC%EA%B0%80%EB%B2%84%EB%A6%B0%20%EB%B8%94%EB%A3%A8%EB%B2%A0%EB%A6%AC%20%ED%8C%8C%EC%9D%B4.DTatDPJr.png";
const no = "/_app/immutable/assets/1.Cgf9OAET.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let blueberryId;
  const stories = [
    {
      img: sro1,
      text: "저 파이가 파랑색이라는데에 내 손목을 걸지.",
      simtext: "심사위원1",
      pieimg: goodblueberrypie,
      tu: wh
    },
    {
      img: sro1,
      text: "아니?, 저 파이가 보라색이라는데에 내 발목을 걸겠어.",
      simtext: "심사위원2",
      pieimg: goodblueberrypie,
      tu: wh
    },
    {
      img: sro1,
      text: "안타깝지만, 둘다 틀렸어요.",
      simtext: "심사위원3",
      pieimg: goodblueberrypie,
      tu: wh
    },
    {
      img: sro1,
      text: "이 파이는 #353B5C색 이에요!!!!!!",
      simtext: "심사위원3",
      pieimg: goodblueberrypie,
      tu: wh
    },
    {
      img: sro3,
      text: "꺄아아아ㅏ아ㅏㅏㅏ-",
      simtext: "심사위원1, 심사위원2",
      pieimg: pie2,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: "파이가 날아가 엎어져버렸다...",
      simtext: "",
      sim: no,
      tu: wh
    },
    { img: ba, text: "블루베리 파이 엔딩" }
  ];
  blueberryId = +store_get($$store_subs ??= {}, "$page", page).params.blueberryId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (blueberryId == 5) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1nh55o3"><img${attr("alt", `${blueberryId}번이미지`)}${attr("src", stories[blueberryId - 1].tu)} class="tu svelte-1nh55o3"></button> <div><img${attr("alt", `${blueberryId}번스토리`)}${attr("src", stories[blueberryId - 1].img)} class="story svelte-1nh55o3"></div> <div class="piebox2 svelte-1nh55o3"><img${attr("alt", `${blueberryId}파이`)}${attr("src", stories[blueberryId - 1].pieimg)} class="pie2 svelte-1nh55o3"></div> <div class="textbox svelte-1nh55o3"><p class="simtext svelte-1nh55o3">${escape_html(stories[blueberryId - 1].simtext)}</p> <p class="textmal svelte-1nh55o3">${escape_html(stories[blueberryId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="simbox svelte-1nh55o3"><img${attr("alt", `${blueberryId}번심사위원`)}${attr("src", stories[blueberryId - 1].sim)} class="sim svelte-1nh55o3"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (blueberryId == 6) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-1nh55o3"><img${attr("alt", `${blueberryId}번이미지`)}${attr("src", stories[blueberryId - 1].tu)} class="tu svelte-1nh55o3"></button> <div><img${attr("alt", `${blueberryId}번스토리`)}${attr("src", stories[blueberryId - 1].img)} class="story svelte-1nh55o3"></div> <div class="textbox svelte-1nh55o3"><p class="simtext svelte-1nh55o3">${escape_html(stories[blueberryId - 1].simtext)}</p> <p class="textmal svelte-1nh55o3">${escape_html(stories[blueberryId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="simbox svelte-1nh55o3"><img${attr("alt", `${blueberryId}번심사위원`)}${attr("src", stories[blueberryId - 1].sim)} class="sim svelte-1nh55o3"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (blueberryId == 7) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="bot svelte-1nh55o3"><div class="botten svelte-1nh55o3">돌아가기</div></button> <div><img${attr("alt", `${blueberryId}번스토리`)}${attr("src", stories[blueberryId - 1].img)} class="story svelte-1nh55o3"></div> <div class="textbox2 svelte-1nh55o3"><div class="text2 svelte-1nh55o3">${escape_html(stories[blueberryId - 1].text)}</div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (stories[blueberryId - 1]) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<button class="button svelte-1nh55o3"><img${attr("alt", `${blueberryId}번이미지`)}${attr("src", stories[blueberryId - 1].tu)} class="tu svelte-1nh55o3"></button> <div><img${attr("alt", `${blueberryId}번스토리`)}${attr("src", stories[blueberryId - 1].img)} class="story svelte-1nh55o3"></div> <div class="piebox svelte-1nh55o3"><img${attr("alt", `${blueberryId}파이`)}${attr("src", stories[blueberryId - 1].pieimg)} class="pie svelte-1nh55o3"> <img${attr("alt", `${blueberryId}파이`)}${attr("src", stories[blueberryId - 1].pieimg)} class="pie svelte-1nh55o3"> <img${attr("alt", `${blueberryId}파이`)}${attr("src", stories[blueberryId - 1].pieimg)} class="pie svelte-1nh55o3"></div> <div class="textbox svelte-1nh55o3"><p class="simtext svelte-1nh55o3">${escape_html(stories[blueberryId - 1].simtext)}</p> <p class="textmal svelte-1nh55o3">${escape_html(stories[blueberryId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
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
