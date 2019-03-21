<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if(isset($_POST['token']))
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section6_sampleMessages
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['sampleMessagesCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['msg_content'.$ctr]))
	    	{
	    		$msg_type = $_POST['msg_type'.$ctr];
	    		$msg_content = $_POST['msg_content'.$ctr];
	    		$msg_source = $_POST['msg_source'.$ctr];
	    		$msg_from = $_POST['msg_from'.$ctr];

	    		$sql = "INSERT INTO section6_sampleMessages (sec_sign,message_type,message_content,message_source,message_from)
	    				VALUES ('$token','$msg_type','$msg_content','$msg_source','$msg_from'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section6='$token'
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
