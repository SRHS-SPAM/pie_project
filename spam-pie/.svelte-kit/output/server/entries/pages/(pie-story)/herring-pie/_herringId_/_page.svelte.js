import { f as store_get, d as attr, j as stringify, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { t as tweened, c as cubicOut } from "../../../../../chunks/tweened.js";
import { s as sro3 } from "../../../../../chunks/심사배경.js";
import { g as goodinseonpie } from "../../../../../chunks/herring-pie.js";
import { w as wh } from "../../../../../chunks/투명.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
const garen = "/_app/immutable/assets/%EA%B3%A0%EB%93%A0%EB%9E%A8%EC%A7%80.C0MhFAJV.png";
const sad = "/_app/immutable/assets/%EC%9A%B0%EC%9A%B8.BnAdbDPq.png";
const wat = "/_app/immutable/assets/%EC%A7%84%EC%A7%9C%EC%88%98%EC%A1%B0.CWnW1OGv.png";
const bigsad = "/_app/immutable/assets/%EB%8C%80%EC%9A%B0%EC%9A%B8.CUjpoSrF.png";
const garen2 = "/_app/immutable/assets/%EA%B3%A0%EB%93%A0%EB%9E%A8%EC%A7%802.Eu6i2yjS.png";
const fish2 = "/_app/immutable/assets/%EB%82%A0%EB%9B%B0%EB%8A%94_%EB%AC%BC%EA%B3%A0%EA%B8%B02.D1p8A68D.png";
const fish = "/_app/immutable/assets/%EB%82%A0%EB%9B%B0%EB%8A%94_%EB%AC%BC%EA%B3%A0%EA%B8%B0.CEu-XVEO.png";
const fu = "/_app/immutable/assets/%ED%82%B9%EB%B0%9B.rZAaPXO0.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let herringId;
  const posX = tweened(0, { duration: 600, easing: cubicOut });
  const posY = tweened(0, { duration: 600, easing: cubicOut });
  const stories = [
    {
      img: sro3,
      text: "Fuxx off, It's fuxxing raw! Get out!",
      simtext: "고든램지",
      pieimg: goodinseonpie,
      tu: wh,
      he: garen,
      she: sad,
      sujo: wat
    },
    {
      img: sro3,
      text: "(풍덩)",
      simtext: "",
      pieimg: goodinseonpie,
      tu: wh,
      he: garen,
      she: bigsad,
      sujo: wat
    },
    {
      img: sro3,
      text: "What the fuxxing that!!!!",
      simtext: "고든램지",
      pieimg: fish2,
      tu: wh,
      he: garen2,
      she: bigsad,
      sujo: wat
    },
    {
      img: sro3,
      text: "(촬싹!)",
      simtext: "고든램지",
      pieimg: fish,
      tu: wh,
      he: garen2,
      she: fu,
      sujo: wat
    },
    { img: ba, text: "정어리 파이 엔딩" }
  ];
  function moveToPositions() {
    posX.set(500);
    posY.set(-400);
    setTimeout(
      () => {
        posX.set(550);
        posY.set(-20);
      },
      500
    );
  }
  function moveToPositions2() {
    posX.set(500);
    posY.set(-200);
    setTimeout(
      () => {
        posX.set(-200);
        posY.set(70);
      },
      500
    );
  }
  function moveToPositions3() {
    posX.set(-200);
    posY.set(70);
  }
  console.log(posX);
  herringId = +store_get($$store_subs ??= {}, "$page", page).params.herringId;
  if (herringId === 2) {
    moveToPositions();
  } else if (herringId === 3) {
    moveToPositions2();
  } else if (herringId === 4) {
    moveToPositions3();
  } else {
    posX.set(0);
    posY.set(0);
  }
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (herringId == 2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1a2facs"><img${attr("alt", `${herringId}번이미지`)}${attr("src", stories[herringId - 1].tu)} class="tu svelte-1a2facs"></button> <div><img${attr("alt", `${herringId}번스토리`)}${attr("src", stories[herringId - 1].img)} class="story svelte-1a2facs"></div> <div class="piebox svelte-1a2facs"><img${attr("alt", `${herringId}파이`)}${attr("src", stories[herringId - 1].pieimg)} class="pie svelte-1a2facs"${attr("style", `transform: translate(${stringify(store_get($$store_subs ??= {}, "$posX", posX))}px, ${stringify(store_get($$store_subs ??= {}, "$posY", posY))}px);`)}></div> <div class="textbox svelte-1a2facs"><p class="simtext svelte-1a2facs">${escape_html(stories[herringId - 1].simtext)}</p> <p class="textmal svelte-1a2facs">${escape_html(stories[herringId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="sujobox svelte-1a2facs"><img${attr("alt", `${herringId}수조`)}${attr("src", stories[herringId - 1].sujo)} class="sujo svelte-1a2facs"></div> <div class="upbar svelte-1a2facs"><img${attr("alt", `${herringId}고든램지`)}${attr("src", stories[herringId - 1].he)} class="he svelte-1a2facs"> <img${attr("alt", `${herringId}쥔공`)}${attr("src", stories[herringId - 1].she)} class="she svelte-1a2facs"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (herringId == 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-1a2facs"><img${attr("alt", `${herringId}번이미지`)}${attr("src", stories[herringId - 1].tu)} class="tu svelte-1a2facs"></button> <div><img${attr("alt", `${herringId}번스토리`)}${attr("src", stories[herringId - 1].img)} class="story svelte-1a2facs"></div> <div class="fishbox svelte-1a2facs"><img${attr("alt", `${herringId}파이`)}${attr("src", stories[herringId - 1].pieimg)} class="fish svelte-1a2facs"${attr("style", `transform: translate(${stringify(store_get($$store_subs ??= {}, "$posX", posX))}px, ${stringify(store_get($$store_subs ??= {}, "$posY", posY))}px);`)}></div> <div class="textbox svelte-1a2facs"><p class="simtext svelte-1a2facs">${escape_html(stories[herringId - 1].simtext)}</p> <p class="textmal svelte-1a2facs">${escape_html(stories[herringId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="sujobox svelte-1a2facs"><img${attr("alt", `${herringId}수조`)}${attr("src", stories[herringId - 1].sujo)} class="sujo svelte-1a2facs"></div> <div class="upbar2 svelte-1a2facs"><img${attr("alt", `${herringId}고든램지`)}${attr("src", stories[herringId - 1].he)} class="he2 svelte-1a2facs"> <img${attr("alt", `${herringId}쥔공`)}${attr("src", stories[herringId - 1].she)} class="she2 svelte-1a2facs"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (herringId == 4) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="button svelte-1a2facs"><img${attr("alt", `${herringId}번이미지`)}${attr("src", stories[herringId - 1].tu)} class="tu svelte-1a2facs"></button> <div><img${attr("alt", `${herringId}번스토리`)}${attr("src", stories[herringId - 1].img)} class="story svelte-1a2facs"></div> <div class="fishbox svelte-1a2facs"><img${attr("alt", `${herringId}파이`)}${attr("src", stories[herringId - 1].pieimg)} class="fish2 svelte-1a2facs"${attr("style", `transform: translate(${stringify(store_get($$store_subs ??= {}, "$posX", posX))}px, ${stringify(store_get($$store_subs ??= {}, "$posY", posY))}px);`)}></div> <div class="textbox svelte-1a2facs"><p class="simtext svelte-1a2facs">${escape_html(stories[herringId - 1].simtext)}</p> <p class="textmal svelte-1a2facs">${escape_html(stories[herringId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="sujobox svelte-1a2facs"><img${attr("alt", `${herringId}수조`)}${attr("src", stories[herringId - 1].sujo)} class="sujo svelte-1a2facs"></div> <div class="upbar2 svelte-1a2facs"><img${attr("alt", `${herringId}고든램지`)}${attr("src", stories[herringId - 1].he)} class="he2 svelte-1a2facs"> <img${attr("alt", `${herringId}쥔공`)}${attr("src", stories[herringId - 1].she)} class="she3 svelte-1a2facs"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (herringId == 5) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<button class="bot svelte-1a2facs"><div class="botten svelte-1a2facs">돌아가기</div></button> <div><img${attr("alt", `${herringId}번스토리`)}${attr("src", stories[herringId - 1].img)} class="story svelte-1a2facs"></div> <div class="textbox2 svelte-1a2facs"><div class="text2 svelte-1a2facs">${escape_html(stories[herringId - 1].text)}</div></div>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (stories[herringId - 1]) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<button class="button svelte-1a2facs"><img${attr("alt", `${herringId}번이미지`)}${attr("src", stories[herringId - 1].tu)} class="tu svelte-1a2facs"></button> <div><img${attr("alt", `${herringId}번스토리`)}${attr("src", stories[herringId - 1].img)} class="story svelte-1a2facs"></div> <div class="piebox svelte-1a2facs"><img${attr("alt", `${herringId}파이`)}${attr("src", stories[herringId - 1].pieimg)} class="pie svelte-1a2facs"></div> <div class="textbox svelte-1a2facs"><p class="simtext svelte-1a2facs">${escape_html(stories[herringId - 1].simtext)}</p> <p class="textmal svelte-1a2facs">${escape_html(stories[herringId - 1].text.replace(/\n/g, "<br>"))}</p></div> <div class="sujobox svelte-1a2facs"><img${attr("alt", `${herringId}수조`)}${attr("src", stories[herringId - 1].sujo)} class="sujo svelte-1a2facs"></div> <div class="upbar svelte-1a2facs"><img${attr("alt", `${herringId}고든램지`)}${attr("src", stories[herringId - 1].he)} class="he svelte-1a2facs"> <img${attr("alt", `${herringId}쥔공`)}${attr("src", stories[herringId - 1].she)} class="she svelte-1a2facs"></div>`;
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
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
