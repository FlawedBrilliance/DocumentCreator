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

	$response['testplan_resultutr_msh'] = array() ;
	$mshDetails = array() ;

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
				$secSign = $row[54] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultsutr
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resultutr_msh["msh_1_iscv_val "] = $row[3];

$testplan_resultutr_msh["msh_1_hl7_parsing "] = $row[4];

$testplan_resultutr_msh["msh_1_expected_val "] = $row[5];

$testplan_resultutr_msh["msh_1_actual_val "] = $row[6];

$testplan_resultutr_msh["msh_1_pass "] = $row[7];

$testplan_resultutr_msh["msh_1_comments "] = $row[8];

$testplan_resultutr_msh["msh_1_signoff "] = $row[9];

$testplan_resultutr_msh["msh_2_iscv_val "] = $row[10];

$testplan_resultutr_msh["msh_2_hl7_parsing "] = $row[11];

$testplan_resultutr_msh["msh_2_expected_val "] = $row[12];

$testplan_resultutr_msh["msh_2_actual_val "] = $row[13];

$testplan_resultutr_msh["msh_2_pass "] = $row[14];

$testplan_resultutr_msh["msh_2_comments "] = $row[15];

$testplan_resultutr_msh["msh_2_signoff "] = $row[16];

$testplan_resultutr_msh["msh_3_iscv_val "] = $row[17];

$testplan_resultutr_msh["msh_3_hl7_parsing "] = $row[18];

$testplan_resultutr_msh["msh_3_expected_val "] = $row[19];

$testplan_resultutr_msh["msh_3_actual_val "] = $row[20];

$testplan_resultutr_msh["msh_3_pass "] = $row[21];

$testplan_resultutr_msh["msh_3_comments "] = $row[22];

$testplan_resultutr_msh["msh_3_signoff "] = $row[23];

$testplan_resultutr_msh["msh_4_iscv_val "] = $row[24];

$testplan_resultutr_msh["msh_4_hl7_parsing "] = $row[25];

$testplan_resultutr_msh["msh_4_expected_val "] = $row[26];

$testplan_resultutr_msh["msh_4_actual_val "] = $row[27];

$testplan_resultutr_msh["msh_4_pass "] = $row[28];

$testplan_resultutr_msh["msh_4_comments "] = $row[29];

$testplan_resultutr_msh["msh_4_signoff "] = $row[30];

$testplan_resultutr_msh["msh_5_iscv_val "] = $row[31];

$testplan_resultutr_msh["msh_5_hl7_parsing "] = $row[32];

$testplan_resultutr_msh["msh_5_expected_val "] = $row[33];

$testplan_resultutr_msh["msh_5_actual_val "] = $row[34];

$testplan_resultutr_msh["msh_5_pass "] = $row[35];

$testplan_resultutr_msh["msh_5_comments "] = $row[36];

$testplan_resultutr_msh["msh_5_signoff "] = $row[37];

$testplan_resultutr_msh["msh_6_iscv_val "] = $row[38];

$testplan_resultutr_msh["msh_6_hl7_parsing "] = $row[39];

$testplan_resultutr_msh["msh_6_expected_val "] = $row[40];

$testplan_resultutr_msh["msh_6_actual_val "] = $row[41];

$testplan_resultutr_msh["msh_6_pass "] = $row[42];

$testplan_resultutr_msh["msh_6_comments "] = $row[43];

$testplan_resultutr_msh["msh_6_signoff "] = $row[44];

$testplan_resultutr_msh["msh_7_iscv_val "] = $row[45];

$testplan_resultutr_msh["msh_7_hl7_parsing "] = $row[46];

$testplan_resultutr_msh["msh_7_expected_val "] = $row[47];

$testplan_resultutr_msh["msh_7_actual_val "] = $row[48];

$testplan_resultutr_msh["msh_7_pass "] = $row[49];

$testplan_resultutr_msh["msh_7_comments "] = $row[50];

$testplan_resultutr_msh["msh_7_signoff "] = $row[51];

$testplan_resultutr_msh["msh_9_iscv_val "] = $row[52];

$testplan_resultutr_msh["msh_9_hl7_parsing "] = $row[53];

$testplan_resultutr_msh["msh_9_expected_val "] = $row[54];

$testplan_resultutr_msh["msh_9_actual_val "] = $row[55];

$testplan_resultutr_msh["msh_9_pass "] = $row[56];

$testplan_resultutr_msh["msh_9_comments "] = $row[57];

$testplan_resultutr_msh["msh_9_signoff "] = $row[58];

$testplan_resultutr_msh["msh_9_1_iscv_val "] = $row[59];

$testplan_resultutr_msh["msh_9_1_hl7_parsing "] = $row[60];

$testplan_resultutr_msh["msh_9_1_expected_val "] = $row[61];

$testplan_resultutr_msh["msh_9_1_actual_val "] = $row[62];

