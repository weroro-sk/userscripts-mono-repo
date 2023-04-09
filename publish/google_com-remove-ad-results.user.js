// ==UserScript==
// @name         Google.com: Remove ad results from SERP
// @version      1.0.1
// @license      MIT
// @description  Remove ad results from SERP
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        https://www.google.com/search?*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/google_com-remove-ad-results.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/google_com-remove-ad-results.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
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
