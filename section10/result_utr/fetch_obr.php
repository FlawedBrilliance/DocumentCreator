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

	$response['testplan_resultutr_obr'] = array() ;
	$testplan_resultutr_obr = array() ;

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
				$secSign = $row[55] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultutr_obr
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resultutr_obr["obr_1_iscv_val"] = $row[2];
$testplan_resultutr_obr["obr_1_hl7_parsing"] = $row[3];
$testplan_resultutr_obr["obr_1_expected_val"] = $row[4];
$testplan_resultutr_obr["obr_1_actual_val"] = $row[5];
$testplan_resultutr_obr["obr_1_pass"] = $row[6];
$testplan_resultutr_obr["obr_1_comments"] = $row[7];
$testplan_resultutr_obr["obr_1_signoff"] = $row[8];
$testplan_resultutr_obr["obr_2_iscv_val"] = $row[9];
$testplan_resultutr_obr["obr_2_hl7_parsing"] = $row[10];
$testplan_resultutr_obr["obr_2_expected_val"] = $row[11];
$testplan_resultutr_obr["obr_2_actual_val"] = $row[12];
$testplan_resultutr_obr["obr_2_pass"] = $row[13];
$testplan_resultutr_obr["obr_2_comments"] = $row[14];
$testplan_resultutr_obr["obr_2_signoff"] = $row[15];
$testplan_resultutr_obr["obr_3_iscv_val"] = $row[16];
$testplan_resultutr_obr["obr_3_hl7_parsing"] = $row[17];
$testplan_resultutr_obr["obr_3_expected_val"] = $row[18];
$testplan_resultutr_obr["obr_3_actual_val"] = $row[19];
$testplan_resultutr_obr["obr_3_pass"] = $row[20];
$testplan_resultutr_obr["obr_3_comments"] = $row[21];
$testplan_resultutr_obr["obr_3_signoff"] = $row[22];
$testplan_resultutr_obr["obr_4_iscv_val"] = $row[23];
$testplan_resultutr_obr["obr_4_hl7_parsing"] = $row[24];
$testplan_resultutr_obr["obr_4_expected_val"] = $row[25];
$testplan_resultutr_obr["obr_4_actual_val"] = $row[26];
$testplan_resultutr_obr["obr_4_pass"] = $row[27];
$testplan_resultutr_obr["obr_4_comments"] = $row[28];
$testplan_resultutr_obr["obr_4_signoff"] = $row[29];
$testplan_resultutr_obr["obr_4_1_iscv_val"] = $row[30];
$testplan_resultutr_obr["obr_4_1_hl7_parsing"] = $row[31];
$testplan_resultutr_obr["obr_4_1_expected_val"] = $row[32];
$testplan_resultutr_obr["obr_4_1_actual_val"] = $row[33];
$testplan_resultutr_obr["obr_4_1_pass"] = $row[34];
$testplan_resultutr_obr["obr_4_1_comments"] = $row[35];
$testplan_resultutr_obr["obr_4_1_signoff"] = $row[36];
$testplan_resultutr_obr["obr_4_2_iscv_val"] = $row[37];
$testplan_resultutr_obr["obr_4_2_hl7_parsing"] = $row[38];
$testplan_resultutr_obr["obr_4_2_expected_val"] = $row[39];
$testplan_resultutr_obr["obr_4_2_actual_val"] = $row[40];
$testplan_resultutr_obr["obr_4_2_pass"] = $row[41];
$testplan_resultutr_obr["obr_4_2_comments"] = $row[42];
$testplan_resultutr_obr["obr_4_2_signoff"] = $row[43];
$testplan_resultutr_obr["obr_7_iscv_val"] = $row[44];
$testplan_resultutr_obr["obr_7_hl7_parsing"] = $row[45];
$testplan_resultutr_obr["obr_7_expected_val"] = $row[46];
$testplan_resultutr_obr["obr_7_actual_val"] = $row[47];
$testplan_resultutr_obr["obr_7_pass"] = $row[48];
$testplan_resultutr_obr["obr_7_comments"] = $row[49];
$testplan_resultutr_obr["obr_7_signoff"] = $row[50];
$testplan_resultutr_obr["obr_8_iscv_val"] = $row[51];
$testplan_resultutr_obr["obr_8_hl7_parsing"] = $row[52];
$testplan_resultutr_obr["obr_8_expected_val"] = $row[53];
$testplan_resultutr_obr["obr_8_actual_val"] = $row[54];
$testplan_resultutr_obr["obr_8_pass"] = $row[55];
$testplan_resultutr_obr["obr_8_comments"] = $row[56];
$testplan_resultutr_obr["obr_8_signoff"] = $row[57];
$testplan_resultutr_obr["obr_16_iscv_val"] = $row[58];
$testplan_resultutr_obr["obr_16_hl7_parsing"] = $row[59];
$testplan_resultutr_obr["obr_16_expected_val"] = $row[60];
$testplan_resultutr_obr["obr_16_actual_val"] = $row[61];
$testplan_resultutr_obr["obr_16_pass"] = $row[62];
$testplan_resultutr_obr["obr_16_comments"] = $row[63];
$testplan_resultutr_obr["obr_16_signoff"] = $row[64];
$testplan_resultutr_obr["obr_18_iscv_val"] = $row[65];
$testplan_resultutr_obr["obr_18_hl7_parsing"] = $row[66];
$testplan_resultutr_obr["obr_18_expected_val"] = $row[67];
$testplan_resultutr_obr["obr_18_actual_val"] = $row[68];
$testplan_resultutr_obr["obr_18_pass"] = $row[69];
$testplan_resultutr_obr["obr_18_comments"] = $row[70];
$testplan_resultutr_obr["obr_18_signoff"] = $row[71];
$testplan_resultutr_obr["obr_20_iscv_val"] = $row[72];
$testplan_resultutr_obr["obr_20_hl7_parsing"] = $row[73];
$testplan_resultutr_obr["obr_20_expected_val"] = $row[74];
$testplan_resultutr_obr["obr_20_actual_val"] = $row[75];
$testplan_resultutr_obr["obr_20_pass"] = $row[76];
$testplan_resultutr_obr["obr_20_comments"] = $row[77];
$testplan_resultutr_obr["obr_20_signoff"] = $row[78];
$testplan_resultutr_obr["obr_22_iscv_val"] = $row[79];
$testplan_resultutr_obr["obr_22_hl7_parsing"] = $row[80];
$testplan_resultutr_obr["obr_22_expected_val"] = $row[81];
$testplan_resultutr_obr["obr_22_actual_val"] = $row[82];
$testplan_resultutr_obr["obr_22_pass"] = $row[83];
$testplan_resultutr_obr["obr_22_comments"] = $row[84];
$testplan_resultutr_obr["obr_22_signoff"] = $row[85];
$testplan_resultutr_obr["obr_24_iscv_val"] = $row[86];
$testplan_resultutr_obr["obr_24_hl7_parsing"] = $row[87];
$testplan_resultutr_obr["obr_24_expected_val"] = $row[88];
$testplan_resultutr_obr["obr_24_actual_val"] = $row[89];
$testplan_resultutr_obr["obr_24_pass"] = $row[90];
$testplan_resultutr_obr["obr_24_comments"] = $row[91];
$testplan_resultutr_obr["obr_24_signoff"] = $row[92];
$testplan_resultutr_obr["obr_25_iscv_val"] = $row[93];
$testplan_resultutr_obr["obr_25_hl7_parsing"] = $row[94];
$testplan_resultutr_obr["obr_25_expected_val"] = $row[95];
$testplan_resultutr_obr["obr_25_actual_val"] = $row[96];
$testplan_resultutr_obr["obr_25_pass"] = $row[97];
$testplan_resultutr_obr["obr_25_comments"] = $row[98];
$testplan_resultutr_obr["obr_25_signoff"] = $row[99];
$testplan_resultutr_obr["obr_31_iscv_val"] = $row[100];
$testplan_resultutr_obr["obr_31_hl7_parsing"] = $row[101];
$testplan_resultutr_obr["obr_31_expected_val"] = $row[102];
$testplan_resultutr_obr["obr_31_actual_val"] = $row[103];
$testplan_resultutr_obr["obr_31_pass"] = $row[104];
$testplan_resultutr_obr["obr_31_comments"] = $row[105];
$testplan_resultutr_obr["obr_31_signoff"] = $row[106];
$testplan_resultutr_obr["obr_32_iscv_val"] = $row[107];
$testplan_resultutr_obr["obr_32_hl7_parsing"] = $row[108];
$testplan_resultutr_obr["obr_32_expected_val"] = $row[109];
$testplan_resultutr_obr["obr_32_actual_val"] = $row[110];
$testplan_resultutr_obr["obr_32_pass"] = $row[111];
$testplan_resultutr_obr["obr_32_comments"] = $row[112];
$testplan_resultutr_obr["obr_32_signoff"] = $row[113];
$testplan_resultutr_obr["obr_32_1_1_iscv_val"] = $row[114];
$testplan_resultutr_obr["obr_32_1_1_hl7_parsing"] = $row[115];
$testplan_resultutr_obr["obr_32_1_1_expected_val"] = $row[116];
$testplan_resultutr_obr["obr_32_1_1_actual_val"] = $row[117];
$testplan_resultutr_obr["obr_32_1_1_pass"] = $row[118];
$testplan_resultutr_obr["obr_32_1_1_comments"] = $row[119];
$testplan_resultutr_obr["obr_32_1_1_signoff"] = $row[120];
$testplan_resultutr_obr["obr_32_1_2_iscv_val"] = $row[121];
$testplan_resultutr_obr["obr_32_1_2_hl7_parsing"] = $row[122];
$testplan_resultutr_obr["obr_32_1_2_expected_val"] = $row[123];
$testplan_resultutr_obr["obr_32_1_2_actual_val"] = $row[124];
$testplan_resultutr_obr["obr_32_1_2_pass"] = $row[125];
$testplan_resultutr_obr["obr_32_1_2_comments"] = $row[126];
$testplan_resultutr_obr["obr_32_1_2_signoff"] = $row[127];
$testplan_resultutr_obr["obr_32_1_3_iscv_val"] = $row[128];
$testplan_resultutr_obr["obr_32_1_3_hl7_parsing"] = $row[129];
$testplan_resultutr_obr["obr_32_1_3_expected_val"] = $row[130];
$testplan_resultutr_obr["obr_32_1_3_actual_val"] = $row[131];
$testplan_resultutr_obr["obr_32_1_3_pass"] = $row[132];
$testplan_resultutr_obr["obr_32_1_3_comments"] = $row[133];
$testplan_resultutr_obr["obr_32_1_3_signoff"] = $row[134];
$testplan_resultutr_obr["obr_32_1_4_iscv_val"] = $row[135];
$testplan_resultutr_obr["obr_32_1_4_hl7_parsing"] = $row[136];
$testplan_resultutr_obr["obr_32_1_4_expected_val"] = $row[137];
$testplan_resultutr_obr["obr_32_1_4_actual_val"] = $row[138];
$testplan_resultutr_obr["obr_32_1_4_pass"] = $row[139];
$testplan_resultutr_obr["obr_32_1_4_comments"] = $row[140];
$testplan_resultutr_obr["obr_32_1_4_signoff"] = $row[141];



					array_push($response["testplan_resultutr_obr"], $testplan_resultutr_obr) ;

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
				$secSign = $row[55] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultutr_obr
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resultutr_obr["obr_1_iscv_val"] = $row[2];
$testplan_resultutr_obr["obr_1_hl7_parsing"] = $row[3];
$testplan_resultutr_obr["obr_1_expected_val"] = $row[4];
$testplan_resultutr_obr["obr_1_actual_val"] = $row[5];
$testplan_resultutr_obr["obr_1_pass"] = $row[6];
$testplan_resultutr_obr["obr_1_comments"] = $row[7];
$testplan_resultutr_obr["obr_1_signoff"] = $row[8];
$testplan_resultutr_obr["obr_2_iscv_val"] = $row[9];
$testplan_resultutr_obr["obr_2_hl7_parsing"] = $row[10];
$testplan_resultutr_obr["obr_2_expected_val"] = $row[11];
$testplan_resultutr_obr["obr_2_actual_val"] = $row[12];
$testplan_resultutr_obr["obr_2_pass"] = $row[13];
$testplan_resultutr_obr["obr_2_comments"] = $row[14];
$testplan_resultutr_obr["obr_2_signoff"] = $row[15];
$testplan_resultutr_obr["obr_3_iscv_val"] = $row[16];
$testplan_resultutr_obr["obr_3_hl7_parsing"] = $row[17];
$testplan_resultutr_obr["obr_3_expected_val"] = $row[18];
$testplan_resultutr_obr["obr_3_actual_val"] = $row[19];
$testplan_resultutr_obr["obr_3_pass"] = $row[20];
$testplan_resultutr_obr["obr_3_comments"] = $row[21];
$testplan_resultutr_obr["obr_3_signoff"] = $row[22];
$testplan_resultutr_obr["obr_4_iscv_val"] = $row[23];
$testplan_resultutr_obr["obr_4_hl7_parsing"] = $row[24];
$testplan_resultutr_obr["obr_4_expected_val"] = $row[25];
$testplan_resultutr_obr["obr_4_actual_val"] = $row[26];
$testplan_resultutr_obr["obr_4_pass"] = $row[27];
$testplan_resultutr_obr["obr_4_comments"] = $row[28];
$testplan_resultutr_obr["obr_4_signoff"] = $row[29];
$testplan_resultutr_obr["obr_4_1_iscv_val"] = $row[30];
$testplan_resultutr_obr["obr_4_1_hl7_parsing"] = $row[31];
$testplan_resultutr_obr["obr_4_1_expected_val"] = $row[32];
$testplan_resultutr_obr["obr_4_1_actual_val"] = $row[33];
$testplan_resultutr_obr["obr_4_1_pass"] = $row[34];
$testplan_resultutr_obr["obr_4_1_comments"] = $row[35];
$testplan_resultutr_obr["obr_4_1_signoff"] = $row[36];
$testplan_resultutr_obr["obr_4_2_iscv_val"] = $row[37];
$testplan_resultutr_obr["obr_4_2_hl7_parsing"] = $row[38];
$testplan_resultutr_obr["obr_4_2_expected_val"] = $row[39];
$testplan_resultutr_obr["obr_4_2_actual_val"] = $row[40];
$testplan_resultutr_obr["obr_4_2_pass"] = $row[41];
$testplan_resultutr_obr["obr_4_2_comments"] = $row[42];
$testplan_resultutr_obr["obr_4_2_signoff"] = $row[43];
$testplan_resultutr_obr["obr_7_iscv_val"] = $row[44];
$testplan_resultutr_obr["obr_7_hl7_parsing"] = $row[45];
$testplan_resultutr_obr["obr_7_expected_val"] = $row[46];
$testplan_resultutr_obr["obr_7_actual_val"] = $row[47];
$testplan_resultutr_obr["obr_7_pass"] = $row[48];
$testplan_resultutr_obr["obr_7_comments"] = $row[49];
$testplan_resultutr_obr["obr_7_signoff"] = $row[50];
$testplan_resultutr_obr["obr_8_iscv_val"] = $row[51];
$testplan_resultutr_obr["obr_8_hl7_parsing"] = $row[52];
$testplan_resultutr_obr["obr_8_expected_val"] = $row[53];
$testplan_resultutr_obr["obr_8_actual_val"] = $row[54];
$testplan_resultutr_obr["obr_8_pass"] = $row[55];
$testplan_resultutr_obr["obr_8_comments"] = $row[56];
$testplan_resultutr_obr["obr_8_signoff"] = $row[57];
$testplan_resultutr_obr["obr_16_iscv_val"] = $row[58];
$testplan_resultutr_obr["obr_16_hl7_parsing"] = $row[59];
$testplan_resultutr_obr["obr_16_expected_val"] = $row[60];
$testplan_resultutr_obr["obr_16_actual_val"] = $row[61];
$testplan_resultutr_obr["obr_16_pass"] = $row[62];
$testplan_resultutr_obr["obr_16_comments"] = $row[63];
$testplan_resultutr_obr["obr_16_signoff"] = $row[64];
$testplan_resultutr_obr["obr_18_iscv_val"] = $row[65];
$testplan_resultutr_obr["obr_18_hl7_parsing"] = $row[66];
$testplan_resultutr_obr["obr_18_expected_val"] = $row[67];
$testplan_resultutr_obr["obr_18_actual_val"] = $row[68];
$testplan_resultutr_obr["obr_18_pass"] = $row[69];
$testplan_resultutr_obr["obr_18_comments"] = $row[70];
$testplan_resultutr_obr["obr_18_signoff"] = $row[71];
$testplan_resultutr_obr["obr_20_iscv_val"] = $row[72];
$testplan_resultutr_obr["obr_20_hl7_parsing"] = $row[73];
$testplan_resultutr_obr["obr_20_expected_val"] = $row[74];
$testplan_resultutr_obr["obr_20_actual_val"] = $row[75];
$testplan_resultutr_obr["obr_20_pass"] = $row[76];
$testplan_resultutr_obr["obr_20_comments"] = $row[77];
$testplan_resultutr_obr["obr_20_signoff"] = $row[78];
$testplan_resultutr_obr["obr_22_iscv_val"] = $row[79];
$testplan_resultutr_obr["obr_22_hl7_parsing"] = $row[80];
$testplan_resultutr_obr["obr_22_expected_val"] = $row[81];
$testplan_resultutr_obr["obr_22_actual_val"] = $row[82];
$testplan_resultutr_obr["obr_22_pass"] = $row[83];
$testplan_resultutr_obr["obr_22_comments"] = $row[84];
$testplan_resultutr_obr["obr_22_signoff"] = $row[85];
$testplan_resultutr_obr["obr_24_iscv_val"] = $row[86];
$testplan_resultutr_obr["obr_24_hl7_parsing"] = $row[87];
$testplan_resultutr_obr["obr_24_expected_val"] = $row[88];
$testplan_resultutr_obr["obr_24_actual_val"] = $row[89];
$testplan_resultutr_obr["obr_24_pass"] = $row[90];
$testplan_resultutr_obr["obr_24_comments"] = $row[91];
$testplan_resultutr_obr["obr_24_signoff"] = $row[92];
$testplan_resultutr_obr["obr_25_iscv_val"] = $row[93];
$testplan_resultutr_obr["obr_25_hl7_parsing"] = $row[94];
$testplan_resultutr_obr["obr_25_expected_val"] = $row[95];
$testplan_resultutr_obr["obr_25_actual_val"] = $row[96];
$testplan_resultutr_obr["obr_25_pass"] = $row[97];
$testplan_resultutr_obr["obr_25_comments"] = $row[98];
$testplan_resultutr_obr["obr_25_signoff"] = $row[99];
$testplan_resultutr_obr["obr_31_iscv_val"] = $row[100];
$testplan_resultutr_obr["obr_31_hl7_parsing"] = $row[101];
$testplan_resultutr_obr["obr_31_expected_val"] = $row[102];
$testplan_resultutr_obr["obr_31_actual_val"] = $row[103];
$testplan_resultutr_obr["obr_31_pass"] = $row[104];
$testplan_resultutr_obr["obr_31_comments"] = $row[105];
$testplan_resultutr_obr["obr_31_signoff"] = $row[106];
$testplan_resultutr_obr["obr_32_iscv_val"] = $row[107];
$testplan_resultutr_obr["obr_32_hl7_parsing"] = $row[108];
$testplan_resultutr_obr["obr_32_expected_val"] = $row[109];
$testplan_resultutr_obr["obr_32_actual_val"] = $row[110];
$testplan_resultutr_obr["obr_32_pass"] = $row[111];
$testplan_resultutr_obr["obr_32_comments"] = $row[112];
$testplan_resultutr_obr["obr_32_signoff"] = $row[113];
$testplan_resultutr_obr["obr_32_1_1_iscv_val"] = $row[114];
$testplan_resultutr_obr["obr_32_1_1_hl7_parsing"] = $row[115];
$testplan_resultutr_obr["obr_32_1_1_expected_val"] = $row[116];
$testplan_resultutr_obr["obr_32_1_1_actual_val"] = $row[117];
$testplan_resultutr_obr["obr_32_1_1_pass"] = $row[118];
$testplan_resultutr_obr["obr_32_1_1_comments"] = $row[119];
$testplan_resultutr_obr["obr_32_1_1_signoff"] = $row[120];
$testplan_resultutr_obr["obr_32_1_2_iscv_val"] = $row[121];
$testplan_resultutr_obr["obr_32_1_2_hl7_parsing"] = $row[122];
$testplan_resultutr_obr["obr_32_1_2_expected_val"] = $row[123];
$testplan_resultutr_obr["obr_32_1_2_actual_val"] = $row[124];
$testplan_resultutr_obr["obr_32_1_2_pass"] = $row[125];
$testplan_resultutr_obr["obr_32_1_2_comments"] = $row[126];
$testplan_resultutr_obr["obr_32_1_2_signoff"] = $row[127];
$testplan_resultutr_obr["obr_32_1_3_iscv_val"] = $row[128];
$testplan_resultutr_obr["obr_32_1_3_hl7_parsing"] = $row[129];
$testplan_resultutr_obr["obr_32_1_3_expected_val"] = $row[130];
$testplan_resultutr_obr["obr_32_1_3_actual_val"] = $row[131];
$testplan_resultutr_obr["obr_32_1_3_pass"] = $row[132];
$testplan_resultutr_obr["obr_32_1_3_comments"] = $row[133];
$testplan_resultutr_obr["obr_32_1_3_signoff"] = $row[134];
$testplan_resultutr_obr["obr_32_1_4_iscv_val"] = $row[135];
$testplan_resultutr_obr["obr_32_1_4_hl7_parsing"] = $row[136];
$testplan_resultutr_obr["obr_32_1_4_expected_val"] = $row[137];
$testplan_resultutr_obr["obr_32_1_4_actual_val"] = $row[138];
$testplan_resultutr_obr["obr_32_1_4_pass"] = $row[139];
$testplan_resultutr_obr["obr_32_1_4_comments"] = $row[140];
$testplan_resultutr_obr["obr_32_1_4_signoff"] = $row[141];


					array_push($response["testplan_resultutr_obr"], $testplan_resultutr_obr) ;
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
