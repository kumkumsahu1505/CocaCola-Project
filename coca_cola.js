$(document).ready(function(){
   
 $(".nav").click(function(){
       $(this).animate({
        fontSize:'40px'
    },3000).css({"color":"white"}).animate({fontSize:'24px'},3000);
    });

$(".wrt-p").hide();
$(".wrt-btn").click(function(){ 
    $(".wrt-vdo").toggle(3000);
    $(".wrt-p").slideToggle(3000);
});

   

});