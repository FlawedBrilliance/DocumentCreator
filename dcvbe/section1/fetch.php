<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);
	
	//Main Response Array
	$response = array() ;
	
	//Results Array
	$response["results"] = array() ;
	$results = array() ;

	if($_GET['prs'])
	{
		//Get PRS
		$prs = $_GET['prs'] ;
		
		//Revision History
		$response["revision"] = array() ;
		$revision = array() ;
		$sql = "SELECT *
				FROM revisions
				WHERE prs = '$prs' AND published=1
				ORDER BY rev_date ASC;" ;
		$result = mysqli_query($dcConn,$sql);
		$resultCheck = mysqli_num_rows($result) ;
		while ($row = mysqli_fetch_row($result))
		{
			$revision["revisionNumber"] = $row[2].'.'.$row[3] ;
			$revision["revisionDescription"] = $row[4] ;
			$revision["revisionAuthor"] = $row[5] ;
			$revision["revisionDate"] = $row[6] ;

			array_push($response["revision"], $revision) ;
		}
	}
	else
	{
		$response = "Something went wrong" ;
	}

	//Output Data in JSON
	echo json_encode($response);

?>
