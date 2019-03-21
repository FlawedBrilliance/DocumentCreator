<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	$response = array();

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section10_testplan_procedures
				WHERE sec_sign='$token';" ;
		

		mysqli_query($dcConn,$sql);

		//Get the number of rows
	    $ctr = $_POST['TableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['procedure_Code'.$ctr.'1']))
	    	{
	    		$his_procedure_code = $_POST['procedure_Code'.$ctr.'1'];
	    		$his_procedure = $_POST['Procedures'.$ctr.'1'];
	    		$iscv_study_type = $_POST['ISCV_Study_Type'.$ctr.'1'];
	    		$iscv_test_date = $_POST['ISCV_Test_Date'.$ctr.'1'];
	    		$iscv_expected_value = $_POST['ISCV_Expectedresult'.$ctr.'1'];
	    		$iscv_actual_value = $_POST['ISCV_Actualresult'.$ctr.'1'];
	    		$iscv_pass_fail = $_POST['ISCV_Pass_fail'.$ctr.'1'];
	    		$iscv_accession_num = $_POST['ISCV_accesionnumber'.$ctr.'1'];
	    		$iscv_comments = $_POST['ISCV_signoff'.$ctr.'1'];
	    		$his_test_date = $_POST['HIS_Test_Date'.$ctr.'1'];
	    		$his_expected_value = $_POST['HIS_Expectedresult'.$ctr.'1'];
	    		$his_actual_value = $_POST['HIS_Actualresult'.$ctr.'1'];
	    		$his_pass_fail = $_POST['HIS_Pass_fail'.$ctr.'1'];
	    		$his_accession_num = $_POST['HIS_accesionnumber'.$ctr.'1'];
	    		$his_report_format = $_POST['HIS_report'.$ctr.'1'];
	    		$his_signoff = $_POST['HIS_signoff'.$ctr.'1'];
	    		

	    		$sql1 = "INSERT INTO section10_testplan_procedures (sec_sign,his_procedure_code,his_procedure,iscv_study_type,
    iscv_test_date,
    iscv_expected_value,
    iscv_actual_value,
    iscv_pass_fail,
    iscv_accession_num,
    iscv_comments,
    his_test_date,his_expected_value,his_actual_value,his_pass_fail,his_accession_num,his_report_format,his_signoff)
	    				VALUES ('$token','$his_procedure_code','$his_procedure','$iscv_study_type','$iscv_test_date','$iscv_expected_value','$iscv_actual_value','$iscv_pass_fail','$iscv_accession_num','$iscv_comments','$his_test_date','his_expected_value','$his_actual_value','$his_pass_fail','$his_accession_num','$his_report_format','$his_signoff')" ;
							mysqli_query($dcConn,$sql1);
	    	}
	    	$ctr--;


	    	
	    }

	    //Update Sections
	    $sql2 = "UPDATE sections
	    		SET section10_procedures='$token'
	    		WHERE rev_sign='$token';" ;
	    mysqli_query($dcConn,$sql2);
	   

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
