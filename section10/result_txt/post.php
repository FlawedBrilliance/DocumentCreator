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
		$sql1 = "DELETE FROM section10_testplan_resultstext_msh
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql1);

		$sql2 = "DELETE FROM section10_testplan_resultstext_obr
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql2);

		$sql3 = "DELETE FROM section10_testplan_resultstext_obx
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql3);

		$sql4 = "DELETE FROM section10_testplan_resultstext_orc
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql4);

		$sql5 = "DELETE FROM section10_testplan_resultstext_pid
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql5);

		$sql6 = "DELETE FROM section10_testplan_resultstext_pv1
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql6);

		$sql7 = "DELETE FROM section10_testplan_resultstext_zds
				WHERE sec_sign='$token'" ;

				mysqli_query($dcConn,$sql7);

		

		

		//Get the number of rows
	    $ctr = $_POST['TableCtr'] ;
	    while($ctr>0)
	    {
	    	if(isset($_POST['ISCV_IBE_Parsing'.$ctr.'1']))
	    	{
	    		$msh_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'1'];

				$msh_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'1'];

				$msh_1_expected_val = $_POST['Expected_Value'.$ctr.'1'];

				$msh_1_actual_val = $_POST['Actual_Value'.$ctr.'1'];

				$msh_1_pass = $_POST['Pass_fail'.$ctr.'4'];

				$msh_1_comments = $_POST['Comments'.$ctr.'4'];

				$msh_1_signoff = $_POST['Sign_off'.$ctr.'4'];

				$msh_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'2'];

				$msh_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'2'];

				$msh_2_expected_val = $_POST['Expected_Value'.$ctr.'2'];

				$msh_2_actual_val = $_POST['Actual_Value'.$ctr.'2'];

				$msh_2_pass = $_POST['Pass_fail'.$ctr.'5'];

				$msh_2_comments = $_POST['Comments'.$ctr.'5'];

				$msh_2_signoff = $_POST['Sign_off'.$ctr.'5'];

				$msh_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'3'];

				$msh_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'3'];

				$msh_3_expected_val = $_POST['Expected_Value'.$ctr.'3'];

				$msh_3_actual_val = $_POST['Actual_Value'.$ctr.'3'];

				$msh_3_pass = $_POST['Pass_fail'.$ctr.'6'];

				$msh_3_comments = $_POST['Comments'.$ctr.'6'];

				$msh_3_signoff = $_POST['Sign_off'.$ctr.'6'];

				$msh_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'4'];

				$msh_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'4'];

				$msh_4_expected_val = $_POST['Expected_Value'.$ctr.'4'];

				$msh_4_actual_val = $_POST['Actual_Value'.$ctr.'4'];

				$msh_4_pass = $_POST['Pass_fail'.$ctr.'7'];

				$msh_4_comments = $_POST['Comments'.$ctr.'7'];

				$msh_4_signoff = $_POST['Sign_off'.$ctr.'7'];

				$msh_5_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'5'];

				$msh_5_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'5'];

				$msh_5_expected_val = $_POST['Expected_Value'.$ctr.'5'];

				$msh_5_actual_val = $_POST['Actual_Value'.$ctr.'5'];

				$msh_5_pass = $_POST['Pass_fail'.$ctr.'8'];

				$msh_5_comments = $_POST['Comments'.$ctr.'8'];

				$msh_5_signoff = $_POST['Sign_off'.$ctr.'8'];

				$msh_6_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'6'];

				$msh_6_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'6'];

				$msh_6_expected_val = $_POST['Expected_Value'.$ctr.'6'];

				$msh_6_actual_val = $_POST['Actual_Value'.$ctr.'6'];

				$msh_6_pass = $_POST['Pass_fail'.$ctr.'9'];

				$msh_6_comments = $_POST['Comments'.$ctr.'9'];

				$msh_6_signoff = $_POST['Sign_off'.$ctr.'9'];

				$msh_7_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'7'];

				$msh_7_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'7'];

				$msh_7_expected_val = $_POST['Expected_Value'.$ctr.'7'];

				$msh_7_actual_val = $_POST['Actual_Value'.$ctr.'7'];

				$msh_7_pass = $_POST['Pass_fail'.$ctr.'10'];

				$msh_7_comments = $_POST['Comments'.$ctr.'10'];

				$msh_7_signoff = $_POST['Sign_off'.$ctr.'10'];

				$msh_9_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'8'];

				$msh_9_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'8'];

				$msh_9_expected_val = $_POST['Expected_Value'.$ctr.'8'];

				$msh_9_actual_val = $_POST['Actual_Value'.$ctr.'8'];

				$msh_9_pass = $_POST['Pass_fail'.$ctr.'11'];

				$msh_9_comments = $_POST['Comments'.$ctr.'11'];

				$msh_9_signoff = $_POST['Sign_off'.$ctr.'11'];

				$msh_9_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'9'];

				$msh_9_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'9'];

				$msh_9_1_expected_val = $_POST['Expected_Value'.$ctr.'9'];

				$msh_9_1_actual_val = $_POST['Actual_Value'.$ctr.'9'];

				$msh_9_1_pass = $_POST['Pass_fail'.$ctr.'12'];

				$msh_9_1_comments = $_POST['Comments'.$ctr.'12'];

				$msh_9_1_signoff = $_POST['Sign_off'.$ctr.'12'];

				$msh_9_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'10'];

				$msh_9_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'10'];

				$msh_9_2_expected_val = $_POST['Expected_Value'.$ctr.'10'];

				$msh_9_2_actual_val = $_POST['Actual_Value'.$ctr.'10'];

				$msh_9_2_pass = $_POST['Pass_fail'.$ctr.'13'];

				$msh_9_2_comments = $_POST['Comments'.$ctr.'13'];

				$msh_9_2_signoff = $_POST['Sign_off'.$ctr.'13'];

				$msh_10_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'11'];

				$msh_10_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'11'];

				$msh_10_expected_val = $_POST['Expected_Value'.$ctr.'11'];

				$msh_10_actual_val = $_POST['Actual_Value'.$ctr.'11'];

				$msh_10_pass = $_POST['Pass_fail'.$ctr.'14'];

				$msh_10_comments = $_POST['Comments'.$ctr.'14'];

				$msh_10_signoff = $_POST['Sign_off'.$ctr.'14'];

				$msh_11_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'12'];

				$msh_11_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'12'];

				$msh_11_expected_val = $_POST['Expected_Value'.$ctr.'12'];

				$msh_11_actual_val = $_POST['Actual_Value'.$ctr.'12'];

				$msh_11_pass = $_POST['Pass_fail'.$ctr.'15'];

				$msh_11_comments = $_POST['Comments'.$ctr.'15'];

				$msh_11_signoff = $_POST['Sign_off'.$ctr.'15'];

				$msh_12_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'13'];

				$msh_12_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'13'];

				$msh_12_expected_val = $_POST['Expected_Value'.$ctr.'13'];

				$msh_12_actual_val = $_POST['Actual_Value'.$ctr.'13'];

				$msh_12_pass = $_POST['Pass_fail'.$ctr.'16'];

				$msh_12_comments = $_POST['Comments'.$ctr.'16'];

				$msh_12_signoff = $_POST['Sign_off'.$ctr.'16'];







				$pid_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'14'];

				$pid_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'14'];

				$pid_3_expected_val = $_POST['Expected_Value'.$ctr.'14'];

				$pid_3_actual_val = $_POST['Actual_Value'.$ctr.'14'];

				$pid_3_pass = $_POST['Pass_fail'.$ctr.'17'];

				$pid_3_comments = $_POST['Comments'.$ctr.'17'];

				$pid_3_signoff = $_POST['Sign_off'.$ctr.'17'];

				$pid_3_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'15'];

				$pid_3_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'15'];

				$pid_3_1_expected_val = $_POST['Expected_Value'.$ctr.'15'];

				$pid_3_1_actual_val = $_POST['Actual_Value'.$ctr.'15'];

				$pid_3_1_pass = $_POST['Pass_fail'.$ctr.'18'];

				$pid_3_1_comments = $_POST['Comments'.$ctr.'18'];

				$pid_3_1_signoff = $_POST['Sign_off'.$ctr.'18'];

				$pid_3_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'16'];

				$pid_3_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'16'];

				$pid_3_4_expected_val = $_POST['Expected_Value'.$ctr.'16'];

				$pid_3_4_actual_val = $_POST['Actual_Value'.$ctr.'16'];

				$pid_3_4_pass = $_POST['Pass_fail'.$ctr.'19'];

				$pid_3_4_comments = $_POST['Comments'.$ctr.'19'];

				$pid_3_4_signoff = $_POST['Sign_off'.$ctr.'19'];

				$pid_5_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'17'];

				$pid_5_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'17'];

				$pid_5_expected_val = $_POST['Expected_Value'.$ctr.'17'];

				$pid_5_actual_val = $_POST['Actual_Value'.$ctr.'17'];

				$pid_5_pass = $_POST['Pass_fail'.$ctr.'20'];

				$pid_5_comments = $_POST['Comments'.$ctr.'20'];

				$pid_5_signoff = $_POST['Sign_off'.$ctr.'20'];

				$pid_5_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'18'];

				$pid_5_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'18'];

				$pid_5_1_expected_val = $_POST['Expected_Value'.$ctr.'18'];

				$pid_5_1_actual_val = $_POST['Actual_Value'.$ctr.'18'];

				$pid_5_1_pass = $_POST['Pass_fail'.$ctr.'21'];

				$pid_5_1_comments = $_POST['Comments'.$ctr.'21'];

				$pid_5_1_signoff = $_POST['Sign_off'.$ctr.'21'];

				$pid_5_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'19'];

				$pid_5_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'19'];

				$pid_5_2_expected_val = $_POST['Expected_Value'.$ctr.'19'];

				$pid_5_2_actual_val = $_POST['Actual_Value'.$ctr.'19'];

				$pid_5_2_pass = $_POST['Pass_fail'.$ctr.'22'];

				$pid_5_2_comments = $_POST['Comments'.$ctr.'22'];

				$pid_5_2_signoff = $_POST['Sign_off'.$ctr.'22'];

				$pid_5_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'20'];

				$pid_5_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'20'];

				$pid_5_3_expected_val = $_POST['Expected_Value'.$ctr.'20'];

				$pid_5_3_actual_val = $_POST['Actual_Value'.$ctr.'20'];

				$pid_5_3_pass = $_POST['Pass_fail'.$ctr.'23'];

				$pid_5_3_comments = $_POST['Comments'.$ctr.'23'];

				$pid_5_3_signoff = $_POST['Sign_off'.$ctr.'23'];

				$pid_7_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'21'];

				$pid_7_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'21'];

				$pid_7_expected_val = $_POST['Expected_Value'.$ctr.'21'];

				$pid_7_actual_val = $_POST['Actual_Value'.$ctr.'21'];

				$pid_7_pass = $_POST['Pass_fail'.$ctr.'24'];

				$pid_7_comments = $_POST['Comments'.$ctr.'24'];

				$pid_7_signoff = $_POST['Sign_off'.$ctr.'24'];

				$pid_8_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'22'];

				$pid_8_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'22'];

				$pid_8_expected_val = $_POST['Expected_Value'.$ctr.'22'];

				$pid_8_actual_val = $_POST['Actual_Value'.$ctr.'22'];

				$pid_8_pass = $_POST['Pass_fail'.$ctr.'25'];

				$pid_8_comments = $_POST['Comments'.$ctr.'25'];

				$pid_8_signoff = $_POST['Sign_off'.$ctr.'25'];

				$pid_10_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'23'];

				$pid_10_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'23'];

				$pid_10_expected_val = $_POST['Expected_Value'.$ctr.'23'];

				$pid_10_actual_val = $_POST['Actual_Value'.$ctr.'23'];

				$pid_10_pass = $_POST['Pass_fail'.$ctr.'26'];

				$pid_10_comments = $_POST['Comments'.$ctr.'26'];

				$pid_10_signoff = $_POST['Sign_off'.$ctr.'26'];

				$pid_11_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'24'];

				$pid_11_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'24'];

				$pid_11_expected_val = $_POST['Expected_Value'.$ctr.'24'];

				$pid_11_actual_val = $_POST['Actual_Value'.$ctr.'24'];

				$pid_11_pass = $_POST['Pass_fail'.$ctr.'27'];

				$pid_11_comments = $_POST['Comments'.$ctr.'27'];

				$pid_11_signoff = $_POST['Sign_off'.$ctr.'27'];

				$pid_11_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'25'];

				$pid_11_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'25'];

				$pid_11_1_expected_val = $_POST['Expected_Value'.$ctr.'25'];

				$pid_11_1_actual_val = $_POST['Actual_Value'.$ctr.'25'];

				$pid_11_1_pass = $_POST['Pass_fail'.$ctr.'28'];

				$pid_11_1_comments = $_POST['Comments'.$ctr.'28'];

				$pid_11_1_signoff = $_POST['Sign_off'.$ctr.'28'];

				$pid_11_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'26'];

				$pid_11_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'26'];

				$pid_11_2_expected_val = $_POST['Expected_Value'.$ctr.'26'];

				$pid_11_2_actual_val = $_POST['Actual_Value'.$ctr.'26'];

				$pid_11_2_pass = $_POST['Pass_fail'.$ctr.'29'];

				$pid_11_2_comments = $_POST['Comments'.$ctr.'29'];

				$pid_11_2_signoff = $_POST['Sign_off'.$ctr.'29'];

				$pid_11_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'27'];

				$pid_11_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'27'];

				$pid_11_3_expected_val = $_POST['Expected_Value'.$ctr.'27'];

				$pid_11_3_actual_val = $_POST['Actual_Value'.$ctr.'27'];

				$pid_11_3_pass = $_POST['Pass_fail'.$ctr.'30'];

				$pid_11_3_comments = $_POST['Comments'.$ctr.'30'];

				$pid_11_3_signoff = $_POST['Sign_off'.$ctr.'30'];

				$pid_11_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'28'];

				$pid_11_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'28'];

				$pid_11_4_expected_val = $_POST['Expected_Value'.$ctr.'28'];

				$pid_11_4_actual_val = $_POST['Actual_Value'.$ctr.'28'];

				$pid_11_4_pass = $_POST['Pass_fail'.$ctr.'31'];

				$pid_11_4_comments = $_POST['Comments'.$ctr.'31'];

				$pid_11_4_signoff = $_POST['Sign_off'.$ctr.'31'];

				$pid_11_5_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'29'];

				$pid_11_5_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'29'];

				$pid_11_5_expected_val = $_POST['Expected_Value'.$ctr.'29'];

				$pid_11_5_actual_val = $_POST['Actual_Value'.$ctr.'29'];

				$pid_11_5_pass = $_POST['Pass_fail'.$ctr.'32'];

				$pid_11_5_comments = $_POST['Comments'.$ctr.'32'];

				$pid_11_5_signoff = $_POST['Sign_off'.$ctr.'32'];

				$pid_13_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'30'];

				$pid_13_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'30'];

				$pid_13_expected_val = $_POST['Expected_Value'.$ctr.'30'];

				$pid_13_actual_val = $_POST['Actual_Value'.$ctr.'30'];

				$pid_13_pass = $_POST['Pass_fail'.$ctr.'33'];

				$pid_13_comments = $_POST['Comments'.$ctr.'33'];

				$pid_13_signoff = $_POST['Sign_off'.$ctr.'33'];

				$pid_14_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'31'];

				$pid_14_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'31'];

				$pid_14_expected_val = $_POST['Expected_Value'.$ctr.'31'];

				$pid_14_actual_val = $_POST['Actual_Value'.$ctr.'31'];

				$pid_14_pass = $_POST['Pass_fail'.$ctr.'34'];

				$pid_14_comments = $_POST['Comments'.$ctr.'34'];

				$pid_14_signoff = $_POST['Sign_off'.$ctr.'34'];

				$pid_18_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'32'];

				$pid_18_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'32'];

				$pid_18_expected_val = $_POST['Expected_Value'.$ctr.'32'];

				$pid_18_actual_val = $_POST['Actual_Value'.$ctr.'32'];

				$pid_18_pass = $_POST['Pass_fail'.$ctr.'35'];

				$pid_18_comments = $_POST['Comments'.$ctr.'35'];

				$pid_18_signoff = $_POST['Sign_off'.$ctr.'35'];






				$pv1_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'33'];

				$pv1_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'33'];

				$pv1_2_expected_val = $_POST['Expected_Value'.$ctr.'33'];

				$pv1_2_actual_val = $_POST['Actual_Value'.$ctr.'33'];

				$pv1_2_pass = $_POST['Pass_fail'.$ctr.'36'];

				$pv1_2_comments = $_POST['Comments'.$ctr.'36'];

				$pv1_2_signoff = $_POST['Sign_off'.$ctr.'36'];

				$pv1_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'34'];

				$pv1_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'34'];

				$pv1_3_expected_val = $_POST['Expected_Value'.$ctr.'34'];

				$pv1_3_actual_val = $_POST['Actual_Value'.$ctr.'34'];

				$pv1_3_pass = $_POST['Pass_fail'.$ctr.'37'];

				$pv1_3_comments = $_POST['Comments'.$ctr.'37'];

				$pv1_3_signoff = $_POST['Sign_off'.$ctr.'37'];

				$pv1_8_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'35'];

				$pv1_8_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'35'];

				$pv1_8_expected_val = $_POST['Expected_Value'.$ctr.'35'];

				$pv1_8_actual_val = $_POST['Actual_Value'.$ctr.'35'];

				$pv1_8_pass = $_POST['Pass_fail'.$ctr.'38'];

				$pv1_8_comments = $_POST['Comments'.$ctr.'38'];

				$pv1_8_signoff = $_POST['Sign_off'.$ctr.'38'];

				$pv1_8_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'36'];

				$pv1_8_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'36'];

				$pv1_8_1_expected_val = $_POST['Expected_Value'.$ctr.'36'];

				$pv1_8_1_actual_val = $_POST['Actual_Value'.$ctr.'36'];

				$pv1_8_1_pass = $_POST['Pass_fail'.$ctr.'39'];

				$pv1_8_1_comments = $_POST['Comments'.$ctr.'39'];

				$pv1_8_1_signoff = $_POST['Sign_off'.$ctr.'39'];

				$pv1_8_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'37'];

				$pv1_8_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'37'];

				$pv1_8_2_expected_val = $_POST['Expected_Value'.$ctr.'37'];

				$pv1_8_2_actual_val = $_POST['Actual_Value'.$ctr.'37'];

				$pv1_8_2_pass = $_POST['Pass_fail'.$ctr.'40'];

				$pv1_8_2_comments = $_POST['Comments'.$ctr.'40'];

				$pv1_8_2_signoff = $_POST['Sign_off'.$ctr.'40'];





				$orc_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'38'];

				$orc_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'38'];

				$orc_1_expected_val = $_POST['Expected_Value'.$ctr.'38'];

				$orc_1_actual_val = $_POST['Actual_Value'.$ctr.'38'];

				$orc_1_pass = $_POST['Pass_fail'.$ctr.'41'];

				$orc_1_comments = $_POST['Comments'.$ctr.'41'];

				$orc_1_signoff = $_POST['Sign_off'.$ctr.'41'];

				$orc_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'39'];

				$orc_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'39'];

				$orc_3_expected_val = $_POST['Expected_Value'.$ctr.'39'];

				$orc_3_actual_val = $_POST['Actual_Value'.$ctr.'39'];

				$orc_3_pass = $_POST['Pass_fail'.$ctr.'42'];

				$orc_3_comments = $_POST['Comments'.$ctr.'42'];

				$orc_3_signoff = $_POST['Sign_off'.$ctr.'42'];

				$orc_5_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'40'];

				$orc_5_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'40'];

				$orc_5_expected_val = $_POST['Expected_Value'.$ctr.'40'];

				$orc_5_actual_val = $_POST['Actual_Value'.$ctr.'40'];

				$orc_5_pass = $_POST['Pass_fail'.$ctr.'43'];

				$orc_5_comments = $_POST['Comments'.$ctr.'43'];

				$orc_5_signoff = $_POST['Sign_off'.$ctr.'43'];





				$obr_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'41'];

				$obr_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'41'];

				$obr_1_expected_val = $_POST['Expected_Value'.$ctr.'41'];

				$obr_1_actual_val = $_POST['Actual_Value'.$ctr.'41'];

				$obr_1_pass = $_POST['Pass_fail'.$ctr.'44'];

				$obr_1_comments = $_POST['Comments'.$ctr.'44'];

				$obr_1_signoff = $_POST['Sign_off'.$ctr.'44'];

				$obr_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'42'];

				$obr_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'42'];

				$obr_2_expected_val = $_POST['Expected_Value'.$ctr.'42'];

				$obr_2_actual_val = $_POST['Actual_Value'.$ctr.'42'];

				$obr_2_pass = $_POST['Pass_fail'.$ctr.'45'];

				$obr_2_comments = $_POST['Comments'.$ctr.'45'];

				$obr_2_signoff = $_POST['Sign_off'.$ctr.'45'];

				$obr_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'43'];

				$obr_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'43'];

				$obr_3_expected_val = $_POST['Expected_Value'.$ctr.'43'];

				$obr_3_actual_val = $_POST['Actual_Value'.$ctr.'43'];

				$obr_3_pass = $_POST['Pass_fail'.$ctr.'46'];

				$obr_3_comments = $_POST['Comments'.$ctr.'46'];

				$obr_3_signoff = $_POST['Sign_off'.$ctr.'46'];

				$obr_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'44'];

				$obr_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'44'];

				$obr_4_expected_val = $_POST['Expected_Value'.$ctr.'44'];

				$obr_4_actual_val = $_POST['Actual_Value'.$ctr.'44'];

				$obr_4_pass = $_POST['Pass_fail'.$ctr.'47'];

				$obr_4_comments = $_POST['Comments'.$ctr.'47'];

				$obr_4_signoff = $_POST['Sign_off'.$ctr.'47'];

				$obr_4_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'45'];

				$obr_4_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'45'];

				$obr_4_1_expected_val = $_POST['Expected_Value'.$ctr.'45'];

				$obr_4_1_actual_val = $_POST['Actual_Value'.$ctr.'45'];

				$obr_4_1_pass = $_POST['Pass_fail'.$ctr.'48'];

				$obr_4_1_comments = $_POST['Comments'.$ctr.'48'];

				$obr_4_1_signoff = $_POST['Sign_off'.$ctr.'48'];

				$obr_4_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'46'];

				$obr_4_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'46'];

				$obr_4_2_expected_val = $_POST['Expected_Value'.$ctr.'46'];

				$obr_4_2_actual_val = $_POST['Actual_Value'.$ctr.'46'];

				$obr_4_2_pass = $_POST['Pass_fail'.$ctr.'49'];

				$obr_4_2_comments = $_POST['Comments'.$ctr.'49'];

				$obr_4_2_signoff = $_POST['Sign_off'.$ctr.'49'];

				$obr_7_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'47'];

				$obr_7_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'47'];

				$obr_7_expected_val = $_POST['Expected_Value'.$ctr.'47'];

				$obr_7_actual_val = $_POST['Actual_Value'.$ctr.'47'];

				$obr_7_pass = $_POST['Pass_fail'.$ctr.'50'];

				$obr_7_comments = $_POST['Comments'.$ctr.'50'];

				$obr_7_signoff = $_POST['Sign_off'.$ctr.'50'];

				$obr_8_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'48'];

				$obr_8_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'48'];

				$obr_8_expected_val = $_POST['Expected_Value'.$ctr.'48'];

				$obr_8_actual_val = $_POST['Actual_Value'.$ctr.'48'];

				$obr_8_pass = $_POST['Pass_fail'.$ctr.'51'];

				$obr_8_comments = $_POST['Comments'.$ctr.'51'];

				$obr_8_signoff = $_POST['Sign_off'.$ctr.'51'];

				$obr_16_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'49'];

				$obr_16_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'49'];

				$obr_16_expected_val = $_POST['Expected_Value'.$ctr.'49'];

				$obr_16_actual_val = $_POST['Actual_Value'.$ctr.'49'];

				$obr_16_pass = $_POST['Pass_fail'.$ctr.'52'];

				$obr_16_comments = $_POST['Comments'.$ctr.'52'];

				$obr_16_signoff = $_POST['Sign_off'.$ctr.'52'];

				$obr_18_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'50'];

				$obr_18_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'50'];

				$obr_18_expected_val = $_POST['Expected_Value'.$ctr.'50'];

				$obr_18_actual_val = $_POST['Actual_Value'.$ctr.'50'];

				$obr_18_pass = $_POST['Pass_fail'.$ctr.'53'];

				$obr_18_comments = $_POST['Comments'.$ctr.'53'];

				$obr_18_signoff = $_POST['Sign_off'.$ctr.'53'];

				$obr_20_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'51'];

				$obr_20_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'51'];

				$obr_20_expected_val = $_POST['Expected_Value'.$ctr.'51'];

				$obr_20_actual_val = $_POST['Actual_Value'.$ctr.'51'];

				$obr_20_pass = $_POST['Pass_fail'.$ctr.'54'];

				$obr_20_comments = $_POST['Comments'.$ctr.'54'];

				$obr_20_signoff = $_POST['Sign_off'.$ctr.'54'];

				$obr_22_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'52'];

				$obr_22_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'52'];

				$obr_22_expected_val = $_POST['Expected_Value'.$ctr.'52'];

				$obr_22_actual_val = $_POST['Actual_Value'.$ctr.'52'];

				$obr_22_pass = $_POST['Pass_fail'.$ctr.'55'];

				$obr_22_comments = $_POST['Comments'.$ctr.'55'];

				$obr_22_signoff = $_POST['Sign_off'.$ctr.'55'];

				$obr_24_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'53'];

				$obr_24_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'53'];

				$obr_24_expected_val = $_POST['Expected_Value'.$ctr.'53'];

				$obr_24_actual_val = $_POST['Actual_Value'.$ctr.'53'];

				$obr_24_pass = $_POST['Pass_fail'.$ctr.'56'];

				$obr_24_comments = $_POST['Comments'.$ctr.'56'];

				$obr_24_signoff = $_POST['Sign_off'.$ctr.'56'];

				$obr_25_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'54'];

				$obr_25_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'54'];

				$obr_25_expected_val = $_POST['Expected_Value'.$ctr.'54'];

				$obr_25_actual_val = $_POST['Actual_Value'.$ctr.'54'];

				$obr_25_pass = $_POST['Pass_fail'.$ctr.'57'];

				$obr_25_comments = $_POST['Comments'.$ctr.'57'];

				$obr_25_signoff = $_POST['Sign_off'.$ctr.'57'];

				$obr_31_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'55'];

				$obr_31_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'55'];

				$obr_31_expected_val = $_POST['Expected_Value'.$ctr.'55'];

				$obr_31_actual_val = $_POST['Actual_Value'.$ctr.'55'];

				$obr_31_pass = $_POST['Pass_fail'.$ctr.'58'];

				$obr_31_comments = $_POST['Comments'.$ctr.'58'];

				$obr_31_signoff = $_POST['Sign_off'.$ctr.'58'];

				$obr_32_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'56'];

				$obr_32_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'56'];

				$obr_32_expected_val = $_POST['Expected_Value'.$ctr.'56'];

				$obr_32_actual_val = $_POST['Actual_Value'.$ctr.'56'];

				$obr_32_pass = $_POST['Pass_fail'.$ctr.'59'];

				$obr_32_comments = $_POST['Comments'.$ctr.'59'];

				$obr_32_signoff = $_POST['Sign_off'.$ctr.'59'];

				$obr_32_1_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'57'];

				$obr_32_1_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'57'];

				$obr_32_1_1_expected_val = $_POST['Expected_Value'.$ctr.'57'];

				$obr_32_1_1_actual_val = $_POST['Actual_Value'.$ctr.'57'];

				$obr_32_1_1_pass = $_POST['Pass_fail'.$ctr.'60'];

				$obr_32_1_1_comments = $_POST['Comments'.$ctr.'60'];

				$obr_32_1_1_signoff = $_POST['Sign_off'.$ctr.'60'];

				$obr_32_1_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'58'];

				$obr_32_1_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'58'];

				$obr_32_1_2_expected_val = $_POST['Expected_Value'.$ctr.'58'];

				$obr_32_1_2_actual_val = $_POST['Actual_Value'.$ctr.'58'];

				$obr_32_1_2_pass = $_POST['Pass_fail'.$ctr.'61'];

				$obr_32_1_2_comments = $_POST['Comments'.$ctr.'61'];

				$obr_32_1_2_signoff = $_POST['Sign_off'.$ctr.'61'];

				$obr_32_1_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'59'];

				$obr_32_1_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'59'];

				$obr_32_1_3_expected_val = $_POST['Expected_Value'.$ctr.'59'];

				$obr_32_1_3_actual_val = $_POST['Actual_Value'.$ctr.'59'];

				$obr_32_1_3_pass = $_POST['Pass_fail'.$ctr.'62'];

				$obr_32_1_3_comments = $_POST['Comments'.$ctr.'62'];

				$obr_32_1_3_signoff = $_POST['Sign_off'.$ctr.'62'];

				$obr_32_1_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'60'];

				$obr_32_1_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'60'];

				$obr_32_1_4_expected_val = $_POST['Expected_Value'.$ctr.'60'];

				$obr_32_1_4_actual_val = $_POST['Actual_Value'.$ctr.'60'];

				$obr_32_1_4_pass = $_POST['Pass_fail'.$ctr.'63'];

				$obr_32_1_4_comments = $_POST['Comments'.$ctr.'63'];

				$obr_32_1_4_signoff = $_POST['Sign_off'.$ctr.'63'];

				$obx_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'61'];

				$obx_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'61'];

				$obx_1_expected_val = $_POST['Expected_Value'.$ctr.'61'];

				$obx_1_actual_val = $_POST['Actual_Value'.$ctr.'61'];

				$obx_1_pass = $_POST['Pass_fail'.$ctr.'64'];

				$obx_1_comments = $_POST['Comments'.$ctr.'64'];

				$obx_1_signoff = $_POST['Sign_off'.$ctr.'64'];

				$obx_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'62'];

				$obx_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'62'];

				$obx_2_expected_val = $_POST['Expected_Value'.$ctr.'62'];

				$obx_2_actual_val = $_POST['Actual_Value'.$ctr.'62'];

				$obx_2_pass = $_POST['Pass_fail'.$ctr.'65'];

				$obx_2_comments = $_POST['Comments'.$ctr.'65'];

				$obx_2_signoff = $_POST['Sign_off'.$ctr.'65'];

				$obx_3_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'63'];

				$obx_3_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'63'];

				$obx_3_expected_val = $_POST['Expected_Value'.$ctr.'63'];

				$obx_3_actual_val = $_POST['Actual_Value'.$ctr.'63'];

				$obx_3_pass = $_POST['Pass_fail'.$ctr.'66'];

				$obx_3_comments = $_POST['Comments'.$ctr.'66'];

				$obx_3_signoff = $_POST['Sign_off'.$ctr.'66'];

				$obx_3_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'64'];

				$obx_3_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'64'];

				$obx_3_1_expected_val = $_POST['Expected_Value'.$ctr.'64'];

				$obx_3_1_actual_val = $_POST['Actual_Value'.$ctr.'64'];

				$obx_3_1_pass = $_POST['Pass_fail'.$ctr.'67'];

				$obx_3_1_comments = $_POST['Comments'.$ctr.'67'];

				$obx_3_1_signoff = $_POST['Sign_off'.$ctr.'67'];

				$obx_3_2_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'65'];

				$obx_3_2_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'65'];

				$obx_3_2_expected_val = $_POST['Expected_Value'.$ctr.'65'];

				$obx_3_2_actual_val = $_POST['Actual_Value'.$ctr.'65'];

				$obx_3_2_pass = $_POST['Pass_fail'.$ctr.'68'];

				$obx_3_2_comments = $_POST['Comments'.$ctr.'68'];

				$obx_3_2_signoff = $_POST['Sign_off'.$ctr.'68'];

				$obx_4_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'66'];

				$obx_4_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'66'];

				$obx_4_expected_val = $_POST['Expected_Value'.$ctr.'66'];

				$obx_4_actual_val = $_POST['Actual_Value'.$ctr.'66'];

				$obx_4_pass = $_POST['Pass_fail'.$ctr.'69'];

				$obx_4_comments = $_POST['Comments'.$ctr.'69'];

				$obx_4_signoff = $_POST['Sign_off'.$ctr.'69'];

				$obx_5_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'67'];

				$obx_5_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'67'];

				$obx_5_expected_val = $_POST['Expected_Value'.$ctr.'67'];

				$obx_5_actual_val = $_POST['Actual_Value'.$ctr.'67'];

				$obx_5_pass = $_POST['Pass_fail'.$ctr.'70'];

				$obx_5_comments = $_POST['Comments'.$ctr.'70'];

				$obx_5_signoff = $_POST['Sign_off'.$ctr.'70'];

				$obx_11_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'68'];

				$obx_11_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'68'];

				$obx_11_expected_val = $_POST['Expected_Value'.$ctr.'68'];

				$obx_11_actual_val = $_POST['Actual_Value'.$ctr.'68'];

				$obx_11_pass = $_POST['Pass_fail'.$ctr.'71'];

				$obx_11_comments = $_POST['Comments'.$ctr.'71'];

				$obx_11_signoff = $_POST['Sign_off'.$ctr.'71'];





				$zds_1_iscv_val = $_POST['ISCV_IBE_Parsing'.$ctr.'69'];

				$zds_1_hl7_parsing = $_POST['Expected_HL7_Parsing'.$ctr.'69'];

				$zds_1_expected_val = $_POST['Expected_Value'.$ctr.'69'];

				$zds_1_actual_val = $_POST['Actual_Value'.$ctr.'69'];

				$zds_1_pass = $_POST['Pass_fail'.$ctr.'72'];

				$zds_1_comments = $_POST['Comments'.$ctr.'72'];

				$zds_1_signoff = $_POST['Sign_off'.$ctr.'72'];
	    		


	    		$oru_date = $_POST['Test_Date'.$ctr.'1'];

				$oru_pass = $_POST['Pass_fail'.$ctr.'1'];

				$oru_expected_val = $_POST['Expected_Result'.$ctr.'1'];

				$oru_actual_val = $_POST['Actual_Result'.$ctr.'1'];

				$oru_comments = $_POST['Comments'.$ctr.'1'];

				$oru_signoff = $_POST['Sign_off'.$ctr.'1'];

				$oru_amended_date = $_POST['Test_Date'.$ctr.'2'];

				$oru_amended_pass = $_POST['Pass_fail'.$ctr.'2'];

				$oru_amended_expected_val = $_POST['Expected_Result'.$ctr.'2'];

				$oru_amended_actual_val = $_POST['Actual_Result'.$ctr.'2'];

				$oru_amended_comments = $_POST['Comments'.$ctr.'2'];

				$oru_amended_signoff = $_POST['Sign_off'.$ctr.'2'];

				$oru_amended2_date = $_POST['Test_Date'.$ctr.'3'];

				$oru_amended2_pass = $_POST['Pass_fail'.$ctr.'3'];

				$oru_amended2_expected_val = $_POST['Expected_Result'.$ctr.'3'];

				$oru_amended2_actual_val = $_POST['Actual_Result'.$ctr.'3'];

				$oru_amended2_comments = $_POST['Comments'.$ctr.'3'];

				$oru_amended2_signoff = $_POST['Sign_off'.$ctr.'3'];










