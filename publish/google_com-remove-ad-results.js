// ==UserScript==
// @name         Google.com: Remove ad results from SERP
// @version      0.0.1
// @description  Odstránenie reklamných výsledkov
// @author       weroro
// @match        https://www.google.com/search?*
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/google_com-remove-ad-results.js
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/google_com-remove-ad-results.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    /** @type {string[]} */
    const lang = [
        'Ads',
        'Reklamy'
    ];

    /** @type {string[]} */
    const selectors = lang.map(lng => `div[aria-label="${lng}"]`);

    document.querySelectorAll(selectors.join(','))
        .forEach(e => e.remove());

})();
