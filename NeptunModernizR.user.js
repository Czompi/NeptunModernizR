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
// @version        0.42
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
  var themeMatches = head.innerHTML.match(/(?<=App_Themes\/)Skin_Neptun_\S+(?=\/(s|S)kin_(n|N)eptun_\S+\.css)/);
  if(themeMatches == null) return "blue";
  var theme = themeMatches[0]
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
function getSelectors() {
	var ct = getCurrentTheme();
	var cl = getCurrentLang();
    $(".top_menu_right").empty();
    $(".top_menu_right").append("<div class=\"btn-group\">\r\n\t" +
        "<button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" id=\"themeDropdown\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Theme</button>"+
        "<ul class=\"dropdown-menu\" aria-labelledby=\"themeDropdown\">\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "pink" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_Pink');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #E20074;\"></span> Pink\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "blue" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_Gfx');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #3B49C9;\"></span> Blue\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "lime" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_Lime');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #8FCC00;\"></span> Lime\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "orange" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_Orange');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #FBA04B;\"></span> Orange\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "brown" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_Classic');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #783F04;\"></span> Brown\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (ct.toLowerCase() == "tomato" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_NewYork');\">\r\n\t\t\t"+
            	"<span class=\"color-box\" style=\"--color: #FF6347;\"></span> Tomato\r\n\t\t"+
            "</a></li>\r\n\t\t" +
			"<li><hr class=\"dropdown-divider\"></li>\r\n\t\t"+
			"<li><a class=\"dropdown-item" + (ct.toLowerCase() == "partiallysighted" ? " active" : "") + "\" onclick=\"javascript:SkinChoose('Skin_Neptun_PartiallySighted');\">\r\n\t\t\t"+
				"<span class=\"color-box\" style=\"--color: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(255,201,0,1) 100%);\"></span> Partially sighted\r\n\t\t"+
			"</a></li>\r\n\t" +
        "</ul>\r\n\t" +
    "</div>");

    $(".top_menu_right").append("<div class=\"btn-group\">\r\n\t" +
        "<button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" id=\"languageDropdown\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Language</button>"+
        "<ul class=\"dropdown-menu\" aria-labelledby=\"languageDropdown\">\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (cl.toLowerCase() == "pink" ? " active" : "") + "\" alt=\"Magyar\" onclick=\"javascript:dochangeLanguage('0','1038');return false;\">\r\n\t\t\t"+
            	"Magyar\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (cl.toLowerCase() == "blue" ? " active" : "") + "\" alt=\"English\" onclick=\"javascript:dochangeLanguage('1','1033');return false;\">\r\n\t\t\t"+
            	"English\r\n\t\t"+
            "</a></li>\r\n\t\t" +
            "<li><a class=\"dropdown-item" + (cl.toLowerCase() == "" ? " active" : "") + "\" alt=\"Deutsch\" onclick=\"javascript:dochangeLanguage('2','1031');return false;\">\r\n\t\t\t"+
            	"Deutsch\r\n\t\t"+
            "</a></li>\r\n\t\t" +
        "</ul>\r\n\t" +
    "</div>");
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

var bsscript = document.createElement("script");
bsscript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";

function
init() {
  var h = document.querySelector('head');
  h.appendChild(mastercss);
  h.appendChild(npufixupcss);
  h.appendChild(themecss);
  h.appendChild(bsscript);
  
  getSelectors();
}

init();