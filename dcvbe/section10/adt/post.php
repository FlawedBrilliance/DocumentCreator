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
		$sql = "DELETE FROM section10_testplan_adt
				WHERE sec_sign='$token'" ;
		

		mysqli_query($dcConn,$sql);


		//Get the number of rows
	    $ctr = $_POST['adtTableCtr'] ;
	    while($ctr>0)
	    {
	    	
	    	if(isset($_POST['issues'.$ctr]))
	    	{
	    		$issue_num = $_POST['issues'.$ctr];
	    		$Date_Time_Reported = $_POST['date_time_reported'.$ctr];
	    		$Issue_Identified_By = $_POST['issue_identified_by'.$ctr];
	    		$priority = $_POST['priority'.$ctr];
	    		$Issue_Description = $_POST['issue_description'.$ctr];
	    		$Assigned_To = $_POST['assigned_to'.$ctr];
	    		$Comments_Resolution = $_POST['comments_resolution'.$ctr];
	    		$Resolved_By = $_POST['resolved_By'.$ctr];
	    		$Closed_Date = $_POST['closed_Date'.$ctr];
	    		$Status = $_POST['status'.$ctr];
	    		

	    		$sql1 = "INSERT INTO section10_testplan_adt (sec_sign,issue_num,date_time,issue_by,priority,issue_des,assign_to,comments,resolved_by,closed_date,status)
	    				VALUES ('$token','$issue_num','$Date_Time_Reported','$Issue_Identified_By','$priority','$Issue_Description','$Assigned_To','$Comments_Resolution','$Resolved_By','$Closed_Date','$Status');" ;
							mysqli_query($dcConn,$sql1);

	    	}
	    	$ctr--;


	    	
	    }

	
	    $sql2 = "UPDATE sections
	    		SET section10='$token'
	    		WHERE rev_sign='$token'" ;
	    mysqli_query($dcConn,$sql2);

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
