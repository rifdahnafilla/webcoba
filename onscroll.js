window.onscroll = function() {scrollfunction} ;

function scrollfunction(){
    var navbar = document.getElementById("navbar");
    if(document.body.scrollfunction > 20 || document.document.getElementById.scrollfunction > 20){
        navbar.classList.add("shadow");
        navbar.classList.add("bg-white");
        navbar.classList.remove("mt-3");
    }else{
        navbar.classList.remove("shadow");
        navbar.classList.add("bg-white");
        navbar.classList.add("mt-3");
    }
}