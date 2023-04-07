// ==UserScript==
// @name         Rouming.cz: image/video fit to page, iframes remover
// @namespace    https://www.weroro.sk/
// @version      0.0.1
// @description  Removes advert iframes from top and side of content and resize images and videos to fit screen. It works for rouming, maso and all GIF/VIDEO sections.
// @author       weroro
// @match        https://*.rouming.cz/rouming*
// @match        https://*.roumenovomaso.cz/maso*
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/main/publish/rouming_cz-fit-to-page.js
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/main/publish/rouming_cz-fit-to-page.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rouming.cz
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    /////////////////////
    // CSS definitions
    /////////////////////

    /** @type {string} */
    const IframeRemover = `iframe:not(#voteFrame),.roumingLista,.roumingList > br,.sidebar,.masoList table:nth-of-type(1) tr:nth-of-type(1),.masoList table:nth-of-type(1) tr:nth-of-type(2) td:not(:first-child),td.masoBody{display:none!important}`;

    /** @type {string} */
    const VideoResizer = `video{min-height:80vh!important;max-height:80vh!important}`;

    /** @type {string} */
    const RoumingImageResizer = `.wrapper .middle{width:auto!important}.wrapper .middle > table:nth-of-type(1) tr:nth-of-type(2) img{max-height:90vh!important;}`;
    /** @type {string} */
    const RoumingImageResizerHover = `.wrapper .middle{width:auto!important}.wrapper .middle > table:nth-of-type(1) tr:nth-of-type(2) img:hover{max-height:none!important}`;

    /** @type {string} */
    const MasoImageResizer = `.masoList table:nth-of-type(1) tr.masoForumMessage + tr img{max-height:90vh!important}`;
    /** @type {string} */
    const MasoImageResizerHover = `.masoList table:nth-of-type(1) tr.masoForumMessage + tr img:hover{max-height:none!important}`;

    /////////////////////
    // ACTIONS
    /////////////////////

    injectCSS(
        IframeRemover,
        VideoResizer,

        RoumingImageResizer,
        RoumingImageResizerHover,

        MasoImageResizer,
        MasoImageResizerHover
    );

    /////////////////////
    // HELPERS
    /////////////////////

    /**
     * @param {string} css
     * @returns {void}
     */
    function injectCSS(...css) {
        if (!css?.length)
            return;

        /** @type {HTMLStyleElement} */
        const el = document.createElement('style');

        el.id = 'weroro-style';
        el.innerText = css.join('');

        document.head.appendChild(el);
    }

})();
