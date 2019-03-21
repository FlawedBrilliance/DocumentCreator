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

		//Fetch the application
		$app = $_POST['application'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section7_zds
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['zdsTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$zds_1_default = $_POST['zds_1_default'.$ctr];
	    		$zds_1_new = $_POST['zds_1_new'.$ctr];
	    		$zds_1_comment = $_POST['zds_1_comment'.$ctr];

	    		$sql = "INSERT INTO section7_zds (sec_sign,siteNum,zds_1_default,zds_1_new,zds_1_comment,app)
	    				VALUES ('$token','$siteNum','$zds_1_default','$zds_1_new','$zds_1_comment','$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_zds='$token'
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