$sql18 = "INSERT INTO section10_testplan_resultstext (sec_sign,
oru_date, 

				oru_pass, 

				oru_expected_val, 

				oru_actual_val,

				oru_comments,

				oru_signoff,

				oru_amended_date,

				oru_amended_pass,

				oru_amended_expected_val, 

				oru_amended_actual_val,

				oru_amended_comments,

				oru_amended_signoff,

				oru_amended2_date,

				oru_amended2_pass,

				oru_amended2_expected_val, 

				oru_amended2_actual_val,
				oru_amended2_comments,
				oru_amended2_signoff)VALUES('$token','$oru_date',

				'$oru_pass',

				'$oru_expected_val', 

				'$oru_actual_val',

				'$oru_comments',

				'$oru_signoff',

				'$oru_amended_date',

				'$oru_amended_pass',

				'$oru_amended_expected_val', 

				'$oru_amended_actual_val',

				'$oru_amended_comments',

				'$oru_amended_signoff',

				'$oru_amended2_date',

				'$oru_amended2_pass',

				'$oru_amended2_expected_val', 

				'$oru_amended2_actual_val',
				'$oru_amended2_comments',

				'$oru_amended2_signoff')";


					mysqli_query($dcConn,$sql18);


	    		$sql1 = "INSERT INTO section10_testplan_resultstext_msh (sec_sign,msh_1_iscv_val,
