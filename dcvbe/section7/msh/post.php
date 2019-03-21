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
		$sql = "DELETE FROM section7_msh
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['mshTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$msh_1_default = $_POST['msh_1_default'.$ctr];
	    		$msh_1_new = $_POST['msh_1_new'.$ctr];
	    		$msh_1_comment = $_POST['msh_1_comment'.$ctr];
	    		$msh_2_default = $_POST['msh_2_default'.$ctr];
	    		$msh_2_new = $_POST['msh_2_new'.$ctr];
	    		$msh_2_comment = $_POST['msh_2_comment'.$ctr];
	    		$msh_3_default = $_POST['msh_3_default'.$ctr];
	    		$msh_3_new = $_POST['msh_3_new'.$ctr];
	    		$msh_3_comment = $_POST['msh_3_comment'.$ctr];
	    		$msh_4_default = $_POST['msh_4_default'.$ctr];
	    		$msh_4_new = $_POST['msh_4_new'.$ctr];
	    		$msh_4_comment = $_POST['msh_4_comment'.$ctr];
	    		$msh_5_default = $_POST['msh_5_default'.$ctr];
	    		$msh_5_new = $_POST['msh_5_new'.$ctr];
	    		$msh_5_comment = $_POST['msh_5_comment'.$ctr];
	    		$msh_6_default = $_POST['msh_6_default'.$ctr];
	    		$msh_6_new = $_POST['msh_6_new'.$ctr];
	    		$msh_6_comment = $_POST['msh_6_comment'.$ctr];
	    		$msh_7_default = $_POST['msh_7_default'.$ctr];
	    		$msh_7_new = $_POST['msh_7_new'.$ctr];
	    		$msh_7_comment = $_POST['msh_7_comment'.$ctr];
	    		$msh_9_default = $_POST['msh_9_default'.$ctr];
	    		$msh_9_new = $_POST['msh_9_new'.$ctr];
	    		$msh_9_comment = $_POST['msh_9_comment'.$ctr];
	    		$msh_9_1_default = $_POST['msh_9_1_default'.$ctr];
	    		$msh_9_1_new = $_POST['msh_9_1_new'.$ctr];
	    		$msh_9_1_comment = $_POST['msh_9_1_comment'.$ctr];
	    		$msh_9_2_default = $_POST['msh_9_2_default'.$ctr];
	    		$msh_9_2_new = $_POST['msh_9_2_new'.$ctr];
	    		$msh_9_2_comment = $_POST['msh_9_2_comment'.$ctr];
	    		$msh_10_default = $_POST['msh_10_default'.$ctr];
	    		$msh_10_new = $_POST['msh_10_new'.$ctr];
	    		$msh_10_comment = $_POST['msh_10_comment'.$ctr];
	    		$msh_11_default = $_POST['msh_11_default'.$ctr];
	    		$msh_11_new = $_POST['msh_11_new'.$ctr];
	    		$msh_11_comment = $_POST['msh_11_comment'.$ctr];
	    		$msh_12_default = $_POST['msh_12_default'.$ctr];
	    		$msh_12_new = $_POST['msh_12_new'.$ctr];
	    		$msh_12_comment = $_POST['msh_12_comment'.$ctr];
	    		$msh_18_default = $_POST['msh_18_default'.$ctr];
	    		$msh_18_new = $_POST['msh_18_new'.$ctr];
	    		$msh_18_comment = $_POST['msh_18_comment'.$ctr];

	    		$sql = "INSERT INTO section7_msh (sec_sign,siteNum,msh_1_default,msh_1_new,msh_1_comment,msh_2_default,msh_2_new,msh_2_comment,msh_3_default,msh_3_new,msh_3_comment,msh_4_default,msh_4_new,msh_4_comment,msh_5_default,msh_5_new,msh_5_comment,msh_6_default,msh_6_new,msh_6_comment,msh_7_default,msh_7_new,msh_7_comment,msh_9_default,msh_9_new,msh_9_comment,msh_9_1_default,msh_9_1_new,msh_9_1_comment,msh_9_2_default,msh_9_2_new,msh_9_2_comment,msh_10_default,msh_10_new,msh_10_comment,msh_11_default,msh_11_new,msh_11_comment,msh_12_default,msh_12_new,msh_12_comment,msh_18_default,msh_18_new,msh_18_comment, app)
	    				VALUES ('$token','$siteNum','$msh_1_default','$msh_1_new','$msh_1_comment','$msh_2_default','$msh_2_new','$msh_2_comment','$msh_3_default','$msh_3_new','$msh_3_comment','$msh_4_default','$msh_4_new','$msh_4_comment','$msh_5_default','$msh_5_new','$msh_5_comment','$msh_6_default','$msh_6_new','$msh_6_comment','$msh_7_default','$msh_7_new','$msh_7_comment','$msh_9_default','$msh_9_new','$msh_9_comment','$msh_9_1_default','$msh_9_1_new','$msh_9_1_comment','$msh_9_2_default','$msh_9_2_new','$msh_9_2_comment','$msh_10_default','$msh_10_new','$msh_10_comment','$msh_11_default','$msh_11_new','$msh_11_comment','$msh_12_default','$msh_12_new','$msh_12_comment','$msh_18_default','$msh_18_new','$msh_18_comment', '$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7='$token'
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
