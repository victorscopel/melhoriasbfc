// ==UserScript==
// @name        Blockfarm Melhorias
// @namespace   https://github.com/victorscopel/melhoriasbfc
// @homepage    https://github.com/victorscopel/melhoriasbfc
// @supportURL  https://github.com/victorscopel/melhoriasbfc/issues
// @version     1.3
// @description Melhorias para o site do bfc
// @author      Victor Scopel
// @match       https://blockfarmclub.com/game/farm/*
// @match       https://idlefruitfarm.club/myfarm
// @icon        https://www.google.com/s2/favicons?domain=blockfarmclub.com

// @updateURL   https://raw.githubusercontent.com/victorscopel/melhoriasbfc/main/bfc.user.js
// @downloadURL https://raw.githubusercontent.com/victorscopel/melhoriasbfc/main/bfc.user.js
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    // CONVERTE O HORÁRIO DE UTC PARA O HORÁRIO LOCAL DO SEU COMPUTADOR
    var horario = "";
     $('.animate-pulse').each(function() {
         horario = $(this).text().replace(" Harvest : " ,'').replace("Harvest on: ",'').replace(/ /g,',').replace(/-/g,',').replace(/:/g,',');
         var array = horario.split(','),
         ano = array[0], mes = array[1], dia = array[2], hora = array[3], minuto = array[4], segundo = array[5];         
         let date = new Date(Date.UTC(ano, mes-1, dia, hora, minuto, segundo));
         horario = date.toLocaleString('pt-BR');
         $(this).text("Colher em: "+horario);
    });
})();
