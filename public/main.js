
var x = -1;
document.getElementById("Put1").disabled = true;

function TestFun() {
    var y = document.getElementById("testnumber").innerHTML;
    y = parseFloat(y) + 1;
    var B = document.getElementById("Put1").value;
    document.getElementById("testnumber").innerHTML = y;
    if (B > x) {

        document.getElementById("Num1").innerText = "lesser";
    }
    else if (B < x) {
        document.getElementById("Num1").innerText = "More";
    }
    else {
        document.getElementById("Num1").innerText = "win";
        var w = document.getElementById("testnumber").innerHTML;
       alert (`${w}`);
        document.getElementById("testnumber").innerHTML = "0" ;
    }
}
function Sur() {
    document.getElementById("Note").innerHTML = x;
}
function Start1() {
    x = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Put1").disabled = false;
    document.getElementById("Put1").focus();
}