$testplan_resultutr_msh["msh_9_1_pass "] = $row[63];

$testplan_resultutr_msh["msh_9_1_comments "] = $row[64];

$testplan_resultutr_msh["msh_9_1_signoff "] = $row[65];

$testplan_resultutr_msh["msh_9_2_iscv_val "] = $row[66];

$testplan_resultutr_msh["msh_9_2_hl7_parsing "] = $row[67];

$testplan_resultutr_msh["msh_9_2_expected_val "] = $row[68];

$testplan_resultutr_msh["msh_9_2_actual_val "] = $row[69];

$testplan_resultutr_msh["msh_9_2_pass "] = $row[70];

$testplan_resultutr_msh["msh_9_2_comments "] = $row[71];

$testplan_resultutr_msh["msh_9_2_signoff "] = $row[72];

$testplan_resultutr_msh["msh_10_iscv_val "] = $row[73];

$testplan_resultutr_msh["msh_10_hl7_parsing "] = $row[74];

$testplan_resultutr_msh["msh_10_expected_val "] = $row[75];

$testplan_resultutr_msh["msh_10_actual_val "] = $row[76];

$testplan_resultutr_msh["msh_10_pass "] = $row[77];

$testplan_resultutr_msh["msh_10_comments "] = $row[78];

$testplan_resultutr_msh["msh_10_signoff "] = $row[79];

$testplan_resultutr_msh["msh_11_iscv_val "] = $row[80];

$testplan_resultutr_msh["msh_11_hl7_parsing "] = $row[81];

$testplan_resultutr_msh["msh_11_expected_val "] = $row[82];

$testplan_resultutr_msh["msh_11_actual_val "] = $row[83];

$testplan_resultutr_msh["msh_11_pass "] = $row[84];

$testplan_resultutr_msh["msh_11_comments "] = $row[85];

$testplan_resultutr_msh["msh_11_signoff "] = $row[86];

$testplan_resultutr_msh["msh_12_iscv_val "] = $row[87];

$testplan_resultutr_msh["msh_12_hl7_parsing "] = $row[88];

$testplan_resultutr_msh["msh_12_expected_val "] = $row[89];

$testplan_resultutr_msh["msh_12_actual_val "] = $row[90];

$testplan_resultutr_msh["msh_12_pass "] = $row[91];

$testplan_resultutr_msh["msh_12_comments "] = $row[92];

$testplan_resultutr_msh["msh_12_signoff "] = $row[93];



					array_push($response["testplan_resultutr_msh"], $testplan_resultutr_msh) ;

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
				$secSign = $row[54] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultsutr
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resultutr_msh["msh_1_iscv_val "] = $row[3];

$testplan_resultutr_msh["msh_1_hl7_parsing "] = $row[4];

$testplan_resultutr_msh["msh_1_expected_val "] = $row[5];

$testplan_resultutr_msh["msh_1_actual_val "] = $row[6];

$testplan_resultutr_msh["msh_1_pass "] = $row[7];

$testplan_resultutr_msh["msh_1_comments "] = $row[8];

$testplan_resultutr_msh["msh_1_signoff "] = $row[9];

$testplan_resultutr_msh["msh_2_iscv_val "] = $row[10];

$testplan_resultutr_msh["msh_2_hl7_parsing "] = $row[11];

$testplan_resultutr_msh["msh_2_expected_val "] = $row[12];

$testplan_resultutr_msh["msh_2_actual_val "] = $row[13];

$testplan_resultutr_msh["msh_2_pass "] = $row[14];

$testplan_resultutr_msh["msh_2_comments "] = $row[15];

$testplan_resultutr_msh["msh_2_signoff "] = $row[16];

$testplan_resultutr_msh["msh_3_iscv_val "] = $row[17];

$testplan_resultutr_msh["msh_3_hl7_parsing "] = $row[18];

$testplan_resultutr_msh["msh_3_expected_val "] = $row[19];

$testplan_resultutr_msh["msh_3_actual_val "] = $row[20];

$testplan_resultutr_msh["msh_3_pass "] = $row[21];

$testplan_resultutr_msh["msh_3_comments "] = $row[22];

$testplan_resultutr_msh["msh_3_signoff "] = $row[23];

$testplan_resultutr_msh["msh_4_iscv_val "] = $row[24];

$testplan_resultutr_msh["msh_4_hl7_parsing "] = $row[25];

$testplan_resultutr_msh["msh_4_expected_val "] = $row[26];

$testplan_resultutr_msh["msh_4_actual_val "] = $row[27];

$testplan_resultutr_msh["msh_4_pass "] = $row[28];

$testplan_resultutr_msh["msh_4_comments "] = $row[29];

$testplan_resultutr_msh["msh_4_signoff "] = $row[30];

$testplan_resultutr_msh["msh_5_iscv_val "] = $row[31];

$testplan_resultutr_msh["msh_5_hl7_parsing "] = $row[32];

