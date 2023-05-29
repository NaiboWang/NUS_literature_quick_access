// ==UserScript==
// @name        Automatically Literature Validation for NUS Staff 新加坡国立大学职工自动文献验证自动登录脚本
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
// @match      *://www.spiedigitallibrary.org/*
// @match    c.g.wanfangdata.com.hk/*
// @match    ccinfoweb.ccohs.ca/*
// @match    ccrd.usc.cuhk.edu.hk/*
// @match    cpps.brepolis.net/*
// @match    highwire.stanford.edu/*
// @match    knowledge.sagepub.com/*
// @match    portal.igpublish.com/*
// @match    www.aap.amdigital.co.uk/*
// @match    www.asia-studies.com/*
// @match    www.quintpub.com/*
// @match    www.researchmethodsprimarysources.amdigital.co.uk/*
// @match    aacrjournals.org/*
// @match    academic.oup.com/*
// @match    accessmedicine.mhmedical.com/*
// @match    accesspharmacy.mhmedical.com/*
// @match    adt.arcanum.com/*
// @match    advance.lexis.com/*
// @match    advisor.lww.com/*
// @match    ajplegacy.physiology.org/*
// @match    analytics.patsnap.com/*
// @match    analyticscampus.gallup.com/*
// @match    app.investorstatelawguide.com/*
// @match    app.nkoda.com/*
// @match    arbitrationlaw.com/*
// @match    arc.aiaa.org/*
// @match    ascelibrary.org/*
// @match    asmedigitalcollection.asme.org/*
// @match    authorservices.wiley.com/*
// @match    bibliographies.brillonline.com/*
// @match    booksandjournals.brillonline.com/*
// @match    brill.com/*
// @match    bsol.bsigroup.com/*
// @match    bwl2.alexanderstreet.com/*
// @match    cancerres.aacrjournals.org/*
// @match    ccohsid.ccohs.ca/*
// @match    ci.nii.ac.jp/*
// @match    country.eiu.com/*
// @match    currentprotocols.onlinelibrary.wiley.com/*
// @match    daniels-orchestral.com/*
// @match    data.eiu.com/*
// @match    db.degruyter.com/*
// @match    direct.mit.edu/*
// @match    dl.acm.org/*
// @match    edu.digitaltheatreplus.com/*
// @match    edu.medici.tv./*
// @match    eena.alexanderstreet.com/*
// @match    elgaronline.com/*
// @match    elib.maruzen.co.jp/*
// @match    epubs.siam.org/*
// @match    esi.clarivate.com/*
// @match    experiments.springernature.com/*
// @match    find.galegroup.com/*
// @match    gateway.ovid.com/*
// @match    gdc.galegroup.com/*
// @match    global.factiva.com/*
// @match    go.gale.com/*
// @match    gongjushu.oversea.cnki.net/*
// @match    guji.unihan.com.cn/*
// @match    hanchi.ihp.sinica.edu.tw/*
// @match    heinonline.org/*
// @match    hstalks.com/*
// @match    hunteq.com/*
// @match    icsd.fiz-karlsruhe.de/*
// @match    ieeexplore.ieee.org/*
// @match    informahealthcare.com/*
// @match    infotrac.gale.com/*
// @match    infotrac.galegroup.com/*
// @match    infoweb.newsbank.com/*
// @match    insights.patsnap.com/*
// @match    inspiration.detail.de/*
// @match    intelliconnect.cch.com/*
// @match    intelliconnect.wkasiapacific.com/*
// @match    iopscience.iop.org/*
// @match    jamaevidence.mhmedical.com/*
// @match    jamanetwork.com/*
// @match    jcr.clarivate.com/*
// @match    journals.aps.org/*
// @match    journals.asm.org/*
// @match    journals.bmj.com/*
// @match    journals.sagepub.com/*
// @match    journals.spiedigitallibrary.org/*
// @match    js.sagamorepub.com/*
// @match    jt-archives.jp/*
// @match    jusmundi.com/*
// @match    justis.vlex.com/*
// @match    lib.nus.edu.sg/*
// @match    libproxy1.nus.edu.sg/*
// @match    library.artstor.org/*
// @match    linc.nus.edu.sg/*
// @match    link.gale.com/*
// @match    link.galegroup.com/*
// @match    link.springer.com/*
// @match    login.ihserc.com/*
// @match    matdata.asminternational.org/*
// @match    materials.springer.com/*
// @match    mathscinet.ams.org/*
// @match    mathworld.wolfram.com/*
// @match    member.frost.com/*
// @match    methods.sagepub.com/*
// @match    muse.jhu.edu/*
// @match    naturalmedicines.therapeuticresearch.com/*
// @match    nus.NaxosMusicLibrary.com/*
// @match    nus.naxosvideolibrary.com/*
// @match    nwld.alexanderstreet.com/*
// @match    olrl.ouplaw.com/*
// @match    online.sagepub.com/*
// @match    onlinelibrary.wiley.com/*
// @match    opil.ouplaw.com/*
// @match    orbis.bvdinfo.com/*
// @match    orlando.cambridge.org/*
// @match    osapublishing.org/*
// @match    oversea.cnki.net/*
// @match    ovidsp.ovid.com/*
// @match    oxfordmedicine.com/*
// @match    papers.nber.org/*
// @match    parlipapers.chadwyck.co.uk/*
// @match    parlipapers.proquest.com/*
// @match    philpapers.org/*
// @match    plants.jstor.org/*
// @match    pm.nlx.com/*
// @match    primarysources.brillonline.com/*
// @match    procedures.lww.com/*
// @match    projecteuclid.org/*
// @match    pubmed.ncbi.nlm.nih.gov/*
// @match    pubs.acs.org/*
// @match    pubs.rsc.org/*
// @match    pubsonline.informs.org/*
// @match    pubs-rsc-org.libproxy1.nus.edu.sg/*
// @match    quod.lib.umich.edu./*
// @match    rclweb.net/*
// @match    referenceworks.brillonline.com/*
// @match    research.ibfd.org/*
// @match    royalsocietypublishing.org/*
// @match    saemobilus.sae.org/*
// @match    sali.alexanderstreet.com/*
// @match    scifinder-n.cas.org/*
// @match    scitation.aip.org/*
// @match    scival.com/*
// @match    sds-ccohs-ca.libproxy1.nus.edu.sg/*
// @match    search.alexanderstreet.com/*
// @match    search.ebscohost.com/*
// @match    search.proquest.com/*
// @match    search-proquest-com.libproxy1.nus.edu.sg/*
// @match    secure.astm.org/*
// @match    signon.onesource.com/*
// @match    sk.sagepub.com/*
// @match    southasiacommons.net/*
// @match    spd.cambridge.org/*
// @match    spiedigitallibrary.org/*
// @match    stephanus.tlg.uci.edu/*
// @match    tll.degruyter.com/*
// @match    universitypublishingonline.org/*
// @match    video.alexanderstreet.com/*
// @match    viewpoint.eiu.com/*
// @match    webofknowledge.com/*
// @match    worldcompetitiveness.imd.org/*
// @match    www.18thcjournals.amdigital.co.uk/*
// @match    www.airitilibrary.com/*
// @match    www.aluka.org/*
// @match    www.ams.org/*
// @match    www.annualreviews.org/*
// @match    www.apabi.com/*
// @match    www.aps.org/*
// @match    www.arabidopsis.org/*
// @match    www.archivesdirect.amdigital.co.uk/*
// @match    www.arkyves.org/*
// @match    www.artstor.org/*
// @match    www.biologists.com/*
// @match    www.bloomsburyvideolibrary.com/*
// @match    www.bmj.com/*
// @match    www.caixinglobal.com/*
// @match    www.cambridge.org/*
// @match    www.chemnetbase.com/*
// @match    www.chicagomanualofstyle.org/*
// @match    www.china.amdigital.co.uk/*
// @match    www.chinacultureandsociety.amdigital.co.uk/*
// @match    www.churchmissionarysociety.amdigital.co.uk/*
// @match    www.ciaonet.org/*
// @match    www.clinicalkey.com/*
// @match    www.cljlaw.com/*
// @match    www.cnbksy.com/*
// @match    www.cochranelibrary.com/*
// @match    www.colonialcaribbean.amdigital.co.uk/*
// @match    www.db.dyabola.de/*
// @match    www.degruyter.com/*
// @match    www.digitaltheatreplus.com/*
// @match    www.earlymodernengland.amdigital.co.uk/*
// @match    www.eastindiacompany.amdigital.co.uk/*
// @match    www.e-enlightenment.com/*
// @match    www.eiu.com/*
// @match    www.elsevier.com/*
// @match    www.embase.com/*
// @match    www.emerald.com/*
// @match    www.empire.amdigital.co.uk/*
// @match    www.engineeringvillage.com/*
// @match    www.engineeringvillage2.org/*
// @match    www.ethnomusicology.amdigital.co.uk/*
// @match    www.exploration.amdigital.co.uk/*
// @match    www.firstworldwar.amdigital.co.uk/*
// @match    www.foodanddrink.amdigital.co.uk/*
// @match    www.futuremedicine.com/*
// @match    www.gender.amdigital.co.uk/*
// @match    www.genderidentityandsocialchange.amdigital.co.uk/*
// @match    www.globalcommodities.amdigital.co.uk/*
// @match    www.heinonline.org/*
// @match    www.hstalks.com/*
// @match    www.humanitiesebook.org/*
// @match    www.iareporter.com/*
// @match    www.icevirtuallibrary.com/*
// @match    www.iclr.co.uk/*
// @match    www.icpsr.umich.edu/*
// @match    www.igi-global.com/*
// @match    www.i-law.com/*
// @match    www.indiaraj.amdigital.co.uk/*
// @match    www.Indiastat.com/*
// @match    www.ingentaconnect.com/*
// @match    www.investorstatelawguide.com/*
// @match    www.iwaponline.com/*
// @match    www.jerseylaw.je/*
// @match    www.journals.asm.org/*
// @match    www.journals.uchicago.edu/*
// @match    www.jove.com/*
// @match    www.jstor.org/*
// @match    www.karger.com/*
// @match    www.kluwerarbitration.com/*
// @match    www.lawdata.com.tw/*
// @match    www.lawlanka.com/*
// @match    www.lawnet.sg/*
// @match    www.liebertonline.com/*
// @match    www.litencyc.com/*
// @match    www.loebclassics.com/*
// @match    www.manupatrafast.in/*
// @match    www.massobservationproject.amdigital.co.uk/*
// @match    www.materialconnexion.online/*
// @match    www.medievaltravel.amdigital.co.uk/*
// @match    www.methodsnow.com/*
// @match    www.micromedexsolutions.com/*
// @match    www.migration.amdigital.co.uk/*
// @match    www.mitpressjournals.org/*
// @match    www.morganclaypool.com/*
// @match    www.msi.org/*
// @match    www.nature.com/*
// @match    www.nber.org/*
// @match    www.ncbi.nlm.nih.gov/*
// @match    www.nejm.org/*
// @match    www.nrcresearchpress.com/*
// @match    www.nybooks.com/*
// @match    www.obhe.ac.uk/*
// @match    www.oecd-ilibrary.org/*
// @match    www.oed.com/*
// @match    www.onarchitecture.com/*
// @match    www.onepetro.org/*
// @match    www.opticsinfobase.org/*
// @match    www.oxfordartonline.com/*
// @match    www.oxfordbibliographies.com/*
// @match    www.oxforddnb.com/*
// @match    www.oxfordjournals.org/*
// @match    www.oxfordmusiconline.com/*
// @match    www.oxfordreference.com/*
// @match    www.oxfordscholarlyeditions.com/*
// @match    www.oxfordscholarship.com/*
// @match    www.pdcnet.org/*
// @match    www.pkulaw.com/*
// @match    www.portal.euromonitor.com/*
// @match    www.proquest.com/*
// @match    www.reaxys.com/*
// @match    www.researchsource.amdigital.co.uk/*
// @match    www.responsa.co.il/*
// @match    www.rsc.org/*
// @match    www.rsmpress.co.uk/*
// @match    www.rupress.org./*
// @match    www.sciencedirect.com/*
// @match    www.sciencemag.org/*
// @match    www.scopus.com/*
// @match    www.servicenewspapers.amdigital.co.uk/*
// @match    www.singaporestandardseshop.sg/*
// @match    www.socialismonfilm.amdigital.co.uk/*
// @match    www.springer.com/*
// @match    www.ssrn.com/*
// @match    www.statista.com/*
// @match    www.tandfonline.com/*
// @match    www.the-scientist.com/*
// @match    www.thieme-connect.com/*
// @match    www.tripdatabase.com/*
// @match    www.universitypressscholarship.com/*
// @match    www.uptodate.com/*
// @match    www.ura.gov.sg/*
// @match    www.worldreligiondatabase.org/*
// @match    www.worldscientific.com/*
// @match    www.worldtradelaw.net/*
// @match    www-annualreviews-org.libproxy1.nus.edu.sg/*
// @match    www-aps-org.libproxy1.nus.edu.sg/*
// @match    www-atsjournals-org.libproxy1.nus.edu.sg/*
// @match    ybio.brillonline.com/*

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
            document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4) > div:nth-child(4) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > select").value = "NUSSTF";
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
