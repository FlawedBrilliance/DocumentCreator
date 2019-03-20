<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if(($_GET['prs'])&&($_GET['token']))
	{
		//Get PRS and Token
		$prs = $_GET['prs'];
		$token = $_GET['token'];

		//Check if Revision table already updated
		$sql = "SELECT *
				FROM revisions
				WHERE rev_sign='$token' AND published=0;" ;
		$result = mysqli_query($dcConn,$sql);
		$resultCheck = mysqli_num_rows($result) ;

		if($resultCheck<1)
		{
		    //Deactivate Submit Button
			$response = 0 ;
		}
		else
		{
			//Activate Submit Button
			$response = 1 ;
		}
	}
	else
	{
		$response = "Something went wrong, please contact administrator before editing.";
	}		

	//Output Data in JSON
	echo ($response);

?>