msh_1_hl7_parsing,
msh_1_expected_val,
msh_1_actual_val,
msh_1_pass,
msh_1_comments,
msh_1_signoff,
msh_2_iscv_val,
msh_2_hl7_parsing,
msh_2_expected_val,
msh_2_actual_val,
msh_2_pass,
msh_2_comments,
msh_2_signoff,
msh_3_iscv_val,
msh_3_hl7_parsing,
msh_3_expected_val,
msh_3_actual_val,
msh_3_pass,
msh_3_comments,
msh_3_signoff,
msh_4_iscv_val,
msh_4_hl7_parsing,
msh_4_expected_val,
msh_4_actual_val,
msh_4_pass,
msh_4_comments,
msh_4_signoff,
msh_5_iscv_val,
msh_5_hl7_parsing,
msh_5_expected_val,
msh_5_actual_val,
msh_5_pass,
msh_5_comments,
msh_5_signoff,
msh_6_iscv_val,
msh_6_hl7_parsing,
msh_6_expected_val,
msh_6_actual_val,
msh_6_pass,
msh_6_comments,
msh_6_signoff,
msh_7_iscv_val,
msh_7_hl7_parsing,
msh_7_expected_val,
msh_7_actual_val,
msh_7_pass,
msh_7_comments,
msh_7_signoff,
msh_9_iscv_val,
msh_9_hl7_parsing,
msh_9_expected_val,
msh_9_actual_val,
msh_9_pass,
msh_9_comments,
msh_9_signoff,
msh_9_1_iscv_val,
msh_9_1_hl7_parsing,
msh_9_1_expected_val,
msh_9_1_actual_val,
msh_9_1_pass,
msh_9_1_comments,
msh_9_1_signoff,
msh_9_2_iscv_val,
msh_9_2_hl7_parsing,
msh_9_2_expected_val,
msh_9_2_actual_val,
msh_9_2_pass,
msh_9_2_comments,
msh_9_2_signoff,
msh_10_iscv_val,
msh_10_hl7_parsing,
msh_10_expected_val,
msh_10_actual_val,
msh_10_pass,
msh_10_comments,
msh_10_signoff,
msh_11_iscv_val,
msh_11_hl7_parsing,
msh_11_expected_val,
msh_11_actual_val,
msh_11_pass,
msh_11_comments,
msh_11_signoff,
msh_12_iscv_val,
msh_12_hl7_parsing,
msh_12_expected_val,
msh_12_actual_val,
msh_12_pass,
msh_12_comments,
msh_12_signoff)VALUES ('$token','$msh_1_iscv_val','$msh_1_hl7_parsing','$msh_1_expected_val','$msh_1_actual_val','$msh_1_pass','$msh_1_comments','$msh_1_signoff',
'$msh_2_iscv_val','$msh_2_hl7_parsing','$msh_2_expected_val','$msh_2_actual_val','$msh_2_pass','$msh_2_comments','$msh_2_signoff'
,
'$msh_3_iscv_val','$msh_3_hl7_parsing','$msh_3_expected_val','$msh_3_actual_val','$msh_3_pass','$msh_3_comments','$msh_3_signoff'
,
'$msh_4_iscv_val','$msh_4_hl7_parsing','$msh_4_expected_val','$msh_4_actual_val','$msh_4_pass','$msh_4_comments','$msh_4_signoff'
,
'$msh_5_iscv_val','$msh_5_hl7_parsing','$msh_5_expected_val','$msh_5_actual_val','$msh_5_pass','$msh_5_comments','$msh_5_signoff'
,
'$msh_6_iscv_val','$msh_6_hl7_parsing','$msh_6_expected_val','$msh_6_actual_val','$msh_6_pass','$msh_6_comments','$msh_6_signoff'
,
'$msh_7_iscv_val','$msh_7_hl7_parsing','$msh_7_expected_val','$msh_7_actual_val','$msh_7_pass','$msh_7_comments','$msh_7_signoff'
,
'$msh_9_iscv_val','$msh_9_hl7_parsing','$msh_9_expected_val','$msh_9_actual_val','$msh_9_pass','$msh_9_comments','$msh_9_signoff'
,
'$msh_9_1_iscv_val','$msh_9_1_hl7_parsing','$msh_9_1_expected_val','$msh_9_1_actual_val','$msh_9_1_pass','$msh_9_1_comments','$msh_9_1_signoff',
'$msh_9_2_iscv_val','$msh_1_hl7_parsing','$msh_1_expected_val','$msh_1_actual_val','$msh_1_pass','$msh_1_comments','$msh_1_signoff',
'$msh_10_iscv_val','$msh_10_hl7_parsing','$msh_10_expected_val','$msh_10_actual_val','$msh_10_pass','$msh_10_comments','$msh_10_signoff',
'$msh_11_iscv_val','$msh_11_hl7_parsing','$msh_11_expected_val','$msh_11_actual_val','$msh_11_pass','$msh_11_comments','$msh_11_signoff',
'$msh_12_iscv_val','$msh_12_hl7_parsing','$msh_12_expected_val','$msh_12_actual_val','$msh_12_pass','$msh_12_comments','$msh_12_signoff')" ;

				mysqli_query($dcConn,$sql1);


