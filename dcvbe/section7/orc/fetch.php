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

	$response['orcDetails'] = array() ;
	$orcDetails = array() ;

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
				$secSign = $row[13] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_orc
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$orcDetails["siteNum"] = $row[2] ;
					$orcDetails["orc_1_default"] = $row[3] ;
					$orcDetails["orc_1_new"] = $row[4] ;
					$orcDetails["orc_1_comment"] = $row[5] ;
					$orcDetails["orc_2_default"] = $row[6] ;
					$orcDetails["orc_2_new"] = $row[7] ;
					$orcDetails["orc_2_comment"] = $row[8] ;
					$orcDetails["orc_3_default"] = $row[9] ;
					$orcDetails["orc_3_new"] = $row[10] ;
					$orcDetails["orc_3_comment"] = $row[11] ;
					$orcDetails["orc_5_default"] = $row[12] ;
					$orcDetails["orc_5_new"] = $row[13] ;
					$orcDetails["orc_5_comment"] = $row[14] ;
					$orcDetails["orc_9_default"] = $row[15] ;
					$orcDetails["orc_9_new"] = $row[16] ;
					$orcDetails["orc_9_comment"] = $row[17] ;

					array_push($response["orcDetails"], $orcDetails) ;
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
				$secSign = $row[13] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_orc
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$orcDetails["siteNum"] = $row[2] ;
					$orcDetails["orc_1_default"] = $row[3] ;
					$orcDetails["orc_1_new"] = $row[4] ;
					$orcDetails["orc_1_comment"] = $row[5] ;
					$orcDetails["orc_2_default"] = $row[6] ;
					$orcDetails["orc_2_new"] = $row[7] ;
					$orcDetails["orc_2_comment"] = $row[8] ;
					$orcDetails["orc_3_default"] = $row[9] ;
					$orcDetails["orc_3_new"] = $row[10] ;
					$orcDetails["orc_3_comment"] = $row[11] ;
					$orcDetails["orc_5_default"] = $row[12] ;
					$orcDetails["orc_5_new"] = $row[13] ;
					$orcDetails["orc_5_comment"] = $row[14] ;
					$orcDetails["orc_9_default"] = $row[15] ;
					$orcDetails["orc_9_new"] = $row[16] ;
					$orcDetails["orc_9_comment"] = $row[17] ;
					
					array_push($response["orcDetails"], $orcDetails) ;
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
