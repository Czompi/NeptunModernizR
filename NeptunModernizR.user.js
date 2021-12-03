// ==UserScript==
// @name           NeptunModernizR
// @namespace      Tampermonkey Scripts
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @grant          none
// @version        0.1
// @author         Czompi Software
// @description    12/03/2021, 1:13:00 AM
// @downloadURL    https://raw.githubusercontent.com/Czompi/NeptunModernizR/master/NeptunModernizR.user.js
// ==/UserScript==

const base_url = "https://raw.githubusercontent.com/Czompi/NeptunModernizR/master/";

var css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = base_url + "master.css";

function
init() {
  var h = document.querySelector('head');
  h.appendChild(css);
}

init();