$sql12 = "INSERT INTO section10_testplan_resultstext_pid(sec_sign,pid_3_iscv_val,
pid_3_hl7_parsing,
pid_3_expected_val,
pid_3_actual_val,
pid_3_pass,
pid_3_comments,
pid_3_signoff,
pid_3_1_iscv_val,
pid_3_1_hl7_parsing,
pid_3_1_expected_val,
pid_3_1_actual_val,
pid_3_1_pass,
pid_3_1_comments,
pid_3_1_signoff,
pid_3_4_iscv_val,
pid_3_4_hl7_parsing,
pid_3_4_expected_val,
pid_3_4_actual_val,
pid_3_4_pass,
pid_3_4_comments,
pid_3_4_signoff,
pid_5_iscv_val,
pid_5_hl7_parsing,
pid_5_expected_val,
pid_5_actual_val,
pid_5_pass,
pid_5_comments,
pid_5_signoff,
pid_5_1_iscv_val,
pid_5_1_hl7_parsing,
pid_5_1_expected_val,
pid_5_1_actual_val,
pid_5_1_pass,
pid_5_1_comments,
pid_5_1_signoff,
pid_5_2_iscv_val,
pid_5_2_hl7_parsing,
pid_5_2_expected_val,
pid_5_2_actual_val,
pid_5_2_pass,
pid_5_2_comments,
pid_5_2_signoff,
pid_5_3_iscv_val,
pid_5_3_hl7_parsing,
pid_5_3_expected_val,
pid_5_3_actual_val,
pid_5_3_pass,
pid_5_3_comments,
pid_5_3_signoff,
pid_7_iscv_val,
pid_7_hl7_parsing,
pid_7_expected_val,
pid_7_actual_val,
pid_7_pass,
pid_7_comments,
pid_7_signoff,
pid_8_iscv_val,
pid_8_hl7_parsing,
pid_8_expected_val,
pid_8_actual_val,
pid_8_pass,
pid_8_comments,
pid_8_signoff,
pid_10_iscv_val,
pid_10_hl7_parsing,
pid_10_expected_val,
pid_10_actual_val,
pid_10_pass,
pid_10_comments,
pid_10_signoff,
pid_11_iscv_val,
pid_11_hl7_parsing,
pid_11_expected_val,
pid_11_actual_val,
pid_11_pass,
pid_11_comments,
pid_11_signoff,
pid_11_1_iscv_val,
pid_11_1_hl7_parsing,
pid_11_1_expected_val,
pid_11_1_actual_val,
pid_11_1_pass,
pid_11_1_comments,
pid_11_1_signoff,
pid_11_2_iscv_val,
pid_11_2_hl7_parsing,
pid_11_2_expected_val,
pid_11_2_actual_val,
pid_11_2_pass,
pid_11_2_comments,
pid_11_2_signoff,
pid_11_3_iscv_val,
pid_11_3_hl7_parsing,
pid_11_3_expected_val,
pid_11_3_actual_val,
pid_11_3_pass,
pid_11_3_comments,
pid_11_3_signoff,
pid_11_4_iscv_val,
pid_11_4_hl7_parsing,
pid_11_4_expected_val,
pid_11_4_actual_val,
pid_11_4_pass,
pid_11_4_comments,
pid_11_4_signoff,
pid_11_5_iscv_val,
pid_11_5_hl7_parsing,
pid_11_5_expected_val,
pid_11_5_actual_val,
pid_11_5_pass,
pid_11_5_comments,
pid_11_5_signoff,
pid_13_iscv_val,
pid_13_hl7_parsing,
pid_13_expected_val,
pid_13_actual_val,
pid_13_pass,
pid_13_comments,
pid_13_signoff,
pid_14_iscv_val,
pid_14_hl7_parsing,
pid_14_expected_val,
pid_14_actual_val,
pid_14_pass,
pid_14_comments,
pid_14_signoff,
pid_18_iscv_val,
pid_18_hl7_parsing,
pid_18_expected_val,
pid_18_actual_val,
pid_18_pass,
pid_18_comments,
pid_18_signoff) VALUES ('$token','$pid_3_iscv_val','$pid_3_hl7_parsing','$pid_3_expected_val','$pid_3_actual_val','$pid_3_pass','$pid_3_comments','$pid_3_signoff',
'$pid_3_1_iscv_val','$pid_3_1_hl7_parsing','$pid_3_1_expected_val','$pid_3_1_actual_val','$pid_3_1_pass','$pid_3_1_comments','$pid_3_1_signoff',
'$pid_3_4_iscv_val','$pid_3_4_hl7_parsing','$pid_3_4_expected_val','$pid_3_4_actual_val','$pid_3_4_pass','$pid_3_4_comments','$pid_3_4_signoff',
'$pid_5_iscv_val','$pid_5_hl7_parsing','$pid_5_expected_val','$pid_5_actual_val','$pid_5_pass','$pid_5_comments','$pid_5_signoff',
'$pid_5_1_iscv_val','$pid_5_1_hl7_parsing','$pid_5_1_expected_val','$pid_5_1_actual_val','$pid_5_1_pass','$pid_5_1_comments','$pid_5_1_signoff',
'$pid_5_2_iscv_val','$pid_5_2_hl7_parsing','$pid_5_2_expected_val','$pid_5_2_actual_val','$pid_5_2_pass','$pid_5_2_comments','$pid_5_2_signoff',
'$pid_5_3_iscv_val','$pid_5_3_hl7_parsing','$pid_5_3_expected_val','$pid_5_3_actual_val','$pid_5_3_pass','$pid_5_3_comments','$pid_5_3_signoff',
'$pid_7_iscv_val','$pid_7_hl7_parsing','$pid_7_expected_val','$pid_7_actual_val','$pid_7_pass','$pid_7_comments','$pid_7_signoff',
'$pid_8_iscv_val','$pid_8_hl7_parsing','$pid_8_expected_val','$pid_8_actual_val','$pid_8_pass','$pid_8_comments','$pid_8_signoff',
'$pid_10_iscv_val','$pid_10_hl7_parsing','$pid_10_expected_val','$pid_10_actual_val','$pid_10_pass','$pid_10_comments','$pid_10_signoff',
'$pid_11_iscv_val','$pid_11_hl7_parsing','$pid_11_expected_val','$pid_11_actual_val','$pid_11_pass','$pid_11_comments','$pid_11_signoff',
'$pid_11_1_iscv_val','$pid_11_1_hl7_parsing','$pid_11_1_expected_val','$pid_11_1_actual_val','$pid_11_1_pass','$pid_11_1_comments','$pid_11_1_signoff',
'$pid_11_2_iscv_val','$pid_11_2_hl7_parsing','$pid_11_2_expected_val','$pid_11_2_actual_val','$pid_11_2_pass','$pid_11_2_comments','$pid_11_2_signoff',
'$pid_11_3_iscv_val','$pid_11_3_hl7_parsing','$pid_11_3_expected_val','$pid_11_3_actual_val','$pid_11_3_pass','$pid_11_3_comments','$pid_11_3_signoff',
'$pid_11_4_iscv_val','$pid_11_4_hl7_parsing','$pid_11_4_expected_val','$pid_11_4_actual_val','$pid_11_4_pass','$pid_11_4_comments','$pid_11_4_signoff',
'$pid_11_5_iscv_val','$pid_11_5_hl7_parsing','$pid_11_5_expected_val','$pid_11_5_actual_val','$pid_11_5_pass','$pid_11_5_comments','$pid_11_5_signoff',
'$pid_13_iscv_val','$pid_13_hl7_parsing','$pid_13_expected_val','$pid_13_actual_val','$pid_13_pass','$pid_13_comments','$pid_13_signoff',
'$pid_14_iscv_val','$pid_14_hl7_parsing','$pid_14_expected_val','$pid_14_actual_val','$pid_14_pass','$pid_14_comments','$pid_14_signoff',
'$pid_18_iscv_val','$pid_18_hl7_parsing','$pid_18_expected_val','$pid_18_actual_val','$pid_18_pass','$pid_18_comments','$pid_18_signoff')";

				mysqli_query($dcConn,$sql12);



	    		$sql13 = "INSERT INTO section10_testplan_resultstext_pv1(sec_sign,pv1_2_iscv_val,
