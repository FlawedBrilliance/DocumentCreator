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
		$sql = "DELETE FROM section11_issues
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['issueListTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['issueNo'.$ctr]))
	    	{
	    		$issueNo = $_POST['issueNo'.$ctr];
	    		$status = $_POST['status'.$ctr];
	    		$logDate = $_POST['logDate'.$ctr];
	    		$system = $_POST['system'.$ctr];
	    		$issueName = $_POST['issueName'.$ctr];
	    		$statusUpdate = $_POST['statusUpdate'.$ctr];
	    		$owner = $_POST['owner'.$ctr];
	    		$caseNo = $_POST['caseNo'.$ctr];
	    		$priority = $_POST['priority'.$ctr];
	    		$resolveDate = $_POST['resolveDate'.$ctr];

	    		$sql = "INSERT INTO section11_issues (sec_sign,issue_num,status,log_date,issue_system,issue_name,status_update,owner,case_num,priority,resolve_date)
	    				VALUES ('$token','$issueNo','$status','$logDate','$system','$issueName','$statusUpdate','$owner','$caseNo','$priority','$resolveDate'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section11='$token'
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
