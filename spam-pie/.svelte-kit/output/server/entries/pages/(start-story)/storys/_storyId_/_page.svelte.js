import { f as store_get, d as attr, h as html, u as unsubscribe_stores, b as pop, p as push } from "../../../../../chunks/vendor.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
const sto1 = "/_app/immutable/assets/1.BGOeoNgr.png";
const sto2 = "/_app/immutable/assets/2.DKRbB1Ez.png";
const sto3 = "/_app/immutable/assets/3.JEc9AdE0.png";
const sto4 = "/_app/immutable/assets/4.Vw2vXx2M.png";
const sto6 = "/_app/immutable/assets/6.Ck_h-5Wx.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let storyId;
  const stories = [
    {
      img: sto1,
      text: "치료제가 없는 불치병에 몸서리를 치는 주인공의 가족들.\n 병원비를 지불해야 하는 주인공의 지갑은 점점\n 비어가는데...",
      tu: "/src/public/illustration/미사용/투명.png"
    },
    {
      img: sto2,
      text: "그러던 어느날 기적적으로 가족들의 병을 치료할 수 있는 신약이 개발되지만,\n 이 약을 사기 위해서 주인공은 막대한 돈이 필요했다.",
      tu: "/src/public/illustration/미사용/투명.png"
    },
    {
      img: sto3,
      text: "평소처럼 야간근무를 끝내고 퇴근하던 어느 날.\n 주인공은 막대한 상금이 걸려있는 세계적인 요리대회의\n 참가자 모집 공고를 보고, 상금을 타기위해 대회에 참가한다.",
      tu: "/src/public/illustration/미사용/투명.png"
    },
    {
      img: sto4,
      text: "집안 대대로 내려져 오던 전설의 파이 레시피를 잘만 사용한다면,\n 우승 따윈 식은 죽 먹기 일테지만...",
      tu: "/src/public/illustration/미사용/투명.png"
    },
    {
      img: sto6,
      text: "어째서인지 파이의 레시피가 잘 기억나지 않는다!\n 주인공은 과연 끝내 파이의 레시피를 기억해내어\n 우승을 거머쥘 수 있을까?",
      tu: "/src/public/illustration/미사용/투명.png"
    }
  ];
  storyId = +store_get($$store_subs ??= {}, "$page", page).params.storyId;
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> `;
  if (storyId == 5) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="button svelte-1pd847c"><img${attr("alt", `${storyId}번이미지`)}${attr("src", stories[storyId - 1].tu)} class="tu svelte-1pd847c"></button> <div><img${attr("alt", `${storyId}번스토리`)}${attr("src", stories[storyId - 1].img)} class="story svelte-1pd847c"></div> <div class="textbox svelte-1pd847c">${html(stories[storyId - 1].text.replace(/\n/g, "<br>"))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (stories[storyId - 1]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="button svelte-1pd847c"><img${attr("alt", `${storyId}번이미지`)}${attr("src", stories[storyId - 1].tu)} class="tu svelte-1pd847c"></button> <button class="bot svelte-1pd847c"><div class="botten svelte-1pd847c">SKIP ></div></button> <div><img${attr("alt", `${storyId}번스토리`)}${attr("src", stories[storyId - 1].img)} class="story svelte-1pd847c"></div> <div class="textbox svelte-1pd847c">${html(stories[storyId - 1].text.replace(/\n/g, "<br>"))}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `존재하지 않는 페이지.`;
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
