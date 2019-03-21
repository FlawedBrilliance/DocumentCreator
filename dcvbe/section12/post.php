<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	$response = array();

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section12
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

	
    	if(isset($_POST['diagram_code']))
    	{
    		$diagram_code = $_POST['diagram_code'];

    		$sql = "INSERT INTO section12 (sec_sign,diagram_code)
    				VALUES ('$token','$diagram_code'); " ;
    		mysqli_query($dcConn,$sql);
    	}

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section12='$token'
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
