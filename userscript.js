// ==UserScript==
// @name        Apachan YouTube Flash2HTML5
// @namespace   apachan.net/
// @description Changes flash embedded youtube videos to html5
// @include     http://apachan.net/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
document.querySelectorAll('object > embed[src*="youtube.com"]').forEach(function (embed) {
    embed.parentNode.outerHTML = '<iframe width="' + embed.width + '" height="' + embed.height + '" src="' + embed.src.replace(/^.+\/(.+)$/, 'https://www.youtube.com/embed/$1') + '" frameborder="0" allowfullscreen></iframe>';
});