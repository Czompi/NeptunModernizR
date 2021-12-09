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
// @grant          GM.info
// @version        0.18
// @author         Czompi Software
// @description    12/03/2021, 1:13:00 AM
// @downloadURL    https://raw.githubusercontent.com/Czompi/NeptunModernizR/master/NeptunModernizR.user.js
// ==/UserScript==

const base_url = `https://cdn.jsdelivr.net/gh/Czompi/NeptunModernizR@${GM.info.script.version}/dist/`;

var mastercss = document.createElement("link");
mastercss.rel = "stylesheet";
mastercss.type = "text/css";
mastercss.href = `${base_url}master.css`;
var masterdarkcss = document.createElement("link");
masterdarkcss.rel = "stylesheet";
masterdarkcss.type = "text/css";
masterdarkcss.href = `${base_url}master-dark.css`;

function
init() {
  var h = document.querySelector('head');
  h.appendChild(mastercss);
  h.appendChild(masterdarkcss);
}

init();