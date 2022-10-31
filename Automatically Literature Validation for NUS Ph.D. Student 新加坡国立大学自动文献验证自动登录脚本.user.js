// ==UserScript==
// @name        Automatically Literature Validation for NUS Ph.D. Student 新加坡国立大学自动文献验证自动登录脚本
// @namespace   NUS
// @grant       none
// @version     2.0
// @license MIT
// @author      Naibo Wang
// @match  https://proxylogin.nus.edu.sg/libproxy1/public/*
// @description 2022/02/12 22:00:29
// ==/UserScript==
 
(function() {
    'use strict';
setTimeout(function(){
    var username = ""; //input your username here to access the website such as scienceDirect without manually click
    var password = ""; //input your password here to access the website such as scienceDirect without manually click
    document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > select").value = "NUSSTU";
    if(username!=""){
      document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]").value = username;
    }
    if(password!=""){
      document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]").value = password;
    }

    setTimeout(function(){
        if(document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]").value!=""){
        document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > input[type=submit]:nth-child(4)").click();
        }
        },100);

},500);

setTimeout(function(){
    document.querySelector("form[name='frmMain'] > input[type=submit]").click();
},500);
})();