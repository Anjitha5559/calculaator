function id(id) {
    return document.getElementById(id);
}

function cls(cls) {
    return document.getElementsByClassName(cls);
}
var num1 = 0,
    num2 = 0;
optr = "";

function addtodisplay(num) {
    var display = id("input1");
    display.value += num;
}

function cleardisplay() {
    var display1 = id("input1");
    display1.value = "";
    var display2 = id("input2");
    display2.value = "";
}

function backspace() {
    var display = id("input1");
    display.value = display.value.slice(0, -1);
}

function addoperator(operator) {
    if (id("input2").value == "") {

        num1 = id("input1").value;
        console.log(num1);
    }
    optr = operator;
    var display = id("input2");
    display.value = num1 + " " + operator;
    id("input1").value = "";
}

function equal() {
    num2 = id("input1").value;
    if (optr == "+") {
        id("input2").value = parseFloat(num1) + parseFloat(num2);
    } else if (optr == "-") {
        id("input2").value = parseFloat(num1) - parseFloat(num2);
    } else if (optr == "*") {
        id("input2").value = parseFloat(num1) * parseFloat(num2);
    } else if (optr == "/") {
        id("input2").value = parseFloat(num1) / parseFloat(num2);
    } else(alert("Please select an operator"));
    console.log(num1 + " " + " " + optr + " " + num2 + " " + "=" + id("input2").value);
    id("input1").value = num1 + " " + optr + " " + num2 + " = ";
}
function pi() {
    id("input1").value = 3.14;
}
function e() {
    id("input1").value = 2.72;
}
function sqrt() {
    id("input1").value = Math.sqrt(id("input1").value);
}
function power(){
    id("input1").value = Math.pow(id("input1").value,2);
}