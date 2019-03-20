<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	$response = array();
	$response['newToken'] = uniqid();

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if($_POST['token'])
	{
		//Main Response Array
		$token = $_POST['token'] ;
		$revNum1 = $_POST['revNum1'] ;
		$revNum2 = $_POST['revNum2'] ;
		$author = $_POST['author'] ;
		$description = $_POST['description'] ;

		//Update Revision
		$sql = "UPDATE revisions
				SET rev_id1='$revNum1', rev_id2='$revNum2', rev_desc='$description', rev_author='$author', published=1
				WHERE rev_sign='$token';" ;
		if(mysqli_query($dcConn,$sql))
		{
			$response['status'] = 1 ;
			$response['message'] = "Your changes were published successfully with a new revision (v".$revNum1.".".$revNum2.") and your Reference ID is ".$token ;
		}
		else
		{
			$response['status'] = 0 ;
			$response['message'] = "Something went wrong (Error: Failed to update revision), please contact administrator with Reference ID: ".$token ;
		}
	}
	else
	{
		$response['status'] = 0 ;
		$response['message'] = "Something went wrong (Error: Latest revision couldn't be fetched), please contact administrator with Reference ID: ".$token ;
	}

	//Output Data in JSON
	echo json_encode($response);

?>
