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

	//SQL Query
	$query = $_GET['q'];
	$sql = "SELECT CONCAT_WS(\" \",prs,site_name,site_city,site_state,site_country), prs
			FROM sites
			WHERE LOWER(CONCAT_WS(\" \",prs,site_name,site_city,site_state,site_country)) LIKE '%$query%';" ;

	//Result Handler
	$maxCount = 5 ;
	$result = mysqli_query($dcConn,$sql);
	$resultCheck = mysqli_num_rows($result) ;
    if ($resultCheck>0)
    {
    	while(($row = mysqli_fetch_row($result))&&($maxCount>0))
    	{
    		$results["title"] = $row['0'] ;
            $results["siteName"] = $row['0'] ;
            $results["prs"] = $row['1'] ;
            $results["token"] = uniqid() ;
            array_push($response["results"], $results) ;
            $maxCount--;
		}
    }

	//Output Data in JSON
	echo json_encode($response);

?>
