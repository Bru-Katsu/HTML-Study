<?php

function autista(){
if(isset($_POST['campo'])){
	if(empty($_POST['campo'])){
		echo "Você tem probleminhas? é pra digitar algo";
	}
	else{
		$batata = strtolower($_POST['campo']);
		$batata = str_replace(" ", "", $batata);
		switch ($batata) {
   			 case 'batata':
        		echo "vc é ".$batata." tbm";
        		break;
   			 case 8000:
       		    echo $batata." é o nivel do seu autismo";
        	    break;
    		 case 24:
      		    echo "viado e autista";
       		    break;
       		 case 'do u know the way':
      		    echo "i don't know the way, ma queen";
       		    break;
       		 case 42:
      		    echo "você não é autista";
       		    break;
       		 case 'algo':
      		    echo "nem precisava fazer o teste...";
       		    break;
       		 case 'ata':
      		    echo "ata";
       		    break;
       		  case 'omaewamoushindeiru':
      		    echo "<p class='nani'>NANI?!</p>";
       		    break; 
   			 default:
       			echo "vc ter autista";
		}
		
	}
}

}


?>
