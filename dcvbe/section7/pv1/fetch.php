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

	$response['pv1Details'] = array() ;
	$pv1Details = array() ;

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
				$secSign = $row[12] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_pv1
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$pv1Details["siteNum"] = $row[2] ;
					$pv1Details["pv1_2_default"] = $row[3] ;
					$pv1Details["pv1_2_new"] = $row[4] ;
					$pv1Details["pv1_2_comment"] = $row[5] ;
					$pv1Details["pv1_3_default"] = $row[6] ;
					$pv1Details["pv1_3_new"] = $row[7] ;
					$pv1Details["pv1_3_comment"] = $row[8] ;
					$pv1Details["pv1_39_default"] = $row[9] ;
					$pv1Details["pv1_39_new"] = $row[10] ;
					$pv1Details["pv1_39_comment"] = $row[11] ;

					array_push($response["pv1Details"], $pv1Details) ;
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
				$secSign = $row[12] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section7_pv1
						WHERE sec_sign = '$secSign' AND app = '$app'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$pv1Details["siteNum"] = $row[2] ;
					$pv1Details["pv1_2_default"] = $row[3] ;
					$pv1Details["pv1_2_new"] = $row[4] ;
					$pv1Details["pv1_2_comment"] = $row[5] ;
					$pv1Details["pv1_3_default"] = $row[6] ;
					$pv1Details["pv1_3_new"] = $row[7] ;
					$pv1Details["pv1_3_comment"] = $row[8] ;
					$pv1Details["pv1_39_default"] = $row[9] ;
					$pv1Details["pv1_39_new"] = $row[10] ;
					$pv1Details["pv1_39_comment"] = $row[11] ;
					
					array_push($response["pv1Details"], $pv1Details) ;
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
