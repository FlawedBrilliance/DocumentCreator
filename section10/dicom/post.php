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
		$sql1 = "DELETE FROM section10_testplan_dicom_worklist_createorder
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql1);

		$sql2 = "DELETE FROM section10_testplan_dicom_usmodality
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql2);

		$sql3 = "DELETE FROM section10_testplan_dicom_resultmsg
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql3);

		$sql4 = "DELETE FROM section10_testplan_dicom_imagetransfer
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql4);

		$sql5 = "DELETE FROM section10_testplan_dicom_dw_resultmsg
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql5);

		$sql6 = "DELETE FROM section10_testplan_dicom_dw_reconcile_study
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql6);

		$sql7 = "DELETE FROM section10_testplan_dicom_dw_images
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql7);

		$sql8 = "DELETE FROM section10_testplan_dicom_dw_createreport
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql8);

		$sql9 = "DELETE FROM section10_testplan_dicom_createreport
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql9);		 
		

		
		//Get the number of rows
	    $ctr = $_POST['TableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['Pass_fail'.$ctr.'1']))
	    	{
//Dicom Worklist create_order
	    		$create_order_pass = $_POST['Pass_fail'.$ctr.'1'];

				$create_order_comments = $_POST['Comments'.$ctr.'1'];

				$orm_pass = $_POST['Pass_fail'.$ctr.'2'];

				$orm_comments = $_POST['Comments'.$ctr.'2'];

				$modality_query_pass = $_POST['Pass_fail'.$ctr.'3'];

				$modality_query_comments = $_POST['Comments'.$ctr.'3'];

				$suid_pass = $_POST['Pass_fail'.$ctr.'4'];

				$suid_comments = $_POST['Comments'.$ctr.'4'];

				$update_patient_pass = $_POST['Pass_fail'.$ctr.'5'];

				$update_patient_comments = $_POST['Comments'.$ctr.'5'];

				$neworder_pass = $_POST['Pass_fail'.$ctr.'6'];

				$neworder_comments = $_POST['Comments'.$ctr.'6'];



//DIcom US modality				

				$initiate_query_pass = $_POST['Pass_fail'.$ctr.'7'];

				$initiate_query_comments = $_POST['Comments'.$ctr.'7'];

				$locate_order_pass = $_POST['Pass_fail'.$ctr.'8'];

				$locate_order_comments = $_POST['Comments'.$ctr.'8'];





//Dicom image transfer
				$select_patient_pass = $_POST['Pass_fail'.$ctr.'9'];

				$select_patient_comments = $_POST['Comments'.$ctr.'9'];

				$study_pass = $_POST['Pass_fail'.$ctr.'10'];

				$study_comments = $_POST['Comments'.$ctr.'10'];

				$transfer_images_pass = $_POST['Pass_fail'.$ctr.'11'];

				$transfer_images_comments = $_POST['Comments'.$ctr.'11'];

				$verify_status_pass = $_POST['Pass_fail'.$ctr.'12'];

				$verify_status_comments = $_POST['Comments'.$ctr.'12'];



//Dicom create report


				$create_report_pass1 = $_POST['Pass_fail'.$ctr.'13'];

				$create_report_comments1 = $_POST['Comments'.$ctr.'13'];

				$finalize_study_pass1 = $_POST['Pass_fail'.$ctr.'14'];

				$finalize_study_comments1 = $_POST['Comments'.$ctr.'14'];

				$verify_status_pass1 = $_POST['Pass_fail'.$ctr.'15'];

				$verify_status_comments1 = $_POST['Comments'.$ctr.'15'];



//Dicom_result_msg 

				$createoru_pass = $_POST['Pass_fail'.$ctr.'16'];

				$createoru_comments = $_POST['Comments'.$ctr.'16'];

				$sendoru_pass = $_POST['Pass_fail'.$ctr.'17'];

				$sendoru_comments = $_POST['Comments'.$ctr.'17'];

				$verify_status_pass = $_POST['Pass_fail'.$ctr.'18'];

				$verify_status_comments = $_POST['Comments'.$ctr.'18'];

				$ammend_report_pass = $_POST['Pass_fail'.$ctr.'19'];

				$ammend_report_comments = $_POST['Comments'.$ctr.'19'];

				$finalize_report_pass = $_POST['Pass_fail'.$ctr.'20'];

				$finalize_report_comments = $_POST['Comments'.$ctr.'20'];

				$verify_result_pass = $_POST['Pass_fail'.$ctr.'21'];

				$verify_result_comments = $_POST['Comments'.$ctr.'21'];




//Dicom Dw Images				

				$enter_mrn_pass = $_POST['Pass_fail'.$ctr.'22'];

				$enter_mrn_comments = $_POST['Comments'.$ctr.'22'];

				$study_pass = $_POST['Pass_fail'.$ctr.'23'];

				$study_comments = $_POST['Comments'.$ctr.'23'];

				$transfer_images_pass = $_POST['Pass_fail'.$ctr.'24'];

				$transfer_images_comments = $_POST['Comments'.$ctr.'24'];

				$verify_status_pass = $_POST['Pass_fail'.$ctr.'25'];

				$verify_status_comments = $_POST['Comments'.$ctr.'25'];




//Dicom Reconcile study 

				$locate_order_pass = $_POST['Pass_fail'.$ctr.'26'];

				$locate_order_comments = $_POST['Comments'.$ctr.'26'];

				$merge_study_pass = $_POST['Pass_fail'.$ctr.'27'];

				$merge_study_comments = $_POST['Comments'.$ctr.'27'];


//Dicom Dw create report

				$create_report_pass = $_POST['Pass_fail'.$ctr.'28'];

				$create_report_comments = $_POST['Comments'.$ctr.'28'];

				$finalize_study_pass = $_POST['Pass_fail'.$ctr.'29'];

				$finalize_study_comments = $_POST['Comments'.$ctr.'29'];

				$verify_status_pass = $_POST['Pass_fail'.$ctr.'30'];

				$verify_status_comments = $_POST['Comments'.$ctr.'30'];


//Dicom DW Result MSg 
				$createoru_pass = $_POST['Pass_fail'.$ctr.'31'];

				$createoru_comments = $_POST['Comments'.$ctr.'31'];

				$sendoru_pass = $_POST['Pass_fail'.$ctr.'32'];

				$sendoru_comments = $_POST['Comments'.$ctr.'32'];

				$verify_status_pass = $_POST['Pass_fail'.$ctr.'33'];

				$verify_status_comments = $_POST['Comments'.$ctr.'33'];
	    		

	    		$sql1 = "INSERT INTO section10_testplan_dicom_worklist_createorder (sec_sign,create_order_pass,create_order_comments,orm_pass,orm_comments,modality_query_pass,modality_query_comments,suid_pass,suid_comments,update_patient_pass,update_patient_comments,neworder_pass,neworder_comments)VALUES ('$token','$create_order_pass','$create_order_comments','$orm_pass','$orm_comments','$modality_query_pass','$modality_query_comments','$suid_pass','$suid_comments','$update_patient_pass','$update_patient_comments','neworder_pass','$neworder_comments')" ;

				mysqli_query($dcConn,$sql1);


	    		$sql2 = "INSERT INTO section10_testplan_dicom_usmodality(sec_sign,initiate_query_pass,initiate_query_comments,locate_order_pass,locate_order_comments) VALUES ('$token','$initiate_query_pass','$initiate_query_comments','$locate_order_pass','$locate_order_comments')";

				mysqli_query($dcConn,$sql2);


	    		$sql3 = "INSERT INTO section10_testplan_dicom_imagetransfer(sec_sign,select_patient_pass,select_patient_comments,study_pass,study_comments,transfer_images_pass,transfer_images_comments,verify_status_pass,verify_status_comments) VALUES ('$token','$select_patient_pass','$select_patient_comments','$study_pass','$study_comments','$transfer_images_pass','$transfer_images_comments','$verify_status_pass','$verify_status_comments','$verify_status_comments')";

				mysqli_query($dcConn,$sql3);


	    		$sql4 = "INSERT INTO section10_testplan_dicom_createreport(sec_sign,create_report_pass,create_report_comments,finalize_study_pass,finalize_study_comments,verify_status_pass,verify_status_comments) VALUES ('$token','$create_report_pass1','$create_report_comments1','$finalize_study_pass1','$finalize_study_comments1','verify_status_pass1','$verify_status_comments1')";

				mysqli_query($dcConn,$sql4);


	    		$sql5 = "INSERT INTO section10_testplan_dicom_resultmsg(sec_sign,createoru_pass,createoru_comments,sendoru_pass,sendoru_comments,verify_status_pass,verify_status_comments,ammend_report_pass,ammend_report_comments,finalize_report_pass,finalize_report_comments,verify_result_pass,verify_result_comments) VALUES ('$token','$createoru_pass','$createoru_comments','$sendoru_pass','$sendoru_comments',
	    			'$verify_status_pass','$verify_status_comments','$ammend_report_pass','$ammend_report_comments','$finalize_report_pass','$finalize_report_comments','$verify_result_pass','$verify_result_comments')";

				mysqli_query($dcConn,$sql5);



	    		$sql6 = "INSERT INTO section10_testplan_dicom_dw_images(sec_sign,enter_mrn_pass,enter_mrn_comments,study_pass,study_comments,transfer_images_pass,transfer_images_comments,verify_status_pass,verify_status_comments) VALUES ('$token','$enter_mrn_pass','$enter_mrn_comments','$study_pass','$study_comments','transfer_images_pass','$transfer_images_comments','$verify_status_pass','$verify_status_comments')";

				mysqli_query($dcConn,$sql6);



	    		$sql7 = "INSERT INTO section10_testplan_dicom_dw_reconcile_study(sec_sign,locate_order_pass,locate_order_comments,merge_study_pass,merge_study_comments) VALUES ('$token','$locate_order_pass','$locate_order_comments',
	    		'$merge_study_pass','$merge_study_comments')";

				mysqli_query($dcConn,$sql7);



	    		$sql8 = "INSERT INTO section10_testplan_dicom_dw_resultmsg(sec_sign,createoru_pass,createoru_comments,sendoru_pass,sendoru_comments,verify_status_pass,verify_status_comments) VALUES ('$token','$createoru_pass','$createoru_comments','$sendoru_pass','$sendoru_comments','verify_status_pass','$verify_status_comments')";

				mysqli_query($dcConn,$sql8);

				$sql9 = "INSERT INTO section10_testplan_dicom_dw_createreport(sec_sign,create_report_pass,create_report_comments,finalize_study_pass,finalize_study_comments,verify_status_pass,verify_status_comments) VALUES ('$token','$create_report_pass','$create_report_comments','$finalize_report_pass','$finalize_report_comments','$verify_result_pass','$verify_result_comments')";

				mysqli_query($dcConn,$sql9);



	    	}
	    	$ctr--;


	    	
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section10_dicom_worklist_createorder='$token',section10_dicom_usmodality='$token',section10_dicom_imagetransfer='$token',section10_dicom_createreport='$token',section10_dicom_resultmsg='$token',section10_dicom_dw_images='$token',section10_dicom_dw_reconcile_study='$token',section10_dicom_dw_createreport='$token',section10_dicom_dw_resultmsg='$token'
	    		WHERE rev_sign='$token'" ;
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
