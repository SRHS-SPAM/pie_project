import { d as attr, c as slot } from "../../../chunks/vendor.js";
import "../../../chunks/client.js";
const mainmenu = "/_app/immutable/assets/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.BXufvnRd.png";
function _page($$payload, $$props) {
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <img class="img svelte-40bp95"${attr("src", mainmenu)} alt="메인메뉴"> <div class="ab svelte-40bp95" style="font-size: x-large"><a href="/make_sheet1/seatpowder" style="color: red;" class="svelte-40bp95">●게임시작</a> <br><a href="/howtoplay" style="color: red;" class="svelte-40bp95">●게임방법</a> <br><a href="/storys/1" style="color: red;" class="svelte-40bp95">●스토리 다시보기</a> <br><a href="/storyss/bad/bad1" style="color: red;" class="svelte-40bp95">●포기하기</a></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
