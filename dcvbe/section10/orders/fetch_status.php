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

	$response['testplan_order_status'] = array() ;
	$testplan_order_status = array() ;

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
				$secSign = $row[26] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_status
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_order_status["orm_sc_pc_test_date"] = $row[2];
$testplan_order_status["orm_sc_pc_pass_fail"] = $row[3];
$testplan_order_status["orm_sc_pc_expected_value"] = $row[4];
$testplan_order_status["orm_sc_pc_actual_value"] = $row[5];
$testplan_order_status["orm_sc_pc_comments "] = $row[6];
$testplan_order_status["orm_sc_pc_signoff"] = $row[7];
$testplan_order_status["orm_sc_sdc_test_date"] = $row[8];
$testplan_order_status["orm_sc_sdc_pass_fail"] = $row[9];
$testplan_order_status["orm_sc_sdc_expected_value"] = $row[10];
$testplan_order_status["orm_sc_sdc_actual_value"] = $row[11];
$testplan_order_status["orm_sc_sdc_comments "] = $row[12];
$testplan_order_status["orm_sc_sdc_signoff"] = $row[13];
$testplan_order_status["orm_sc_ip_test_date"] = $row[14];
$testplan_order_status["orm_sc_ip_pass_fail"] = $row[15];
$testplan_order_status["orm_sc_ip_expected_value"] = $row[16];
$testplan_order_status["orm_sc_ip_actual_value"] = $row[17];
$testplan_order_status["orm_sc_ip_comments "] = $row[18];
$testplan_order_status["orm_sc_ip_signoff"] = $row[19];
$testplan_order_status["orm_sc_ca_test_date"] = $row[20];
$testplan_order_status["orm_sc_ca_pass_fail"] = $row[21];
$testplan_order_status["orm_sc_ca_expected_value"] = $row[22];
$testplan_order_status["orm_sc_ca_actual_value"] = $row[23];
$testplan_order_status["orm_sc_ca_comments "] = $row[24];
$testplan_order_status["orm_sc_ca_signoff"] = $row[25];
$testplan_order_status["orm_sc_dc_cancel_test_date"] = $row[26];
$testplan_order_status["orm_sc_dc_cancel_pass_fail"] = $row[27];
$testplan_order_status["orm_sc_dc_cancel_expected_vlaue"] = $row[28];
$testplan_order_status["orm_sc_dc_cancel_actual_value"] = $row[29];
$testplan_order_status["orm_sc_dc_cancel_comments "] = $row[30];
$testplan_order_status["orm_sc_dc_cancel_signoff"] = $row[31];
$testplan_order_status["orm_sc_cm_future_test_date"] = $row[32];
$testplan_order_status["orm_sc_cm_future_pass_fail"] = $row[33];
$testplan_order_status["orm_sc_cm_future_expected_value"] = $row[34];
$testplan_order_status["orm_sc_cm_future_actual_value"] = $row[35];
$testplan_order_status["orm_sc_cm_future_comments "] = $row[36];
$testplan_order_status["orm_sc_cm_future_signoff"] = $row[37];

					array_push($response["testplan_order_status"], $testplan_order_status) ;
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
				$secSign = $row[26] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_status
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_order_status["orm_sc_pc_test_date"] = $row[2];
$testplan_order_status["orm_sc_pc_pass_fail"] = $row[3];
$testplan_order_status["orm_sc_pc_expected_value"] = $row[4];
$testplan_order_status["orm_sc_pc_actual_value"] = $row[5];
$testplan_order_status["orm_sc_pc_comments "] = $row[6];
$testplan_order_status["orm_sc_pc_signoff"] = $row[7];
$testplan_order_status["orm_sc_sdc_test_date"] = $row[8];
$testplan_order_status["orm_sc_sdc_pass_fail"] = $row[9];
$testplan_order_status["orm_sc_sdc_expected_value"] = $row[10];
$testplan_order_status["orm_sc_sdc_actual_value"] = $row[11];
$testplan_order_status["orm_sc_sdc_comments "] = $row[12];
$testplan_order_status["orm_sc_sdc_signoff"] = $row[13];
$testplan_order_status["orm_sc_ip_test_date"] = $row[14];
$testplan_order_status["orm_sc_ip_pass_fail"] = $row[15];
$testplan_order_status["orm_sc_ip_expected_value"] = $row[16];
$testplan_order_status["orm_sc_ip_actual_value"] = $row[17];
$testplan_order_status["orm_sc_ip_comments "] = $row[18];
$testplan_order_status["orm_sc_ip_signoff"] = $row[19];
$testplan_order_status["orm_sc_ca_test_date"] = $row[20];
$testplan_order_status["orm_sc_ca_pass_fail"] = $row[21];
$testplan_order_status["orm_sc_ca_expected_value"] = $row[22];
$testplan_order_status["orm_sc_ca_actual_value"] = $row[23];
$testplan_order_status["orm_sc_ca_comments "] = $row[24];
$testplan_order_status["orm_sc_ca_signoff"] = $row[25];
$testplan_order_status["orm_sc_dc_cancel_test_date"] = $row[26];
$testplan_order_status["orm_sc_dc_cancel_pass_fail"] = $row[27];
$testplan_order_status["orm_sc_dc_cancel_expected_vlaue"] = $row[28];
$testplan_order_status["orm_sc_dc_cancel_actual_value"] = $row[29];
$testplan_order_status["orm_sc_dc_cancel_comments "] = $row[30];
$testplan_order_status["orm_sc_dc_cancel_signoff"] = $row[31];
$testplan_order_status["orm_sc_cm_future_test_date"] = $row[32];
$testplan_order_status["orm_sc_cm_future_pass_fail"] = $row[33];
$testplan_order_status["orm_sc_cm_future_expected_value"] = $row[34];
$testplan_order_status["orm_sc_cm_future_actual_value"] = $row[35];
$testplan_order_status["orm_sc_cm_future_comments "] = $row[36];
$testplan_order_status["orm_sc_cm_future_signoff"] = $row[37];

					array_push($response["testplan_order_status"], $testplan_order_status) ;
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
