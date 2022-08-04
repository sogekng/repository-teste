function showFooterOne(){
    var footer_one = document.getElementById('footer');
    var footer_two = document.getElementById('footer_two');

    footer_one.style.transitionDelay = "all 0.5s";
    footer_two.style.transitionDelay = "all 0.5s";

    if(footer_one.style.opacity == "0" || footer_one.style.opacity == ""){
        footer_two.style.opacity = "0";
        footer_one.style.opacity = "1";
    }
    
}

function showFooterTwo(){
    var footer_one = document.getElementById('footer');
    var footer_two = document.getElementById('footer_two');

    footer_one.style.transitionDelay = "all 0.5s";
    footer_two.style.transitionDelay = "all 0.5s";

    if(footer_two.style.opacity == "0" || footer_two.style.opacity == ""){
        footer_one.style.opacity = "0";
        footer_two.style.opacity = "1";
    }
}