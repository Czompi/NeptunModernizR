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
// @version        0.32
// @author         Czompi Software
// @description    12/03/2021, 1:13:00 AM
// @downloadURL    https://raw.githubusercontent.com/Czompi/NeptunModernizR/master/NeptunModernizR.user.js
// @require        https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

const $ = window.jQuery;

const base_url = `https://cdn.jsdelivr.net/gh/Czompi/NeptunModernizR@${GM.info.script.version}/dist/`;

// https://github.com/Balint66/NeptunSkins/blob/8760eb86ab4aafb3e0a9263451f83f24e792d9d4/neptune.user.js#L50
const help_link = $('#lnkHelp')[0];

// https://github.com/Balint66/NeptunSkins/blob/8760eb86ab4aafb3e0a9263451f83f24e792d9d4/neptune.user.js#L77
function getCurrentTheme() {
  var head = $('head')[0];
  var theme = head.innerHTML.match(/(?<=App_Themes\/)Skin_Neptun_\S+(?=\/(s|S)kin_(n|N)eptun_\S+\.css)/)[0];
    
  var currTheme = theme.split('_').slice(-1); // https://github.com/Balint66/NeptunSkins/blob/8760eb86ab4aafb3e0a9263451f83f24e792d9d4/neptune.user.js#L69
  let currentTheme = `${currTheme}`.toLowerCase();
  switch (currentTheme) {
    case "gfx":
      currentTheme = "blue";
      break;
    case "classic":
      currentTheme = "brown";
      break;
    case "newyork":
      currentTheme = "tomato";
      break;
    default:
      break;
  }
  console.log(currentTheme);
  return currentTheme;
}

// https://github.com/Balint66/NeptunSkins/blob/8760eb86ab4aafb3e0a9263451f83f24e792d9d4/neptune.user.js#L88
function getCurrentLang() {
  return (help_link.href || 'help/hweb_de.pdf').match(/(?<=help\/hweb_)\S+(?=\.pdf)/)[0];
}

var mastercss = document.createElement("link");
mastercss.rel = "stylesheet";
mastercss.type = "text/css";
mastercss.href = `${base_url}master.css`;

var npufixupcss = document.createElement("link");
npufixupcss.rel = "stylesheet";
npufixupcss.type = "text/css";
npufixupcss.href = `${base_url}npu-fixup.css`;

var themecss = document.createElement("link");
themecss.rel = "stylesheet";
themecss.type = "text/css";
themecss.href = `${base_url}themes/${getCurrentTheme()}.css`;

function
init() {
  var h = document.querySelector('head');
  h.appendChild(mastercss);
  h.appendChild(npufixupcss);
  h.appendChild(themecss);
}

init();