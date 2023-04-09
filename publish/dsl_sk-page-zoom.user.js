// ==UserScript==
// @name         DSL.sk: Zoom
// @version      1.0.1
// @license      MIT
// @description  Automatický zoom stránky
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        http*://*.dsl.sk/*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dsl.sk
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/dsl_sk-page-zoom.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/dsl_sk-page-zoom.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    "use strict";

    document.body.style.zoom = 1.7;
    document.querySelector('#header table tr:nth-of-type(2)')
        ?.remove();

    //this.blur();

})();
