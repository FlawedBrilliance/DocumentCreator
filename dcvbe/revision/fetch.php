<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if($_GET['prs'])
	{
		//Main Response Array
		$response = array() ;
		$prs = $_GET['prs'] ;

		$sql = "SELECT *
				FROM revisions
				WHERE prs = '$prs' AND published=1
				ORDER BY rev_date DESC;" ;
		$result = mysqli_query($dcConn,$sql);
		$resultCheck = mysqli_num_rows($result) ;
		if($resultCheck>0)
		{
			$row = mysqli_fetch_row($result) ;
			$response['revNum1'] = $row[2] ;
			//Increment by 1
			$response['revNum2'] = $row[3]+1 ;
		}
		else
		{
			$response = "Something went wrong (Error: Latest revision couldn't be fetched), please contact administrator." ;
		}
		
	}
	else
	{
		$response = "Something went wrong (Error: Could not fetch prs), please contact administrator." ;
	}

	//Output Data in JSON
	echo json_encode($response);

?>
