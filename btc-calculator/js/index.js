$(document).ready(function() {
  $('.valor').mask('000.000.000.000.000,00', {reverse: true});
  $('.valor2').mask('000,0000000000000000', {reverse: false});
  $('.CUR').hide();
$.ajax({
  url: 'https://blockchain.info/pt/ticker',
  dataType: 'json',
  success: function(data) {
    var a = (data);
    $('#val').html(a);
    items = Object.keys(data).length;
    for(var i=0;i<items;i++) {
    $('#mySelect').append($('<option>', {
        text : Object.keys(a)[i]
    }));
}
  },
  error: function() {}
});
$('#mySelect').change(function(){
  var c = $('#mySelect option:selected').text();
  $.ajax({
    url: 'https://blockchain.info/pt/ticker',
    dataType: 'json',
    success: function(data) {
      $('#symbol2').html(data[c].symbol);
    },
    error: function() {}
  });
});
$('.btn-btc').click(function(){
  $(".btn-cur").removeClass("active");
  $(".btn-btc").addClass("active");
  $('.CUR').hide();
  $('.BTC').show();
});
$('.btn-cur').click(function(){
  $(".btn-btc").removeClass("active");
  $(".btn-cur").addClass("active");
  $('.BTC').hide();
  $('.CUR').show();
});
  $('.subm').click(function(){
    if(($('.btn-btc').hasClass('active'))==true){
      var b = $('.valor').val().replace(/\./g, '').replace(/\,/g, '.');
      var c = $('#mySelect option:selected').text();
      if(($('#mySelect option:selected').text())=='Select a currency'){
        $('.ct').popover({
          trigger: 'focus',
          content : "Please, Select one currency",
          placement:"bottom"
            }).popover('show');
            console.log("entrou");
        }else{
            $.ajax({
              url: 'https://blockchain.info/tobtc?currency='+c+'&value='+b,
              success: function(data){
                var a = (data);
                $('#val').html(a);
              },
              error: function() {
                console.log("erro");
              }
            });
          }
    }else{
      var b = $('.valor2').val().replace(/\,/g, '.');
      var c = $('#mySelect option:selected').text();
      if(($('#mySelect option:selected').text())=='Select a currency'){
      $('.ct').popover({
        trigger: 'focus',
        content : "Please, Select one currency",
        placement:"bottom"
          }).popover('show');
      }else{
        $.ajax({
          url: 'https://blockchain.info/pt/ticker',
          success: function(data){
            var a = b*(data[c].last);
            $('#symbol').html(data[c].symbol+': '+a.toString().replace(/\./g, ','));
          },
          error: function() {
            console.log("erro");
          }
        });
      }
    }
  });
});
