// ==UserScript==
// @name         Rouming.cz: Clickable links in forum
// @version      1.0.0
// @license      MIT
// @description  Replace URL strings in forum with clickable links
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        https://*.rouming.cz/rouming*
// @match        https://*.roumenovomaso.cz/maso*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rouming.cz
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-clickable-links.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-clickable-links.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    'use strict';

    /** @type {Array<string>} */
    const selectors = [
        '.masoList > table:nth-of-type(2) tr.roumingForum + tr u',
        '.roumingForumMessage u',
    ];

    /** @type {NodeListOf<Element>} */
    const table = document.querySelectorAll(selectors.join(','));

    table.forEach(link => {
        /** @type {string} */
        const linkText = link.textContent;

        link.innerHTML = `<a href="${linkText}" target="_blank">${linkText}</a>`;
    });

})();
