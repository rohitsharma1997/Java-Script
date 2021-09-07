function pre()
{var a=document.getElementById("name").value;
var b=document.getElementById("emm").value;
var ss=document.getElementById("pop").value;
document.getElementById("main1").innerHTML=a;
document.getElementById("main2").innerHTML=b+ "<br>" +Date() + "<br>" + ss;
document.getElementById("main4").innerHTML=ss;
document.getElementById("main3").innerHTML=Date();
document.getElementById("main").setAttribute("style","display:none;");}

function pre1()
{var o='<input type="file">';
document.getElementById("att").innerHTML+=o;}