console.log('Hello! This is CalcJS!');

var a;
var b;
var answer;
var operation;

var plusOp = 'plus';
var minusOp = 'minus';

function initOperations() {
    // plus
    var btnPlus = document.querySelector('#plus');
    var plusPressed = function () {
        var valueField = document.querySelector('#valuefield');
        a = valueField.innerText;
        operation = plusOp;
        valueField.innerHTML = 0;
    };
    btnPlus.onclick = plusPressed;

    // minus
    var btnMinus = document.querySelector('#minus');

    // solve
    var btnSolve = document.querySelector('#solve');
    var solvePressed = function () {
        var valueField = document.querySelector('#valuefield');
        b = valueField.innerText;
        answer = Number(a) + Number(b);
        valueField.innerHTML = answer;
    };
    btnSolve.onclick = solvePressed;

    // clear
    var btnClear = document.querySelector('#clear');
    var clearPressed = function () {
        var valueField = document.querySelector('#valuefield');
        valueField.innerHTML = 0;
    };
    btnClear.onclick = clearPressed;
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

initOperations();
initNumberButtonsActions();