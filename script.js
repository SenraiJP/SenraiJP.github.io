let isAnimatingNow = Boolean(false);
console.log(isAnimatingNow);
var getDevice = (function () {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    css_sp_tb();
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    css_sp_tb();
  } else {
    css_pc();
  }
})();
function css_sp_tb() {
  var css_sp_tb_plus = document.createElement('link');
  css_sp_tb_plus.setAttribute('rel', 'stylesheet');
  css_sp_tb_plus.setAttribute('type', 'text/css');
  css_sp_tb_plus.setAttribute('href', './sp_tb_style.css');
  document.getElementsByTagName('head')[0].appendChild(css_sp_tb_plus);
}
function css_pc() {
  var css_pc_plus = document.createElement('link');
  css_pc_plus.setAttribute('rel', 'stylesheet');
  css_pc_plus.setAttribute('type', 'text/css');
  css_pc_plus.setAttribute('href', './pc_style.css');
  document.getElementsByTagName('head')[0].appendChild(css_pc_plus);
}
function showpanels(panelId) {
  if (!isAnimatingNow) {
    console.log(isAnimatingNow);
    var top = document.getElementById("top");
    top.classList.remove("show");
    top.classList.remove("showtop");
    if (panelId == about) {
      var obj = document.getElementById("about");
    } else if (panelId == test) {
      var obj = document.getElementById("test");
    } else if (panelId == hello) {
      var obj = document.getElementById("hello");
    } else if (panelId == more) {
      var obj = document.getElementById("more");
      obj.classList.remove("nonepanel");
    }
    obj.classList.remove("nonepanel");
    isAnimatingNow = Boolean(false);
    obj.classList.add("showpanel");
    top.classList.add("nonetop");
  }
}
function nonepanels(btnId) {
  if (!isAnimatingNow) {
    isAnimatingNow = Boolean(true);
    if (btnId == about) {
      console.log(isAnimatingNow);
      var obj = document.getElementById("about");
      window.setTimeout(function () {
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (btnId == test) {
      var obj = document.getElementById("test");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (btnId == hello) {
      var obj = document.getElementById("hello");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (btnId == more) {
      var obj = document.getElementById("more");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
    }
  }
  var top = document.getElementById("top");
  top.classList.remove("nonetop");
  top.classList.add("showtop");
}
function changePanelR(moveId) {
  if (!isAnimatingNow) {
    isAnimatingNow = Boolean(true);
    if (moveId == about) {
      var obj = document.getElementById("about");
      var obj2 = document.getElementById("test");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelR");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelR");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (moveId == test) {
      var obj = document.getElementById("test");
      var obj2 = document.getElementById("hello");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelR");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelR");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (moveId == hello) {
      var obj = document.getElementById("hello");
      var obj2 = document.getElementById("more");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelR");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelR");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (moveId == more) {
      var obj = document.getElementById("hello");
      var obj2 = document.getElementById("top");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
      var top = document.getElementById("top");
      top.classList.remove("nonetop");
      top.classList.add("showtop");
    }
  }
}
function changePanelL(moveIdL) {
  if (!isAnimatingNow) {
    isAnimatingNow = Boolean(true);
    if (moveIdL == about) {
      var obj = document.getElementById("about");
      var obj2 = document.getElementById("top");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        isAnimatingNow = Boolean(false);
      }, "2000");
      var top = document.getElementById("top");
      top.classList.remove("nonetop");
      top.classList.add("showtop");
    } else if (moveIdL == test) {
      var obj = document.getElementById("test");
      var obj2 = document.getElementById("about");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelL");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelL");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (moveIdL == hello) {
      var obj = document.getElementById("hello");
      var obj2 = document.getElementById("test");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelL");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelL");
        isAnimatingNow = Boolean(false);
      }, "2000");
    } else if (moveIdL == more) {
      var obj = document.getElementById("more");
      var obj2 = document.getElementById("hello");
      obj2.classList.remove("nonepanel");
      obj2.classList.add("movepanelL");
      obj2.classList.add("showpanel");
      window.setTimeout(function () {
        obj.classList.remove("showpanel");
        obj.classList.add("nonepanel");
        obj2.classList.remove("movepanelL");
        isAnimatingNow = Boolean(false);
      }, "2000");
    }
  }
}

var countup = function () {
  console.log(isAnimatingNow);
}
setInterval(countup, 100);
