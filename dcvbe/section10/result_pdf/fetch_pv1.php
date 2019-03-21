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

	$response['testplan_resultpdf_pv1'] = array() ;
	$testplan_resultpdf_pv1 = array() ;

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
				$secSign = $row[43] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultpdf_pv1
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resultpdf_pv1["pv1_2_iscv_val"] = $row[2];
$testplan_resultpdf_pv1["pv1_2_hl7_parsing"] = $row[3];
$testplan_resultpdf_pv1["pv1_2_expected_val"] = $row[4];
$testplan_resultpdf_pv1["pv1_2_actual_val"] = $row[5];
$testplan_resultpdf_pv1["pv1_2_pass"] = $row[6];
$testplan_resultpdf_pv1["pv1_2_comments"] = $row[7];
$testplan_resultpdf_pv1["pv1_2_signoff"] = $row[8];
$testplan_resultpdf_pv1["pv1_3_iscv_val"] = $row[9];
$testplan_resultpdf_pv1["pv1_3_hl7_parsing"] = $row[10];
$testplan_resultpdf_pv1["pv1_3_expected_val"] = $row[11];
$testplan_resultpdf_pv1["pv1_3_actual_val"] = $row[12];
$testplan_resultpdf_pv1["pv1_3_pass"] = $row[13];
$testplan_resultpdf_pv1["pv1_3_comments"] = $row[14];
$testplan_resultpdf_pv1["pv1_3_signoff"] = $row[15];
$testplan_resultpdf_pv1["pv1_8_iscv_val"] = $row[16];
$testplan_resultpdf_pv1["pv1_8_hl7_parsing"] = $row[17];
$testplan_resultpdf_pv1["pv1_8_expected_val"] = $row[18];
$testplan_resultpdf_pv1["pv1_8_actual_val"] = $row[19];
$testplan_resultpdf_pv1["pv1_8_pass"] = $row[20];
$testplan_resultpdf_pv1["pv1_8_comments"] = $row[21];
$testplan_resultpdf_pv1["pv1_8_signoff"] = $row[22];
$testplan_resultpdf_pv1["pv1_8_1_iscv_val"] = $row[23];
$testplan_resultpdf_pv1["pv1_8_1_hl7_parsing"] = $row[24];
$testplan_resultpdf_pv1["pv1_8_1_expected_val"] = $row[25];
$testplan_resultpdf_pv1["pv1_8_1_actual_val"] = $row[26];
$testplan_resultpdf_pv1["pv1_8_1_pass"] = $row[27];
$testplan_resultpdf_pv1["pv1_8_1_comments"] = $row[28];
$testplan_resultpdf_pv1["pv1_8_1_signoff"] = $row[29];
$testplan_resultpdf_pv1["pv1_8_2_iscv_val"] = $row[30];
$testplan_resultpdf_pv1["pv1_8_2_hl7_parsing"] = $row[31];
$testplan_resultpdf_pv1["pv1_8_2_expected_val"] = $row[32];
$testplan_resultpdf_pv1["pv1_8_2_actual_val"] = $row[33];
$testplan_resultpdf_pv1["pv1_8_2_pass"] = $row[34];
$testplan_resultpdf_pv1["pv1_8_2_comments"] = $row[35];
$testplan_resultpdf_pv1["pv1_8_2_signoff"] = $row[36];

					array_push($response["testplan_resultpdf_pv1"], $testplan_resultpdf_pv1) ;

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
				$secSign = $row[43] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultpdf_pv1
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resultpdf_pv1["pv1_2_iscv_val"] = $row[2];
$testplan_resultpdf_pv1["pv1_2_hl7_parsing"] = $row[3];
$testplan_resultpdf_pv1["pv1_2_expected_val"] = $row[4];
$testplan_resultpdf_pv1["pv1_2_actual_val"] = $row[5];
$testplan_resultpdf_pv1["pv1_2_pass"] = $row[6];
$testplan_resultpdf_pv1["pv1_2_comments"] = $row[7];
$testplan_resultpdf_pv1["pv1_2_signoff"] = $row[8];
$testplan_resultpdf_pv1["pv1_3_iscv_val"] = $row[9];
$testplan_resultpdf_pv1["pv1_3_hl7_parsing"] = $row[10];
$testplan_resultpdf_pv1["pv1_3_expected_val"] = $row[11];
$testplan_resultpdf_pv1["pv1_3_actual_val"] = $row[12];
$testplan_resultpdf_pv1["pv1_3_pass"] = $row[13];
$testplan_resultpdf_pv1["pv1_3_comments"] = $row[14];
$testplan_resultpdf_pv1["pv1_3_signoff"] = $row[15];
$testplan_resultpdf_pv1["pv1_8_iscv_val"] = $row[16];
$testplan_resultpdf_pv1["pv1_8_hl7_parsing"] = $row[17];
$testplan_resultpdf_pv1["pv1_8_expected_val"] = $row[18];
$testplan_resultpdf_pv1["pv1_8_actual_val"] = $row[19];
$testplan_resultpdf_pv1["pv1_8_pass"] = $row[20];
$testplan_resultpdf_pv1["pv1_8_comments"] = $row[21];
$testplan_resultpdf_pv1["pv1_8_signoff"] = $row[22];
$testplan_resultpdf_pv1["pv1_8_1_iscv_val"] = $row[23];
$testplan_resultpdf_pv1["pv1_8_1_hl7_parsing"] = $row[24];
$testplan_resultpdf_pv1["pv1_8_1_expected_val"] = $row[25];
$testplan_resultpdf_pv1["pv1_8_1_actual_val"] = $row[26];
$testplan_resultpdf_pv1["pv1_8_1_pass"] = $row[27];
$testplan_resultpdf_pv1["pv1_8_1_comments"] = $row[28];
$testplan_resultpdf_pv1["pv1_8_1_signoff"] = $row[29];
$testplan_resultpdf_pv1["pv1_8_2_iscv_val"] = $row[30];
$testplan_resultpdf_pv1["pv1_8_2_hl7_parsing"] = $row[31];
$testplan_resultpdf_pv1["pv1_8_2_expected_val"] = $row[32];
$testplan_resultpdf_pv1["pv1_8_2_actual_val"] = $row[33];
$testplan_resultpdf_pv1["pv1_8_2_pass"] = $row[34];
$testplan_resultpdf_pv1["pv1_8_2_comments"] = $row[35];
$testplan_resultpdf_pv1["pv1_8_2_signoff"] = $row[36];

					array_push($response["testplan_resultpdf_pv1"], $testplan_resultpdf_pv1) ;
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
