function press()
{var x=document.getElementById("fname").value;
document.getElementById("log").setAttribute("style","display:none;");
document.getElementById("heading").innerHTML="Welcome "+x;}

function err()
{var x=document.getElementById("fname").value;
if(x.length<3)
{document.getElementById("error").innerHTML="The length of the username should more than 3 letters";}}
