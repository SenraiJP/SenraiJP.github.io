if (navigator.userAgent.indexOf('MSIE') != -1 || navigator.userAgent.indexOf('Trident') != -1) {
    location.href = "./index_ie.html";
} else {
    var el = document.createElement("script");
    el.src = "./script.js";
    document.body.appendChild(el);
}