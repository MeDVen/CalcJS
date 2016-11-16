console.log('Hello! This is CalcJS!');

var a;
var b;
var answer;
var operation;

var plusOp = 'plus';
var minusOp = 'minus';
var divideOp = 'divide';
var multiplyOp = 'multiply';
var percentOp = 'percent';
var noneOp = 'none';

/**
 * Fill operand a and operation
 * @param operationId current operation
 */
function fillOperandA(operationId) {
    var valueField = document.querySelector('#valuefield');
    a = valueField.innerText;
    operation = operationId;
    valueField.innerHTML = 0;
}

/**
 * Initialize all math operations.
 */
function initOperations() {
    // plus
    var btnPlus = document.querySelector('#plus');
    var plusPressed = function () {
        fillOperandA(plusOp);
    };
    btnPlus.onclick = plusPressed;

    // minus
    var btnMinus = document.querySelector('#minus');
    var minusPressed = function () {
        fillOperandA(minusOp);
    };
    btnMinus.onclick = minusPressed;

    // multiply
    var btnMultiply = document.querySelector('#multiply');
    var multiplyPressed = function () {
        fillOperandA(multiplyOp);
    };
    btnMultiply.onclick = multiplyPressed;

    // divide
    var btnDivide = document.querySelector('#divide');
    var dividePressed = function () {
        fillOperandA(divideOp);
    };
    btnDivide.onclick = dividePressed;

    // solve
    var btnSolve = document.querySelector('#solve');
    var solvePressed = function () {
        var valueField = document.querySelector('#valuefield');
        b = valueField.innerText;
        if (operation === plusOp) {
            answer = Number(a) + Number(b);
            valueField.innerHTML = answer;
        } else if (operation === minusOp) {
            answer = Number(a) - Number(b);
            valueField.innerHTML = answer;
        } else if (operation === multiplyOp) {
            answer = Number(a) * Number(b);
            valueField.innerHTML = answer;
        } else if (operation === divideOp) {
            answer = Number(a) / Number(b);
            valueField.innerHTML = answer;
        } else {
            console.log('Current operation is \'none\' or not initialized.');
        }
        operation = noneOp;
    };
    btnSolve.onclick = solvePressed;

    // clear
    var btnClear = document.querySelector('#clear');
    var clearPressed = function () {
        var valueField = document.querySelector('#valuefield');
        valueField.innerHTML = 0;
    };
    btnClear.onclick = clearPressed;

    // all clear
    var btnAllClear = document.querySelector('#allclear');
    var allClearPressed = function () {
        var valueField = document.querySelector('#valuefield');
        valueField.innerHTML = 0;
        a = NaN;
        b = NaN;
    };
    btnAllClear.onclick = allClearPressed;

    // polar
    var btnPolar = document.querySelector('#polar');
    var polarPressed = function () {
        var valueField = document.querySelector('#valuefield');
        var currentValue = Number(valueField.innerText);
        if (currentValue !== 0) {
            currentValue = currentValue * (-1);
            valueField.innerHTML = currentValue;
        }
    };
    btnPolar.onclick = polarPressed;
}

/**
 * Initializing number buttons actions.
 */
function initNumberButtonsActions() {
    var btn0 = document.querySelector('#btn0');
    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var btn3 = document.querySelector('#btn3');
    var btn4 = document.querySelector('#btn4');
    var btn5 = document.querySelector('#btn5');
    var btn6 = document.querySelector('#btn6');
    var btn7 = document.querySelector('#btn7');
    var btn8 = document.querySelector('#btn8');
    var btn9 = document.querySelector('#btn9');
    var zeroPressed = function () {
        fillValueField(0);
    };
    var onePressed = function () {
        fillValueField(1);
    };
    var twoPressed = function () {
        fillValueField(2);
    };
    var threePressed = function () {
        fillValueField(3);
    };
    var fourPressed = function () {
        fillValueField(4);
    };
    var fivePressed = function () {
        fillValueField(5);
    };
    var sixPressed = function () {
        fillValueField(6);
    };
    var sevenPressed = function () {
        fillValueField(7);
    };
    var eightPressed = function () {
        fillValueField(8);
    };
    var ninePressed = function () {
        fillValueField(9);
    };
    btn0.onclick = zeroPressed;
    btn1.onclick = onePressed;
    btn2.onclick = twoPressed;
    btn3.onclick = threePressed;
    btn4.onclick = fourPressed;
    btn5.onclick = fivePressed;
    btn6.onclick = sixPressed;
    btn7.onclick = sevenPressed;
    btn8.onclick = eightPressed;
    btn9.onclick = ninePressed;
}

/**
 * Set value of pressed number button to valueField.
 * @param value pressed button value
 */
function fillValueField(value) {
    var valueField = document.querySelector('#valuefield');
    var oldValue = valueField.innerHTML;
    if (oldValue.length < 12) {
        if (oldValue !== '0') {
            valueField.innerHTML = oldValue + value;
        } else {
            valueField.innerHTML = value;
        }
    }
}

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
function initThemeChoiceButtons() {
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
}

initOperations();
initNumberButtonsActions();
initThemeChoiceButtons();