// ==UserScript==
// @name         屏蔽广告脚本
// @namespace    http://tampermonkey.net/
// @version      2024-06-06
// @description  try to take over the world!
// @author       You
// @match        https://m.manhuagui.com/
// @include      *://m.manhuagui.com*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=manhuagui.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //定时器
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //删除广告
     async function removeGuangGao(type = null){
        console.clear();
        console.log('开始删除')
        await sleep(2000);
        let imgList = document.getElementsByTagName("img");
        console.log('图片List',imgList)
        let sitemaji_banner = document.getElementsByClassName("sitemaji_banner");
        if(type != 'center'){
            if(sitemaji_banner!=null && sitemaji_banner!=undefined && sitemaji_banner.length!=0){
            sitemaji_banner[0].parentNode.removeChild(sitemaji_banner[0])
        }
        else{
            if(type != 'img'){
                console.log('开始递归-29');
                removeGuangGao('img');
                return
            }
        }
        }
        let center = document.getElementsByTagName("center");
         console.log(center)
        if(center!=null && center!=undefined && center.length != 0){
            center[0].parentNode.removeChild(center[0])
        }
        else{
            if(type != 'center'){
                console.log('开始递归-39');
                removeGuangGao('center');
                return
            }
        }
        if(imgList != null && imgList != undefined && imgList.length > 1 ){
            for(let i = 0; i < imgList.length; i++){
                let item = imgList[i];
                if(!item.currentSrc.includes("https://eu.hamreus.com") || !item.currentSrc.includes("https://cf.mhgui.com/")){
                    item.parentNode.removeChild(item)
                    removeGuangGao();
                    return
                }
            }
        }
//         else{
//           console.log('开始递归-54');
//           removeGuangGao();
//           return
//         }
//         await sleep(2000);
//         console.log('循环递归');
//         removeGuangGao();
    }
    removeGuangGao()
})();