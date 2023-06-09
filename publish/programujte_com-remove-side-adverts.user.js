// ==UserScript==
// @name         Programujte.com - Remove side adverts
// @version      1.0.1
// @license      MIT
// @description  Odstraňuje reklamu, ktorá je imúnna voči AdBlocku
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        http://programujte.com/*
// @run-at       document-end
// @noframes     true
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=programujte.com
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/programujte_com-remove-side-adverts.user.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/programujte_com-remove-side-adverts.user.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

(() => {
    'use strict';

    /** @type {{[prop: string]: {list: Array<string>, value: string}}} */
    const list = {
        action: {
            value: 'remove',
            list: [
                '#branding_anchor_left',
                '#branding_anchor_right',
                '.adtea_leaderboard',
                '.adtea_inpage',
                '#bocni_menu_obsah',
                '.hp_videa'
            ]
        },
        background: {
            value: 'none',
            list: [
                '#highlight_background'
            ]
        },
    };

    class AdsRemover {

        /**
         * @param {{[prop: string]: {list: Array<string>, value: string}} | null} [list=null]
         */
        constructor(list = null) {
            if (!list)
                return;

            for (const prop in list) {
                if (prop === 'action')
                    this._actionJS(list[prop]);

                else
                    this._actionCSS(prop, list[prop]);
            }
        }

        /**
         * @param {{list: Array<string>, value: string}} data
         *
         * @returns {void}
         * @private
         */
        _actionJS(data) {
            this._loop(data, (element) => element[data.value]?.());
        }

        /**
         * @param {string} property
         * @param {{list: string[], value: string}} data
         *
         * @returns {void}
         * @private
         */
        _actionCSS(property, data) {
            this._loop(data, (element) => element.style[property] = data.value);
        }

        /**
         * @param {{list:Array<string>, value: string}} data
         * @param {Function} callback
         *
         * @returns {void}
         * @private
         */
        _loop(data, callback) {
            document.querySelectorAll(data.list.join(','))
                .forEach(element => {
                    callback?.(element);
                });
        }

    }

    (new AdsRemover(list));

})();
