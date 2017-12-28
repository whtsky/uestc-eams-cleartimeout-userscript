// ==UserScript==
// @name Clear UESTC Eams Timeout
// @name:zh 清除电子科大教务系统的 setTimeouts
// @description 清除电子科大教务系统的 setTimeouts，可以有效提升教务系统流畅性，减轻学校服务器压力，热爱成电从我做起 
// @match *://eams.uestc.edu.cn/*
// @downloadURL https://raw.githubusercontent.com/whtsky/uestc-eams-cleartimeout-userscript/master/eams.js
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
