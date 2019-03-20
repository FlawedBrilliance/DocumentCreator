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

	$response['testplan_dicom_dw_createreport'] = array() ;
	$testplan_dicom_dw_createreport = array() ;

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
				$secSign = $row[34] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_dicom_dw_createreport
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

					$testplan_dicom_dw_createreport["create_report_pass"] = $row[2];
$testplan_dicom_dw_createreport["create_report_comments"] = $row[3];
$testplan_dicom_dw_createreport["finalize_study_pass"] = $row[4];
$testplan_dicom_dw_createreport["finalize_study_comments"] = $row[5];
$testplan_dicom_dw_createreport["verify_status_pass"] = $row[6];
$testplan_dicom_dw_createreport["verify_status_comments"] = $row[7];



					array_push($response["testplan_dicom_dw_createreport"], $testplan_dicom_dw_createreport) ;

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
				$secSign = $row[34] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_dicom_dw_createreport
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_dicom_dw_createreport["create_report_pass"] = $row[2];
$testplan_dicom_dw_createreport["create_report_comments"] = $row[3];
$testplan_dicom_dw_createreport["finalize_study_pass"] = $row[4];
$testplan_dicom_dw_createreport["finalize_study_comments"] = $row[5];
$testplan_dicom_dw_createreport["verify_status_pass"] = $row[6];
$testplan_dicom_dw_createreport["verify_status_comments"] = $row[7];


					array_push($response["testplan_dicom_dw_createreport"], $testplan_dicom_dw_createreport) ;
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
