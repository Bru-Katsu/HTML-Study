

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

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function blinker() {
  $('.blink').fadeOut(300);
  $('.blink').fadeIn(300);
}

setInterval(blinker, 1000);

var modal = document.getElementById('modal');

var img = document.getElementById('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
