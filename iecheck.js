if (navigator.userAgent.indexOf('MSIE') != -1 || navigator.userAgent.indexOf('Trident') != -1) {

} else {
    var obj = document.getElementById("noIE");
    obj.classList.remove("showpanel");
    obj.classList.add("panel");

    var obj2 = document.getElementById("top");
    obj2.classList.remove("panel");
    obj2.classList.add("showpanel");

    var el = document.createElement("script");
    el.src = "./script.js";
    document.body.appendChild(el);
}