/*jshint esversion: 6 */
let isAnimatingNow = Boolean(false);
const panelList = ['top', 'concept', 'about', 'members', 'links'];
(function() {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        css_sp_tb();
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        css_sp_tb();
    } else {
        css_pc();
    }
})();

function css_sp_tb() {
    let css_sp_tb_plus = document.createElement('link');
    css_sp_tb_plus.setAttribute('rel', 'stylesheet');
    css_sp_tb_plus.setAttribute('type', 'text/css');
    css_sp_tb_plus.setAttribute('href', './sp_tb_style.css');
    document.getElementsByTagName('head')[0].appendChild(css_sp_tb_plus);
}

function css_pc() {
    let css_pc_plus = document.createElement('link');
    css_pc_plus.setAttribute('rel', 'stylesheet');
    css_pc_plus.setAttribute('type', 'text/css');
    css_pc_plus.setAttribute('href', './pc_style.css');
    document.getElementsByTagName('head')[0].appendChild(css_pc_plus);
}

function showpanels(panelId) {
    if (!isAnimatingNow) {
        console.log(isAnimatingNow);
        let top = document.getElementById("top");
        top.classList.remove("show");
        top.classList.remove("showtop");
        let obj = document.getElementById(panelId);
        obj.classList.remove("nonepanel");
        isAnimatingNow = Boolean(false);
        obj.classList.add("showpanel");
        top.classList.add("nonetop");
    }
}

function nonepanels(btnId) {
    if (!isAnimatingNow) {
        isAnimatingNow = Boolean(true);
        var obj = document.getElementById(btnId);
        window.setTimeout(function() {
            obj.classList.add("nonepanel");
            isAnimatingNow = Boolean(false);
        }, "2000");
    }
    let top = document.getElementById("top");
    top.classList.remove("nonetop");
    top.classList.add("showtop");
}

function changePanelR(moveId) {
    if (!isAnimatingNow) {
        isAnimatingNow = Boolean(true);
        var panelIndex = panelList.findIndex(item => item === moveId);
        panelIndex++;
        if (panelIndex === panelList.length) {
            panelIndex = 0;
        }
        var obj = document.getElementById(moveId);
        var obj2 = document.getElementById(panelList[panelIndex]);
        console.log(panelIndex);
        if (panelIndex === 0) {
            obj2.classList.remove("nonetop");
            obj2.classList.add("showtop");
        } else {
            obj2.classList.remove("nonepanel");
            obj2.classList.add("movepanelR");
            obj2.classList.add("showpanel");
        }
        window.setTimeout(function() {
            obj.classList.remove("showpanel");
            obj.classList.add("nonepanel");
            if (panelIndex !== 0) obj2.classList.remove("movepanelR");
            isAnimatingNow = Boolean(false);
        }, "2000");
    }
}

function changePanelL(moveIdL) {
    if (!isAnimatingNow) {
        isAnimatingNow = Boolean(true);
        var panelIndex = panelList.findIndex(item => item === moveIdL);
        panelIndex--;
        if (panelIndex == panelIndex.length) {
            panelIndex = 0;
        }
        console.log(panelIndex);
        var obj = document.getElementById(moveIdL);
        var obj2 = document.getElementById(panelList[panelIndex]);
        if (panelIndex === 0) {
            obj2.classList.remove("nonetop");
            obj2.classList.add("showtop");
        } else {
            obj2.classList.remove("nonepanel");
            obj2.classList.add("movepanelL");
            obj2.classList.add("showpanel");
        }
        window.setTimeout(function() {
            obj.classList.remove("showpanel");
            obj.classList.add("nonepanel");
            if (panelIndex !== 0) obj2.classList.remove("movepanelL");
            isAnimatingNow = Boolean(false);
        }, "2000");
    }
}

let countup = function() {
    console.log(isAnimatingNow);
};
setInterval(countup, 500);