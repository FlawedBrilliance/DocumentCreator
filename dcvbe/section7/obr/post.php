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
		$sql = "DELETE FROM section7_obr
				WHERE sec_sign='$token' AND app='$app';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['obrTableCtr'] ;
	    while($ctr>0)
	    {
	    	
	    	if(isset($_POST['siteNum'.$ctr]))
	    	{
	    		$siteNum = $_POST['siteNum'.$ctr];
	    		$obr_1_default = $_POST['obr_1_default'.$ctr];
	    		$obr_1_new = $_POST['obr_1_new'.$ctr];
	    		$obr_1_comment = $_POST['obr_1_comment'.$ctr];
	    		$obr_3_default = $_POST['obr_3_default'.$ctr];
	    		$obr_3_new = $_POST['obr_3_new'.$ctr];
	    		$obr_3_comment = $_POST['obr_3_comment'.$ctr];
	    		$obr_4_default = $_POST['obr_4_default'.$ctr];
	    		$obr_4_new = $_POST['obr_4_new'.$ctr];
	    		$obr_4_comment = $_POST['obr_4_comment'.$ctr];
	    		$obr_4_2_default = $_POST['obr_4_2_default'.$ctr];
	    		$obr_4_2_new = $_POST['obr_4_2_new'.$ctr];
	    		$obr_4_2_comment = $_POST['obr_4_2_comment'.$ctr];
	    		$obr_4_3_default = $_POST['obr_4_3_default'.$ctr];
	    		$obr_4_3_new = $_POST['obr_4_3_new'.$ctr];
	    		$obr_4_3_comment = $_POST['obr_4_3_comment'.$ctr];
	    		$obr_7_default = $_POST['obr_7_default'.$ctr];
	    		$obr_7_new = $_POST['obr_7_new'.$ctr];
	    		$obr_7_comment = $_POST['obr_7_comment'.$ctr];
	    		$obr_8_default = $_POST['obr_8_default'.$ctr];
	    		$obr_8_new = $_POST['obr_8_new'.$ctr];
	    		$obr_8_comment = $_POST['obr_8_comment'.$ctr];
	    		$obr_16_default = $_POST['obr_16_default'.$ctr];
	    		$obr_16_new = $_POST['obr_16_new'.$ctr];
	    		$obr_16_comment = $_POST['obr_16_comment'.$ctr];
	    		$obr_18_default = $_POST['obr_18_default'.$ctr];
	    		$obr_18_new = $_POST['obr_18_new'.$ctr];
	    		$obr_18_comment = $_POST['obr_18_comment'.$ctr];
	    		$obr_20_default = $_POST['obr_20_default'.$ctr];
	    		$obr_20_new = $_POST['obr_20_new'.$ctr];
	    		$obr_20_comment = $_POST['obr_20_comment'.$ctr];
	    		$obr_22_default = $_POST['obr_22_default'.$ctr];
	    		$obr_22_new = $_POST['obr_22_new'.$ctr];
	    		$obr_22_comment = $_POST['obr_22_comment'.$ctr];
	    		$obr_24_default = $_POST['obr_24_default'.$ctr];
	    		$obr_24_new = $_POST['obr_24_new'.$ctr];
	    		$obr_24_comment = $_POST['obr_24_comment'.$ctr];
	    		$obr_25_default = $_POST['obr_25_default'.$ctr];
	    		$obr_25_new = $_POST['obr_25_new'.$ctr];
	    		$obr_25_comment = $_POST['obr_25_comment'.$ctr];
	    		$obr_31_default = $_POST['obr_31_default'.$ctr];
	    		$obr_31_new = $_POST['obr_31_new'.$ctr];
	    		$obr_31_comment = $_POST['obr_31_comment'.$ctr];
	    		$obr_32_default = $_POST['obr_32_default'.$ctr];
	    		$obr_32_new = $_POST['obr_32_new'.$ctr];
	    		$obr_32_comment = $_POST['obr_32_comment'.$ctr];
	    		$obr_32_2_default = $_POST['obr_32_2_default'.$ctr];
	    		$obr_32_2_new = $_POST['obr_32_2_new'.$ctr];
	    		$obr_32_2_comment = $_POST['obr_32_2_comment'.$ctr];
	    		$obr_32_3_default = $_POST['obr_32_3_default'.$ctr];
	    		$obr_32_3_new = $_POST['obr_32_3_new'.$ctr];
	    		$obr_32_3_comment = $_POST['obr_32_3_comment'.$ctr];
	    		$obr_32_4_default = $_POST['obr_32_4_default'.$ctr];
	    		$obr_32_4_new = $_POST['obr_32_4_new'.$ctr];
	    		$obr_32_4_comment = $_POST['obr_32_4_comment'.$ctr];

	    		$sql = "INSERT INTO section7_obr (sec_sign,siteNum,obr_1_default,obr_1_new,obr_1_comment,obr_3_default,obr_3_new,obr_3_comment,obr_4_default,obr_4_new,obr_4_comment,obr_4_2_default,obr_4_2_new,obr_4_2_comment,obr_4_3_default,obr_4_3_new,obr_4_3_comment,obr_7_default,obr_7_new,obr_7_comment,obr_8_default,obr_8_new,obr_8_comment,obr_16_default,obr_16_new,obr_16_comment,obr_18_default,obr_18_new,obr_18_comment,obr_20_default,obr_20_new,obr_20_comment,obr_22_default,obr_22_new,obr_22_comment,obr_24_default,obr_24_new,obr_24_comment,obr_25_default,obr_25_new,obr_25_comment,obr_31_default,obr_31_new,obr_31_comment,obr_32_default,obr_32_new,obr_32_comment,obr_32_2_default,obr_32_2_new,obr_32_2_comment,obr_32_3_default,obr_32_3_new,obr_32_3_comment,obr_32_4_default,obr_32_4_new,obr_32_4_comment,app)
	    				VALUES ('$token','$siteNum','$obr_1_default','$obr_1_new','$obr_1_comment','$obr_3_default','$obr_3_new','$obr_3_comment','$obr_4_default','$obr_4_new','$obr_4_comment','$obr_4_2_default','$obr_4_2_new','$obr_4_2_comment','$obr_4_3_default','$obr_4_3_new','$obr_4_3_comment','$obr_7_default','$obr_7_new','$obr_7_comment','$obr_8_default','$obr_8_new','$obr_8_comment','$obr_16_default','$obr_16_new','$obr_16_comment','$obr_18_default','$obr_18_new','$obr_18_comment','$obr_20_default','$obr_20_new','$obr_20_comment','$obr_22_default','$obr_22_new','$obr_22_comment','$obr_24_default','$obr_24_new','$obr_24_comment','$obr_25_default','$obr_25_new','$obr_25_comment','$obr_31_default','$obr_31_new','$obr_31_comment','$obr_32_default','$obr_32_new','$obr_32_comment','$obr_32_2_default','$obr_32_2_new','$obr_32_2_comment','$obr_32_3_default','$obr_32_3_new','$obr_32_3_comment','$obr_32_4_default','$obr_32_4_new','$obr_32_4_comment','$app'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section7_obr='$token'
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
