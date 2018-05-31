$(document).ready(function() {
  $('.valor').mask('000.000.000.000.000,00', {reverse: true});
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

  $('.subm').click(function(){
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
  });
});
