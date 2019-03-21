<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	$response = array();

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section9_patientindex
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['tableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['authority'.$ctr]))
	    	{
	    		$authority = $_POST['authority'.$ctr];
	    		$enabledisable = $_POST['enabledisable'.$ctr];
	    		$primaryId = $_POST['primaryId'.$ctr];
	    		$description = $_POST['description'.$ctr];

	    		$sql = "INSERT INTO section9_patientindex (sec_sign,authority,enabledisable,primaryId,description)
	    				VALUES ('$token','$authority','$enabledisable','$primaryId','$description'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section9_patientindex='$token'
	    		WHERE rev_sign='$token';" ;
	    mysqli_query($dcConn,$sql);

	    //Success Message
		$response['status'] = 1 ;
	    $response['message'] = "Changes were saved successfully, don't forget to publish and create a new revision, or they will be lost permanently" ;

	}
	else
	{
		//Failure Message
		$response['status'] = 0 ;
		$response['message'] = "Something went wrong (Error: Token not caught), please contact administrator with Reference ID: ".$token;
	}

	//Output Data in JSON
	echo json_encode($response);

?>
