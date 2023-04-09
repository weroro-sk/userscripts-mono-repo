// ==UserScript==
// @name         Rouming.cz: Clickable links in forum
// @namespace    https://www.weroro.sk/
// @version      0.0.1
// @description  Replace URL strings in forum with clickable links
// @author       weroro
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-clickable-links.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-clickable-links.js
// @match        https://*.rouming.cz/rouming*
// @match        https://*.roumenovomaso.cz/maso*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rouming.cz
// @grant        none
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
