function parallax() {
    var s = document.getElementById("menu-lazy");
    var yPos = 0 - window.pageYOffset/15;  
    s.style.top = 25 - yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});