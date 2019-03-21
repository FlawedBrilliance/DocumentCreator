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

	$response['mshDetails'] = array() ;
	$mshDetails = array() ;

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
				$secSign = $row[6] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_msh
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
var_dump($resultCheck);
				while ($row = mysqli_fetch_row($result))
				{
					$mshDetails["siteNum"] = $row[2] ;
					$mshDetails["msh_1_default"] = $row[3] ;
					$mshDetails["msh_1_new"] = $row[4] ;
					$mshDetails["msh_1_comment"] = $row[5] ;
					$mshDetails["msh_2_default"] = $row[6] ;
					$mshDetails["msh_2_new"] = $row[7] ;
					$mshDetails["msh_2_comment"] = $row[8] ;
					$mshDetails["msh_3_default"] = $row[9] ;
					$mshDetails["msh_3_new"] = $row[10] ;
					$mshDetails["msh_3_comment"] = $row[11] ;
					$mshDetails["msh_4_default"] = $row[12] ;
					$mshDetails["msh_4_new"] = $row[13] ;
					$mshDetails["msh_4_comment"] = $row[14] ;
					$mshDetails["msh_5_default"] = $row[15] ;
					$mshDetails["msh_5_new"] = $row[16] ;
					$mshDetails["msh_5_comment"] = $row[17] ;
					$mshDetails["msh_6_default"] = $row[18] ;
					$mshDetails["msh_6_new"] = $row[19] ;
					$mshDetails["msh_6_comment"] = $row[20] ;
					$mshDetails["msh_7_default"] = $row[21] ;
					$mshDetails["msh_7_new"] = $row[22] ;
					$mshDetails["msh_7_comment"] = $row[23] ;
					$mshDetails["msh_9_default"] = $row[24] ;
					$mshDetails["msh_9_new"] = $row[25] ;
					$mshDetails["msh_9_comment"] = $row[26] ;
					$mshDetails["msh_9_1_default"] = $row[27] ;
					$mshDetails["msh_9_1_new"] = $row[28] ;
					$mshDetails["msh_9_1_comment"] = $row[29] ;
					$mshDetails["msh_9_2_default"] = $row[30] ;
					$mshDetails["msh_9_2_new"] = $row[31] ;
					$mshDetails["msh_9_2_comment"] = $row[32] ;
					$mshDetails["msh_10_default"] = $row[33] ;
					$mshDetails["msh_10_new"] = $row[34] ;
					$mshDetails["msh_10_comment"] = $row[35] ;
					$mshDetails["msh_11_default"] = $row[36] ;
					$mshDetails["msh_11_new"] = $row[37] ;
					$mshDetails["msh_11_comment"] = $row[38] ;
					$mshDetails["msh_12_default"] = $row[39] ;
					$mshDetails["msh_12_new"] = $row[40] ;
					$mshDetails["msh_12_comment"] = $row[41] ;
					$mshDetails["msh_18_default"] = $row[42] ;
					$mshDetails["msh_18_new"] = $row[43] ;
					$mshDetails["msh_18_comment"] = $row[44] ;

					array_push($response["mshDetails"], $mshDetails) ;
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
				$secSign = $row[6] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_msh
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$mshDetails["siteNum"] = $row[2] ;
					$mshDetails["msh_1_default"] = $row[3] ;
					$mshDetails["msh_1_new"] = $row[4] ;
					$mshDetails["msh_1_comment"] = $row[5] ;
					$mshDetails["msh_2_default"] = $row[6] ;
					$mshDetails["msh_2_new"] = $row[7] ;
					$mshDetails["msh_2_comment"] = $row[8] ;
					$mshDetails["msh_3_default"] = $row[9] ;
					$mshDetails["msh_3_new"] = $row[10] ;
					$mshDetails["msh_3_comment"] = $row[11] ;
					$mshDetails["msh_4_default"] = $row[12] ;
					$mshDetails["msh_4_new"] = $row[13] ;
					$mshDetails["msh_4_comment"] = $row[14] ;
					$mshDetails["msh_5_default"] = $row[15] ;
					$mshDetails["msh_5_new"] = $row[16] ;
					$mshDetails["msh_5_comment"] = $row[17] ;
					$mshDetails["msh_6_default"] = $row[18] ;
					$mshDetails["msh_6_new"] = $row[19] ;
					$mshDetails["msh_6_comment"] = $row[20] ;
					$mshDetails["msh_7_default"] = $row[21] ;
					$mshDetails["msh_7_new"] = $row[22] ;
					$mshDetails["msh_7_comment"] = $row[23] ;
					$mshDetails["msh_9_default"] = $row[24] ;
					$mshDetails["msh_9_new"] = $row[25] ;
					$mshDetails["msh_9_comment"] = $row[26] ;
					$mshDetails["msh_9_1_default"] = $row[27] ;
					$mshDetails["msh_9_1_new"] = $row[28] ;
					$mshDetails["msh_9_1_comment"] = $row[29] ;
					$mshDetails["msh_9_2_default"] = $row[30] ;
					$mshDetails["msh_9_2_new"] = $row[31] ;
					$mshDetails["msh_9_2_comment"] = $row[32] ;
					$mshDetails["msh_10_default"] = $row[33] ;
					$mshDetails["msh_10_new"] = $row[34] ;
					$mshDetails["msh_10_comment"] = $row[35] ;
					$mshDetails["msh_11_default"] = $row[36] ;
					$mshDetails["msh_11_new"] = $row[37] ;
					$mshDetails["msh_11_comment"] = $row[38] ;
					$mshDetails["msh_12_default"] = $row[39] ;
					$mshDetails["msh_12_new"] = $row[40] ;
					$mshDetails["msh_12_comment"] = $row[41] ;
					$mshDetails["msh_18_default"] = $row[42] ;
					$mshDetails["msh_18_new"] = $row[43] ;
					$mshDetails["msh_18_comment"] = $row[44] ;

					array_push($response["mshDetails"], $mshDetails) ;
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