pv1_2_hl7_parsing,
pv1_2_expected_val,
pv1_2_actual_val,
pv1_2_pass,
pv1_2_comments,
pv1_2_signoff,
pv1_3_iscv_val,
pv1_3_hl7_parsing,
pv1_3_expected_val,
pv1_3_actual_val,
pv1_3_pass,
pv1_3_comments,
pv1_3_signoff,
pv1_8_iscv_val,
pv1_8_hl7_parsing,
pv1_8_expected_val,
pv1_8_actual_val,
pv1_8_pass,
pv1_8_comments,
pv1_8_signoff,
pv1_8_1_iscv_val,
pv1_8_1_hl7_parsing,
pv1_8_1_expected_val,
pv1_8_1_actual_val,
pv1_8_1_pass,
pv1_8_1_comments,
pv1_8_1_signoff,
pv1_8_2_iscv_val,
pv1_8_2_hl7_parsing,
pv1_8_2_expected_val,
pv1_8_2_actual_val,
pv1_8_2_pass,
pv1_8_2_comments,
pv1_8_2_signoff) VALUES ('$token','$pv1_2_iscv_val','$pv1_2_hl7_parsing','$pv1_2_expected_val','$pv1_2_actual_val','$pv1_2_pass', '$pv1_2_comments','$pv1_2_signoff',
'$pv1_3_iscv_val','$pv1_3_hl7_parsing','$pv1_3_expected_val','$pv1_3_actual_val','$pv1_3_pass','$pv1_3_comments',
'$pv1_3_signoff','$pv1_8_iscv_val','$pv1_8_hl7_parsing','$pv1_8_expected_val','$pv1_8_actual_val','$pv1_8_pass',
'$pv1_8_comments','$pv1_8_signoff','$pv1_8_1_iscv_val','$pv1_8_1_hl7_parsing','$pv1_8_1_expected_val','$pv1_8_1_actual_val',
'$pv1_8_1_pass','$pv1_8_1_comments','$pv1_8_1_signoff',
'$pv1_8_2_iscv_val','$pv1_8_2_hl7_parsing','$pv1_8_2_expected_val','$pv1_8_2_actual_val','$pv1_8_2_pass','$pv1_8_2_comments',
'$pv1_8_2_signoff')";

				mysqli_query($dcConn,$sql13);


	    		$sql4 = "INSERT INTO section10_testplan_resultstext_orc(sec_sign,orc_1_iscv_val,
