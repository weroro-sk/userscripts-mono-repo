// ==UserScript==
// @name         {name}
// @version      1.0.0
// @license      MIT
// @description  {description}
// @namespace    https://github.com/weroro-sk
// @author       weroro
// @homepageURL  https://www.weroro.sk
// @match        <$URL$>
// @run-at       document-end
// @noframes     true
// @grant        none
// @require      http://coffeescript.org/browser-compiler/coffeescript.js
// @icon         <$ICON$>
// @downloadURL  https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/{filename}.js
// @updateURL    https://raw.githubusercontent.com/weroro-sk/userscripts-mono-repo/master/publish/{filename}.js
// @supportURL   https://github.com/weroro-sk/userscripts-mono-repo/issues
// ==/UserScript==

var inline_src = (<><![CDATA[

    // Your code here

]]></>).toString();
var compiled = this.CoffeeScript.compile(inline_src);
eval(compiled);
