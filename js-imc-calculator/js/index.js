$("#height").inputmask("9.99");
function Imc (){
  var x = document.getElementById("weight").value;
  var y = document.getElementById("height").value;
  var z = x/(eval(y)*eval(y));
   
  
  if(z > 40){
  document.getElementById("out").innerHTML = "Obesity III (morbid)";}
  else{
    if(z > 35){
     document.getElementById("out").innerHTML = "Obesity II (severe)"; }
    else{
      if(z > 30){
      document.getElementById("out").innerHTML = "Obesity I"; }
      else{
        if(z > 25){
          document.getElementById("out").innerHTML = "Overweight";
        }
        else{
          if(z > 18.5){
            document.getElementById("out").innerHTML = "Normal weight";
          }
          else{
            if(z > 17){
                document.getElementById("out").innerHTML = "Under weight";
            }
            else{
              if(z > 10){
                document.getElementById("out").innerHTML = "Very underweight"
              }
              else{
                document.getElementById("out").innerHTML = "You are close to the death"
              }
            }
          }
        }
      }
    }
  }
   
    
}
