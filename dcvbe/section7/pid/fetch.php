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

	$response['pidDetails'] = array() ;
	$pidDetails = array() ;

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
				$secSign = $row[11] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_pid
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$pidDetails["siteNum"] = $row[2] ;
					$pidDetails["pid_3_default"] = $row[3] ;
					$pidDetails["pid_3_new"] = $row[4] ;
					$pidDetails["pid_3_comment"] = $row[5] ;
					$pidDetails["pid_3_1_default"] = $row[6] ;
					$pidDetails["pid_3_1_new"] = $row[7] ;
					$pidDetails["pid_3_1_comment"] = $row[8] ;
					$pidDetails["pid_3_4_default"] = $row[9] ;
					$pidDetails["pid_3_4_new"] = $row[10] ;
					$pidDetails["pid_3_4_comment"] = $row[11] ;
					$pidDetails["pid_5_default"] = $row[12] ;
					$pidDetails["pid_5_new"] = $row[13] ;
					$pidDetails["pid_5_comment"] = $row[14] ;
					$pidDetails["pid_5_1_default"] = $row[15] ;
					$pidDetails["pid_5_1_new"] = $row[16] ;
					$pidDetails["pid_5_1_comment"] = $row[17] ;
					$pidDetails["pid_5_2_default"] = $row[18] ;
					$pidDetails["pid_5_2_new"] = $row[19] ;
					$pidDetails["pid_5_2_comment"] = $row[20] ;
					$pidDetails["pid_5_3_default"] = $row[21] ;
					$pidDetails["pid_5_3_new"] = $row[22] ;
					$pidDetails["pid_5_3_comment"] = $row[23] ;
					$pidDetails["pid_7_default"] = $row[24] ;
					$pidDetails["pid_7_new"] = $row[25] ;
					$pidDetails["pid_7_comment"] = $row[26] ;
					$pidDetails["pid_8_default"] = $row[27] ;
					$pidDetails["pid_8_new"] = $row[28] ;
					$pidDetails["pid_8_comment"] = $row[29] ;
					$pidDetails["pid_10_default"] = $row[30] ;
					$pidDetails["pid_10_new"] = $row[31] ;
					$pidDetails["pid_10_comment"] = $row[32] ;
					$pidDetails["pid_11_default"] = $row[33] ;
					$pidDetails["pid_11_new"] = $row[34] ;
					$pidDetails["pid_11_comment"] = $row[35] ;
					$pidDetails["pid_11_1_default"] = $row[36] ;
					$pidDetails["pid_11_1_new"] = $row[37] ;
					$pidDetails["pid_11_1_comment"] = $row[38] ;
					$pidDetails["pid_11_2_default"] = $row[39] ;
					$pidDetails["pid_11_2_new"] = $row[40] ;
					$pidDetails["pid_11_2_comment"] = $row[41] ;
					$pidDetails["pid_11_3_default"] = $row[42] ;
					$pidDetails["pid_11_3_new"] = $row[43] ;
					$pidDetails["pid_11_3_comment"] = $row[44] ;
					$pidDetails["pid_11_4_default"] = $row[45] ;
					$pidDetails["pid_11_4_new"] = $row[46] ;
					$pidDetails["pid_11_4_comment"] = $row[47] ;
					$pidDetails["pid_11_5_default"] = $row[48] ;
					$pidDetails["pid_11_5_new"] = $row[49] ;
					$pidDetails["pid_11_5_comment"] = $row[50] ;
					$pidDetails["pid_13_default"] = $row[51] ;
					$pidDetails["pid_13_new"] = $row[52] ;
					$pidDetails["pid_13_comment"] = $row[53] ;
					$pidDetails["pid_14_default"] = $row[54] ;
					$pidDetails["pid_14_new"] = $row[55] ;
					$pidDetails["pid_14_comment"] = $row[56] ;
					$pidDetails["pid_18_default"] = $row[57] ;
					$pidDetails["pid_18_new"] = $row[58] ;
					$pidDetails["pid_18_comment"] = $row[59] ;


					array_push($response["pidDetails"], $pidDetails) ;
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
				$secSign = $row[11] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_pid
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$pidDetails["siteNum"] = $row[2] ;
					$pidDetails["pid_3_default"] = $row[3] ;
					$pidDetails["pid_3_new"] = $row[4] ;
					$pidDetails["pid_3_comment"] = $row[5] ;
					$pidDetails["pid_3_1_default"] = $row[6] ;
					$pidDetails["pid_3_1_new"] = $row[7] ;
					$pidDetails["pid_3_1_comment"] = $row[8] ;
					$pidDetails["pid_3_4_default"] = $row[9] ;
					$pidDetails["pid_3_4_new"] = $row[10] ;
					$pidDetails["pid_3_4_comment"] = $row[11] ;
					$pidDetails["pid_5_default"] = $row[12] ;
					$pidDetails["pid_5_new"] = $row[13] ;
					$pidDetails["pid_5_comment"] = $row[14] ;
					$pidDetails["pid_5_1_default"] = $row[15] ;
					$pidDetails["pid_5_1_new"] = $row[16] ;
					$pidDetails["pid_5_1_comment"] = $row[17] ;
					$pidDetails["pid_5_2_default"] = $row[18] ;
					$pidDetails["pid_5_2_new"] = $row[19] ;
					$pidDetails["pid_5_2_comment"] = $row[20] ;
					$pidDetails["pid_5_3_default"] = $row[21] ;
					$pidDetails["pid_5_3_new"] = $row[22] ;
					$pidDetails["pid_5_3_comment"] = $row[23] ;
					$pidDetails["pid_7_default"] = $row[24] ;
					$pidDetails["pid_7_new"] = $row[25] ;
					$pidDetails["pid_7_comment"] = $row[26] ;
					$pidDetails["pid_8_default"] = $row[27] ;
					$pidDetails["pid_8_new"] = $row[28] ;
					$pidDetails["pid_8_comment"] = $row[29] ;
					$pidDetails["pid_10_default"] = $row[30] ;
					$pidDetails["pid_10_new"] = $row[31] ;
					$pidDetails["pid_10_comment"] = $row[32] ;
					$pidDetails["pid_11_default"] = $row[33] ;
					$pidDetails["pid_11_new"] = $row[34] ;
					$pidDetails["pid_11_comment"] = $row[35] ;
					$pidDetails["pid_11_1_default"] = $row[36] ;
					$pidDetails["pid_11_1_new"] = $row[37] ;
					$pidDetails["pid_11_1_comment"] = $row[38] ;
					$pidDetails["pid_11_2_default"] = $row[39] ;
					$pidDetails["pid_11_2_new"] = $row[40] ;
					$pidDetails["pid_11_2_comment"] = $row[41] ;
					$pidDetails["pid_11_3_default"] = $row[42] ;
					$pidDetails["pid_11_3_new"] = $row[43] ;
					$pidDetails["pid_11_3_comment"] = $row[44] ;
					$pidDetails["pid_11_4_default"] = $row[45] ;
					$pidDetails["pid_11_4_new"] = $row[46] ;
					$pidDetails["pid_11_4_comment"] = $row[47] ;
					$pidDetails["pid_11_5_default"] = $row[48] ;
					$pidDetails["pid_11_5_new"] = $row[49] ;
					$pidDetails["pid_11_5_comment"] = $row[50] ;
					$pidDetails["pid_13_default"] = $row[51] ;
					$pidDetails["pid_13_new"] = $row[52] ;
					$pidDetails["pid_13_comment"] = $row[53] ;
					$pidDetails["pid_14_default"] = $row[54] ;
					$pidDetails["pid_14_new"] = $row[55] ;
					$pidDetails["pid_14_comment"] = $row[56] ;
					$pidDetails["pid_18_default"] = $row[57] ;
					$pidDetails["pid_18_new"] = $row[58] ;
					$pidDetails["pid_18_comment"] = $row[59] ;
					
					array_push($response["pidDetails"], $pidDetails) ;
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
