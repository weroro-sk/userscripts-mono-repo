// ==UserScript==
// @name         Rouming.cz: Images and videos switch with keyboard arrows
// @version      1.0.1
// @license      MIT
// @description  Prepínanie obrázkov a videí/gif-ov pomocou klávesnice
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        https://*.rouming.cz/roumingGIF.php*
// @match        https://*.roumenovomaso.cz/masoShow.php*
// @match        https://*.roumenovomaso.cz/masoGIF.php*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rouming.cz
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-image-switch-with-keyboard.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/rouming_cz-image-switch-with-keyboard.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    'use strict';

    /**
     * @param {Array<string>} selectors
     * @param {Document|HTMLElement|null} [context=document]
     * @returns {null|HTMLElement}
     */
    const selectByList = (selectors, context = document) => {
        for (const selector of selectors) {

            /** @type {HTMLElement|null} */
            const element = context.querySelector(selector);

            if (element)
                return element;
        }

        return null;
    }

    /**
     * @returns {null|HTMLElement}
     */
    const getContainer = () => selectByList([

        // Maso
        '.masoList table:nth-of-type(1) tr:has(+ .masoForumMessage)',

        // Maso GIF
        '.masoList table:nth-of-type(1) tr:has(+ .masoForum)',

        // Rouming -> Ale ten má natívne prepínanie obrázkov
        // Rouming GIF
        '.roumingList .control'
    ]);

    /**
     *
     * @param {string} type
     * @returns {undefined|null|HTMLElement}
     */
    const getButton = type => {

        /** @type {{next: string[], prev: string[]}} */
        const buttonSelectors = {
            prev: [

                // Maso
                '.masoButton:first-of-type a',

                // Rouming -> Ale ten má natívne prepínanie obrázkov
                // Maso GIF || Rouming GIF
                '.roumingButton:first-of-type a'
            ],
            next: [

                // Maso
                '.masoButton:last-of-type a',

                // Rouming -> Ale ten má natívne prepínanie obrázkov
                // Maso GIF || Rouming GIF
                '.roumingButton:last-of-type a'
            ]
        };

        /** @type {undefined|Array<string>} */
        const selectors = buttonSelectors?.[type];

        /** @type {HTMLElement|null} */
        const container = getContainer();

        return selectors && container && selectByList(selectors, container);
    }

    document.addEventListener('keydown', e => {
        e.preventDefault();

        /** @type {HTMLElement|null|undefined} */
        let btn;

        switch (e.code) {
            case "ArrowLeft":
                btn = getButton('prev');
                break;
            case "ArrowRight":
                btn = getButton('next');
                break;
        }

        btn && btn.click();
    });

})();
