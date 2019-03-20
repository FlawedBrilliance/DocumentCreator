<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); 
	ini_set('display_errors', 1);

	$response = array();

	if($_POST['token'])
	{
		//Get the Token	
		$token = $_POST['token'];

		//Truncate Previous Edits of same Token
		$sql = "DELETE FROM section10_testplan_orders_neworder
				WHERE sec_sign='$token'" ;
		
		$sql3 = "DELETE FROM section10_testplan_orders_cancelorder
				WHERE sec_sign='$token'" ;

		$sql4 = "DELETE FROM section10_testplan_orders_status
				WHERE sec_sign='$token'" ;	
		
		
		mysqli_query($dcConn,$sql);
		mysqli_query($dcConn,$sql3);
		mysqli_query($dcConn,$sql4);


		//Get the number of rows
	    $ctr = $_POST['TableCtr'];

	    while($ctr>0)
	    {
            var_dump(isset($_POST['test_details'.$ctr.'1']));
	    	if(isset($_POST['test_details'.$ctr.'1']))
	    	{
	    		$orm_new_test_date = $_POST['test_details'.$ctr.'1'];
				$orm_new_pass_fail = $_POST['pass_fail'.$ctr.'1'];
				$orm_new_expected_value = $_POST['expected_result'.$ctr.'1'];
				$orm_new_actual_value = $_POST['actual_result'.$ctr.'1'];
				$orm_new_comments = $_POST['comments'.$ctr.'1'];
				$orm_new_signoff = $_POST['sign_off'.$ctr.'1'];
				$orm_future_test_date = $_POST['test_details'.$ctr.'2'];
				$orm_future_pass_fail = $_POST['pass_fail'.$ctr.'2'];
				$orm_future_expected_vlaue = $_POST['expected_result'.$ctr.'2'];
				$orm_future_actual_value = $_POST['actual_result'.$ctr.'2'];
				$orm_future_comments = $_POST['comments'.$ctr.'2'];
				$orm_future_signoff = $_POST['sign_off'.$ctr.'2'];
				$orm_repeat_test_date = $_POST['test_details'.$ctr.'3'];
				$orm_repeat_pass_fail = $_POST['pass_fail'.$ctr.'3'];
				$orm_repeat_expected_value = $_POST['expected_result'.$ctr.'3'];
				$orm_repeat_actual_value = $_POST['actual_result'.$ctr.'3'];
				$orm_repeat_comments = $_POST['comments'.$ctr.'3'];
				$orm_repeat_signoff = $_POST['sign_off'.$ctr.'3'];
				$orm_recr_test_date = $_POST['test_details'.$ctr.'4'];
				$orm_recr_pass_fail = $_POST['pass_fail'.$ctr.'4'];
				$orm_recr_expected_value = $_POST['expected_result'.$ctr.'4'];
				$orm_recr_actual_value = $_POST['actual_result'.$ctr.'4'];
				$orm_recr_comments = $_POST['comments'.$ctr.'4'];
				$orm_recr_signoff = $_POST['sign_off'.$ctr.'4'];
				$orm_noncardio_test_date = $_POST['test_details'.$ctr.'5'];
				$orm_noncardio_pass_fail = $_POST['pass_fail'.$ctr.'5'];
				$orm_noncardio_expected_value = $_POST['expected_result'.$ctr.'5'];
				$orm_noncardio_actual_value = $_POST['actual_result'.$ctr.'5'];
				$orm_noncardio_comments = $_POST['comments'.$ctr.'5'];
				$orm_noncardio_signoff = $_POST['sign_off'.$ctr.'5'];
				$orm_ca_cancel_test_date = $_POST['test_details'.$ctr.'6'];
				$orm_ca_cancel_pass_fail = $_POST['pass_fail'.$ctr.'6'];
				$orm_ca_cancel_expected_value = $_POST['expected_result'.$ctr.'6'];
				$orm_ca_cancel_actual_value = $_POST['actual_result'.$ctr.'6'];
				$orm_ca_cancel_comments = $_POST['comments'.$ctr.'6'];
				$orm_ca_cancel_signoff = $_POST['sign_off'.$ctr.'6'];
				$orm_oc_cancel_test_date = $_POST['test_details'.$ctr.'7'];
				$orm_oc_cancel_pass_fail = $_POST['pass_fail'.$ctr.'7'];
				$orm_oc_cancel_expected_value = $_POST['expected_result'.$ctr.'7'];
				$orm_oc_cancel_actual_value = $_POST['actual_result'.$ctr.'7'];
				$orm_oc_cancel_comments = $_POST['comments'.$ctr.'7'];
				$orm_oc_cancel_signoff = $_POST['sign_off'.$ctr.'7'];
				$orm_dc_discontinue_test_date = $_POST['test_details'.$ctr.'8'];
				$orm_dc_discontinue_pass_fail = $_POST['pass_fail'.$ctr.'8'];
				$orm_dc_discontinue_expected_vlaue = $_POST['expected_result'.$ctr.'8'];
				$orm_dc_discontinue_actual_value = $_POST['actual_result'.$ctr.'8'];
				$orm_dc_discontinue_comments = $_POST['comments'.$ctr.'8'];
				$orm_dc_discontinue_signoff = $_POST['sign_off'.$ctr.'8'];
				$orm_od_discontinue_test_date = $_POST['test_details'.$ctr.'9'];
				$orm_od_discontinue_pass_fail = $_POST['pass_fail'.$ctr.'9'];
				$orm_od_discontinue_expected_value = $_POST['expected_result'.$ctr.'9'];
				$orm_od_discontinue_actual_value = $_POST['actual_result'.$ctr.'9'];
				$orm_od_discontinue_comments = $_POST['comments'.$ctr.'9'];
				$orm_od_discontinue_signoff = $_POST['sign_off'.$ctr.'9'];
				$orm_ca_future_cancel_test_date = $_POST['test_details'.$ctr.'10'];
				$orm_ca_future_cancel_pass_fail = $_POST['pass_fail'.$ctr.'10'];
				$orm_ca_future_cancel_expected_value = $_POST['expected_result'.$ctr.'10'];
				$orm_ca_future_cancel_actual_value = $_POST['actual_result'.$ctr.'10'];
				$orm_ca_future_cancel_comments = $_POST['comments'.$ctr.'10'];
                $orm_ca_future_cancel_signoff         = $_POST['sign_off'.$ctr.'10'];
                
                $orm_oc_future_cancel_test_date         = $_POST['test_details'.$ctr.'11'];
                $orm_oc_future_cancel_test_pass_fail     = $_POST['pass_fail'.$ctr.'11'];           
                $orm_oc_future_cancel_expected_value    = $_POST['expected_result'.$ctr.'11'];
                $orm_oc_future_cancel_actual_value       = $_POST['actual_result'.$ctr.'11'];
                $orm_oc_future_cancel_comments      = $_POST['comments'.$ctr.'11'];
                $orm_oc_future_cancel_signoff    = $_POST['sign_off'.$ctr.'11'];
                $orm_dc_disc_future_test_date = $_POST['test_details'.$ctr.'12'];
                $orm_dc_disc_future_pass_fail        = $_POST['pass_fail'.$ctr.'12'];       
                $orm_dc_disc_future_expected_value   = $_POST['expected_result'.$ctr.'12'];
                $orm_dc_disc_future_actual_value = $_POST['actual_result'.$ctr.'12'];
                $orm_dc_disc_future_comments = $_POST['comments'.$ctr.'12'];
                $orm_dc_disc_future_signoff = $_POST['sign_off'.$ctr.'12'];
                $orm_od_disc_future_test_date = $_POST['test_details'.$ctr.'13'];
                $orm_od_disc_future_pass_fail     = $_POST['pass_fail'.$ctr.'13'];          
                $orm_od_disc_future_expected_value = $_POST['expected_result'.$ctr.'13'];
                $orm_od_disc_future_actual_value = $_POST['actual_result'.$ctr.'13'];
                $orm_od_disc_future_comments = $_POST['comments'.$ctr.'13'];
                $orm_od_disc_future_signoff = $_POST['sign_off'.$ctr.'13'];
                $orm_sc_pc_test_date = $_POST['test_details'.$ctr.'14'];
                $orm_sc_pc_pass_fail            = $_POST['pass_fail'.$ctr.'14'];    
                $orm_sc_pc_expected_value   = $_POST['expected_result'.$ctr.'14'];
                $orm_sc_pc_actual_value = $_POST['actual_result'.$ctr.'14'];
                $orm_sc_pc_comments = $_POST['comments'.$ctr.'14'];
                $orm_sc_pc_signoff = $_POST['sign_off'.$ctr.'14'];
 
                $orm_sc_sdc_test_date = $_POST['test_details'.$ctr.'15'];
                $orm_sc_sdc_pass_fail      = $_POST['pass_fail'.$ctr.'15'];         
                $orm_sc_sdc_expected_value  = $_POST['expected_result'.$ctr.'15'];
                $orm_sc_sdc_actual_value  = $_POST['actual_result'.$ctr.'15'];
                $orm_sc_sdc_comments = $_POST['comments'.$ctr.'15'];
                $orm_sc_sdc_signoff = $_POST['sign_off'.$ctr.'15'];
                $orm_sc_ip_test_date = $_POST['test_details'.$ctr.'16'];
                $orm_sc_ip_pass_fail      = $_POST['pass_fail'.$ctr.'16'];          
                $orm_sc_ip_expected_value   = $_POST['expected_result'.$ctr.'16'];
                $orm_sc_ip_actual_value = $_POST['actual_result'.$ctr.'16'];
                $orm_sc_ip_comments = $_POST['comments'.$ctr.'16'];
                $orm_sc_ip_signoff = $_POST['sign_off'.$ctr.'16'];
                $orm_sc_ca_test_date = $_POST['test_details'.$ctr.'17'];
                $orm_sc_ca_pass_fail   = $_POST['pass_fail'.$ctr.'17'];             
                $orm_sc_ca_expected_value   = $_POST['expected_result'.$ctr.'17'];
                $orm_sc_ca_actual_value = $_POST['actual_result'.$ctr.'17'];
                $orm_sc_ca_comments = $_POST['comments'.$ctr.'17'];
                $orm_sc_ca_signoff = $_POST['sign_off'.$ctr.'17'];

                $orm_sc_dc_cancel_test_date = $_POST['test_details'.$ctr.'18'];
                $orm_sc_dc_cancel_pass_fail     = $_POST['pass_fail'.$ctr.'18'];            
                $orm_sc_dc_cancel_expected_vlaue  = $_POST['expected_result'.$ctr.'18'];  
                $orm_sc_dc_cancel_actual_value = $_POST['actual_result'.$ctr.'18'];
                $orm_sc_dc_cancel_comments = $_POST['comments'.$ctr.'18'];
                $orm_sc_dc_cancel_signoff = $_POST['sign_off'.$ctr.'18'];
                $orm_sc_cm_future_test_date = $_POST['test_details'.$ctr.'19'];
                $orm_sc_cm_future_pass_fail     = $_POST['pass_fail'.$ctr.'19'];            
                $orm_sc_cm_future_expected_value   = $_POST['expected_result'.$ctr.'19']; 
                $orm_sc_cm_future_actual_value = $_POST['actual_result'.$ctr.'19'];
                $orm_sc_cm_future_comments = $_POST['comments'.$ctr.'19'];
                $orm_sc_cm_future_signoff 	= $_POST['sign_off'.$ctr.'19'];			


	    		$sql1 = "INSERT INTO section10_testplan_orders_neworder (sec_sign,
    orm_new_test_date,
    orm_new_pass_fail,
    orm_new_expected_value,
    orm_new_actual_value,
    orm_new_comments ,
    orm_new_signoff,
    orm_future_test_date,
    orm_future_pass_fail,
    orm_future_expected_vlaue,
    orm_future_actual_value,
    orm_future_comments ,
    orm_future_signoff,
    orm_repeat_test_date,
    orm_repeat_pass_fail,
    orm_repeat_expected_value,
    orm_repeat_actual_value,
    orm_repeat_comments ,
    orm_repeat_signoff,
    orm_recr_test_date,
    orm_recr_pass_fail,
    orm_recr_expected_value,
    orm_recr_actual_value,
    orm_recr_comments ,
    orm_recr_signoff,
    orm_noncardio_test_date,
    orm_noncardio_pass_fail,
    orm_noncardio_expected_value,
    orm_noncardio_actual_value,
    orm_noncardio_comments ,
    orm_noncardio_signoff) VALUES ('$token','$orm_new_test_date',
    '$orm_new_pass_fail',
    '$orm_new_expected_value',
    '$orm_new_actual_value',
    '$orm_new_comments ',
    '$orm_new_signoff',
    '$orm_future_test_date',
    '$orm_future_pass_fail',
    '$orm_future_expected_vlaue',
    '$orm_future_actual_value',
    '$orm_future_comments ',
    '$orm_future_signoff',
    '$orm_repeat_test_date',
    '$orm_repeat_pass_fail',
    '$orm_repeat_expected_value',
    '$orm_repeat_actual_value',
    '$orm_repeat_comments',
    '$orm_repeat_signoff',
    '$orm_recr_test_date',
    '$orm_recr_pass_fail',
    '$orm_recr_expected_value',
    '$orm_recr_actual_value',
    '$orm_recr_comments ',
    '$orm_recr_signoff',
    '$orm_noncardio_test_date',
    '$orm_noncardio_pass_fail',
    '$orm_noncardio_expected_value',
    '$orm_noncardio_actual_value',
    '$orm_noncardio_comments ',
    '$orm_noncardio_signoff')";


    $sql11 = "INSERT INTO section10_testplan_orders_cancelorder (sec_sign,
    orm_ca_cancel_test_date,
    orm_ca_cancel_pass_fail,
    orm_ca_cancel_expected_value,
    orm_ca_cancel_actual_value,
    orm_ca_cancel_comments ,
    orm_ca_cancel_signoff,
    orm_oc_cancel_test_date,
    orm_oc_cancel_pass_fail,
    orm_oc_cancel_expected_value,
    orm_oc_cancel_actual_value,
    orm_oc_cancel_comments ,
    orm_oc_cancel_signoff,
    orm_dc_discontinue_test_date,
    orm_dc_discontinue_pass_fail,
    orm_dc_discontinue_expected_vlaue,
    orm_dc_discontinue_actual_value,
    orm_dc_discontinue_comments ,
    orm_dc_discontinue_signoff,
    orm_od_discontinue_test_date,
    orm_od_discontinue_pass_fail,
    orm_od_discontinue_expected_value,
    orm_od_discontinue_actual_value,
    orm_od_discontinue_comments ,
    orm_od_discontinue_signoff,
    orm_ca_future_cancel_test_date,
    orm_ca_future_cancel_pass_fail,
    orm_ca_future_cancel_expected_value,
    orm_ca_future_cancel_actual_value,
    orm_ca_future_cancel_comments ,
    orm_ca_future_cancel_signoff,
    orm_oc_future_cancel_test_date,
    orm_oc_future_cancel_pass_fail,
    orm_oc_future_cancel_expected_value,
    orm_oc_future_cancel_actual_value,
    orm_oc_future_cancel_comments ,
    orm_oc_future_cancel_signoff,
    orm_dc_disc_future_test_date,
    orm_dc_disc_future_pass_fail,
    orm_dc_disc_future_expected_value,
    orm_dc_disc_future_actual_value,
    orm_dc_disc_future_comments ,
    orm_dc_disc_future_signoff,
    orm_od_disc_future_test_date,
    orm_od_disc_future_pass_fail,
    orm_od_disc_future_expected_value,
    orm_od_disc_future_actual_value,
    orm_od_disc_future_comments,
    orm_od_disc_future_signoff)

    VALUES ('$token',
    '$orm_ca_cancel_test_date',
    '$orm_ca_cancel_pass_fail',
    '$orm_ca_cancel_expected_value',
    '$orm_ca_cancel_actual_value',
    '$orm_ca_cancel_comments ',
    '$orm_ca_cancel_signoff',
    '$orm_oc_cancel_test_date',
    '$orm_oc_cancel_pass_fail',
    '$orm_oc_cancel_expected_value',
    '$orm_oc_cancel_actual_value',
    '$orm_oc_cancel_comments ',
    '$orm_oc_cancel_signoff',
    '$orm_dc_discontinue_test_date',
    '$orm_dc_discontinue_pass_fail',
    '$orm_dc_discontinue_expected_vlaue',
    '$orm_dc_discontinue_actual_value',
    '$orm_dc_discontinue_comments ',
    '$orm_dc_discontinue_signoff',
    '$orm_od_discontinue_test_date',
    '$orm_od_discontinue_pass_fail',
    '$orm_od_discontinue_expected_value',
    '$orm_od_discontinue_actual_value',
    '$orm_od_discontinue_comments ',
    '$orm_od_discontinue_signoff',
    '$orm_ca_future_cancel_test_date',
    '$orm_ca_future_cancel_pass_fail',
    '$orm_ca_future_cancel_expected_value',
    '$orm_ca_future_cancel_actual_value',
    '$orm_ca_future_cancel_comments ',
    '$orm_ca_future_cancel_signoff',
    '$orm_oc_future_cancel_test_date',
    '$orm_oc_future_cancel_test_pass_fail',
    '$orm_oc_future_cancel_expected_value',
    '$orm_oc_future_cancel_actual_value',
    '$orm_oc_future_cancel_comments ',
    '$orm_oc_future_cancel_signoff',
    '$orm_dc_disc_future_test_date',
    '$orm_dc_disc_future_pass_fail',
    '$orm_dc_disc_future_expected_value',
    '$orm_dc_disc_future_actual_value',
    '$orm_dc_disc_future_comments ',
    '$orm_dc_disc_future_signoff',
    '$orm_od_disc_future_test_date',
    '$orm_od_disc_future_pass_fail',
    '$orm_od_disc_future_expected_value',
    '$orm_od_disc_future_actual_value',
    '$orm_od_disc_future_comments',
    '$orm_od_disc_future_signoff')";

    $sql12 = "INSERT INTO section10_testplan_orders_status (sec_sign,
    orm_sc_pc_test_date,
    orm_sc_pc_pass_fail,
    orm_sc_pc_expected_value,
    orm_sc_pc_actual_value,
    orm_sc_pc_comments ,
    orm_sc_pc_signoff,
    orm_sc_sdc_test_date,
    orm_sc_sdc_pass_fail,
    orm_sc_sdc_expected_value,
    orm_sc_sdc_actual_value,
    orm_sc_sdc_comments ,
    orm_sc_sdc_signoff,
    orm_sc_ip_test_date,
    orm_sc_ip_pass_fail,
    orm_sc_ip_expected_value,
    orm_sc_ip_actual_value,
    orm_sc_ip_comments ,
    orm_sc_ip_signoff,
    orm_sc_ca_test_date,
    orm_sc_ca_pass_fail,
    orm_sc_ca_expected_value,
    orm_sc_ca_actual_value,
    orm_sc_ca_comments ,
    orm_sc_ca_signoff,
    orm_sc_dc_cancel_test_date,
    orm_sc_dc_cancel_pass_fail,
    orm_sc_dc_cancel_expected_vlaue,
    orm_sc_dc_cancel_actual_value,
    orm_sc_dc_cancel_comments ,
    orm_sc_dc_cancel_signoff,
    orm_sc_cm_future_test_date,
    orm_sc_cm_future_pass_fail,
    orm_sc_cm_future_expected_value,
    orm_sc_cm_future_actual_value,
    orm_sc_cm_future_comments,
    orm_sc_cm_future_signoff)
	    				VALUES ('$token',
    '$orm_sc_pc_test_date',
    '$orm_sc_pc_pass_fail',
    '$orm_sc_pc_expected_value',
    '$orm_sc_pc_actual_value',
    '$orm_sc_pc_comments',
    '$orm_sc_pc_signoff',
    '$orm_sc_sdc_test_date',
    '$orm_sc_sdc_pass_fail',
    '$orm_sc_sdc_expected_value',
    '$orm_sc_sdc_actual_value',
    '$orm_sc_sdc_comments',
    '$orm_sc_sdc_signoff',
    '$orm_sc_ip_test_date',
    '$orm_sc_ip_pass_fail',
    '$orm_sc_ip_expected_value',
    '$orm_sc_ip_actual_value',
    '$orm_sc_ip_comments',
    '$orm_sc_ip_signoff',
    '$orm_sc_ca_test_date',
    '$orm_sc_ca_pass_fail',
    '$orm_sc_ca_expected_value',
    '$orm_sc_ca_actual_value',
    '$orm_sc_ca_comments',
    '$orm_sc_ca_signoff',
    '$orm_sc_dc_cancel_test_date',
    '$orm_sc_dc_cancel_pass_fail',
    '$orm_sc_dc_cancel_expected_vlaue',
    '$orm_sc_dc_cancel_actual_value',
    '$orm_sc_dc_cancel_comments',
    '$orm_sc_dc_cancel_signoff',
    '$orm_sc_cm_future_test_date',
    '$orm_sc_cm_future_pass_fail',
    '$orm_sc_cm_future_expected_value',
    '$orm_sc_cm_future_actual_value',
    '$orm_sc_cm_future_comments',
    '$orm_sc_cm_future_signoff')" ;
	mysqli_query($dcConn,$sql1);
	mysqli_query($dcConn,$sql11);
	mysqli_query($dcConn,$sql12);

	    	}
	    	$ctr--;


	    	
	    }

	    //Update Sections
	    $sql2 = "UPDATE sections
	    		SET section10_orders_neworder = '$token',section10_orders_status = '$token',section10_orders_cancelorder = '$token'
	    		WHERE rev_sign='$token'" ;
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