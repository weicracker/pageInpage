// ==UserScript==
// @name         PageInPage
// @namespace    https://github.com/weicracker/pageInpage
// @version      0.0.1
// @description  anything webpage insert iframe and youself controller iframe src
// @author       jiwei
// @match        *://*/*
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var inputEle = "<div id='insetdiv' style='position:absolute;bottom:0;right:0;width:600px;'><input id='pageinpageIptId' type='text' placeholder='请输入网址...' style='height:26px;'/><button style='height:26px;cursor:pointer;' onclick='setIframeSrc()'>确定</button></div>";
    $('body').append(inputEle);
    var iframe = $("<iframe>");
    $(iframe).css({
        "width":"600px",
        "height":"200px"
    });
    window.setIframeSrc = function (){
        var ifSrc = "";
        var pageinpageIptVal = $("#pageinpageIptId").val();
        if(pageinpageIptVal.search("http")==-1){
            ifSrc = "http://"+pageinpageIptVal;
        }else{
            ifSrc = pageinpageIptVal;
        }
        console.log(ifSrc);
        iframe.attr("src",ifSrc);
        $('#insetdiv').append(iframe);
    };
})();