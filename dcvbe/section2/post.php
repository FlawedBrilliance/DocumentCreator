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
		$sql = "DELETE FROM section2_contactDetails
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['contactTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['mail'.$ctr]))
	    	{
	    		$name = $_POST['name'.$ctr];
	    		$role = $_POST['role'.$ctr];
	    		$org = $_POST['org'.$ctr];
	    		$mail = $_POST['mail'.$ctr];
	    		$phone = $_POST['phone'.$ctr];
	    		$remark = $_POST['remark'.$ctr];

	    		$sql = "INSERT INTO section2_contactDetails (sec_sign,contact_name,contact_role,contact_organization,contact_email,contact_phone,remark)
	    				VALUES ('$token','$name','$role','$org','$mail','$phone','$remark'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section2='$token'
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
