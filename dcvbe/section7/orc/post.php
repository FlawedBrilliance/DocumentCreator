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
		$sql = "DELETE FROM section7_orc
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['orcTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$orc_1_default = $_POST['orc_1_default'.$ctr];
	    		$orc_1_new = $_POST['orc_1_new'.$ctr];
	    		$orc_1_comment = $_POST['orc_1_comment'.$ctr];
	    		$orc_2_default = $_POST['orc_2_default'.$ctr];
	    		$orc_2_new = $_POST['orc_2_new'.$ctr];
	    		$orc_2_comment = $_POST['orc_2_comment'.$ctr];
	    		$orc_3_default = $_POST['orc_3_default'.$ctr];
	    		$orc_3_new = $_POST['orc_3_new'.$ctr];
	    		$orc_3_comment = $_POST['orc_3_comment'.$ctr];
	    		$orc_5_default = $_POST['orc_5_default'.$ctr];
	    		$orc_5_new = $_POST['orc_5_new'.$ctr];
	    		$orc_5_comment = $_POST['orc_5_comment'.$ctr];
	    		$orc_9_default = $_POST['orc_9_default'.$ctr];
	    		$orc_9_new = $_POST['orc_9_new'.$ctr];
	    		$orc_9_comment = $_POST['orc_9_comment'.$ctr];

	    		$sql = "INSERT INTO section7_orc (sec_sign,siteNum,orc_1_default,orc_1_new,orc_1_comment,orc_2_default,orc_2_new,orc_2_comment,orc_3_default,orc_3_new,orc_3_comment,orc_5_default,orc_5_new,orc_5_comment,orc_9_default,orc_9_new,orc_9_comment, app)
	    				VALUES ('$token','$siteNum','$orc_1_default','$orc_1_new','$orc_1_comment','$orc_2_default','$orc_2_new','$orc_2_comment','$orc_3_default','$orc_3_new','$orc_3_comment','$orc_5_default','$orc_5_new','$orc_5_comment','$orc_9_default','$orc_9_new','$orc_9_comment', '$app'); " ;
	    		$response['status'] = mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_orc='$token'
	    		WHERE rev_sign='$token';" ;
	    mysqli_query($dcConn,$sql);

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
