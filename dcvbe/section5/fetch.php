<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	//Main Response Array
	$response = array() ;
	//Define Array for each Table
	$response['raceDetails'] = array() ;
	$raceDetails = array() ;
	$response['patientClass'] = array() ;
	$patientClass = array() ;
	$response['orderControlCode'] = array() ;
	$orderControlCode = array() ;
	$response['orderStatus'] = array() ;
	$orderStatus = array() ;
	$response['orderControlStatus'] = array() ;
	$orderControlStatus = array() ;
	$response['examModalityType'] = array() ;
	$examModalityType = array() ;

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
				$secSign = $row[4] ;

				//Query Race Table
				$sql = "SELECT *
						FROM section5_race
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$raceDetails["source_value"] = $row[2] ;
					$raceDetails["destination_value"] = $row[3] ;
					$raceDetails["description"] = $row[4] ;
					array_push($response["raceDetails"], $raceDetails) ;
				}

				//Query Patient Class Table
				$sql = "SELECT *
						FROM section5_patientClass
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$patientClass["source_value"] = $row[2] ;
					$patientClass["destination_value"] = $row[3] ;
					$patientClass["description"] = $row[4] ;
					array_push($response["patientClass"], $patientClass) ;
				}

				//Query Order Control Code Table
				$sql = "SELECT *
						FROM section5_orderControlCode
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderControlCode["message_type"] = $row[2] ;
					$orderControlCode["processing_trigger"] = $row[3] ;
					$orderControlCode["description"] = $row[4] ;
					array_push($response["orderControlCode"], $orderControlCode) ;
				}

				//Query Order Status Table
				$sql = "SELECT *
						FROM section5_orderStatus
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderStatus["message_type"] = $row[2] ;
					$orderStatus["processing_trigger"] = $row[3] ;
					$orderStatus["description"] = $row[4] ;
					array_push($response["orderStatus"], $orderStatus) ;
				}

				//Query Order Control Status Table
				$sql = "SELECT *
						FROM section5_orderControlStatus
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderControlStatus["message_type"] = $row[2] ;
					$orderControlStatus["processing_trigger"] = $row[3] ;
					$orderControlStatus["description"] = $row[4] ;
					array_push($response["orderControlStatus"], $orderControlStatus) ;
				}

				//Query Exam Modality Type Table
				$sql = "SELECT *
						FROM section5_examModalityType
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$examModalityType["exam_code"] = $row[2] ;
					$examModalityType["study_type"] = $row[3] ;
					$examModalityType["modality"] = $row[4] ;
					$examModalityType["ae_title"] = $row[5] ;
					$examModalityType["procStepCode"] = $row[6] ;
					$examModalityType["cptCode"] = $row[7] ;
					$examModalityType["procStepDesc"] = $row[8] ;
					$examModalityType["cdrCode"] = $row[9] ;
					array_push($response["examModalityType"], $examModalityType) ;
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
				$secSign = $row[4] ;

				//Query Race Table
				$sql = "SELECT *
						FROM section5_race
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$raceDetails["source_value"] = $row[2] ;
					$raceDetails["destination_value"] = $row[3] ;
					$raceDetails["description"] = $row[4] ;
					array_push($response["raceDetails"], $raceDetails) ;
				}

				//Query Patient Class Table
				$sql = "SELECT *
						FROM section5_patientClass
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$patientClass["source_value"] = $row[2] ;
					$patientClass["destination_value"] = $row[3] ;
					$patientClass["description"] = $row[4] ;
					array_push($response["patientClass"], $patientClass) ;
				}

				//Query Order Control Code Table
				$sql = "SELECT *
						FROM section5_orderControlCode
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderControlCode["message_type"] = $row[2] ;
					$orderControlCode["processing_trigger"] = $row[3] ;
					$orderControlCode["description"] = $row[4] ;
					array_push($response["orderControlCode"], $orderControlCode) ;
				}

				//Query Order Status Table
				$sql = "SELECT *
						FROM section5_orderStatus
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderStatus["message_type"] = $row[2] ;
					$orderStatus["processing_trigger"] = $row[3] ;
					$orderStatus["description"] = $row[4] ;
					array_push($response["orderStatus"], $orderStatus) ;
				}

				//Query Order Control Status Table
				$sql = "SELECT *
						FROM section5_orderControlStatus
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$orderControlStatus["message_type"] = $row[2] ;
					$orderControlStatus["processing_trigger"] = $row[3] ;
					$orderControlStatus["description"] = $row[4] ;
					array_push($response["orderControlStatus"], $orderControlStatus) ;
				}

				//Query Exam Modality Type Table
				$sql = "SELECT *
						FROM section5_examModalityType
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;
				while ($row = mysqli_fetch_row($result))
				{
					$examModalityType["exam_code"] = $row[2] ;
					$examModalityType["study_type"] = $row[3] ;
					$examModalityType["modality"] = $row[4] ;
					$examModalityType["ae_title"] = $row[5] ;
					$examModalityType["procStepCode"] = $row[6] ;
					$examModalityType["cptCode"] = $row[7] ;
					$examModalityType["procStepDesc"] = $row[8] ;
					$examModalityType["cdrCode"] = $row[9] ;
					array_push($response["examModalityType"], $examModalityType) ;
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
