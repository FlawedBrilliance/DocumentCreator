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
		$sql = "DELETE FROM section9_ibeorders
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['tableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['pureId'.$ctr]))
	    	{
	    		$pureId = $_POST['pureId'.$ctr];
	    		$studyType = $_POST['studyType'.$ctr];
	    		$scheduled = $_POST['scheduled'.$ctr];
	    		$completed = $_POST['completed'.$ctr];
	    		$cancelled = $_POST['cancelled'.$ctr];
	    		$inProcess = $_POST['inProcess'.$ctr];
	    		$inProgress = $_POST['inProgress'.$ctr];
	    		$discontinued = $_POST['discontinued'.$ctr];
	    		$suspended = $_POST['suspended'.$ctr];
	    		$reconciled = $_POST['reconciled'.$ctr];

	    		$sql = "INSERT INTO section9_ibeorders (sec_sign,pureId,studyType,scheduled,completed,cancelled,inProcess,inProgress,discontinued,suspended,reconciled)
	    				VALUES ('$token','$pureId','$studyType','$scheduled','$completed','$cancelled','$inProcess','$inProgress','$discontinued','$suspended','$reconciled'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section9='$token'
	    		WHERE rev_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		$response['status'] = $sql;

	    //Success Message
		//$response['status'] = 1 ;
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
