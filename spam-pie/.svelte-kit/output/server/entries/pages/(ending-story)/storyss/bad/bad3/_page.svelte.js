import { d as attr, e as escape_html, c as slot, b as pop, p as push } from "../../../../../../chunks/vendor.js";
import "../../../../../../chunks/client.js";
import { b as ba } from "../../../../../../chunks/검은사진.js";
function _page($$payload, $$props) {
  push();
  const stories = [
    {
      img: "/src/public/illustration/미사용/검은사진.jpeg",
      text: "배드 엔딩"
    }
  ];
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <button class="bot svelte-c5t999"><div class="botten svelte-c5t999">돌아가기</div></button> <div><img${attr("alt", `$3번스토리`)}${attr("src", ba)} class="story svelte-c5t999"></div> <div class="textbox2 svelte-c5t999"><div class="text2 svelte-c5t999">${escape_html(stories[0].text)}</div></div> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
