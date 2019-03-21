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
		$sql = "DELETE FROM section7_pid
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['pidTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$pid_3_default = $_POST['pid_3_default'.$ctr];
	    		$pid_3_new = $_POST['pid_3_new'.$ctr];
	    		$pid_3_comment = $_POST['pid_3_comment'.$ctr];
	    		$pid_3_1_default = $_POST['pid_3_1_default'.$ctr];
	    		$pid_3_1_new = $_POST['pid_3_1_new'.$ctr];
	    		$pid_3_1_comment = $_POST['pid_3_1_comment'.$ctr];
	    		$pid_3_4_default = $_POST['pid_3_4_default'.$ctr];
	    		$pid_3_4_new = $_POST['pid_3_4_new'.$ctr];
	    		$pid_3_4_comment = $_POST['pid_3_4_comment'.$ctr];
	    		$pid_5_default = $_POST['pid_5_default'.$ctr];
	    		$pid_5_new = $_POST['pid_5_new'.$ctr];
	    		$pid_5_comment = $_POST['pid_5_comment'.$ctr];
	    		$pid_5_1_default = $_POST['pid_5_1_default'.$ctr];
	    		$pid_5_1_new = $_POST['pid_5_1_new'.$ctr];
	    		$pid_5_1_comment = $_POST['pid_5_1_comment'.$ctr];
	    		$pid_5_2_default = $_POST['pid_5_2_default'.$ctr];
	    		$pid_5_2_new = $_POST['pid_5_2_new'.$ctr];
	    		$pid_5_2_comment = $_POST['pid_5_2_comment'.$ctr];
	    		$pid_5_3_default = $_POST['pid_5_3_default'.$ctr];
	    		$pid_5_3_new = $_POST['pid_5_3_new'.$ctr];
	    		$pid_5_3_comment = $_POST['pid_5_3_comment'.$ctr];
	    		$pid_7_default = $_POST['pid_7_default'.$ctr];
	    		$pid_7_new = $_POST['pid_7_new'.$ctr];
	    		$pid_7_comment = $_POST['pid_7_comment'.$ctr];
	    		$pid_8_default = $_POST['pid_8_default'.$ctr];
	    		$pid_8_new = $_POST['pid_8_new'.$ctr];
	    		$pid_8_comment = $_POST['pid_8_comment'.$ctr];
	    		$pid_10_default = $_POST['pid_10_default'.$ctr];
	    		$pid_10_new = $_POST['pid_10_new'.$ctr];
	    		$pid_10_comment = $_POST['pid_10_comment'.$ctr];
	    		$pid_11_default = $_POST['pid_11_default'.$ctr];
	    		$pid_11_new = $_POST['pid_11_new'.$ctr];
	    		$pid_11_comment = $_POST['pid_11_comment'.$ctr];
	    		$pid_11_1_default = $_POST['pid_11_1_default'.$ctr];
	    		$pid_11_1_new = $_POST['pid_11_1_new'.$ctr];
	    		$pid_11_1_comment = $_POST['pid_11_1_comment'.$ctr];
	    		$pid_11_2_default = $_POST['pid_11_2_default'.$ctr];
	    		$pid_11_2_new = $_POST['pid_11_2_new'.$ctr];
	    		$pid_11_2_comment = $_POST['pid_11_2_comment'.$ctr];
	    		$pid_11_3_default = $_POST['pid_11_3_default'.$ctr];
	    		$pid_11_3_new = $_POST['pid_11_3_new'.$ctr];
	    		$pid_11_3_comment = $_POST['pid_11_3_comment'.$ctr];
	    		$pid_11_4_default = $_POST['pid_11_4_default'.$ctr];
	    		$pid_11_4_new = $_POST['pid_11_4_new'.$ctr];
	    		$pid_11_4_comment = $_POST['pid_11_4_comment'.$ctr];
	    		$pid_11_5_default = $_POST['pid_11_5_default'.$ctr];
	    		$pid_11_5_new = $_POST['pid_11_5_new'.$ctr];
	    		$pid_11_5_comment = $_POST['pid_11_5_comment'.$ctr];
	    		$pid_13_default = $_POST['pid_13_default'.$ctr];
	    		$pid_13_new = $_POST['pid_13_new'.$ctr];
	    		$pid_13_comment = $_POST['pid_13_comment'.$ctr];
	    		$pid_14_default = $_POST['pid_14_default'.$ctr];
	    		$pid_14_new = $_POST['pid_14_new'.$ctr];
	    		$pid_14_comment = $_POST['pid_14_comment'.$ctr];
	    		$pid_18_default = $_POST['pid_18_default'.$ctr];
	    		$pid_18_new = $_POST['pid_18_new'.$ctr];
	    		$pid_18_comment = $_POST['pid_18_comment'.$ctr];

	    		$sql = "INSERT INTO section7_pid (sec_sign,siteNum,pid_3_default,pid_3_new,pid_3_comment,pid_3_1_default,pid_3_1_new,pid_3_1_comment,pid_3_4_default,pid_3_4_new,pid_3_4_comment,pid_5_default,pid_5_new,pid_5_comment,pid_5_1_default,pid_5_1_new,pid_5_1_comment,pid_5_2_default,pid_5_2_new,pid_5_2_comment,pid_5_3_default,pid_5_3_new,pid_5_3_comment,pid_7_default,pid_7_new,pid_7_comment,pid_8_default,pid_8_new,pid_8_comment,pid_10_default,pid_10_new,pid_10_comment,pid_11_default,pid_11_new,pid_11_comment,pid_11_1_default,pid_11_1_new,pid_11_1_comment,pid_11_2_default,pid_11_2_new,pid_11_2_comment,pid_11_3_default,pid_11_3_new,pid_11_3_comment,pid_11_4_default,pid_11_4_new,pid_11_4_comment,pid_11_5_default,pid_11_5_new,pid_11_5_comment,pid_13_default,pid_13_new,pid_13_comment,pid_14_default,pid_14_new,pid_14_comment,pid_18_default,pid_18_new,pid_18_comment,app)
	    				VALUES ('$token','$siteNum','$pid_3_default','$pid_3_new','$pid_3_comment','$pid_3_1_default','$pid_3_1_new','$pid_3_1_comment','$pid_3_4_default','$pid_3_4_new','$pid_3_4_comment','$pid_5_default','$pid_5_new','$pid_5_comment','$pid_5_1_default','$pid_5_1_new','$pid_5_1_comment','$pid_5_2_default','$pid_5_2_new','$pid_5_2_comment','$pid_5_3_default','$pid_5_3_new','$pid_5_3_comment','$pid_7_default','$pid_7_new','$pid_7_comment','$pid_8_default','$pid_8_new','$pid_8_comment','$pid_10_default','$pid_10_new','$pid_10_comment','$pid_11_default','$pid_11_new','$pid_11_comment','$pid_11_1_default','$pid_11_1_new','$pid_11_1_comment','$pid_11_2_default','$pid_11_2_new','$pid_11_2_comment','$pid_11_3_default','$pid_11_3_new','$pid_11_3_comment','$pid_11_4_default','$pid_11_4_new','$pid_11_4_comment','$pid_11_5_default','$pid_11_5_new','$pid_11_5_comment','$pid_13_default','$pid_13_new','$pid_13_comment','$pid_14_default','$pid_14_new','$pid_14_comment','$pid_18_default','$pid_18_new','$pid_18_comment','$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_pid='$token'
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
