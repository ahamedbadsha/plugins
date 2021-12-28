
//jq code//
$(document).ready(function(){

//counter up

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//wow
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       

});
wow.init();


//aos
AOS.init();









});