$(document).ready(function(){
$("#header1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$("#header2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});
$("#header3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$("#top").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("nocollap");
        $(".navbar-fixed-top").addClass("collap");
    } else {
        $(".navbar-fixed-top").removeClass("collap");
        $(".navbar-fixed-top").addClass("nocollap");
    }
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
function blinker() {
  $('.blink').fadeOut(300);
  $('.blink').fadeIn(300);
}
setInterval(blinker, 1000);
});
