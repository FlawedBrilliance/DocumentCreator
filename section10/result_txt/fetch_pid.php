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

	$response['testplan_resulttext_pid'] = array() ;
	$testplan_resulttext_pid = array() ;

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
				$secSign = $row[50] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resulttext_pid
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resulttext_pid["pid_3_iscv_val"] = $row[2];
$testplan_resulttext_pid["pid_3_hl7_parsing"] = $row[3];
$testplan_resulttext_pid["pid_3_expected_val"] = $row[4];
$testplan_resulttext_pid["pid_3_actual_val"] = $row[5];
$testplan_resulttext_pid["pid_3_pass"] = $row[6];
$testplan_resulttext_pid["pid_3_comments"] = $row[7];
$testplan_resulttext_pid["pid_3_signoff"] = $row[8];
$testplan_resulttext_pid["pid_3_1_iscv_val"] = $row[9];
$testplan_resulttext_pid["pid_3_1_hl7_parsing"] = $row[10];
$testplan_resulttext_pid["pid_3_1_expected_val"] = $row[11];
$testplan_resulttext_pid["pid_3_1_actual_val"] = $row[12];
$testplan_resulttext_pid["pid_3_1_pass"] = $row[13];
$testplan_resulttext_pid["pid_3_1_comments"] = $row[14];
$testplan_resulttext_pid["pid_3_1_signoff"] = $row[15];
$testplan_resulttext_pid["pid_3_4_iscv_val"] = $row[16];
$testplan_resulttext_pid["pid_3_4_hl7_parsing"] = $row[17];
$testplan_resulttext_pid["pid_3_4_expected_val"] = $row[18];
$testplan_resulttext_pid["pid_3_4_actual_val"] = $row[19];
$testplan_resulttext_pid["pid_3_4_pass"] = $row[20];
$testplan_resulttext_pid["pid_3_4_comments"] = $row[21];
$testplan_resulttext_pid["pid_3_4_signoff"] = $row[22];
$testplan_resulttext_pid["pid_5_iscv_val"] = $row[23];
$testplan_resulttext_pid["pid_5_hl7_parsing"] = $row[24];
$testplan_resulttext_pid["pid_5_expected_val"] = $row[25];
$testplan_resulttext_pid["pid_5_actual_val"] = $row[26];
$testplan_resulttext_pid["pid_5_pass"] = $row[27];
$testplan_resulttext_pid["pid_5_comments"] = $row[28];
$testplan_resulttext_pid["pid_5_signoff"] = $row[29];
$testplan_resulttext_pid["pid_5_1_iscv_val"] = $row[30];
$testplan_resulttext_pid["pid_5_1_hl7_parsing"] = $row[31];
$testplan_resulttext_pid["pid_5_1_expected_val"] = $row[32];
$testplan_resulttext_pid["pid_5_1_actual_val"] = $row[33];
$testplan_resulttext_pid["pid_5_1_pass"] = $row[34];
$testplan_resulttext_pid["pid_5_1_comments"] = $row[35];
$testplan_resulttext_pid["pid_5_1_signoff"] = $row[36];
$testplan_resulttext_pid["pid_5_2_iscv_val"] = $row[37];
$testplan_resulttext_pid["pid_5_2_hl7_parsing"] = $row[38];
$testplan_resulttext_pid["pid_5_2_expected_val"] = $row[39];
$testplan_resulttext_pid["pid_5_2_actual_val"] = $row[40];
$testplan_resulttext_pid["pid_5_2_pass"] = $row[41];
$testplan_resulttext_pid["pid_5_2_comments"] = $row[42];
$testplan_resulttext_pid["pid_5_2_signoff"] = $row[43];
$testplan_resulttext_pid["pid_5_3_iscv_val"] = $row[44];
$testplan_resulttext_pid["pid_5_3_hl7_parsing"] = $row[45];
$testplan_resulttext_pid["pid_5_3_expected_val"] = $row[46];
$testplan_resulttext_pid["pid_5_3_actual_val"] = $row[47];
$testplan_resulttext_pid["pid_5_3_pass"] = $row[48];
$testplan_resulttext_pid["pid_5_3_comments"] = $row[49];
$testplan_resulttext_pid["pid_5_3_signoff"] = $row[50];
$testplan_resulttext_pid["pid_7_iscv_val"] = $row[51];
$testplan_resulttext_pid["pid_7_hl7_parsing"] = $row[52];
$testplan_resulttext_pid["pid_7_expected_val"] = $row[53];
$testplan_resulttext_pid["pid_7_actual_val"] = $row[54];
$testplan_resulttext_pid["pid_7_pass"] = $row[55];
$testplan_resulttext_pid["pid_7_comments"] = $row[56];
$testplan_resulttext_pid["pid_7_signoff"] = $row[57];
$testplan_resulttext_pid["pid_8_iscv_val"] = $row[58];
$testplan_resulttext_pid["pid_8_hl7_parsing"] = $row[59];
$testplan_resulttext_pid["pid_8_expected_val"] = $row[60];
$testplan_resulttext_pid["pid_8_actual_val"] = $row[61];
$testplan_resulttext_pid["pid_8_pass"] = $row[62];
$testplan_resulttext_pid["pid_8_comments"] = $row[63];
$testplan_resulttext_pid["pid_8_signoff"] = $row[64];
$testplan_resulttext_pid["pid_10_iscv_val"] = $row[65];
$testplan_resulttext_pid["pid_10_hl7_parsing"] = $row[66];
$testplan_resulttext_pid["pid_10_expected_val"] = $row[67];
$testplan_resulttext_pid["pid_10_actual_val"] = $row[68];
$testplan_resulttext_pid["pid_10_pass"] = $row[69];
$testplan_resulttext_pid["pid_10_comments"] = $row[70];
$testplan_resulttext_pid["pid_10_signoff"] = $row[71];
$testplan_resulttext_pid["pid_11_iscv_val"] = $row[72];
$testplan_resulttext_pid["pid_11_hl7_parsing"] = $row[73];
$testplan_resulttext_pid["pid_11_expected_val"] = $row[74];
$testplan_resulttext_pid["pid_11_actual_val"] = $row[75];
$testplan_resulttext_pid["pid_11_pass"] = $row[76];
$testplan_resulttext_pid["pid_11_comments"] = $row[77];
$testplan_resulttext_pid["pid_11_signoff"] = $row[78];
$testplan_resulttext_pid["pid_11_1_iscv_val"] = $row[79];
$testplan_resulttext_pid["pid_11_1_hl7_parsing"] = $row[80];
$testplan_resulttext_pid["pid_11_1_expected_val"] = $row[81];
$testplan_resulttext_pid["pid_11_1_actual_val"] = $row[82];
$testplan_resulttext_pid["pid_11_1_pass"] = $row[83];
$testplan_resulttext_pid["pid_11_1_comments"] = $row[84];
$testplan_resulttext_pid["pid_11_1_signoff"] = $row[85];
$testplan_resulttext_pid["pid_11_2_iscv_val"] = $row[86];
$testplan_resulttext_pid["pid_11_2_hl7_parsing"] = $row[87];
$testplan_resulttext_pid["pid_11_2_expected_val"] = $row[88];
$testplan_resulttext_pid["pid_11_2_actual_val"] = $row[89];
$testplan_resulttext_pid["pid_11_2_pass"] = $row[90];
$testplan_resulttext_pid["pid_11_2_comments"] = $row[91];
$testplan_resulttext_pid["pid_11_2_signoff"] = $row[92];
$testplan_resulttext_pid["pid_11_3_iscv_val"] = $row[93];
$testplan_resulttext_pid["pid_11_3_hl7_parsing"] = $row[94];
$testplan_resulttext_pid["pid_11_3_expected_val"] = $row[95];
$testplan_resulttext_pid["pid_11_3_actual_val"] = $row[96];
$testplan_resulttext_pid["pid_11_3_pass"] = $row[97];
$testplan_resulttext_pid["pid_11_3_comments"] = $row[98];
$testplan_resulttext_pid["pid_11_3_signoff"] = $row[99];
$testplan_resulttext_pid["pid_11_4_iscv_val"] = $row[100];
$testplan_resulttext_pid["pid_11_4_hl7_parsing"] = $row[101];
$testplan_resulttext_pid["pid_11_4_expected_val"] = $row[102];
$testplan_resulttext_pid["pid_11_4_actual_val"] = $row[103];
$testplan_resulttext_pid["pid_11_4_pass"] = $row[104];
$testplan_resulttext_pid["pid_11_4_comments"] = $row[105];
$testplan_resulttext_pid["pid_11_4_signoff"] = $row[106];
$testplan_resulttext_pid["pid_11_5_iscv_val"] = $row[107];
$testplan_resulttext_pid["pid_11_5_hl7_parsing"] = $row[108];
$testplan_resulttext_pid["pid_11_5_expected_val"] = $row[109];
$testplan_resulttext_pid["pid_11_5_actual_val"] = $row[110];
$testplan_resulttext_pid["pid_11_5_pass"] = $row[111];
$testplan_resulttext_pid["pid_11_5_comments"] = $row[112];
$testplan_resulttext_pid["pid_11_5_signoff"] = $row[113];
$testplan_resulttext_pid["pid_13_iscv_val"] = $row[114];
$testplan_resulttext_pid["pid_13_hl7_parsing"] = $row[115];
$testplan_resulttext_pid["pid_13_expected_val"] = $row[116];
$testplan_resulttext_pid["pid_13_actual_val"] = $row[117];
$testplan_resulttext_pid["pid_13_pass"] = $row[118];
$testplan_resulttext_pid["pid_13_comments"] = $row[119];
$testplan_resulttext_pid["pid_13_signoff"] = $row[120];
$testplan_resulttext_pid["pid_14_iscv_val"] = $row[121];
$testplan_resulttext_pid["pid_14_hl7_parsing"] = $row[122];
$testplan_resulttext_pid["pid_14_expected_val"] = $row[123];
$testplan_resulttext_pid["pid_14_actual_val"] = $row[124];
$testplan_resulttext_pid["pid_14_pass"] = $row[125];
$testplan_resulttext_pid["pid_14_comments"] = $row[126];
$testplan_resulttext_pid["pid_14_signoff"] = $row[127];
$testplan_resulttext_pid["pid_18_iscv_val"] = $row[128];
$testplan_resulttext_pid["pid_18_hl7_parsing"] = $row[129];
$testplan_resulttext_pid["pid_18_expected_val"] = $row[130];
$testplan_resulttext_pid["pid_18_actual_val"] = $row[131];
$testplan_resulttext_pid["pid_18_pass"] = $row[132];
$testplan_resulttext_pid["pid_18_comments"] = $row[133];
$testplan_resulttext_pid["pid_18_signoff"] = $row[134];


					array_push($response["testplan_resulttext_pid"], $testplan_resulttext_pid) ;

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
				$secSign = $row[50] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resulttext_pid
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resulttext_pid["pid_3_iscv_val"] = $row[2];
$testplan_resulttext_pid["pid_3_hl7_parsing"] = $row[3];
$testplan_resulttext_pid["pid_3_expected_val"] = $row[4];
$testplan_resulttext_pid["pid_3_actual_val"] = $row[5];
$testplan_resulttext_pid["pid_3_pass"] = $row[6];
$testplan_resulttext_pid["pid_3_comments"] = $row[7];
$testplan_resulttext_pid["pid_3_signoff"] = $row[8];
$testplan_resulttext_pid["pid_3_1_iscv_val"] = $row[9];
$testplan_resulttext_pid["pid_3_1_hl7_parsing"] = $row[10];
$testplan_resulttext_pid["pid_3_1_expected_val"] = $row[11];
$testplan_resulttext_pid["pid_3_1_actual_val"] = $row[12];
$testplan_resulttext_pid["pid_3_1_pass"] = $row[13];
$testplan_resulttext_pid["pid_3_1_comments"] = $row[14];
$testplan_resulttext_pid["pid_3_1_signoff"] = $row[15];
$testplan_resulttext_pid["pid_3_4_iscv_val"] = $row[16];
$testplan_resulttext_pid["pid_3_4_hl7_parsing"] = $row[17];
$testplan_resulttext_pid["pid_3_4_expected_val"] = $row[18];
$testplan_resulttext_pid["pid_3_4_actual_val"] = $row[19];
$testplan_resulttext_pid["pid_3_4_pass"] = $row[20];
$testplan_resulttext_pid["pid_3_4_comments"] = $row[21];
$testplan_resulttext_pid["pid_3_4_signoff"] = $row[22];
$testplan_resulttext_pid["pid_5_iscv_val"] = $row[23];
$testplan_resulttext_pid["pid_5_hl7_parsing"] = $row[24];
$testplan_resulttext_pid["pid_5_expected_val"] = $row[25];
$testplan_resulttext_pid["pid_5_actual_val"] = $row[26];
$testplan_resulttext_pid["pid_5_pass"] = $row[27];
$testplan_resulttext_pid["pid_5_comments"] = $row[28];
$testplan_resulttext_pid["pid_5_signoff"] = $row[29];
$testplan_resulttext_pid["pid_5_1_iscv_val"] = $row[30];
$testplan_resulttext_pid["pid_5_1_hl7_parsing"] = $row[31];
$testplan_resulttext_pid["pid_5_1_expected_val"] = $row[32];
$testplan_resulttext_pid["pid_5_1_actual_val"] = $row[33];
$testplan_resulttext_pid["pid_5_1_pass"] = $row[34];
$testplan_resulttext_pid["pid_5_1_comments"] = $row[35];
$testplan_resulttext_pid["pid_5_1_signoff"] = $row[36];
$testplan_resulttext_pid["pid_5_2_iscv_val"] = $row[37];
$testplan_resulttext_pid["pid_5_2_hl7_parsing"] = $row[38];
$testplan_resulttext_pid["pid_5_2_expected_val"] = $row[39];
$testplan_resulttext_pid["pid_5_2_actual_val"] = $row[40];
$testplan_resulttext_pid["pid_5_2_pass"] = $row[41];
$testplan_resulttext_pid["pid_5_2_comments"] = $row[42];
$testplan_resulttext_pid["pid_5_2_signoff"] = $row[43];
$testplan_resulttext_pid["pid_5_3_iscv_val"] = $row[44];
$testplan_resulttext_pid["pid_5_3_hl7_parsing"] = $row[45];
$testplan_resulttext_pid["pid_5_3_expected_val"] = $row[46];
$testplan_resulttext_pid["pid_5_3_actual_val"] = $row[47];
$testplan_resulttext_pid["pid_5_3_pass"] = $row[48];
$testplan_resulttext_pid["pid_5_3_comments"] = $row[49];
$testplan_resulttext_pid["pid_5_3_signoff"] = $row[50];
$testplan_resulttext_pid["pid_7_iscv_val"] = $row[51];
$testplan_resulttext_pid["pid_7_hl7_parsing"] = $row[52];
$testplan_resulttext_pid["pid_7_expected_val"] = $row[53];
$testplan_resulttext_pid["pid_7_actual_val"] = $row[54];
$testplan_resulttext_pid["pid_7_pass"] = $row[55];
$testplan_resulttext_pid["pid_7_comments"] = $row[56];
$testplan_resulttext_pid["pid_7_signoff"] = $row[57];
$testplan_resulttext_pid["pid_8_iscv_val"] = $row[58];
$testplan_resulttext_pid["pid_8_hl7_parsing"] = $row[59];
$testplan_resulttext_pid["pid_8_expected_val"] = $row[60];
$testplan_resulttext_pid["pid_8_actual_val"] = $row[61];
$testplan_resulttext_pid["pid_8_pass"] = $row[62];
$testplan_resulttext_pid["pid_8_comments"] = $row[63];
$testplan_resulttext_pid["pid_8_signoff"] = $row[64];
$testplan_resulttext_pid["pid_10_iscv_val"] = $row[65];
$testplan_resulttext_pid["pid_10_hl7_parsing"] = $row[66];
$testplan_resulttext_pid["pid_10_expected_val"] = $row[67];
$testplan_resulttext_pid["pid_10_actual_val"] = $row[68];
$testplan_resulttext_pid["pid_10_pass"] = $row[69];
$testplan_resulttext_pid["pid_10_comments"] = $row[70];
$testplan_resulttext_pid["pid_10_signoff"] = $row[71];
$testplan_resulttext_pid["pid_11_iscv_val"] = $row[72];
$testplan_resulttext_pid["pid_11_hl7_parsing"] = $row[73];
$testplan_resulttext_pid["pid_11_expected_val"] = $row[74];
$testplan_resulttext_pid["pid_11_actual_val"] = $row[75];
$testplan_resulttext_pid["pid_11_pass"] = $row[76];
$testplan_resulttext_pid["pid_11_comments"] = $row[77];
$testplan_resulttext_pid["pid_11_signoff"] = $row[78];
$testplan_resulttext_pid["pid_11_1_iscv_val"] = $row[79];
$testplan_resulttext_pid["pid_11_1_hl7_parsing"] = $row[80];
$testplan_resulttext_pid["pid_11_1_expected_val"] = $row[81];
$testplan_resulttext_pid["pid_11_1_actual_val"] = $row[82];
$testplan_resulttext_pid["pid_11_1_pass"] = $row[83];
$testplan_resulttext_pid["pid_11_1_comments"] = $row[84];
$testplan_resulttext_pid["pid_11_1_signoff"] = $row[85];
$testplan_resulttext_pid["pid_11_2_iscv_val"] = $row[86];
$testplan_resulttext_pid["pid_11_2_hl7_parsing"] = $row[87];
$testplan_resulttext_pid["pid_11_2_expected_val"] = $row[88];
$testplan_resulttext_pid["pid_11_2_actual_val"] = $row[89];
$testplan_resulttext_pid["pid_11_2_pass"] = $row[90];
$testplan_resulttext_pid["pid_11_2_comments"] = $row[91];
$testplan_resulttext_pid["pid_11_2_signoff"] = $row[92];
$testplan_resulttext_pid["pid_11_3_iscv_val"] = $row[93];
$testplan_resulttext_pid["pid_11_3_hl7_parsing"] = $row[94];
$testplan_resulttext_pid["pid_11_3_expected_val"] = $row[95];
$testplan_resulttext_pid["pid_11_3_actual_val"] = $row[96];
$testplan_resulttext_pid["pid_11_3_pass"] = $row[97];
$testplan_resulttext_pid["pid_11_3_comments"] = $row[98];
$testplan_resulttext_pid["pid_11_3_signoff"] = $row[99];
$testplan_resulttext_pid["pid_11_4_iscv_val"] = $row[100];
$testplan_resulttext_pid["pid_11_4_hl7_parsing"] = $row[101];
$testplan_resulttext_pid["pid_11_4_expected_val"] = $row[102];
$testplan_resulttext_pid["pid_11_4_actual_val"] = $row[103];
$testplan_resulttext_pid["pid_11_4_pass"] = $row[104];
$testplan_resulttext_pid["pid_11_4_comments"] = $row[105];
$testplan_resulttext_pid["pid_11_4_signoff"] = $row[106];
$testplan_resulttext_pid["pid_11_5_iscv_val"] = $row[107];
$testplan_resulttext_pid["pid_11_5_hl7_parsing"] = $row[108];
$testplan_resulttext_pid["pid_11_5_expected_val"] = $row[109];
$testplan_resulttext_pid["pid_11_5_actual_val"] = $row[110];
$testplan_resulttext_pid["pid_11_5_pass"] = $row[111];
$testplan_resulttext_pid["pid_11_5_comments"] = $row[112];
$testplan_resulttext_pid["pid_11_5_signoff"] = $row[113];
$testplan_resulttext_pid["pid_13_iscv_val"] = $row[114];
$testplan_resulttext_pid["pid_13_hl7_parsing"] = $row[115];
$testplan_resulttext_pid["pid_13_expected_val"] = $row[116];
$testplan_resulttext_pid["pid_13_actual_val"] = $row[117];
$testplan_resulttext_pid["pid_13_pass"] = $row[118];
$testplan_resulttext_pid["pid_13_comments"] = $row[119];
$testplan_resulttext_pid["pid_13_signoff"] = $row[120];
$testplan_resulttext_pid["pid_14_iscv_val"] = $row[121];
$testplan_resulttext_pid["pid_14_hl7_parsing"] = $row[122];
$testplan_resulttext_pid["pid_14_expected_val"] = $row[123];
$testplan_resulttext_pid["pid_14_actual_val"] = $row[124];
$testplan_resulttext_pid["pid_14_pass"] = $row[125];
$testplan_resulttext_pid["pid_14_comments"] = $row[126];
$testplan_resulttext_pid["pid_14_signoff"] = $row[127];
$testplan_resulttext_pid["pid_18_iscv_val"] = $row[128];
$testplan_resulttext_pid["pid_18_hl7_parsing"] = $row[129];
$testplan_resulttext_pid["pid_18_expected_val"] = $row[130];
$testplan_resulttext_pid["pid_18_actual_val"] = $row[131];
$testplan_resulttext_pid["pid_18_pass"] = $row[132];
$testplan_resulttext_pid["pid_18_comments"] = $row[133];
$testplan_resulttext_pid["pid_18_signoff"] = $row[134];
					array_push($response["testplan_resulttext_pid"], $testplan_resulttext_pid) ;
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