orc_1_hl7_parsing,
orc_1_expected_val,
orc_1_actual_val,
orc_1_pass,
orc_1_comments,
orc_1_signoff,
orc_3_iscv_val,
orc_3_hl7_parsing,
orc_3_expected_val,
orc_3_actual_val,
orc_3_pass,
orc_3_comments,
orc_3_signoff,
orc_5_iscv_val,
orc_5_hl7_parsing,
orc_5_expected_val,
orc_5_actual_val,
orc_5_pass,
orc_5_comments,
orc_5_signoff) VALUES ('$token','$orc_1_iscv_val','$orc_1_hl7_parsing','$orc_1_expected_val','$orc_1_actual_val','$orc_1_pass','orc_1_comments','$orc_1_signoff',
'$orc_3_iscv_val','$orc_3_hl7_parsing','$orc_3_expected_val','$orc_3_actual_val','$orc_3_pass','orc_3_comments','$orc_3_signoff',
'$orc_5_iscv_val','$orc_5_hl7_parsing','$orc_5_expected_val','$orc_5_actual_val','$orc_5_pass','orc_5_comments','$orc_5_signoff')";

				mysqli_query($dcConn,$sql4);


	    		$sql15 = "INSERT INTO section10_testplan_resultstext_obr(sec_sign,obr_1_iscv_val,
