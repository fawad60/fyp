<?php
    //creating connection variable
  

    $CN=mysqli_connect("localhost","root");

    $DB=mysqli_select_db($CN,"fyp");
    
    $EncodedData=file_get_contents('php://input');
 
    $DecodedData=json_decode($EncodedData,true);
    $SQ="SELECT * FROM temperature ";
 
    
    $Table= mysqli_query($CN,$SQ);

   if( mysqli_num_rows($Table) > 0)
    {
        $Row=mysqli_fetch_array($Table,MYSQLI_ASSOC);
        //right side variable is database variable
        //left is php variable used to store value
        echo  json_encode($Row);
        $Temp=$Row['Temp'];
        $TDS=$Row['TDS'];

    $Response[]=array("Temperature"=>$Temp,"TDS"=>$TDS);
       echo json_encode($Response);
    }
    else{
       $Message='Not register';
  //     $Response[]=array("status"=>false,"message"=>"not found");
//echo json_encode($Response);
    }
  // $Response[]=array("RollNo"=>$RollNo,"StudentName"=>$StudentName);
  //  echo json_encode($Response);   
//     //to simple display message echo is used
?>