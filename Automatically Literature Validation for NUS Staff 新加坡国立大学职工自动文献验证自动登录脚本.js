// ==UserScript==
// @name        Automatically Literature Validation for NUS Ph.D. Student 新加坡国立大学自动文献验证自动登录脚本
// @namespace   NUS
// @grant       none
// @version     1.0
// @license MIT
// @author      Naibo Wang
// @match  https://proxylogin.nus.edu.sg/libproxy1/public/*
// @description 2022/02/12 22:00:29
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > select").value = "NUSSTU";
        setTimeout(function(){document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > input[type=submit]:nth-child(4)").click();},1);
    },1);

    setTimeout(function(){
        document.querySelector("form[name='frmMain'] > input[type=submit]").click();
    },1);

    // Your code here...
})();