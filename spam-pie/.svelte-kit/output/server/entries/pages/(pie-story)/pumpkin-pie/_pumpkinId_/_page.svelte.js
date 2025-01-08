import { f as store_get, d as attr, j as stringify, e as escape_html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import { t as tweened, c as cubicOut } from "../../../../../chunks/tweened.js";
import { s as sro1 } from "../../../../../chunks/심사위원배경.js";
import { g as goodpumpkinpie } from "../../../../../chunks/pumpkin-pie.js";
import { w as wh } from "../../../../../chunks/투명.js";
import { b as ba } from "../../../../../chunks/검은사진.js";
const sro3 = "/_app/immutable/assets/%EC%95%BC%EC%83%9D%20%EB%A7%88%ED%81%AC%20%ED%99%94%EB%A9%B4%201.3C-JLSVn.png";
const sta = "/_app/immutable/assets/%EC%8A%A4%ED%8B%B0%EB%B8%8C_%EC%A0%95%EB%A9%B4.BecsDdng.png";
const sta2 = "/_app/immutable/assets/%EB%9B%B0%EB%8A%94%20%EC%8A%A4%ED%8B%B0%EB%B8%8C.BmNk6eCl.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let pumpkinId;
  const posX = tweened(0, { duration: 600, easing: cubicOut });
  const posY = tweened(0, { duration: 600, easing: cubicOut });
  const stories = [
    {
      img: sro1,
      text: "호박 파이가 참 특이하게 생겼...",
      simtext: "심사위원3",
      pieimg: goodpumpkinpie,
      tu: wh
    },
    {
      img: sro1,
      text: "툭-",
      simtext: "",
      pieimg: goodpumpkinpie,
      steve: sta,
      tu: wh
    },
    {
      img: sro3,
      text: "스티브가 호박파이를 훔치고 야생으로 달아나 버렸다...",
      simtext: "",
      pieimg: goodpumpkinpie,
      steve: sta2,
      tu: wh
    },
    { img: ba, text: "호박 파이 엔딩" }
  ];
  function moveToPositions() {
    posX.set(0);
    posY.set(0);
    setTimeout(
      () => {
        posX.set(0);
        posY.set(220);
      },
      500
    );
  }
  console.log(posX);
  pumpkinId = +store_get($$store_subs ??= {}, "$page", page).params.pumpkinId;
  if (pumpkinId === 2) {
    moveToPositions();
  } else {
    posX.set(0);
    posY.set(0);
  }
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (pumpkinId == 2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}번이미지`)}${attr("src", stories[pumpkinId - 1].tu)} class="tu svelte-1oxd9t4"></button> <div><img${attr("alt", `${pumpkinId}번스토리`)}${attr("src", stories[pumpkinId - 1].img)} class="story svelte-1oxd9t4"></div> <div class="stevebox svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}스티브`)}${attr("src", stories[pumpkinId - 1].steve)} class="steve svelte-1oxd9t4"${attr("style", `transform: translate(${stringify(store_get($$store_subs ??= {}, "$posX", posX))}px, ${stringify(store_get($$store_subs ??= {}, "$posY", posY))}px);`)}></div> <div class="piebox svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"> <img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"> <img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"></div> <div class="textbox svelte-1oxd9t4"><p class="simtext svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].simtext)}</p> <p class="textmal svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (pumpkinId == 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}번이미지`)}${attr("src", stories[pumpkinId - 1].tu)} class="tu svelte-1oxd9t4"></button> <div class="stevebox2 svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}스티브`)}${attr("src", stories[pumpkinId - 1].steve)} class="steve2"></div> <div><img${attr("alt", `${pumpkinId}번스토리`)}${attr("src", stories[pumpkinId - 1].img)} class="story svelte-1oxd9t4"></div> <div class="textbox svelte-1oxd9t4"><p class="simtext svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].simtext)}</p> <p class="textmal svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (pumpkinId == 4) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="bot svelte-1oxd9t4"><div class="botten svelte-1oxd9t4">돌아가기</div></button> <div><img${attr("alt", `${pumpkinId}번스토리`)}${attr("src", stories[pumpkinId - 1].img)} class="story svelte-1oxd9t4"></div> <div class="textbox2 svelte-1oxd9t4"><div class="text2 svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].text)}</div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (stories[pumpkinId - 1]) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<button class="button svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}번이미지`)}${attr("src", stories[pumpkinId - 1].tu)} class="tu svelte-1oxd9t4"></button> <div><img${attr("alt", `${pumpkinId}번스토리`)}${attr("src", stories[pumpkinId - 1].img)} class="story svelte-1oxd9t4"></div> <div class="piebox svelte-1oxd9t4"><img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"> <img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"> <img${attr("alt", `${pumpkinId}파이`)}${attr("src", stories[pumpkinId - 1].pieimg)} class="pie svelte-1oxd9t4"></div> <div class="textbox svelte-1oxd9t4"><p class="simtext svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].simtext)}</p> <p class="textmal svelte-1oxd9t4">${escape_html(stories[pumpkinId - 1].text.replace(/\n/g, "<br>"))}</p></div>`;
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
