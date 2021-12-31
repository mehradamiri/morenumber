var x = -1;
document.getElementById("input-el").disabled = true;

function TestFun() {
    debugger;
    var y = document.getElementById("testnumber").innerHTML;
    y = parseFloat(y) + 1;
    var B = document.getElementById("input-el").value;
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
function start() {
    x = Math.floor(Math.random() * 100) + 1;
    document.getElementById("input-el").disabled = false;
    document.getElementById("input-el").focus();
}
function keydownHandeler(){
    if(event.key==='Enter'){
        TestFun();
    }

}