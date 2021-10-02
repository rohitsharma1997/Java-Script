function handleArrowKeys(event) {
    let keyPressedByUser = event.key;
    let currentActiveButton = event.target;
let idd=document.querySelector("#main [tabindex='0']").id;
if(keyPressedByUser ==="ArrowLeft"){
        if(currentActiveButton.getAttribute("id") === "first") {
            document.getElementById("second").removeAttribute("tabindex");
document.getElementById("second").setAttribute("tabindex", "0");
            document.getElementById("second").focus();
document.getElementById("first").setAttribute("tabindex","-1");
    }    
else
{let previousButton=currentActiveButton.previousElementSibling;
previousButton.setAttribute("tabindex","0");
previousButton.focus();
currentActiveButton .setAttribute("tabindex","-1");
}}
else if(keyPressedByUser ==="ArrowRight"){
if(currentActiveButton.getAttribute("id") === "second"){
document.getElementById("first").removeAttribute("tabindex");
document.getElementById("first").setAttribute("tabindex", "0");
document.getElementById("first").focus();
document.getElementById("second").setAttribute("tabindex","-1");
}
else{
let nextButton=currentActiveButton.nextElementSibling;
nextButton.setAttribute("tabindex","0");
nextButton.focus();
currentActiveButton .setAttribute("tabindex","-1");
}}}


function onn(){
document.getElementById("two").setAttribute("style","display:inicial;");
document.getElementById("two").setAttribute("tabindex","0");
document.getElementById("one").setAttribute("style","display:none;");
document.getElementById("first").setAttribute("aria-selected","false");
document.getElementById("second").setAttribute("aria-selected","true");}

function nn(){
document.getElementById("first").setAttribute("aria-selected","true");
document.getElementById("one").removeAttribute("style");
document.getElementById("one").setAttribute("tabindex","0");
document.getElementById("two").setAttribute("style","display:none;");}