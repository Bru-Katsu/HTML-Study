function myFunction() {
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = (eval(x)+eval(y))/2;
  if(z < 6){
document.getElementById("out").innerHTML ="You need to study more: "+ z;
  }
  else{
    if(isNaN(z)==true){
   document.getElementById("out").innerHTML ="Please, put a valid number! ";
      $('#btn').addClass('animated shake');
    }
  else{ document.getElementById("out").innerHTML ="Congratulations! You passed : "+ z;
      }
  }  
}
