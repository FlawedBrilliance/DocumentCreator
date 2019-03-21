<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	//Define Array
	$response['connectivityDetails'] = array() ;
	$connectivityDetails = array() ;
	$response['modalityDetails'] = array() ;
	$modalityDetails = array() ;

	if(isset($_GET['prs']))
	{
		//Get the token and PRS
		$token = $_GET['token'] ;
		$prs = $_GET['prs'] ;

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
				$secSign = $row[3] ;

				//Query Connectivity Details Table
				$sql = "SELECT *
						FROM section4_connectivityDetails
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$connectivityDetails["type"] = $row[2] ;
					$connectivityDetails["system_details"] = $row[3] ;
					$connectivityDetails["interface_type"] = $row[4] ;
					$connectivityDetails["message_event"] = $row[5] ;
					$connectivityDetails["interface_direction"] = $row[6] ;
					$connectivityDetails["conn_source"] = $row[7] ;
					$connectivityDetails["source_ip"] = $row[8] ;
					$connectivityDetails["conn_destination"] = $row[9] ;
					$connectivityDetails["destination_ip"] = $row[10] ;
					$connectivityDetails["port"] = $row[11] ;
					$connectivityDetails["ae_title"] = $row[12] ;
					array_push($response["connectivityDetails"], $connectivityDetails) ;
				}

				//Query Imaging Modality Details Table
				$sql = "SELECT *
						FROM section4_modalityDetails
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$modalityDetails["vendor"] = $row[2] ;
					$modalityDetails["hostname"] = $row[3] ;
					$modalityDetails["ip"] = $row[4] ;
					$modalityDetails["ae_title"] = $row[5] ;
					$modalityDetails["model"] = $row[6] ;
					$modalityDetails["location"] = $row[7] ;
					$modalityDetails["serial"] = $row[8] ;
					array_push($response["modalityDetails"], $modalityDetails) ;
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
				$secSign = $row[3] ;

				//Query Connectivity Details Table
				$sql = "SELECT *
						FROM section4_connectivityDetails
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$connectivityDetails["type"] = $row[2] ;
					$connectivityDetails["system_details"] = $row[3] ;
					$connectivityDetails["interface_type"] = $row[4] ;
					$connectivityDetails["message_event"] = $row[5] ;
					$connectivityDetails["interface_direction"] = $row[6] ;
					$connectivityDetails["conn_source"] = $row[7] ;
					$connectivityDetails["source_ip"] = $row[8] ;
					$connectivityDetails["conn_destination"] = $row[9] ;
					$connectivityDetails["destination_ip"] = $row[10] ;
					$connectivityDetails["port"] = $row[11] ;
					$connectivityDetails["ae_title"] = $row[12] ;
					array_push($response["connectivityDetails"], $connectivityDetails) ;
				}

				//Query Imaging Modality Details Table
				$sql = "SELECT *
						FROM section4_modalityDetails
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$modalityDetails["vendor"] = $row[2] ;
					$modalityDetails["hostname"] = $row[3] ;
					$modalityDetails["ip"] = $row[4] ;
					$modalityDetails["ae_title"] = $row[5] ;
					$modalityDetails["model"] = $row[6] ;
					$modalityDetails["location"] = $row[7] ;
					$modalityDetails["serial"] = $row[8] ;
					array_push($response["modalityDetails"], $modalityDetails) ;
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
