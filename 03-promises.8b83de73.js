function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");l.addEventListener("submit",(function(t){t.preventDefault();const n=new FormData(l),o=parseInt(n.get("delay")),i=parseInt(n.get("step")),s=parseInt(n.get("amount"));!function(){let t=1;!function n(){var l,a;t<=s&&(l=t,a=o,new Promise(((e,t)=>{const n=Math.random()>.3;setTimeout((()=>{n?e({position:l,delay:a}):t({position:l,delay:a})}),a)}))).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})).finally((()=>{t++,setTimeout(n,i)}))}()}()}));
//# sourceMappingURL=03-promises.8b83de73.js.map