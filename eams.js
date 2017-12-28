// ==UserScript==
// @name Clear UESTC Eams Timeout
// @namespace Violentmonkey Scripts
// @match *://eams.uestc.edu.cn/*
// @grant none
// ==/UserScript==

function clear() {
  var e=setTimeout(clear, 2000);
  for(i=0;i<=e;i++){
    console.log('clear' + i);
    clearTimeout(i);
  }  
}

clear()
