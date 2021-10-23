// ==UserScript==
// @name        Blockfarm Melhorias
// @namespace   https://github.com/victorscopel/melhoriasbfc
// @homepage    https://github.com/victorscopel/melhoriasbfc
// @supportURL  https://github.com/victorscopel/melhoriasbfc/issues
// @version     1
// @description Melhorias para o site do bfc
// @author      Victor Scopel
// @match       https://blockfarm.club/farm/*
// @icon        https://www.google.com/s2/favicons?domain=blockfarm.club
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/victorscopel/melhoriasbfc/main/bfc.js
// @downloadURL https://raw.githubusercontent.com/victorscopel/melhoriasbfc/main/bfc.js
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    // CONVERTE O HORÁRIO DE UTC PARA O HORÁRIO LOCAL DO SEU COMPUTADOR
    var horario = "";
     $('[id*="clock"]').each(function() {
         horario = $(this).text().replace('Harvest on : ', '').replace(' UTC','').replace(' ',',').replace('-',',').replace('-',',').replace(':',',').replace(':',',');
         var array = horario.split(','),
         ano = array[0], mes = array[1], dia = array[2], hora = array[3], minuto = array[4], segundo = array[5];
         let date = new Date(Date.UTC(ano, mes, dia, hora, minuto, segundo));
         horario = date.toLocaleString('pt-BR');
         $(this).text("Colher em: "+horario);
    });
// DEIXA LANDS QUE NÃO SÃO LENDARIAS UM POUCO MAIS APAGADAS PRA FACILITAR ACHAR AS LANDS LENDARIAS
if (window.location.href.indexOf("mapview") > -1) {
     $(".relative td").each(function() {
        $('i:not(:contains("Legendary"))').closest(this).find("button").css("opacity","0.2");
    });
}
})();

