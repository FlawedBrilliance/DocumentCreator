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
		$sql = "DELETE FROM section7_obx
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['obxTableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$obx_1_default = $_POST['obx_1_default'.$ctr];
	    		$obx_1_new = $_POST['obx_1_new'.$ctr];
	    		$obx_1_comment = $_POST['obx_1_comment'.$ctr];
	    		$obx_2_default = $_POST['obx_2_default'.$ctr];
	    		$obx_2_new = $_POST['obx_2_new'.$ctr];
	    		$obx_2_comment = $_POST['obx_2_comment'.$ctr];
	    		$obx_3_default = $_POST['obx_3_default'.$ctr];
	    		$obx_3_new = $_POST['obx_3_new'.$ctr];
	    		$obx_3_comment = $_POST['obx_3_comment'.$ctr];
	    		$obx_4_default = $_POST['obx_4_default'.$ctr];
	    		$obx_4_new = $_POST['obx_4_new'.$ctr];
	    		$obx_4_comment = $_POST['obx_4_comment'.$ctr];
	    		$obx_5_default = $_POST['obx_5_default'.$ctr];
	    		$obx_5_new = $_POST['obx_5_new'.$ctr];
	    		$obx_5_comment = $_POST['obx_5_comment'.$ctr];
	    		$obx_11_default = $_POST['obx_11_default'.$ctr];
	    		$obx_11_new = $_POST['obx_11_new'.$ctr];
	    		$obx_11_comment = $_POST['obx_11_comment'.$ctr];

	    		$sql = "INSERT INTO section7_obx (sec_sign,siteNum,obx_1_default,obx_1_new,obx_1_comment,obx_2_default,obx_2_new,obx_2_comment,obx_3_default,obx_3_new,obx_3_comment,obx_4_default,obx_4_new,obx_4_comment,obx_5_default,obx_5_new,obx_5_comment,obx_11_default,obx_11_new,obx_11_comment,app)
	    				VALUES ('$token','$siteNum','$obx_1_default','$obx_1_new','$obx_1_comment','$obx_2_default','$obx_2_new','$obx_2_comment','$obx_3_default','$obx_3_new','$obx_3_comment','$obx_4_default','$obx_4_new','$obx_4_comment','$obx_5_default','$obx_5_new','$obx_5_comment','$obx_11_default','$obx_11_new','$obx_11_comment','$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_obx='$token'
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
