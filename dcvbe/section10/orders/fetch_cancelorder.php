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

	$response['testplan_cancel_orders'] = array() ;
	$testplan_cancel_orders = array() ;

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
				$secSign = $row[25] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_cancelorder
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_cancel_orders["orm_ca_cancel_test_date"] = $row[2];
$testplan_cancel_orders["orm_ca_cancel_pass_fail"] = $row[3];
$testplan_cancel_orders["orm_ca_cancel_expected_value"] = $row[4];
$testplan_cancel_orders["orm_ca_cancel_actual_value"] = $row[5];
$testplan_cancel_orders["orm_ca_cancel_comments"] = $row[6];
$testplan_cancel_orders["orm_ca_cancel_signoff"] = $row[7];
$testplan_cancel_orders["orm_oc_cancel_test_date"] = $row[8];
$testplan_cancel_orders["orm_oc_cancel_pass_fail"] = $row[9];
$testplan_cancel_orders["orm_oc_cancel_expected_value"] = $row[10];
$testplan_cancel_orders["orm_oc_cancel_actual_value"] = $row[11];
$testplan_cancel_orders["orm_oc_cancel_comments"] = $row[12];
$testplan_cancel_orders["orm_oc_cancel_signoff"] = $row[13];
$testplan_cancel_orders["orm_dc_discontinue_test_date"] = $row[14];
$testplan_cancel_orders["orm_dc_discontinue_pass_fail"] = $row[15];
$testplan_cancel_orders["orm_dc_discontinue_expected_vlaue"] = $row[16];
$testplan_cancel_orders["orm_dc_discontinue_actual_value"] = $row[17];
$testplan_cancel_orders["orm_dc_discontinue_comments"] = $row[18];
$testplan_cancel_orders["orm_dc_discontinue_signoff"] = $row[19];
$testplan_cancel_orders["orm_od_discontinue_test_date"] = $row[20];
$testplan_cancel_orders["orm_od_discontinue_pass_fail"] = $row[21];
$testplan_cancel_orders["orm_od_discontinue_expected_value"] = $row[22];
$testplan_cancel_orders["orm_od_discontinue_actual_value"] = $row[23];
$testplan_cancel_orders["orm_od_discontinue_comments"] = $row[24];
$testplan_cancel_orders["orm_od_discontinue_signoff"] = $row[25];
$testplan_cancel_orders["orm_ca_future_cancel_test_date"] = $row[26];
$testplan_cancel_orders["orm_ca_future_cancel_pass_fail"] = $row[27];
$testplan_cancel_orders["orm_ca_future_cancel_expected_value"] = $row[28];
$testplan_cancel_orders["orm_ca_future_cancel_actual_value"] = $row[29];
$testplan_cancel_orders["orm_ca_future_cancel_comments"] = $row[30];
$testplan_cancel_orders["orm_ca_future_cancel_signoff"] = $row[31];
$testplan_cancel_orders["orm_oc_future_cancel_test_date"] = $row[32];
$testplan_cancel_orders["orm_oc_future_cancel_test_pass_fail"] = $row[33];
$testplan_cancel_orders["orm_oc_future_cancel_expected_value"] = $row[34];
$testplan_cancel_orders["orm_oc_future_cancel_actual_value"] = $row[35];
$testplan_cancel_orders["orm_oc_future_cancel_comments"] = $row[36];
$testplan_cancel_orders["orm_oc_future_cancel_signoff"] = $row[37];
$testplan_cancel_orders["orm_dc_disc_future_test_date"] = $row[38];
$testplan_cancel_orders["orm_dc_disc_future_pass_fail"] = $row[39];
$testplan_cancel_orders["orm_dc_disc_future_expected_value"] = $row[40];
$testplan_cancel_orders["orm_dc_disc_future_actual_value"] = $row[41];
$testplan_cancel_orders["orm_dc_disc_future_comments"] = $row[42];
$testplan_cancel_orders["orm_dc_disc_future_signoff"] = $row[43];
$testplan_cancel_orders["orm_od_disc_future_test_date"] = $row[44];
$testplan_cancel_orders["orm_od_disc_future_pass_fail"] = $row[45];
$testplan_cancel_orders["orm_od_disc_future_expected_value"] = $row[46];
$testplan_cancel_orders["orm_od_disc_future_actual_value"] = $row[47];
$testplan_cancel_orders["orm_od_disc_future_comments"] = $row[48];
$testplan_cancel_orders["orm_od_disc_future_signoff"] = $row[49];


					array_push($response["testplan_cancel_orders"], $testplan_cancel_orders) ;
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
				$secSign = $row[25] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_cancelorder
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_cancel_orders["orm_ca_cancel_test_date"] = $row[2];
$testplan_cancel_orders["orm_ca_cancel_pass_fail"] = $row[3];
$testplan_cancel_orders["orm_ca_cancel_expected_value"] = $row[4];
$testplan_cancel_orders["orm_ca_cancel_actual_value"] = $row[5];
$testplan_cancel_orders["orm_ca_cancel_comments"] = $row[6];
$testplan_cancel_orders["orm_ca_cancel_signoff"] = $row[7];
$testplan_cancel_orders["orm_oc_cancel_test_date"] = $row[8];
$testplan_cancel_orders["orm_oc_cancel_pass_fail"] = $row[9];
$testplan_cancel_orders["orm_oc_cancel_expected_value"] = $row[10];
$testplan_cancel_orders["orm_oc_cancel_actual_value"] = $row[11];
$testplan_cancel_orders["orm_oc_cancel_comments"] = $row[12];
$testplan_cancel_orders["orm_oc_cancel_signoff"] = $row[13];
$testplan_cancel_orders["orm_dc_discontinue_test_date"] = $row[14];
$testplan_cancel_orders["orm_dc_discontinue_pass_fail"] = $row[15];
$testplan_cancel_orders["orm_dc_discontinue_expected_vlaue"] = $row[16];
$testplan_cancel_orders["orm_dc_discontinue_actual_value"] = $row[17];
$testplan_cancel_orders["orm_dc_discontinue_comments"] = $row[18];
$testplan_cancel_orders["orm_dc_discontinue_signoff"] = $row[19];
$testplan_cancel_orders["orm_od_discontinue_test_date"] = $row[20];
$testplan_cancel_orders["orm_od_discontinue_pass_fail"] = $row[21];
$testplan_cancel_orders["orm_od_discontinue_expected_value"] = $row[22];
$testplan_cancel_orders["orm_od_discontinue_actual_value"] = $row[23];
$testplan_cancel_orders["orm_od_discontinue_comments"] = $row[24];
$testplan_cancel_orders["orm_od_discontinue_signoff"] = $row[25];
$testplan_cancel_orders["orm_ca_future_cancel_test_date"] = $row[26];
$testplan_cancel_orders["orm_ca_future_cancel_pass_fail"] = $row[27];
$testplan_cancel_orders["orm_ca_future_cancel_expected_value"] = $row[28];
$testplan_cancel_orders["orm_ca_future_cancel_actual_value"] = $row[29];
$testplan_cancel_orders["orm_ca_future_cancel_comments"] = $row[30];
$testplan_cancel_orders["orm_ca_future_cancel_signoff"] = $row[31];
$testplan_cancel_orders["orm_oc_future_cancel_test_date"] = $row[32];
$testplan_cancel_orders["orm_oc_future_cancel_test_pass_fail"] = $row[33];
$testplan_cancel_orders["orm_oc_future_cancel_expected_value"] = $row[34];
$testplan_cancel_orders["orm_oc_future_cancel_actual_value"] = $row[35];
$testplan_cancel_orders["orm_oc_future_cancel_comments"] = $row[36];
$testplan_cancel_orders["orm_oc_future_cancel_signoff"] = $row[37];
$testplan_cancel_orders["orm_dc_disc_future_test_date"] = $row[38];
$testplan_cancel_orders["orm_dc_disc_future_pass_fail"] = $row[39];
$testplan_cancel_orders["orm_dc_disc_future_expected_value"] = $row[40];
$testplan_cancel_orders["orm_dc_disc_future_actual_value"] = $row[41];
$testplan_cancel_orders["orm_dc_disc_future_comments"] = $row[42];
$testplan_cancel_orders["orm_dc_disc_future_signoff"] = $row[43];
$testplan_cancel_orders["orm_od_disc_future_test_date"] = $row[44];
$testplan_cancel_orders["orm_od_disc_future_pass_fail"] = $row[45];
$testplan_cancel_orders["orm_od_disc_future_expected_value"] = $row[46];
$testplan_cancel_orders["orm_od_disc_future_actual_value"] = $row[47];
$testplan_cancel_orders["orm_od_disc_future_comments"] = $row[48];
$testplan_cancel_orders["orm_od_disc_future_signoff"] = $row[49];



					array_push($response["testplan_cancel_orders"], $testplan_cancel_orders) ;
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
