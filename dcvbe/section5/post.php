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
		$sql = "DELETE FROM section5_race
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['raceCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['raceSourceValue'.$ctr]))
	    	{
	    		$raceSourceValue = $_POST['raceSourceValue'.$ctr];
	    		$raceDestinationValue = $_POST['raceDestinationValue'.$ctr];
	    		$raceDescription = $_POST['raceDescription'.$ctr];

	    		$sql = "INSERT INTO section5_race (sec_sign,source_value,destination_value,description)
	    				VALUES ('$token','$raceSourceValue','$raceDestinationValue','$raceDescription'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Truncate Previous Edits of same Token
		$sql = "DELETE FROM section5_patientClass
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['patientClassCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['patientClassSourceValue'.$ctr]))
	    	{
	    		$patientClassSourceValue = $_POST['patientClassSourceValue'.$ctr];
	    		$patientClassDestinationValue = $_POST['patientClassDestinationValue'.$ctr];
	    		$patientClassDescription = $_POST['patientClassDescription'.$ctr];

	    		$sql = "INSERT INTO section5_patientClass (sec_sign,source_value,destination_value,description)
	    				VALUES ('$token','$patientClassSourceValue','$patientClassDestinationValue','$patientClassDescription'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Truncate Previous Edits of same Token
		$sql = "DELETE FROM section5_orderControlCode
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['orderControlCodeCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['orderControlCodeMessageType'.$ctr]))
	    	{
	    		$orderControlCodeMessageType = $_POST['orderControlCodeMessageType'.$ctr];
	    		$orderControlCodeTrigger = $_POST['orderControlCodeTrigger'.$ctr];
	    		$orderControlCodeDescription = $_POST['orderControlCodeDescription'.$ctr];

	    		$sql = "INSERT INTO section5_orderControlCode (sec_sign,message_type,processing_trigger,description)
	    				VALUES ('$token','$orderControlCodeMessageType','$orderControlCodeTrigger','$orderControlCodeDescription'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Truncate Previous Edits of same Token
		$sql = "DELETE FROM section5_orderStatus
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['orderStatusCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['orderStatusMessageType'.$ctr]))
	    	{
	    		$orderStatusMessageType = $_POST['orderStatusMessageType'.$ctr];
	    		$orderStatusTrigger = $_POST['orderStatusTrigger'.$ctr];
	    		$orderStatusDescription = $_POST['orderStatusDescription'.$ctr];

	    		$sql = "INSERT INTO section5_orderStatus (sec_sign,message_type,processing_trigger,description)
	    				VALUES ('$token','$orderStatusMessageType','$orderStatusTrigger','$orderStatusDescription'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Truncate Previous Edits of same Token
		$sql = "DELETE FROM section5_orderControlStatus
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['orderControlStatusCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['orderControlStatusMessageType'.$ctr]))
	    	{
	    		$orderControlStatusMessageType = $_POST['orderControlStatusMessageType'.$ctr];
	    		$orderControlStatusTrigger = $_POST['orderControlStatusTrigger'.$ctr];
	    		$orderControlStatusDescription = $_POST['orderControlStatusDescription'.$ctr];

	    		$sql = "INSERT INTO section5_orderControlStatus (sec_sign,message_type,processing_trigger,description)
	    				VALUES ('$token','$orderControlStatusMessageType','$orderControlStatusTrigger','$orderControlStatusDescription'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Truncate Previous Edits of same Token
		$sql = "DELETE FROM section5_examModalityType
				WHERE sec_sign='$token';" ;
		mysqli_query($dcConn,$sql);
		//Get the number of rows
	    $ctr = $_POST['examModalityTypeCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['examModalityTypeExamCode'.$ctr]))
	    	{
	    		$examModalityTypeExamCode = $_POST['examModalityTypeExamCode'.$ctr];
	    		$examModalityTypeStudyType = $_POST['examModalityTypeStudyType'.$ctr];
	    		$examModalityTypeModality = $_POST['examModalityTypeModality'.$ctr];
	    		$examModalityTypeAE = $_POST['examModalityTypeAE'.$ctr];
	    		$examModalityTypeProcStepCode = $_POST['examModalityTypeProcStepCode'.$ctr];
	    		$examModalityTypeCPT = $_POST['examModalityTypeCPT'.$ctr];
	    		$examModalityTypeProcStepDesc = $_POST['examModalityTypeProcStepDesc'.$ctr];
	    		$examModalityTypeCDR = $_POST['examModalityTypeCDR'.$ctr];

	    		$sql = "INSERT INTO section5_examModalityType (sec_sign,exam_code,study_type,modality,ae_title,procStepCode,cptCode,procStepDesc,cdrCode)
	    				VALUES ('$token','$examModalityTypeExamCode','$examModalityTypeStudyType','$examModalityTypeModality','$examModalityTypeAE','$examModalityTypeProcStepCode','$examModalityTypeCPT','$examModalityTypeProcStepDesc','$examModalityTypeCDR'); " ;
	    		mysqli_query($dcConn,$sql);
	    	}
	    	$ctr--;
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section5='$token'
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
