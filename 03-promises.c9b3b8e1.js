function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");const u=document.querySelector(".form"),a={delay:0,step:0,amount:0};function l(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.addEventListener("input",(function(e){let t=e.target.name,n=e.target.value;!function(e,t){"delay"===e&&(a.delay=Number(t));"step"===e&&(a.step=Number(t));"amount"===e&&(a.amount=Number(t))}(t,n)})),u.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;!function({delay:t,step:n,amount:r}){setTimeout((()=>{for(let o=1;o<=r;o++)l(o,t).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),t+=n}),t)}(a)}));
//# sourceMappingURL=03-promises.c9b3b8e1.js.map
