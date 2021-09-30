function handleArrowKeys(event) {
    let keyPressedByUser = event.key;
    let currentActiveButton = event.target;
let idd=document.querySelector("#main [tabindex='0']").id;
if(keyPressedByUser ==="ArrowLeft"){
        if(currentActiveButton.getAttribute("id") === "first") {
            document.getElementById("second").removeAttribute("tabindex");
document.getElementById("second").setAttribute("tabindex", "0");
            document.getElementById("second").focus();
document.getElementById("one").setAttribute("style","display:none;");
document.getElementById("one").setAttribute("tabindex","-1");
document.getElementById("two").setAttribute("style","display:inicial;");
document.getElementById("two").setAttribute("tabindex","0");
document.getElementById("first").setAttribute("tabindex","-1");
    }    
else
{let previousButton=currentActiveButton.previousElementSibling;
previousButton.setAttribute("tabindex","0");
previousButton.focus();
currentActiveButton .setAttribute("tabindex","-1");
let man=document.getElementById(idd).previousElementSibling.id;
document.getElementById(idd).setAttribute("style", "display: none;");
document.getElementById(idd).setAttribute("tabindex", "-1");
document.getElementById(man).removeAttribute("style");
document.getElementById(man).setAttribute("tabindex","0");
}}
else if(keyPressedByUser ==="ArrowRight"){
if(currentActiveButton.getAttribute("id") === "second"){
document.getElementById("first").removeAttribute("tabindex");
document.getElementById("first").setAttribute("tabindex", "0");
document.getElementById("first").focus();
document.getElementById("two").setAttribute("style","display:none;");
document.getElementById("two").setAttribute("tabindex","-1");
document.getElementById("one").setAttribute("style","display:inicial;");
document.getElementById("one").setAttribute("tabindex","0");
document.getElementById("second").setAttribute("tabindex","-1");
}
else{
let nextButton=currentActiveButton.nextElementSibling;
nextButton.setAttribute("tabindex","0");
nextButton.focus();
currentActiveButton .setAttribute("tabindex","-1");
let man=document.getElementById(idd).nextElementSibling.id;
document.getElementById(idd).setAttribute("style", "display: none;");
document.getElementById(idd).setAttribute("tabindex", "-1");
document.getElementById(man).removeAttribute("style");
document.getElementById(man).setAttribute("tabindex","0");
}}}