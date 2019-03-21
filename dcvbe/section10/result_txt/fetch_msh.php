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

	$response['testplan_resulttext_msh'] = array() ;
	$testplan_resulttext_msh = array() ;

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
				$secSign = $row[46] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultstext_msh
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resulttext_msh["msh_1_iscv_val"] = $row[2];
$testplan_resulttext_msh["msh_1_hl7_parsing"] = $row[3];
$testplan_resulttext_msh["msh_1_expected_val"] = $row[4];
$testplan_resulttext_msh["msh_1_actual_val"] = $row[5];
$testplan_resulttext_msh["msh_1_pass"] = $row[6];
$testplan_resulttext_msh["msh_1_comments"] = $row[7];
$testplan_resulttext_msh["msh_1_signoff"] = $row[8];
$testplan_resulttext_msh["msh_2_iscv_val"] = $row[9];
$testplan_resulttext_msh["msh_2_hl7_parsing"] = $row[10];
$testplan_resulttext_msh["msh_2_expected_val"] = $row[11];
$testplan_resulttext_msh["msh_2_actual_val"] = $row[12];
$testplan_resulttext_msh["msh_2_pass"] = $row[13];
$testplan_resulttext_msh["msh_2_comments"] = $row[14];
$testplan_resulttext_msh["msh_2_signoff"] = $row[15];
$testplan_resulttext_msh["msh_3_iscv_val"] = $row[16];
$testplan_resulttext_msh["msh_3_hl7_parsing"] = $row[17];
$testplan_resulttext_msh["msh_3_expected_val"] = $row[18];
$testplan_resulttext_msh["msh_3_actual_val"] = $row[19];
$testplan_resulttext_msh["msh_3_pass"] = $row[20];
$testplan_resulttext_msh["msh_3_comments"] = $row[21];
$testplan_resulttext_msh["msh_3_signoff"] = $row[22];
$testplan_resulttext_msh["msh_4_iscv_val"] = $row[23];
$testplan_resulttext_msh["msh_4_hl7_parsing"] = $row[24];
$testplan_resulttext_msh["msh_4_expected_val"] = $row[25];
$testplan_resulttext_msh["msh_4_actual_val"] = $row[26];
$testplan_resulttext_msh["msh_4_pass"] = $row[27];
$testplan_resulttext_msh["msh_4_comments"] = $row[28];
$testplan_resulttext_msh["msh_4_signoff"] = $row[29];
$testplan_resulttext_msh["msh_5_iscv_val"] = $row[30];
$testplan_resulttext_msh["msh_5_hl7_parsing"] = $row[31];
$testplan_resulttext_msh["msh_5_expected_val"] = $row[32];
$testplan_resulttext_msh["msh_5_actual_val"] = $row[33];
$testplan_resulttext_msh["msh_5_pass"] = $row[34];
$testplan_resulttext_msh["msh_5_comments"] = $row[35];
$testplan_resulttext_msh["msh_5_signoff"] = $row[36];
$testplan_resulttext_msh["msh_6_iscv_val"] = $row[37];
$testplan_resulttext_msh["msh_6_hl7_parsing"] = $row[38];
$testplan_resulttext_msh["msh_6_expected_val"] = $row[39];
$testplan_resulttext_msh["msh_6_actual_val"] = $row[40];
$testplan_resulttext_msh["msh_6_pass"] = $row[41];
$testplan_resulttext_msh["msh_6_comments"] = $row[42];
$testplan_resulttext_msh["msh_6_signoff"] = $row[43];
$testplan_resulttext_msh["msh_7_iscv_val"] = $row[44];
$testplan_resulttext_msh["msh_7_hl7_parsing"] = $row[45];
$testplan_resulttext_msh["msh_7_expected_val"] = $row[46];
$testplan_resulttext_msh["msh_7_actual_val"] = $row[47];
$testplan_resulttext_msh["msh_7_pass"] = $row[48];
$testplan_resulttext_msh["msh_7_comments"] = $row[49];
$testplan_resulttext_msh["msh_7_signoff"] = $row[50];
$testplan_resulttext_msh["msh_9_iscv_val"] = $row[51];
$testplan_resulttext_msh["msh_9_hl7_parsing"] = $row[52];
$testplan_resulttext_msh["msh_9_expected_val"] = $row[53];
$testplan_resulttext_msh["msh_9_actual_val"] = $row[54];
$testplan_resulttext_msh["msh_9_pass"] = $row[55];
$testplan_resulttext_msh["msh_9_comments"] = $row[56];
$testplan_resulttext_msh["msh_9_signoff"] = $row[57];
$testplan_resulttext_msh["msh_9_1_iscv_val"] = $row[58];
$testplan_resulttext_msh["msh_9_1_hl7_parsing"] = $row[59];
$testplan_resulttext_msh["msh_9_1_expected_val"] = $row[60];
$testplan_resulttext_msh["msh_9_1_actual_val"] = $row[61];
$testplan_resulttext_msh["msh_9_1_pass"] = $row[62];
$testplan_resulttext_msh["msh_9_1_comments"] = $row[63];
$testplan_resulttext_msh["msh_9_1_signoff"] = $row[64];
$testplan_resulttext_msh["msh_9_2_iscv_val"] = $row[65];
$testplan_resulttext_msh["msh_9_2_hl7_parsing"] = $row[66];
$testplan_resulttext_msh["msh_9_2_expected_val"] = $row[67];
$testplan_resulttext_msh["msh_9_2_actual_val"] = $row[68];
$testplan_resulttext_msh["msh_9_2_pass"] = $row[69];
$testplan_resulttext_msh["msh_9_2_comments"] = $row[70];
$testplan_resulttext_msh["msh_9_2_signoff"] = $row[71];
$testplan_resulttext_msh["msh_10_iscv_val"] = $row[72];
$testplan_resulttext_msh["msh_10_hl7_parsing"] = $row[73];
$testplan_resulttext_msh["msh_10_expected_val"] = $row[74];
$testplan_resulttext_msh["msh_10_actual_val"] = $row[75];
$testplan_resulttext_msh["msh_10_pass"] = $row[76];
$testplan_resulttext_msh["msh_10_comments"] = $row[77];
$testplan_resulttext_msh["msh_10_signoff"] = $row[78];
$testplan_resulttext_msh["msh_11_iscv_val"] = $row[79];
$testplan_resulttext_msh["msh_11_hl7_parsing"] = $row[80];
$testplan_resulttext_msh["msh_11_expected_val"] = $row[81];
$testplan_resulttext_msh["msh_11_actual_val"] = $row[82];
$testplan_resulttext_msh["msh_11_pass"] = $row[83];
$testplan_resulttext_msh["msh_11_comments"] = $row[84];
$testplan_resulttext_msh["msh_11_signoff"] = $row[85];
$testplan_resulttext_msh["msh_12_iscv_val"] = $row[86];
$testplan_resulttext_msh["msh_12_hl7_parsing"] = $row[87];
$testplan_resulttext_msh["msh_12_expected_val"] = $row[88];
$testplan_resulttext_msh["msh_12_actual_val"] = $row[89];
$testplan_resulttext_msh["msh_12_pass"] = $row[90];
$testplan_resulttext_msh["msh_12_comments"] = $row[91];
$testplan_resulttext_msh["msh_12_signoff"] = $row[92];



					array_push($response["testplan_resulttext_msh"], $testplan_resulttext_msh) ;

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
				$secSign = $row[46] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultstext_msh
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resulttext_msh["msh_1_iscv_val"] = $row[2];
$testplan_resulttext_msh["msh_1_hl7_parsing"] = $row[3];
$testplan_resulttext_msh["msh_1_expected_val"] = $row[4];
$testplan_resulttext_msh["msh_1_actual_val"] = $row[5];
$testplan_resulttext_msh["msh_1_pass"] = $row[6];
$testplan_resulttext_msh["msh_1_comments"] = $row[7];
$testplan_resulttext_msh["msh_1_signoff"] = $row[8];
$testplan_resulttext_msh["msh_2_iscv_val"] = $row[9];
$testplan_resulttext_msh["msh_2_hl7_parsing"] = $row[10];
$testplan_resulttext_msh["msh_2_expected_val"] = $row[11];
$testplan_resulttext_msh["msh_2_actual_val"] = $row[12];
$testplan_resulttext_msh["msh_2_pass"] = $row[13];
$testplan_resulttext_msh["msh_2_comments"] = $row[14];
$testplan_resulttext_msh["msh_2_signoff"] = $row[15];
$testplan_resulttext_msh["msh_3_iscv_val"] = $row[16];
$testplan_resulttext_msh["msh_3_hl7_parsing"] = $row[17];
$testplan_resulttext_msh["msh_3_expected_val"] = $row[18];
$testplan_resulttext_msh["msh_3_actual_val"] = $row[19];
$testplan_resulttext_msh["msh_3_pass"] = $row[20];
$testplan_resulttext_msh["msh_3_comments"] = $row[21];
$testplan_resulttext_msh["msh_3_signoff"] = $row[22];
$testplan_resulttext_msh["msh_4_iscv_val"] = $row[23];
$testplan_resulttext_msh["msh_4_hl7_parsing"] = $row[24];
$testplan_resulttext_msh["msh_4_expected_val"] = $row[25];
$testplan_resulttext_msh["msh_4_actual_val"] = $row[26];
$testplan_resulttext_msh["msh_4_pass"] = $row[27];
$testplan_resulttext_msh["msh_4_comments"] = $row[28];
$testplan_resulttext_msh["msh_4_signoff"] = $row[29];
$testplan_resulttext_msh["msh_5_iscv_val"] = $row[30];
$testplan_resulttext_msh["msh_5_hl7_parsing"] = $row[31];
$testplan_resulttext_msh["msh_5_expected_val"] = $row[32];
$testplan_resulttext_msh["msh_5_actual_val"] = $row[33];
$testplan_resulttext_msh["msh_5_pass"] = $row[34];
$testplan_resulttext_msh["msh_5_comments"] = $row[35];
$testplan_resulttext_msh["msh_5_signoff"] = $row[36];
$testplan_resulttext_msh["msh_6_iscv_val"] = $row[37];
$testplan_resulttext_msh["msh_6_hl7_parsing"] = $row[38];
$testplan_resulttext_msh["msh_6_expected_val"] = $row[39];
$testplan_resulttext_msh["msh_6_actual_val"] = $row[40];
$testplan_resulttext_msh["msh_6_pass"] = $row[41];
$testplan_resulttext_msh["msh_6_comments"] = $row[42];
$testplan_resulttext_msh["msh_6_signoff"] = $row[43];
$testplan_resulttext_msh["msh_7_iscv_val"] = $row[44];
$testplan_resulttext_msh["msh_7_hl7_parsing"] = $row[45];
$testplan_resulttext_msh["msh_7_expected_val"] = $row[46];
$testplan_resulttext_msh["msh_7_actual_val"] = $row[47];
$testplan_resulttext_msh["msh_7_pass"] = $row[48];
$testplan_resulttext_msh["msh_7_comments"] = $row[49];
$testplan_resulttext_msh["msh_7_signoff"] = $row[50];
$testplan_resulttext_msh["msh_9_iscv_val"] = $row[51];
$testplan_resulttext_msh["msh_9_hl7_parsing"] = $row[52];
$testplan_resulttext_msh["msh_9_expected_val"] = $row[53];
$testplan_resulttext_msh["msh_9_actual_val"] = $row[54];
$testplan_resulttext_msh["msh_9_pass"] = $row[55];
$testplan_resulttext_msh["msh_9_comments"] = $row[56];
$testplan_resulttext_msh["msh_9_signoff"] = $row[57];
$testplan_resulttext_msh["msh_9_1_iscv_val"] = $row[58];
$testplan_resulttext_msh["msh_9_1_hl7_parsing"] = $row[59];
$testplan_resulttext_msh["msh_9_1_expected_val"] = $row[60];
$testplan_resulttext_msh["msh_9_1_actual_val"] = $row[61];
$testplan_resulttext_msh["msh_9_1_pass"] = $row[62];
$testplan_resulttext_msh["msh_9_1_comments"] = $row[63];
$testplan_resulttext_msh["msh_9_1_signoff"] = $row[64];
$testplan_resulttext_msh["msh_9_2_iscv_val"] = $row[65];
$testplan_resulttext_msh["msh_9_2_hl7_parsing"] = $row[66];
$testplan_resulttext_msh["msh_9_2_expected_val"] = $row[67];
$testplan_resulttext_msh["msh_9_2_actual_val"] = $row[68];
$testplan_resulttext_msh["msh_9_2_pass"] = $row[69];
$testplan_resulttext_msh["msh_9_2_comments"] = $row[70];
$testplan_resulttext_msh["msh_9_2_signoff"] = $row[71];
$testplan_resulttext_msh["msh_10_iscv_val"] = $row[72];
$testplan_resulttext_msh["msh_10_hl7_parsing"] = $row[73];
$testplan_resulttext_msh["msh_10_expected_val"] = $row[74];
$testplan_resulttext_msh["msh_10_actual_val"] = $row[75];
$testplan_resulttext_msh["msh_10_pass"] = $row[76];
$testplan_resulttext_msh["msh_10_comments"] = $row[77];
$testplan_resulttext_msh["msh_10_signoff"] = $row[78];
$testplan_resulttext_msh["msh_11_iscv_val"] = $row[79];
$testplan_resulttext_msh["msh_11_hl7_parsing"] = $row[80];
$testplan_resulttext_msh["msh_11_expected_val"] = $row[81];
$testplan_resulttext_msh["msh_11_actual_val"] = $row[82];
$testplan_resulttext_msh["msh_11_pass"] = $row[83];
$testplan_resulttext_msh["msh_11_comments"] = $row[84];
$testplan_resulttext_msh["msh_11_signoff"] = $row[85];
$testplan_resulttext_msh["msh_12_iscv_val"] = $row[86];
$testplan_resulttext_msh["msh_12_hl7_parsing"] = $row[87];
$testplan_resulttext_msh["msh_12_expected_val"] = $row[88];
$testplan_resulttext_msh["msh_12_actual_val"] = $row[89];
$testplan_resulttext_msh["msh_12_pass"] = $row[90];
$testplan_resulttext_msh["msh_12_comments"] = $row[91];
$testplan_resulttext_msh["msh_12_signoff"] = $row[92];


					array_push($response["testplan_resulttext_msh"], $testplan_resulttext_msh) ;
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
