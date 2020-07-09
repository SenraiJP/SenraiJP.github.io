if (navigator.userAgent.indexOf('MSIE') != -1 || navigator.userAgent.indexOf('Trident') != -1) {
    var obj = document.getElementById("noIE");
    obj.classList.remove("panel");
    obj.classList.add("showpanel");

    var redirectCount = 9;
    var countdown = function() {
        console.log(redirectCount);
        if (redirectCount === 0) {
            clearInterval();
            location.href = "https://www.google.com/intl/ja_jp/chrome/";
        } else {
            document.getElementById("errorPanelCount").textContent = redirectCount;
            redirectCount--;
        }
    };
    setInterval(countdown, 1000);


} else {
    var obj2 = document.getElementById("top");
    obj2.classList.remove("panel");
    obj2.classList.add("showpanel");

    var el = document.createElement("script");
    el.src = "./script.js";
    document.body.appendChild(el);
}