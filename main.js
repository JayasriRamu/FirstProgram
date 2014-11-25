
document.getElementById("myBtn").onclick = function(){displayDate()};
var counter=0;
function displayDate() {
    counter++;
     document.getElementById("myText").innerText="You Clicked  "+counter+" times";
}

