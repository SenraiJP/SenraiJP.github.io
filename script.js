// HEllO Saldbowl
function showpanels(panelId) {
  var top = document.getElementById("top");
  top.classList.remove("show");
  top.classList.remove("showtop");
  if (panelId == about){
    var obj = document.getElementById("about");
    obj.classList.remove("nonepanel");
  }else if (panelId == test){
    var obj = document.getElementById("test");
    obj.classList.remove("nonepanel");
  }else if (panelId == hello){
    var obj = document.getElementById("hello");
    obj.classList.remove("nonepanel");
  }else if (panelId == more){
    var obj = document.getElementById("more");
    obj.classList.remove("nonepanel");
  }
  obj.classList.add("showpanel");
  top.classList.add("nonetop");
}
function nonepanels(btnId) {
  if (btnId == about){
    var obj = document.getElementById("about");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
  }else if (btnId == test){
    var obj = document.getElementById("test");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
  } else if (btnId == hello){
    var obj = document.getElementById("hello");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
  } else if (btnId == more){
    var obj = document.getElementById("more");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
  }
  var top = document.getElementById("top");
  top.classList.remove("nonetop");
  top.classList.add("showtop");
}
function changePanelR(moveId) {
  if (moveId == about){
    var obj = document.getElementById("about");
    var obj2 = document.getElementById("test");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelR");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelR");
    }, "2000");
  } else if (moveId == test){
    var obj = document.getElementById("test");
    var obj2 = document.getElementById("hello");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelR");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelR");
    }, "2000");
  } else if (moveId == hello){
    var obj = document.getElementById("hello");
    var obj2 = document.getElementById("more");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelR");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelR");
    }, "2000");
  } else if (moveId == more){
    var obj = document.getElementById("hello");
    var obj2 = document.getElementById("top");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
    var top = document.getElementById("top");
    top.classList.remove("nonetop");
    top.classList.add("showtop");
  }
}
function changePanelL(moveIdL) {
  if (moveIdL == about){
    var obj = document.getElementById("about");
    var obj2 = document.getElementById("top");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
    }, "2000");
    var top = document.getElementById("top");
    top.classList.remove("nonetop");
    top.classList.add("showtop");
  } else if (moveIdL == test){
    var obj = document.getElementById("test");
    var obj2 = document.getElementById("about");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelL");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelL");
    }, "2000");
  } else if (moveIdL == hello){
    var obj = document.getElementById("hello");
    var obj2 = document.getElementById("test");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelL");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelL");
    }, "2000");
  }else if (moveIdL == more){
    var obj = document.getElementById("more");
    var obj2 = document.getElementById("hello");
    obj2.classList.remove("nonepanel");
    obj2.classList.add("movepanelL");
    obj2.classList.add("showpanel");
    window.setTimeout(function() {
      obj.classList.remove("showpanel");
      obj.classList.add("nonepanel");
      obj2.classList.remove("movepanelL");
    }, "2000");
  }
}
