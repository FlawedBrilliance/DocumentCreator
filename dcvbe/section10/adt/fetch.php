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

	$response['testplan_adt'] = array() ;
	$testplan_adt = array() ;

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
				$secSign = $row[23] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_adt
						WHERE sec_sign = '$secSign' ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{

					$testplan_adt["issue_num"] = $row[2];
$testplan_adt["date_time"] = $row[3];
$testplan_adt["issue_by"] = $row[4];
$testplan_adt["priority"] = $row[5];
$testplan_adt["issue_des"] = $row[6];
$testplan_adt["assign_to"] = $row[7];
$testplan_adt["comments"] = $row[8];
$testplan_adt["resolved_by"] = $row[9];
$testplan_adt["closed_date"] = $row[10];
$testplan_adt["status"] = $row[11];

					array_push($response["testplan_adt"], $testplan_adt) ;

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
				$secSign = $row[23] ;

				//Query Contact Table
				$sql = "SELECT *
						FROM section10_testplan_adt
						WHERE sec_sign = '$secSign'
						ORDER BY row_counter DESC ; " ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				while ($row = mysqli_fetch_row($result))
				{
					$testplan_adt["issue_num"] = $row[2];
$testplan_adt["date_time"] = $row[3];
$testplan_adt["issue_by"] = $row[4];
$testplan_adt["priority"] = $row[5];
$testplan_adt["issue_des"] = $row[6];
$testplan_adt["assign_to"] = $row[7];
$testplan_adt["comments"] = $row[8];
$testplan_adt["resolved_by"] = $row[9];
$testplan_adt["closed_date"] = $row[10];
$testplan_adt["status"] = $row[11];



					array_push($response["testplan_adt"], $testplan_adt) ;
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
