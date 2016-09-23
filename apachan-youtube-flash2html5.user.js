// ==UserScript==
// @name        Apachan YouTube Flash2HTML5
// @license     MIT License
// @namespace   apachan.net/
// @description Changes flash embedded youtube videos to html5
// @include     http://apachan.net/*
// @version     1.1.1
// @grant       none
// @updateURL   https://openuserjs.org/meta/Rakodil/Apachan_YouTube_Flash2HTML5.meta.js
// ==/UserScript==
(() => {
    'use strict';

    for (let embed of document.querySelectorAll('object > embed[src*="youtube.com"]')) {
        embed.parentNode.outerHTML =
            `<iframe width="${embed.width}"
                     height="${embed.height}"
                     src="${embed.src.replace(/^.+\/(.+)$/, 'https://www.youtube.com/embed/$1')}"
                     frameborder="0"
                     allowfullscreen></iframe>`;
    }
})();
