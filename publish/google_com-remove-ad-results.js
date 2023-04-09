// ==UserScript==
// @name         Google.com: Remove ad results from SERP
// @version      0.1.1
// @description  Remove ad results from SERP
// @author       weroro
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/main/publish/google_com-remove-ad-results.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/main/publish/google_com-remove-ad-results.js
// @match        https://www.google.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
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
