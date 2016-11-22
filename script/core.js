console.log('Hello! This is CalcJS!');

/**
 * Change CSS file on the fly. For the full change^ index must be same as a connected css file in header tag.
 * @param cssFile new css file
 * @param cssLinkIndex css link index from header
 */
function changeCSS(cssFile, cssLinkIndex) {
    var oldLink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}

/**
 * Initialize theme buttons.
 */
(function initThemeChoiceButtons() {
    var lightThemeBtn = document.querySelector('#lightTheme');
    var lightThemePressed = function () {
        changeCSS('css/lightTheme.css', 1);
    };
    lightThemeBtn.onclick = lightThemePressed;


    var darkThemeBtn = document.querySelector('#darkTheme');
    var darkThemePressed = function () {
        changeCSS('css/darkTheme.css', 1);
    };
    darkThemeBtn.onclick = darkThemePressed;
})();