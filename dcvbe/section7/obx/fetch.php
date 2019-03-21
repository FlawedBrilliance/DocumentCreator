<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	//Main Response Array
	$response = array() ;
	//Define Array

	$response['obxDetails'] = array() ;
	$obxDetails = array() ;

	if(isset($_GET['prs']))
	{
		//Get the token and PRS
		$token = $_GET['token'] ;
		$prs = $_GET['prs'] ;
		$app = $_GET['app'] ;

		//Query Revision Signature
		$sql = "SELECT *
				FROM revisions
				WHERE rev_sign = '$token' ; " ;
		$result = mysqli_query($dcConn,$sql);
		$resultCheck = mysqli_num_rows($result) ;
		if($resultCheck>0)
		{
			//Query Section
			$sql = "SELECT *
					FROM sections
					WHERE rev_sign = '$token' ; " ;
			$result = mysqli_query($dcConn,$sql);
			$resultCheck = mysqli_num_rows($result) ;

			if($resultCheck>0)
			{
				$row = mysqli_fetch_row($result);
				$secSign = $row[15] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_obx
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$obxDetails["siteNum"] = $row[2] ;
					$obxDetails["obx_1_default"] = $row[3] ;
					$obxDetails["obx_1_new"] = $row[4] ;
					$obxDetails["obx_1_comment"] = $row[5] ;
					$obxDetails["obx_2_default"] = $row[6] ;
					$obxDetails["obx_2_new"] = $row[7] ;
					$obxDetails["obx_2_comment"] = $row[8] ;
					$obxDetails["obx_3_default"] = $row[9] ;
					$obxDetails["obx_3_new"] = $row[10] ;
					$obxDetails["obx_3_comment"] = $row[11] ;
					$obxDetails["obx_4_default"] = $row[12] ;
					$obxDetails["obx_4_new"] = $row[13] ;
					$obxDetails["obx_4_comment"] = $row[14] ;
					$obxDetails["obx_5_default"] = $row[15] ;
					$obxDetails["obx_5_new"] = $row[16] ;
					$obxDetails["obx_5_comment"] = $row[17] ;
					$obxDetails["obx_11_default"] = $row[18] ;
					$obxDetails["obx_11_new"] = $row[19] ;
					$obxDetails["obx_11_comment"] = $row[20] ;

					array_push($response["obxDetails"], $obxDetails) ;
				}

			}
			else
			{
				$response = "Something went wrong (Error: Failed to fetch section data), please contact administrator.";
			}			
		}
		else
		{
		    //Retrieve latest published revision
		    $sql = "SELECT *
		    		FROM revisions
		    		WHERE prs='$prs' AND published=1
		    		ORDER BY rev_date DESC;" ;
			$result = mysqli_query($dcConn,$sql);
			$resultCheck = mysqli_num_rows($result) ;

			$row = mysqli_fetch_row($result);
			$revSign = $row[0] ;

			//Query Section
			$sql = "SELECT *
					FROM sections
					WHERE rev_sign = '$revSign' ; " ;
			$result = mysqli_query($dcConn,$sql);
			$resultCheck = mysqli_num_rows($result) ;

			if($resultCheck>0)
			{
				$row = mysqli_fetch_row($result);
				$secSign = $row[15] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_obx
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$obxDetails["siteNum"] = $row[2] ;
					$obxDetails["pv1_2_default"] = $row[3] ;
					$obxDetails["pv1_2_new"] = $row[4] ;
					$obxDetails["pv1_2_comment"] = $row[5] ;
					$obxDetails["pv1_3_default"] = $row[6] ;
					$obxDetails["pv1_3_new"] = $row[7] ;
					$obxDetails["pv1_3_comment"] = $row[8] ;
					$obxDetails["pv1_39_default"] = $row[9] ;
					$obxDetails["pv1_39_new"] = $row[10] ;
					$obxDetails["pv1_39_comment"] = $row[11] ;
					
					array_push($response["obxDetails"], $obxDetails) ;
				}

			}
			else
			{
				$response = "Something went wrong (Error: Failed to fetch section data), please contact administrator.";
			}

		}
	}
	else
	{
		$response = "Something went wrong (Error: Failed to fetch PRS), please contact administrator.";
	}

	//Output Data in JSON
	echo json_encode($response);

?>
