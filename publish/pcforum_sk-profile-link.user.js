// ==UserScript==
// @name         Pcforum.sk: Profile link
// @version      1.0.0
// @license      MIT
// @description  Pridá do top navigácie odkaz na profil
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        http*://*.pcforum.sk/*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pcforum.sk
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/pcforum_sk-profile-link.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/pcforum_sk-profile-link.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    "use strict";

    /** @type {HTMLAnchorElement} */
    const anchor = document.querySelector('.searchbar > span:last-of-type > span:last-of-type a');
    if (!anchor)
        return;

    /** @type {HTMLTableCellElement} */
    const topNav = document.querySelector('.topnav');
    if (!topNav)
        return;

    /** @type {string} */
    const profileUrlPath = anchor.pathname
            ?.split('-')
            .slice(0, 2)
            .join('-')
        + '.html';

    /** @type {HTMLSpanElement} */
    const span = document.createElement('span');
    span.innerHTML = ' • ' + `<a href="${profileUrlPath}">Profil</a>`;

    topNav.appendChild(span);

})();
