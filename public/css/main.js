var x = -1;
document.getElementById("inp-main").disabled = true;

function TestFun() {
    var y = document.getElementById("testnumber").innerHTML;
    y = parseFloat(y) + 1;
    var B = document.getElementById("inp-main").value;
    document.getElementById("testnumber").innerHTML = y;
    if (B > x) {

        document.getElementById("Num1").innerText = "کمتر";
    }
    else if (B < x) {
        document.getElementById("Num1").innerText = "بیشتر";
    }
    else {
        document.getElementById("Num1").innerText = "👑 درست حدس زدی ";
        var w = document.getElementById("testnumber").innerHTML;
       alert (`${w}`);
        document.getElementById("testnumber").innerHTML = " 0 تعداد حدس ها" ;
    }
}
function start() {
    x = Math.floor(Math.random() * 100) + 1;
    document.getElementById("inp-main").disabled = false;
    document.getElementById("inp-main").focus();
}
function keydownHandeler(){
    if(event.key==='Enter'){
        TestFun();
        document.getElementById("inp-main").select();
    }

}