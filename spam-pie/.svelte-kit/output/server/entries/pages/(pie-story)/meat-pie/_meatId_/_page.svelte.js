import { f as store_get, d as attr, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { s as sro1 } from "../../../../../chunks/심사위원배경.js";
import { g as goodmeatpie } from "../../../../../chunks/meat-pie.js";
import { w as wh } from "../../../../../chunks/투명.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
const sro3 = "/_app/immutable/assets/%EC%8B%AC%EC%82%AC%EC%9C%84%EC%9B%90%EB%B0%B0%EA%B2%BD2.QfHAGI-p.png";
const pie2 = "/_app/immutable/assets/%EC%83%9D%EA%B3%A0%EA%B8%B0%20%ED%8C%8C%EC%9D%B4.b7iD_6ul.png";
const no = "/_app/immutable/assets/2.B0Sib3op.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let meatId;
  const stories = [
    {
      img: sro1,
      text: "미트 파이가 정말 맛있네요.",
      simtext: "심사위원1",
      pieimg: goodmeatpie,
      tu: wh
    },
    {
      img: sro3,
      text: "미투~!",
      simtext: "심사위원2",
      pieimg: goodmeatpie,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: "심사위원2는 굿바이 선언 포즈를 취했다...",
      simtext: "",
      pieimg: goodmeatpie,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: ".",
      simtext: "",
      pieimg: goodmeatpie,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: "...",
      simtext: "",
      pieimg: goodmeatpie,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: "..................",
      simtext: "",
      pieimg: goodmeatpie,
      sim: no,
      tu: wh
    },
    {
      img: sro3,
      text: "싸해진 분위기 속에 고기파이가 식어버렸다...",
      simtext: "",
      pieimg: pie2,
      sim: no,
      tu: wh
    },
    { img: ba, text: "고기 파이 엔딩" }
  ];
  meatId = +store_get($$store_subs ??= {}, "$page", page).params.meatId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (meatId == 1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-ekj905"><img${attr("alt", `${meatId}번이미지`)}${attr("src", stories[meatId - 1].tu)} class="tu svelte-ekj905"></button> <div><img${attr("alt", `${meatId}번스토리`)}${attr("src", stories[meatId - 1].img)} class="story svelte-ekj905"></div> <div class="piebox svelte-ekj905"><img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"> <img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"> <img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"></div> <div class="textbox svelte-ekj905"><p class="simtext svelte-ekj905">${escape_html(stories[meatId - 1].simtext)}</p> <p class="textmal svelte-ekj905">${escape_html(stories[meatId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (meatId == 8) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="bot svelte-ekj905"><div class="botten svelte-ekj905">돌아가기</div></button> <div><img${attr("alt", `${meatId}번스토리`)}${attr("src", stories[meatId - 1].img)} class="story svelte-ekj905"></div> <div class="textbox2 svelte-ekj905"><div class="text2 svelte-ekj905">${escape_html(stories[meatId - 1].text)}</div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (stories[meatId - 1]) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="button svelte-ekj905"><img${attr("alt", `${meatId}번이미지`)}${attr("src", stories[meatId - 1].tu)} class="tu svelte-ekj905"></button> <div><img${attr("alt", `${meatId}번스토리`)}${attr("src", stories[meatId - 1].img)} class="story svelte-ekj905"></div> <div class="simbox svelte-ekj905"><img${attr("alt", `${meatId}번심사위원`)}${attr("src", stories[meatId - 1].sim)} class="sim svelte-ekj905"></div> <div class="piebox svelte-ekj905"><img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"> <img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"> <img${attr("alt", `${meatId}파이`)}${attr("src", stories[meatId - 1].pieimg)} class="pie svelte-ekj905"></div> <div class="textbox svelte-ekj905"><p class="simtext svelte-ekj905">${escape_html(stories[meatId - 1].simtext)}</p> <p class="textmal svelte-ekj905">${escape_html(stories[meatId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
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