$testplan_resultutr_msh["msh_5_expected_val "] = $row[33];

$testplan_resultutr_msh["msh_5_actual_val "] = $row[34];

$testplan_resultutr_msh["msh_5_pass "] = $row[35];

$testplan_resultutr_msh["msh_5_comments "] = $row[36];

$testplan_resultutr_msh["msh_5_signoff "] = $row[37];

$testplan_resultutr_msh["msh_6_iscv_val "] = $row[38];

$testplan_resultutr_msh["msh_6_hl7_parsing "] = $row[39];

$testplan_resultutr_msh["msh_6_expected_val "] = $row[40];

$testplan_resultutr_msh["msh_6_actual_val "] = $row[41];

$testplan_resultutr_msh["msh_6_pass "] = $row[42];

$testplan_resultutr_msh["msh_6_comments "] = $row[43];

$testplan_resultutr_msh["msh_6_signoff "] = $row[44];

$testplan_resultutr_msh["msh_7_iscv_val "] = $row[45];

$testplan_resultutr_msh["msh_7_hl7_parsing "] = $row[46];

$testplan_resultutr_msh["msh_7_expected_val "] = $row[47];

$testplan_resultutr_msh["msh_7_actual_val "] = $row[48];

$testplan_resultutr_msh["msh_7_pass "] = $row[49];

$testplan_resultutr_msh["msh_7_comments "] = $row[50];

$testplan_resultutr_msh["msh_7_signoff "] = $row[51];

$testplan_resultutr_msh["msh_9_iscv_val "] = $row[52];

$testplan_resultutr_msh["msh_9_hl7_parsing "] = $row[53];

$testplan_resultutr_msh["msh_9_expected_val "] = $row[54];

$testplan_resultutr_msh["msh_9_actual_val "] = $row[55];

$testplan_resultutr_msh["msh_9_pass "] = $row[56];

$testplan_resultutr_msh["msh_9_comments "] = $row[57];

$testplan_resultutr_msh["msh_9_signoff "] = $row[58];

$testplan_resultutr_msh["msh_9_1_iscv_val "] = $row[59];

$testplan_resultutr_msh["msh_9_1_hl7_parsing "] = $row[60];

$testplan_resultutr_msh["msh_9_1_expected_val "] = $row[61];

$testplan_resultutr_msh["msh_9_1_actual_val "] = $row[62];

$testplan_resultutr_msh["msh_9_1_pass "] = $row[63];

$testplan_resultutr_msh["msh_9_1_comments "] = $row[64];

$testplan_resultutr_msh["msh_9_1_signoff "] = $row[65];

$testplan_resultutr_msh["msh_9_2_iscv_val "] = $row[66];

$testplan_resultutr_msh["msh_9_2_hl7_parsing "] = $row[67];

$testplan_resultutr_msh["msh_9_2_expected_val "] = $row[68];

$testplan_resultutr_msh["msh_9_2_actual_val "] = $row[69];

$testplan_resultutr_msh["msh_9_2_pass "] = $row[70];

$testplan_resultutr_msh["msh_9_2_comments "] = $row[71];

$testplan_resultutr_msh["msh_9_2_signoff "] = $row[72];

$testplan_resultutr_msh["msh_10_iscv_val "] = $row[73];

$testplan_resultutr_msh["msh_10_hl7_parsing "] = $row[74];

$testplan_resultutr_msh["msh_10_expected_val "] = $row[75];

$testplan_resultutr_msh["msh_10_actual_val "] = $row[76];

$testplan_resultutr_msh["msh_10_pass "] = $row[77];

$testplan_resultutr_msh["msh_10_comments "] = $row[78];

$testplan_resultutr_msh["msh_10_signoff "] = $row[79];

$testplan_resultutr_msh["msh_11_iscv_val "] = $row[80];

$testplan_resultutr_msh["msh_11_hl7_parsing "] = $row[81];

$testplan_resultutr_msh["msh_11_expected_val "] = $row[82];

$testplan_resultutr_msh["msh_11_actual_val "] = $row[83];

$testplan_resultutr_msh["msh_11_pass "] = $row[84];

$testplan_resultutr_msh["msh_11_comments "] = $row[85];

$testplan_resultutr_msh["msh_11_signoff "] = $row[86];

$testplan_resultutr_msh["msh_12_iscv_val "] = $row[87];

$testplan_resultutr_msh["msh_12_hl7_parsing "] = $row[88];

$testplan_resultutr_msh["msh_12_expected_val "] = $row[89];

$testplan_resultutr_msh["msh_12_actual_val "] = $row[90];

$testplan_resultutr_msh["msh_12_pass "] = $row[91];

$testplan_resultutr_msh["msh_12_comments "] = $row[92];

$testplan_resultutr_msh["msh_12_signoff "] = $row[93];


					array_push($response["testplan_resultutr"], $testplan_resultutr) ;
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
