// ==UserScript==
// @name         PageInPage
// @namespace    https://github.com/weicracker/pageInpage
// @version      0.0.1
// @description  anything webpage insert iframe and youself controller iframe src
// @author       jiwei
// @noframes
////match        *://*/*
// @include      *://www.cnblogs.com/*
// @include      *://*.csdn.*/*
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @grant        none
// @exclude      *://www.baidu.com/*
// ==/UserScript==

(function () {
    'use strict';
    // Your code here...
    var inputEle = "<div id='insetdiv' style='position:fixed;bottom:0;right:0;width:530px;background:#fff;'><input id='pageinpageIptId' type='text' placeholder='请输入网址...' style='height:26px;width:470px;'/><button style='height:26px;cursor:pointer;width:55px;' onclick='setIframeSrc()'>确定</button></div>";
    $('body').append(inputEle);
    var iframe = $("<iframe>");
    $(iframe).css({
        "border": "0",
        "width": "600px",
        "height": "200px"
    });
    window.setIframeSrc = function () {
        var ifSrc = "";
        var pageinpageIptVal = $("#pageinpageIptId").val();
        if (pageinpageIptVal.search("http") == -1) {
            ifSrc = "http://" + pageinpageIptVal;
        } else {
            ifSrc = pageinpageIptVal;
        }
        iframe.attr("src", ifSrc);
        $('#insetdiv').append(iframe);
        $("#pageinpageIptId").remove();
        $("button").remove();
    };
    $("body").on("keydown", function (event) {
        if (event.keyCode == 174) {
            $('#insetdiv').hide();
        } else if (event.keyCode == 175) {
            $('#insetdiv').show();
        }
    });
})();