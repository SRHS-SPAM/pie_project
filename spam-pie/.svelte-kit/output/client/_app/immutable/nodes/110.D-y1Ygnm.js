import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.DYqa7g_C.js";import{h as H,p as K,u as N,o as Y,i as Z,j as i,f as A,k as d,l as B,a as G,b as I,t as O,E as L,y as n,e as o,D as Q,z as x,r,K as m}from"../chunks/vendor.e_0P48yf.js";import{g as h}from"../chunks/entry.Zo_h_yfy.js";import{p as V}from"../chunks/stores.BdE4KJcC.js";import{b as X}from"../chunks/background.CSMWsw4H.js";import{n as ee}from"../chunks/nextbotten.BVcWr8gj.js";const te=""+new URL("../assets/파이굽기 간판.CS4dcF8q.png",import.meta.url).href,se=""+new URL("../assets/oven.ntRreY-n.png",import.meta.url).href,ie=""+new URL("../assets/choseoven.ClJZWpgF.png",import.meta.url).href;var ne=(u,t)=>t("thr"),ae=(u,t)=>t("one"),le=(u,t)=>t("onethr"),oe=(u,t)=>t("eig"),re=O('<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-13q14u4"> <link rel="preconnect" href="https://fonts.gstatic.com" class="svelte-13q14u4"> <link href="https://fonts.googleapis.com/css2?family=Jua&amp;display=swap" rel="stylesheet" class="svelte-13q14u4"> <div class="container svelte-13q14u4"><div class="back svelte-13q14u4"><img alt="배경" class="svelte-13q14u4"></div> <button class="n svelte-13q14u4"><img alt="다음" class="svelte-13q14u4"></button> <div class="c svelte-13q14u4"><img alt="단계" class="svelte-13q14u4"></div> <div class="foot svelte-13q14u4"><button id="thr" class="thr svelte-13q14u4" type="button">0:30</button> <button id="one" class="one svelte-13q14u4" type="button">1:00</button> <button id="onethr" class="onethr svelte-13q14u4" type="button">1:30</button> <button id="eig" class="eig svelte-13q14u4" type="button">8:00</button></div> <div class="dan svelte-13q14u4"><img alt="경고" class="svelte-13q14u4"></div> <div class="o svelte-13q14u4"><img alt="오븐" id="oven" class="oven svelte-13q14u4"></div></div>',1);function _e(u,t){K(t,!1);const C=N(),R=()=>Q(V,"$page",C);let s=x(""),f=x(!1);function g(e){console.log("Selected time: ",e),L(s,e);const l=document.querySelector(".oven");l instanceof HTMLImageElement&&(e=="thr"?l.src="/src/public/element/otherthing/otherelement/oven1.png":e=="one"?l.src="/src/public/element/otherthing/otherelement/oven2.png":e=="onethr"?l.src="/src/public/element/otherthing/otherelement/oven3.png":e=="eig"&&(l.src="/src/public/element/otherthing/otherelement/oven4.png"))}let a=null,c=null,v=null;Y(()=>{const e=new URL(window.location.href),l=window.location.pathname.split("/").pop(),z=e.searchParams.get("id");a=l||z||"No ID Provided",sessionStorage.setItem("currentURL",window.location.href);const E=new URLSearchParams(R().url.search);a=E.get("id"),c=E.get("id_liquid")});async function F(){const e=new URLSearchParams(R().url.search);a=e.get("id"),c=e.get("id_liquid"),v=e.get("main_ingredient"),n(s)=="thr"?await h(`result?id=${a}&id_liquid=${c}&main_ingredient=${v}&selectedtime=0:30`):n(s)=="one"?await h(`result?id=${a}&id_liquid=${c}&main_ingredient=${v}&selectedtime=1:00`):n(s)=="onethr"?await h(`result?id=${a}&id_liquid=${c}&main_ingredient=${v}&selectedtime=1:30`):n(s)=="eig"?await h(`result?id=${a}&id_liquid=${c}&main_ingredient=${v}&selectedtime=8:00`):(L(f,!0),setTimeout(()=>{L(f,!1)},3e3))}Z();var U=re(),P=i(A(U),6),q=o(P),J=o(q);d(J,"src",X),r(q);var p=i(q,2);p.__click=F;var M=o(p);d(M,"src",ee),r(p);var b=i(p,2),T=o(b);d(T,"src",te),r(b);var w=i(b,2),k=o(w);k.__click=[ne,g];var $=i(k,2);$.__click=[ae,g];var y=i($,2);y.__click=[le,g];var S=i(y,2);S.__click=[oe,g],r(w);var _=i(w,2),W=o(_);d(W,"src",ie),r(_);var D=i(_,2),j=o(D);d(j,"src",se),r(D),r(P),B(()=>{m(k,"active",n(s)==="thr"),m($,"active",n(s)==="one"),m(y,"active",n(s)==="onethr"),m(S,"active",n(s)==="eig"),m(_,"show",n(f))}),G(u,U),I()}H(["click"]);export{_e as component};