obr_1_hl7_parsing,
obr_1_expected_val,
obr_1_actual_val,
obr_1_pass,
obr_1_comments,
obr_1_signoff,
obr_2_iscv_val,
obr_2_hl7_parsing,
obr_2_expected_val,
obr_2_actual_val,
obr_2_pass,
obr_2_comments,
obr_2_signoff,
obr_3_iscv_val,
obr_3_hl7_parsing,
obr_3_expected_val,
obr_3_actual_val,
obr_3_pass,
obr_3_comments,
obr_3_signoff,
obr_4_iscv_val,
obr_4_hl7_parsing,
obr_4_expected_val,
obr_4_actual_val,
obr_4_pass,
obr_4_comments,
obr_4_signoff,
obr_4_1_iscv_val,
obr_4_1_hl7_parsing,
obr_4_1_expected_val,
obr_4_1_actual_val,
obr_4_1_pass,
obr_4_1_comments,
obr_4_1_signoff,
obr_4_2_iscv_val,
obr_4_2_hl7_parsing,
obr_4_2_expected_val,
obr_4_2_actual_val,
obr_4_2_pass,
obr_4_2_comments,
obr_4_2_signoff,
obr_7_iscv_val,
obr_7_hl7_parsing,
obr_7_expected_val,
obr_7_actual_val,
obr_7_pass,
obr_7_comments,
obr_7_signoff,
obr_8_iscv_val,
obr_8_hl7_parsing,
obr_8_expected_val,
obr_8_actual_val,
obr_8_pass,
obr_8_comments,
obr_8_signoff,
obr_16_iscv_val,
obr_16_hl7_parsing,
obr_16_expected_val,
obr_16_actual_val,
obr_16_pass,
obr_16_comments,
obr_16_signoff,
obr_18_iscv_val,
obr_18_hl7_parsing,
obr_18_expected_val,
obr_18_actual_val,
obr_18_pass,
obr_18_comments,
obr_18_signoff,
obr_20_iscv_val,
obr_20_hl7_parsing,
obr_20_expected_val,
obr_20_actual_val,
obr_20_pass,
obr_20_comments,
obr_20_signoff,
obr_22_iscv_val,
obr_22_hl7_parsing,
obr_22_expected_val,
obr_22_actual_val,
obr_22_pass,
obr_22_comments,
obr_22_signoff,
obr_24_iscv_val,
obr_24_hl7_parsing,
obr_24_expected_val,
obr_24_actual_val,
obr_24_pass,
obr_24_comments,
obr_24_signoff,
obr_25_iscv_val,
obr_25_hl7_parsing,
obr_25_expected_val,
obr_25_actual_val,
obr_25_pass,
obr_25_comments,
obr_25_signoff,
obr_31_iscv_val,
obr_31_hl7_parsing,
obr_31_expected_val,
obr_31_actual_val,
obr_31_pass,
obr_31_comments,
obr_31_signoff,
obr_32_iscv_val,
obr_32_hl7_parsing,
obr_32_expected_val,
obr_32_actual_val,
obr_32_pass,
obr_32_comments,
obr_32_signoff,
obr_32_1_1_iscv_val,
obr_32_1_1_hl7_parsing,
obr_32_1_1_expected_val,
obr_32_1_1_actual_val,
obr_32_1_1_pass,
obr_32_1_1_comments,
obr_32_1_1_signoff,
obr_32_1_2_iscv_val,
obr_32_1_2_hl7_parsing,
obr_32_1_2_expected_val,
obr_32_1_2_actual_val,
obr_32_1_2_pass,
obr_32_1_2_comments,
obr_32_1_2_signoff,
obr_32_1_3_iscv_val,
obr_32_1_3_hl7_parsing,
obr_32_1_3_expected_val,
obr_32_1_3_actual_val,
obr_32_1_3_pass,
obr_32_1_3_comments,
obr_32_1_3_signoff,
obr_32_1_4_iscv_val,
obr_32_1_4_hl7_parsing,
obr_32_1_4_expected_val,
obr_32_1_4_actual_val,
obr_32_1_4_pass,
obr_32_1_4_comments,
obr_32_1_4_signoff) VALUES ('$token','$obr_1_iscv_val','$obr_1_hl7_parsing','$obr_1_expected_val','$obr_1_actual_val','$obr_1_pass','obr_1_comments','$obr_1_signoff',
'$obr_2_iscv_val','$obr_2_hl7_parsing','$obr_2_expected_val','$obr_2_actual_val','$obr_2_pass','obr_2_comments','$obr_2_signoff',
'$obr_3_iscv_val','$obr_3_hl7_parsing','$obr_3_expected_val','$obr_3_actual_val','$obr_3_pass','obr_3_comments','$obr_3_signoff',
'$obr_4_iscv_val','$obr_4_hl7_parsing','$obr_4_expected_val','$obr_4_actual_val','$obr_4_pass','obr_4_comments','$obr_4_signoff',
'$obr_4_1_iscv_val','$obr_4_1_hl7_parsing','$obr_4_1_expected_val','$obr_4_1_actual_val','$obr_4_1_pass','obr_4_1_comments','$obr_4_1_signoff',
'$obr_4_2_iscv_val','$obr_4_2_hl7_parsing','$obr_4_2_expected_val','$obr_4_2_actual_val','$obr_4_2_pass','obr_4_2_comments','$obr_4_2_signoff',
'$obr_7_iscv_val','$obr_7_hl7_parsing','$obr_7_expected_val','$obr_7_actual_val','$obr_7_pass','obr_7_comments','$obr_7_signoff',
'$obr_8_iscv_val','$obr_8_hl7_parsing','$obr_8_expected_val','$obr_8_actual_val','$obr_8_pass','obr_8_comments','$obr_8_signoff',
'$obr_16_iscv_val','$obr_16_hl7_parsing','$obr_16_expected_val','$obr_16_actual_val','$obr_16_pass','obr_16_comments','$obr_16_signoff',
'$obr_18_iscv_val','$obr_18_hl7_parsing','$obr_18_expected_val','$obr_18_actual_val','$obr_18_pass','obr_18_comments','$obr_18_signoff',
'$obr_20_iscv_val','$obr_20_hl7_parsing','$obr_20_expected_val','$obr_20_actual_val','$obr_20_pass','obr_20_comments','$obr_20_signoff',
'$obr_22_iscv_val','$obr_22_hl7_parsing','$obr_22_expected_val','$obr_22_actual_val','$obr_22_pass','obr_22_comments','$obr_22_signoff',
'$obr_24_iscv_val','$obr_24_hl7_parsing','$obr_24_expected_val','$obr_24_actual_val','$obr_24_pass','obr_24_comments','$obr_24_signoff',
'$obr_25_iscv_val','$obr_25_hl7_parsing','$obr_25_expected_val','$obr_25_actual_val','$obr_25_pass','obr_25_comments','$obr_25_signoff',
'$obr_31_iscv_val','$obr_31_hl7_parsing','$obr_31_expected_val','$obr_31_actual_val','$obr_31_pass','obr_31_comments','$obr_31_signoff',
'$obr_32_iscv_val','$obr_32_hl7_parsing','$obr_32_expected_val','$obr_32_actual_val','$obr_32_pass','obr_32_comments','$obr_32_signoff',
'$obr_32_1_1_iscv_val','$obr_32_1_1_hl7_parsing','$obr_32_1_1_expected_val','$obr_32_1_1_actual_val','$obr_32_1_1_pass','obr_32_1_1_comments','$obr_32_1_1_signoff',
'$obr_32_1_2_iscv_val','$obr_32_1_2_hl7_parsing','$obr_32_1_2_expected_val','$obr_32_1_2_actual_val','$obr_32_1_2_pass','obr_32_1_2_comments','$obr_32_1_2_signoff',
'$obr_32_1_3_iscv_val','$obr_32_1_3_hl7_parsing','$obr_32_1_3_expected_val','$obr_32_1_3_actual_val','$obr_32_1_3_pass','obr_32_1_3_comments','$obr_32_1_3_signoff',
'$obr_32_1_4_iscv_val','$obr_32_1_4_hl7_parsing','$obr_32_1_4_expected_val','$obr_32_1_4_actual_val','$obr_32_1_4_pass','obr_32_1_4_comments','$obr_32_1_4_signoff')";

				mysqli_query($dcConn,$sql15);


	    		$sql6 = "INSERT INTO section10_testplan_resultstext_obx(sec_sign,obx_1_iscv_val,
