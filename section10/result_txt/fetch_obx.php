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

	$response['testplan_resulttext_obx'] = array() ;
	$testplan_resulttext_obx = array() ;

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
				$secSign = $row[48] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultstext_obx
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resulttext_obx["obx_1_iscv_val"] = $row[2];
$testplan_resulttext_obx["obx_1_hl7_parsing"] = $row[3];
$testplan_resulttext_obx["obx_1_expected_val"] = $row[4];
$testplan_resulttext_obx["obx_1_actual_val"] = $row[5];
$testplan_resulttext_obx["obx_1_pass"] = $row[6];
$testplan_resulttext_obx["obx_1_comments"] = $row[7];
$testplan_resulttext_obx["obx_1_signoff"] = $row[8];
$testplan_resulttext_obx["obx_2_iscv_val"] = $row[9];
$testplan_resulttext_obx["obx_2_hl7_parsing"] = $row[10];
$testplan_resulttext_obx["obx_2_expected_val"] = $row[11];
$testplan_resulttext_obx["obx_2_actual_val"] = $row[12];
$testplan_resulttext_obx["obx_2_pass"] = $row[13];
$testplan_resulttext_obx["obx_2_comments"] = $row[14];
$testplan_resulttext_obx["obx_2_signoff"] = $row[15];
$testplan_resulttext_obx["obx_3_iscv_val"] = $row[16];
$testplan_resulttext_obx["obx_3_hl7_parsing"] = $row[17];
$testplan_resulttext_obx["obx_3_expected_val"] = $row[18];
$testplan_resulttext_obx["obx_3_actual_val"] = $row[19];
$testplan_resulttext_obx["obx_3_pass"] = $row[20];
$testplan_resulttext_obx["obx_3_comments"] = $row[21];
$testplan_resulttext_obx["obx_3_signoff"] = $row[22];
$testplan_resulttext_obx["obx_3_1_iscv_val"] = $row[23];
$testplan_resulttext_obx["obx_3_1_hl7_parsing"] = $row[24];
$testplan_resulttext_obx["obx_3_1_expected_val"] = $row[25];
$testplan_resulttext_obx["obx_3_1_actual_val"] = $row[26];
$testplan_resulttext_obx["obx_3_1_pass"] = $row[27];
$testplan_resulttext_obx["obx_3_1_comments"] = $row[28];
$testplan_resulttext_obx["obx_3_1_signoff"] = $row[29];
$testplan_resulttext_obx["obx_3_2_iscv_val"] = $row[30];
$testplan_resulttext_obx["obx_3_2_hl7_parsing"] = $row[31];
$testplan_resulttext_obx["obx_3_2_expected_val"] = $row[32];
$testplan_resulttext_obx["obx_3_2_actual_val"] = $row[33];
$testplan_resulttext_obx["obx_3_2_pass"] = $row[34];
$testplan_resulttext_obx["obx_3_2_comments"] = $row[35];
$testplan_resulttext_obx["obx_3_2_signoff"] = $row[36];
$testplan_resulttext_obx["obx_4_iscv_val"] = $row[37];
$testplan_resulttext_obx["obx_4_hl7_parsing"] = $row[38];
$testplan_resulttext_obx["obx_4_expected_val"] = $row[39];
$testplan_resulttext_obx["obx_4_actual_val"] = $row[40];
$testplan_resulttext_obx["obx_4_pass"] = $row[41];
$testplan_resulttext_obx["obx_4_comments"] = $row[42];
$testplan_resulttext_obx["obx_4_signoff"] = $row[43];
$testplan_resulttext_obx["obx_5_iscv_val"] = $row[44];
$testplan_resulttext_obx["obx_5_hl7_parsing"] = $row[45];
$testplan_resulttext_obx["obx_5_expected_val"] = $row[46];
$testplan_resulttext_obx["obx_5_actual_val"] = $row[47];
$testplan_resulttext_obx["obx_5_pass"] = $row[48];
$testplan_resulttext_obx["obx_5_comments"] = $row[49];
$testplan_resulttext_obx["obx_5_signoff"] = $row[50];
$testplan_resulttext_obx["obx_11_iscv_val"] = $row[51];
$testplan_resulttext_obx["obx_11_hl7_parsing"] = $row[52];
$testplan_resulttext_obx["obx_11_expected_val"] = $row[53];
$testplan_resulttext_obx["obx_11_actual_val"] = $row[54];
$testplan_resulttext_obx["obx_11_pass"] = $row[55];
$testplan_resulttext_obx["obx_11_comments"] = $row[56];
$testplan_resulttext_obx["obx_11_signoff"] = $row[57];


					array_push($response["testplan_resulttext_obx"], $testplan_resulttext_obx) ;

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
				$secSign = $row[48] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultstext_obx
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resulttext_obx["obx_1_iscv_val"] = $row[2];
$testplan_resulttext_obx["obx_1_hl7_parsing"] = $row[3];
$testplan_resulttext_obx["obx_1_expected_val"] = $row[4];
$testplan_resulttext_obx["obx_1_actual_val"] = $row[5];
$testplan_resulttext_obx["obx_1_pass"] = $row[6];
$testplan_resulttext_obx["obx_1_comments"] = $row[7];
$testplan_resulttext_obx["obx_1_signoff"] = $row[8];
$testplan_resulttext_obx["obx_2_iscv_val"] = $row[9];
$testplan_resulttext_obx["obx_2_hl7_parsing"] = $row[10];
$testplan_resulttext_obx["obx_2_expected_val"] = $row[11];
$testplan_resulttext_obx["obx_2_actual_val"] = $row[12];
$testplan_resulttext_obx["obx_2_pass"] = $row[13];
$testplan_resulttext_obx["obx_2_comments"] = $row[14];
$testplan_resulttext_obx["obx_2_signoff"] = $row[15];
$testplan_resulttext_obx["obx_3_iscv_val"] = $row[16];
$testplan_resulttext_obx["obx_3_hl7_parsing"] = $row[17];
$testplan_resulttext_obx["obx_3_expected_val"] = $row[18];
$testplan_resulttext_obx["obx_3_actual_val"] = $row[19];
$testplan_resulttext_obx["obx_3_pass"] = $row[20];
$testplan_resulttext_obx["obx_3_comments"] = $row[21];
$testplan_resulttext_obx["obx_3_signoff"] = $row[22];
$testplan_resulttext_obx["obx_3_1_iscv_val"] = $row[23];
$testplan_resulttext_obx["obx_3_1_hl7_parsing"] = $row[24];
$testplan_resulttext_obx["obx_3_1_expected_val"] = $row[25];
$testplan_resulttext_obx["obx_3_1_actual_val"] = $row[26];
$testplan_resulttext_obx["obx_3_1_pass"] = $row[27];
$testplan_resulttext_obx["obx_3_1_comments"] = $row[28];
$testplan_resulttext_obx["obx_3_1_signoff"] = $row[29];
$testplan_resulttext_obx["obx_3_2_iscv_val"] = $row[30];
$testplan_resulttext_obx["obx_3_2_hl7_parsing"] = $row[31];
$testplan_resulttext_obx["obx_3_2_expected_val"] = $row[32];
$testplan_resulttext_obx["obx_3_2_actual_val"] = $row[33];
$testplan_resulttext_obx["obx_3_2_pass"] = $row[34];
$testplan_resulttext_obx["obx_3_2_comments"] = $row[35];
$testplan_resulttext_obx["obx_3_2_signoff"] = $row[36];
$testplan_resulttext_obx["obx_4_iscv_val"] = $row[37];
$testplan_resulttext_obx["obx_4_hl7_parsing"] = $row[38];
$testplan_resulttext_obx["obx_4_expected_val"] = $row[39];
$testplan_resulttext_obx["obx_4_actual_val"] = $row[40];
$testplan_resulttext_obx["obx_4_pass"] = $row[41];
$testplan_resulttext_obx["obx_4_comments"] = $row[42];
$testplan_resulttext_obx["obx_4_signoff"] = $row[43];
$testplan_resulttext_obx["obx_5_iscv_val"] = $row[44];
$testplan_resulttext_obx["obx_5_hl7_parsing"] = $row[45];
$testplan_resulttext_obx["obx_5_expected_val"] = $row[46];
$testplan_resulttext_obx["obx_5_actual_val"] = $row[47];
$testplan_resulttext_obx["obx_5_pass"] = $row[48];
$testplan_resulttext_obx["obx_5_comments"] = $row[49];
$testplan_resulttext_obx["obx_5_signoff"] = $row[50];
$testplan_resulttext_obx["obx_11_iscv_val"] = $row[51];
$testplan_resulttext_obx["obx_11_hl7_parsing"] = $row[52];
$testplan_resulttext_obx["obx_11_expected_val"] = $row[53];
$testplan_resulttext_obx["obx_11_actual_val"] = $row[54];
$testplan_resulttext_obx["obx_11_pass"] = $row[55];
$testplan_resulttext_obx["obx_11_comments"] = $row[56];
$testplan_resulttext_obx["obx_11_signoff"] = $row[57];

					array_push($response["testplan_resulttext_obx"], $testplan_resulttext_obx) ;
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
