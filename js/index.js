$(document).ready(function(){
  new Vivus('graphic-svg', {type: 'sync',duration: 170});
  new Vivus('student-svg', {type: 'delayed',duration: 170});
  new Vivus('dev-svg', {type: 'delayed',duration: 170});
  new Vivus('ux-svg', {type: 'delayed',duration: 170});
$("#header1").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$("#header2").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$("#header3").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$("#top").click(function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".fixed-top").removeClass("nocollap");
        $(".fixed-top").addClass("collap");
    } else {
        $(".fixed-top").removeClass("collap");
        $(".fixed-top").addClass("nocollap");
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
