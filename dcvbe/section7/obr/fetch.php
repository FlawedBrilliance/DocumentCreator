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

	$response['obrDetails'] = array() ;
	$obrDetails = array() ;

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
				$secSign = $row[14] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_obr
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$obrDetails["siteNum"] = $row[2] ;
					$obrDetails["obr_1_default"] = $row[3] ;
					$obrDetails["obr_1_new"] = $row[4] ;
					$obrDetails["obr_1_comment"] = $row[5] ;
					$obrDetails["obr_3_default"] = $row[6] ;
					$obrDetails["obr_3_new"] = $row[7] ;
					$obrDetails["obr_3_comment"] = $row[8] ;
					$obrDetails["obr_4_default"] = $row[9] ;
					$obrDetails["obr_4_new"] = $row[10] ;
					$obrDetails["obr_4_comment"] = $row[11] ;
					$obrDetails["obr_4_2_default"] = $row[12] ;
					$obrDetails["obr_4_2_new"] = $row[13] ;
					$obrDetails["obr_4_2_comment"] = $row[14] ;
					$obrDetails["obr_4_3_default"] = $row[15] ;
					$obrDetails["obr_4_3_new"] = $row[16] ;
					$obrDetails["obr_4_3_comment"] = $row[17] ;
					$obrDetails["obr_7_default"] = $row[18] ;
					$obrDetails["obr_7_new"] = $row[19] ;
					$obrDetails["obr_7_comment"] = $row[20] ;
					$obrDetails["obr_8_default"] = $row[21] ;
					$obrDetails["obr_8_new"] = $row[22] ;
					$obrDetails["obr_8_comment"] = $row[23] ;
					$obrDetails["obr_16_default"] = $row[24] ;
					$obrDetails["obr_16_new"] = $row[25] ;
					$obrDetails["obr_16_comment"] = $row[26] ;
					$obrDetails["obr_18_default"] = $row[27] ;
					$obrDetails["obr_18_new"] = $row[28] ;
					$obrDetails["obr_18_comment"] = $row[29] ;
					$obrDetails["obr_20_default"] = $row[30] ;
					$obrDetails["obr_20_new"] = $row[31] ;
					$obrDetails["obr_20_comment"] = $row[32] ;
					$obrDetails["obr_22_default"] = $row[33] ;
					$obrDetails["obr_22_new"] = $row[34] ;
					$obrDetails["obr_22_comment"] = $row[35] ;
					$obrDetails["obr_24_default"] = $row[36] ;
					$obrDetails["obr_24_new"] = $row[37] ;
					$obrDetails["obr_24_comment"] = $row[38] ;
					$obrDetails["obr_25_default"] = $row[39] ;
					$obrDetails["obr_25_new"] = $row[40] ;
					$obrDetails["obr_25_comment"] = $row[41] ;
					$obrDetails["obr_31_default"] = $row[42] ;
					$obrDetails["obr_31_new"] = $row[43] ;
					$obrDetails["obr_31_comment"] = $row[44] ;
					$obrDetails["obr_32_default"] = $row[45] ;
					$obrDetails["obr_32_new"] = $row[46] ;
					$obrDetails["obr_32_comment"] = $row[47] ;
					$obrDetails["obr_32_2_default"] = $row[48] ;
					$obrDetails["obr_32_2_new"] = $row[49] ;
					$obrDetails["obr_32_2_comment"] = $row[50] ;
					$obrDetails["obr_32_3_default"] = $row[51] ;
					$obrDetails["obr_32_3_new"] = $row[52] ;
					$obrDetails["obr_32_3_comment"] = $row[53] ;
					$obrDetails["obr_32_4_default"] = $row[54] ;
					$obrDetails["obr_32_4_new"] = $row[55] ;
					$obrDetails["obr_32_4_comment"] = $row[56] ;


					array_push($response["obrDetails"], $obrDetails) ;
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
				$secSign = $row[14] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_obr
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$obrDetails["siteNum"] = $row[2] ;
					$obrDetails["obr_1_default"] = $row[3] ;
					$obrDetails["obr_1_new"] = $row[4] ;
					$obrDetails["obr_1_comment"] = $row[5] ;
					$obrDetails["obr_3_default"] = $row[6] ;
					$obrDetails["obr_3_new"] = $row[7] ;
					$obrDetails["obr_3_comment"] = $row[8] ;
					$obrDetails["obr_4_default"] = $row[9] ;
					$obrDetails["obr_4_new"] = $row[10] ;
					$obrDetails["obr_4_comment"] = $row[11] ;
					$obrDetails["obr_4_2_default"] = $row[12] ;
					$obrDetails["obr_4_2_new"] = $row[13] ;
					$obrDetails["obr_4_2_comment"] = $row[14] ;
					$obrDetails["obr_4_3_default"] = $row[15] ;
					$obrDetails["obr_4_3_new"] = $row[16] ;
					$obrDetails["obr_4_3_comment"] = $row[17] ;
					$obrDetails["obr_7_default"] = $row[18] ;
					$obrDetails["obr_7_new"] = $row[19] ;
					$obrDetails["obr_7_comment"] = $row[20] ;
					$obrDetails["obr_8_default"] = $row[21] ;
					$obrDetails["obr_8_new"] = $row[22] ;
					$obrDetails["obr_8_comment"] = $row[23] ;
					$obrDetails["obr_16_default"] = $row[24] ;
					$obrDetails["obr_16_new"] = $row[25] ;
					$obrDetails["obr_16_comment"] = $row[26] ;
					$obrDetails["obr_18_default"] = $row[27] ;
					$obrDetails["obr_18_new"] = $row[28] ;
					$obrDetails["obr_18_comment"] = $row[29] ;
					$obrDetails["obr_20_default"] = $row[30] ;
					$obrDetails["obr_20_new"] = $row[31] ;
					$obrDetails["obr_20_comment"] = $row[32] ;
					$obrDetails["obr_22_default"] = $row[33] ;
					$obrDetails["obr_22_new"] = $row[34] ;
					$obrDetails["obr_22_comment"] = $row[35] ;
					$obrDetails["obr_24_default"] = $row[36] ;
					$obrDetails["obr_24_new"] = $row[37] ;
					$obrDetails["obr_24_comment"] = $row[38] ;
					$obrDetails["obr_25_default"] = $row[39] ;
					$obrDetails["obr_25_new"] = $row[40] ;
					$obrDetails["obr_25_comment"] = $row[41] ;
					$obrDetails["obr_31_default"] = $row[42] ;
					$obrDetails["obr_31_new"] = $row[43] ;
					$obrDetails["obr_31_comment"] = $row[44] ;
					$obrDetails["obr_32_default"] = $row[45] ;
					$obrDetails["obr_32_new"] = $row[46] ;
					$obrDetails["obr_32_comment"] = $row[47] ;
					$obrDetails["obr_32_2_default"] = $row[48] ;
					$obrDetails["obr_32_2_new"] = $row[49] ;
					$obrDetails["obr_32_2_comment"] = $row[50] ;
					$obrDetails["obr_32_3_default"] = $row[51] ;
					$obrDetails["obr_32_3_new"] = $row[52] ;
					$obrDetails["obr_32_3_comment"] = $row[53] ;
					$obrDetails["obr_32_4_default"] = $row[54] ;
					$obrDetails["obr_32_4_new"] = $row[55] ;
					$obrDetails["obr_32_4_comment"] = $row[56] ;
					
					array_push($response["obrDetails"], $obrDetails) ;
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
