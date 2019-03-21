<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section4_connectivityDetails
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['connectivityDetailsCtr'] ;
	   
	    while($ctr>0)
	    {
	    	if(isset($_POST['connectivitySystem'.$ctr]))
	    	{
	    		$connectivityType = $_POST['connectivityType'.$ctr];
	    		$connectivitySystem = $_POST['connectivitySystem'.$ctr];
	    		$connectivityInterfaceType = $_POST['connectivityInterfaceType'.$ctr];
	    		$connectivityMessageEvent = $_POST['connectivityMessageEvent'.$ctr];
	    		$connectivityDirection = $_POST['connectivityDirection'.$ctr];
	    		$connectivitySource = $_POST['connectivitySource'.$ctr];
	    		$connectivitySourceIp = $_POST['connectivitySourceIp'.$ctr];
	    		$connectivityDestination = $_POST['connectivityDestination'.$ctr];
	    		$connectivityDestinationIp = $_POST['connectivityDestinationIp'.$ctr];
	    		$connectivityPort = $_POST['connectivityPort'.$ctr];
	    		$connectivityAeTitle = $_POST['connectivityAeTitle'.$ctr];

	    		$sql = "INSERT INTO section4_connectivityDetails (sec_sign,type,system_details,interface_type,message_event,interface_direction,conn_source,source_ip,conn_destination,destination_ip,port,ae_title)
	    				VALUES ('$token','$connectivityType','$connectivitySystem','$connectivityInterfaceType','$connectivityMessageEvent','$connectivityDirection','$connectivitySource','$connectivitySourceIp','$connectivityDestination','$connectivityDestinationIp','$connectivityPort','$connectivityAeTitle'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section4_modalityDetails
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['imagingModalityCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['IMvendor'.$ctr]))
	    	{
	    		$IMvendor = $_POST['IMvendor'.$ctr];
	    		$IMhostname = $_POST['IMhostname'.$ctr];
	    		$IMip = $_POST['IMip'.$ctr];
	    		$IMaePort = $_POST['IMaePort'.$ctr];
	    		$IMmodel = $_POST['IMmodel'.$ctr];
	    		$IMlocation = $_POST['IMlocation'.$ctr];
	    		$IMserial = $_POST['IMserial'.$ctr];

	    		$sql = "INSERT INTO section4_modalityDetails (sec_sign,vendor,hostname,ip,ae_title,model,location,serial)
	    				VALUES ('$token','$IMvendor','$IMhostname','$IMip','$IMaePort','$IMmodel','$IMlocation','$IMserial'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section4='$token'
	    		WHERE rev_sign='$token';" ;
	    mysqli_query($dcConn,$sql);

	    //Success Message
		$response['status'] = 1 ;
	    $response['message'] = "Changes were saved successfully, don't forget to publish and create a new revision, or they will be lost permanently" ;

	}
	else
	{
		//Failure Message
		$response['status'] = 0 ;
		$response['message'] = "Something went wrong (Error: Token not caught), please contact administrator with Reference ID: ".$token;
	}

	//Output Data in JSON
	echo json_encode($response);

?>