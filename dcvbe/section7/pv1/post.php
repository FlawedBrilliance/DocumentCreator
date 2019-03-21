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
		$sql = "DELETE FROM section7_pv1
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['pv1TableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$pv1_2_default = $_POST['pv1_2_default'.$ctr];
	    		$pv1_2_new = $_POST['pv1_2_new'.$ctr];
	    		$pv1_2_comment = $_POST['pv1_2_comment'.$ctr];
	    		$pv1_3_default = $_POST['pv1_3_default'.$ctr];
	    		$pv1_3_new = $_POST['pv1_3_new'.$ctr];
	    		$pv1_3_comment = $_POST['pv1_3_comment'.$ctr];
	    		$pv1_39_default = $_POST['pv1_39_default'.$ctr];
	    		$pv1_39_new = $_POST['pv1_39_new'.$ctr];
	    		$pv1_39_comment = $_POST['pv1_39_comment'.$ctr];

	    		$sql = "INSERT INTO section7_pv1 (sec_sign,siteNum,pv1_2_default,pv1_2_new,pv1_2_comment,pv1_3_default,pv1_3_new,pv1_3_comment,pv1_39_default,pv1_39_new,pv1_39_comment, app)
	    				VALUES ('$token','$siteNum','$pv1_2_default','$pv1_2_new','$pv1_2_comment','$pv1_3_default','$pv1_3_new','$pv1_3_comment','$pv1_39_default','$pv1_39_new','$pv1_39_comment', '$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_pv1='$token'
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
