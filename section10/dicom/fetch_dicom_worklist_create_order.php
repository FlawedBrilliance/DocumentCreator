<?php
	//fetch_dicom_worklist_create_order.php
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	//Main Response Array
	$response = array() ;
	//Define Array

	$response['fetch_dicom_worklist_create_order'] = array() ;
	$fetch_dicom_worklist_create_order = array() ;

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
				$secSign = $row[27] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_dicom_worklist_createorder
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

				$fetch_dicom_worklist_create_order["create_order_pass"] = $row[2];

$fetch_dicom_worklist_create_order["create_order_comments"] = $row[3];

$fetch_dicom_worklist_create_order["orm_pass"] = $row[4];

$fetch_dicom_worklist_create_order["orm_comments"] = $row[5];

$fetch_dicom_worklist_create_order["modality_query_pass"] = $row[6];

$fetch_dicom_worklist_create_order["modality_query_comments"] = $row[7];
$fetch_dicom_worklist_create_order["suid_pass"] = $row[8];

$fetch_dicom_worklist_create_order["suid_comments"] = $row[9];

$fetch_dicom_worklist_create_order["update_patient_pass"] = $row[10];

$fetch_dicom_worklist_create_order["update_patient_comments"] = $row[11];

$fetch_dicom_worklist_create_order["neworder_pass"] = $row[12];

$fetch_dicom_worklist_create_order["neworder_comments"] = $row[13];

					array_push($response["fetch_dicom_worklist_create_order"], $fetch_dicom_worklist_create_order) ;

				}

			}
			else
			{
				$response ="Something went wrong (Error: Failed to fetch section data), please contact administrator.";
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
				$secSign = $row[27] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_dicom_worklist_createorder
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$fetch_dicom_worklist_create_order["create_order_pass"] = $row[2];

$fetch_dicom_worklist_create_order["create_order_comments"] = $row[3];

$fetch_dicom_worklist_create_order["orm_pass"] = $row[4];

$fetch_dicom_worklist_create_order["orm_comments"] = $row[5];

$fetch_dicom_worklist_create_order["modality_query_pass"] = $row[6];

$fetch_dicom_worklist_create_order["modality_query_comments"] = $row[7];
$fetch_dicom_worklist_create_order["suid_pass"] = $row[8];

$fetch_dicom_worklist_create_order["suid_comments"] = $row[9];

$fetch_dicom_worklist_create_order["update_patient_pass"] = $row[10];

$fetch_dicom_worklist_create_order["update_patient_comments"] = $row[11];

$fetch_dicom_worklist_create_order["neworder_pass"] = $row[12];

$fetch_dicom_worklist_create_order["neworder_comments"] = $row[13];
					
					array_push($response["fetch_dicom_worklist_create_order"], $fetch_dicom_worklist_create_order) ;
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
