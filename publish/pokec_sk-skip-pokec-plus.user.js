// ==UserScript==
// @name         Pokec.sk: Pokec plus SKIP
// @version      1.0.0
// @license      MIT
// @description  Automatické preskočenie pokec plus ponuky po prihlásení
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        https://pokec.azet.sk/sluzby/plus/campaign-promo/*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=azet.sk
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/pokec_sk-skip-pokec-plus.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/pokec_sk-skip-pokec-plus.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    "use strict";

    const btn = document.querySelector('#skip');
    if (!btn)
      return;
  
    btn.click();

})();
