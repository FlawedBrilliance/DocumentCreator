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

	$response['testplan_resultpdf'] = array() ;
	$testplan_resultpdf = array() ;

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
				$secSign = $row[37] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultpdf
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

$testplan_resultpdf["oru_date"] = $row[2];
$testplan_resultpdf["oru_pass"] = $row[3];
$testplan_resultpdf["oru_expected_val"] = $row[4];
$testplan_resultpdf["oru_actual_val"] = $row[5];
$testplan_resultpdf["oru_comments"] = $row[6];
$testplan_resultpdf["oru_signoff"] = $row[7];
$testplan_resultpdf["oru_amended_date"] = $row[8];
$testplan_resultpdf["oru_amended_pass"] = $row[9];
$testplan_resultpdf["oru_amended_expected_val"] = $row[10];
$testplan_resultpdf["oru_amended_actual_val"] = $row[11];
$testplan_resultpdf["oru_amended_comments"] = $row[12];
$testplan_resultpdf["oru_amended_signoff"] = $row[13];
$testplan_resultpdf["oru_amended2_date"] = $row[14];
$testplan_resultpdf["oru_amended2_pass"] = $row[15];
$testplan_resultpdf["oru_amended2_expected_val"] = $row[16];
$testplan_resultpdf["oru_amended2_actual_val"] = $row[17];
$testplan_resultpdf["oru_amended2_comments"] = $row[18];
$testplan_resultpdf["oru_amended2_signoff"] = $row[19];


					array_push($response["testplan_resultpdf"], $testplan_resultpdf) ;

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
				$secSign = $row[37] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_resultpdf
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
$testplan_resultpdf["oru_date"] = $row[2];
$testplan_resultpdf["oru_pass"] = $row[3];
$testplan_resultpdf["oru_expected_val"] = $row[4];
$testplan_resultpdf["oru_actual_val"] = $row[5];
$testplan_resultpdf["oru_comments"] = $row[6];
$testplan_resultpdf["oru_signoff"] = $row[7];
$testplan_resultpdf["oru_amended_date"] = $row[8];
$testplan_resultpdf["oru_amended_pass"] = $row[9];
$testplan_resultpdf["oru_amended_expected_val"] = $row[10];
$testplan_resultpdf["oru_amended_actual_val"] = $row[11];
$testplan_resultpdf["oru_amended_comments"] = $row[12];
$testplan_resultpdf["oru_amended_signoff"] = $row[13];
$testplan_resultpdf["oru_amended2_date"] = $row[14];
$testplan_resultpdf["oru_amended2_pass"] = $row[15];
$testplan_resultpdf["oru_amended2_expected_val"] = $row[16];
$testplan_resultpdf["oru_amended2_actual_val"] = $row[17];
$testplan_resultpdf["oru_amended2_comments"] = $row[18];
$testplan_resultpdf["oru_amended2_signoff"] = $row[19];

					array_push($response["testplan_resultpdf"], $testplan_resultpdf) ;
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
