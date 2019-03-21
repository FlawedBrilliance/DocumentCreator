<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once 'conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section8_Customizations
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['customizationTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['Description'.$ctr]))
	    	{
	    		$Site = $_POST['Site'.$ctr];
	    		$Description = $_POST['Description'.$ctr];
	    		$Details = $_POST['Details'.$ctr];
	    		$Solutions = $_POST['Solutions'.$ctr];
	    		$remark = $_POST['remark'.$ctr];

	    		$sql = "INSERT INTO section8_Customizations (Site,Description,Details,Solutions,Remark)
	    				VALUES ('$token','$Site','$Description','$Details','Solutions','$remark'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section8='$token'
	    		WHERE rev_sign='$token';" ;
	    mysqli_query($dcConn,$sql);

	    //Update section table
	    $response = "Done" ;

	}
	else
	{
		$response = "Something went wrong (Error: Token not caught), please contact administrator.";
	}

	//Output Data in JSON
	echo json_encode($response);

?>
