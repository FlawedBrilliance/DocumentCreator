<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section3_technicalDetails
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['technicalDetailsCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['appName'.$ctr]))
	    	{
	    		$type = $_POST['type'.$ctr];
	    		$appRole = $_POST['appRole'.$ctr];
	    		$appName = $_POST['appName'.$ctr];
	    		$version = $_POST['version'.$ctr];
	    		$ip = $_POST['ip'.$ctr];
	    		$hostname = $_POST['hostname'.$ctr];
	    		$username = $_POST['username'.$ctr];
	    		$password = $_POST['password'.$ctr];
	    		$remark = $_POST['remark'.$ctr];

	    		$sql = "INSERT INTO section3_technicalDetails (sec_sign,system_type,app_role,app_name,version,ip,hostname,username,password,remark)
	    				VALUES ('$token','$type','$appRole','$appName','$version','$ip','$hostname','$username','$password','$remark'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section3='$token'
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
