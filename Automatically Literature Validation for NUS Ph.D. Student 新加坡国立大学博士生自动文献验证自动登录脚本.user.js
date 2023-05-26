// ==UserScript==
// @name        Automatically Literature Validation for NUS Ph.D. Student 新加坡国立大学博士生自动文献验证自动登录脚本
// @namespace   NUS
// @grant       none
// @version     3.2
// @license MIT
// @author      Naibo Wang
// @match       proxylogin.nus.edu.sg/libproxy1/public/*
// @match       proxylogin-nus-edu-sg.libproxy1.nus.edu.sg/libproxy1*
// @match        www.sciencedirect.com/*
// @match        ieeexplore.ieee.org/*
// @match        dl.acm.org/*
// @match        *.springer.com/*
// @match        onlinelibrary.wiley.com/doi/*
// @match        www.ncbi.nlm.nih.gov/pubmed/*
// @match        epubs.siam.org/*
// @match        www.nature.com/*
// @match        pubsonline.informs.org/*
// @match        *.serialssolutions.com/*
// @match        *.ezlibproxy1.ntu.edu.sg/*
// @match      *://www.science.org/*
// @match      *://aip.scitation.org/*
// @match      *://journals.aps.org/*
// @match      *://onlinelibrary.wiley.com/*
// @match      *://pubs.acs.org/*
// @match      *://link.springer.com/*
// @match      *://www.sciencedirect.com/*
// @match      *://www.osapublishing.org/*
// @match      *://pubs.rsc.org/*
// @match      *://iopscience.iop.org/*
// @match      *://science.sciencemag.org/*
// @match      *://www.spiedigitallibrary.org/*
// @match      *://www.cambridge.org/*
// @match      *://www.pnas.org/*
// @match      *://royalsocietypublishing.org/*
// @match      *://heinonline.org/*
// @match      *://www.jstor.org/*
// @description 2022/02/12 22:00:29
// ==/UserScript==
 
(function() {
        'use strict';
    var url = window.location.href;
    console.log("url:",url);
    if(url.indexOf("nus") >=0 || url.indexOf("serialssolutions") >=0){
        setTimeout(function(){
            var username = ""; //input your username here to access the website which need to click the "Find it! @NUS Library" Link without manually click
            var password = ""; //input your password here to access the website which need to click the "Find it! @NUS Library" Link without manually click
            setTimeout(function(){document.querySelector("#mobile-main-page > div > div.row-fluid.section.single-results > div > a").click()},500);
            console.log(document.querySelector("#mobile-main-page > div > div.row-fluid.section.single-results > div > a"));
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
    } else{
        location.href = "http://libproxy1.nus.edu.sg/login?url=" + location.href;
    }
})();