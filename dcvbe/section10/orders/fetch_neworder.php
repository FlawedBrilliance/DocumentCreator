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

	$response['testplan_orders'] = array() ;
	$testplan_orders = array() ;

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
				$secSign = $row[24] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_neworder
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_orders["orm_new_test_date"] = $row[2];
$testplan_orders["orm_new_pass_fail"] = $row[3];
$testplan_orders["orm_new_expected_value"] = $row[4];
$testplan_orders["orm_new_actual_value"] = $row[5];
$testplan_orders["orm_new_comments "] = $row[6];
$testplan_orders["orm_new_signoff"] = $row[7];
$testplan_orders["orm_future_test_date"] = $row[8];
$testplan_orders["orm_future_pass_fail"] = $row[9];
$testplan_orders["orm_future_expected_vlaue"] = $row[10];
$testplan_orders["orm_future_actual_value"] = $row[11];
$testplan_orders["orm_future_comments "] = $row[12];
$testplan_orders["orm_future_signoff"] = $row[13];
$testplan_orders["orm_repeat_test_date"] = $row[14];
$testplan_orders["orm_repeat_pass_fail"] = $row[15];
$testplan_orders["orm_repeat_expected_value"] = $row[16];
$testplan_orders["orm_repeat_actual_value"] = $row[17];
$testplan_orders["orm_repeat_comments "] = $row[18];
$testplan_orders["orm_repeat_signoff"] = $row[19];
$testplan_orders["orm_recr_test_date"] = $row[20];
$testplan_orders["orm_recr_pass_fail"] = $row[21];
$testplan_orders["orm_recr_expected_value"] = $row[22];
$testplan_orders["orm_recr_actual_value"] = $row[23];
$testplan_orders["orm_recr_comments "] = $row[24];
$testplan_orders["orm_recr_signoff"] = $row[25];
$testplan_orders["orm_noncardio_test_date"] = $row[26];
$testplan_orders["orm_noncardio_pass_fail"] = $row[27];
$testplan_orders["orm_noncardio_expected_value"] = $row[28];
$testplan_orders["orm_noncardio_actual_value"] = $row[29];
$testplan_orders["orm_noncardio_comments "] = $row[30];
$testplan_orders["orm_noncardio_signoff"] = $row[31];

					array_push($response["testplan_orders"], $testplan_orders) ;
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
				$secSign = $row[24] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_orders_neworder
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_orders["orm_new_test_date"] = $row[2];
$testplan_orders["orm_new_pass_fail"] = $row[3];
$testplan_orders["orm_new_expected_value"] = $row[4];
$testplan_orders["orm_new_actual_value"] = $row[5];
$testplan_orders["orm_new_comments "] = $row[6];
$testplan_orders["orm_new_signoff"] = $row[7];
$testplan_orders["orm_future_test_date"] = $row[8];
$testplan_orders["orm_future_pass_fail"] = $row[9];
$testplan_orders["orm_future_expected_vlaue"] = $row[10];
$testplan_orders["orm_future_actual_value"] = $row[11];
$testplan_orders["orm_future_comments "] = $row[12];
$testplan_orders["orm_future_signoff"] = $row[13];
$testplan_orders["orm_repeat_test_date"] = $row[14];
$testplan_orders["orm_repeat_pass_fail"] = $row[15];
$testplan_orders["orm_repeat_expected_value"] = $row[16];
$testplan_orders["orm_repeat_actual_value"] = $row[17];
$testplan_orders["orm_repeat_comments "] = $row[18];
$testplan_orders["orm_repeat_signoff"] = $row[19];
$testplan_orders["orm_recr_test_date"] = $row[20];
$testplan_orders["orm_recr_pass_fail"] = $row[21];
$testplan_orders["orm_recr_expected_value"] = $row[22];
$testplan_orders["orm_recr_actual_value"] = $row[23];
$testplan_orders["orm_recr_comments "] = $row[24];
$testplan_orders["orm_recr_signoff"] = $row[25];
$testplan_orders["orm_noncardio_test_date"] = $row[26];
$testplan_orders["orm_noncardio_pass_fail"] = $row[27];
$testplan_orders["orm_noncardio_expected_value"] = $row[28];
$testplan_orders["orm_noncardio_actual_value"] = $row[29];
$testplan_orders["orm_noncardio_comments "] = $row[30];
$testplan_orders["orm_noncardio_signoff"] = $row[31];

					array_push($response["testplan_orders"], $testplan_orders) ;
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