obx_1_hl7_parsing,
obx_1_expected_val,
obx_1_actual_val,
obx_1_pass,
obx_1_comments,
obx_1_signoff,
obx_2_iscv_val,
obx_2_hl7_parsing,
obx_2_expected_val,
obx_2_actual_val,
obx_2_pass,
obx_2_comments,
obx_2_signoff,
obx_3_iscv_val,
obx_3_hl7_parsing,
obx_3_expected_val,
obx_3_actual_val,
obx_3_pass,
obx_3_comments,
obx_3_signoff,
obx_3_1_iscv_val,
obx_3_1_hl7_parsing,
obx_3_1_expected_val,
obx_3_1_actual_val,
obx_3_1_pass,
obx_3_1_comments,
obx_3_1_signoff,
obx_3_2_iscv_val,
obx_3_2_hl7_parsing,
obx_3_2_expected_val,
obx_3_2_actual_val,
obx_3_2_pass,
obx_3_2_comments,
obx_3_2_signoff,
obx_4_iscv_val,
obx_4_hl7_parsing,
obx_4_expected_val,
obx_4_actual_val,
obx_4_pass,
obx_4_comments,
obx_4_signoff,
obx_5_iscv_val,
obx_5_hl7_parsing,
obx_5_expected_val,
obx_5_actual_val,
obx_5_pass,
obx_5_comments,
obx_5_signoff,
obx_11_iscv_val,
obx_11_hl7_parsing,
obx_11_expected_val,
obx_11_actual_val,
obx_11_pass,
obx_11_comments,
obx_11_signoff) VALUES ('$token','$obx_1_iscv_val','$obx_1_hl7_parsing','$obx_1_expected_val','$obx_1_actual_val','$obx_1_pass','$obx_1_comments','$obx_1_signoff',
'$obx_2_iscv_val','$obx_2_hl7_parsing','$obx_2_expected_val','$obx_2_actual_val','$obx_2_pass','$obx_2_comments','$obx_2_signoff',
'$obx_3_iscv_val','$obx_3_hl7_parsing','$obx_3_expected_val','$obx_3_actual_val','$obx_3_pass','$obx_3_comments','$obx_3_signoff',
'$obx_3_1_iscv_val','$obx_3_1_hl7_parsing','$obx_3_1_expected_val','$obx_3_1_actual_val','$obx_3_1_pass','$obx_3_1_comments','$obx_3_1_signoff',
'$obx_3_2_iscv_val','$obx_3_2_hl7_parsing','$obx_3_2_expected_val','$obx_3_2_actual_val','$obx_3_2_pass','$obx_3_2_comments','$obx_3_2_signoff',
'$obx_4_iscv_val','$obx_4_hl7_parsing','$obx_4_expected_val','$obx_4_actual_val','$obx_4_pass','$obx_4_comments','$obx_4_signoff',
'$obx_5_iscv_val','$obx_5_hl7_parsing','$obx_5_expected_val','$obx_5_actual_val','$obx_5_pass','$obx_5_comments','$obx_5_signoff',
'$obx_11_iscv_val','$obx_11_hl7_parsing','$obx_11_expected_val','$obx_11_actual_val','$obx_11_pass','$obx_11_comments','$obx_11_signoff')";

				mysqli_query($dcConn,$sql6);



	    		$sql7 = "INSERT INTO section10_testplan_resultstext_zds(sec_sign,zds_1_iscv_val,
zds_1_hl7_parsing,
zds_1_expected_val,
zds_1_actual_val,
zds_1_pass,
zds_1_comments,
zds_1_signoff) VALUES ('$token','$zds_1_iscv_val','$zds_1_hl7_parsing',
	    		'$zds_1_expected_val','$zds_1_actual_val','$zds_1_pass','zds_1_comments','zds_1_signoff')";

				mysqli_query($dcConn,$sql7);



	    	

	    	}
	    	$ctr--;


	    	
	    }

	    //Update Sections
	    $sql = "UPDATE sections
	    		SET section10_resultstext='$token',section10_resultstext_msh='$token',section10_resultstext_obr='$token',section10_resultstext_obx='$token',section10_resultstext_orc='$token',section10_resultstext_pid='$token',section10_resultstext_pv1='$token',section10_resultstext_zds='$token'
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
