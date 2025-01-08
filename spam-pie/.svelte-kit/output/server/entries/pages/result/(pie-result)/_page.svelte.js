import { d as attr, e as escape_html, b as pop, p as push } from "../../../../chunks/vendor.js";
import "../../../../chunks/client.js";
import "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const background = "/src/public/element/otherthing/otherelement/background.png";
  const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
  const bowl = "/src/public/element/otherthing/otherelement/what.png";
  let imagePath = bowl;
  let textpie = "";
  $$payload.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet"> <div class="container svelte-557qh6"><div class="back svelte-557qh6"><img class="background svelte-557qh6"${attr("src", background)} alt="배경"></div> <img${attr("src", imagePath)} class="re svelte-557qh6" alt="결과 이미지"> <div class="foot svelte-557qh6"><p class="text svelte-557qh6">${escape_html(textpie)}</p></div> <button type="button" class="bot svelte-557qh6"><img${attr("src", next_button)} alt="단추" class="botten svelte-557qh6"></button></div>`;
  pop();
}
export {
  _page as default
};
