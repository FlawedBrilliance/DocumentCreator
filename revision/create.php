<?php
	
	//API Headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../conn/dbh.inc.php' ;

	//Error Display
	error_reporting(E_ALL); ini_set('display_errors', 1);

	//Response Array
	$response = array();
	$dateTime = date('Y-m-d H:i:s') ;

	if(($_GET['prs'])&&($_GET['token']))
	{
		//Get PRS and Token
		$prs = $_GET['prs'];
		$token = $_GET['token'];

		//Check if Revision table already updated
		$sql = "SELECT *
				FROM revisions
				WHERE rev_sign='$token';" ;
		$result = mysqli_query($dcConn,$sql);
		$resultCheck = mysqli_num_rows($result) ;

		if($resultCheck<1)
		{
		    //Create New Revision
		    $sql = "INSERT INTO revisions (rev_sign,prs,rev_id1,rev_id2,rev_desc,rev_author,rev_date,published)
		    		VALUES ('$token','$prs',1,1,'New Unpublished Revision','System','$dateTime',0);" ;
			$result = mysqli_query($dcConn,$sql);

			if ($result==true)
			{
			    //Retrieve latest published revision
			    $sql = "SELECT *
			    		FROM revisions
			    		WHERE prs='$prs' AND published=1
			    		ORDER BY rev_date DESC;" ;
				$result = mysqli_query($dcConn,$sql);
				$resultCheck = mysqli_num_rows($result) ;

				if($resultCheck>0)
				{
					$row = mysqli_fetch_row($result);
					$revSign = $row[0];

				    //Retrieve latest published section row
				    $sql = "SELECT *
				    		FROM sections
				    		WHERE rev_sign='$revSign';" ;
					$result = mysqli_query($dcConn,$sql);
					$resultCheck = mysqli_num_rows($result) ;

					if ($resultCheck>0)
					{
						$row = mysqli_fetch_row($result);

			    		//Create New Section Row
				        $sql = "INSERT INTO sections (rev_sign,section2,section3,section4,section5,section6,section7,section7_pid,section7_pv1,section7_orc,section7_obr,section7_obx,section7_zds,section8,section9,section9_demographics,section9_study,section9_xcommon,section9_xae,section9_ibeadt,section9_patientindex,section9_ibecommon,section9_xreporter,section10,section10_orders_neworder,section10_orders_cancelorder,section10_orders_status,section10_dicom_worklist_createorder,section10_dicom_usmodality,section10_dicom_imagetransfer,section10_dicom_createreport,section10_dicom_resultmsg,section10_dicom_dw_images,section10_dicom_dw_reconcile_study,section10_dicom_dw_createreport,section10_dicom_dw_resultmsg,section10_procedures,section10_resultpdf,section10_resultpdf_msh,section10_resultpdf_obr,section10_resultpdf_obx,section10_resultpdf_orc,section10_resultpdf_pid,section10_resultpdf_pv1,section10_resultpdf_zds,section10_resultstext,section10_resultstext_msh,section10_resultstext_obr,section10_resultstext_obx,section10_resultstext_orc,section10_resultstext_pid,section10_resultstext_pv1,section10_resultstext_zds,section10_resultsutr,section10_resultsutr_msh,section10_resultsutr_obr,section10_resultsutr_obx,section10_resultsutr_orc,section10_resultsutr_pid,section10_resultsutr_pv1,section10_resultsutr_zds,section11,section12)VALUES ('$token','$row[1]','$row[2]','$row[3]','$row[4]','$row[5]','$row[6]','$row[7]','$row[8]','$row[9]','$row[10]','$row[11]','$row[12]','$row[13]','$row[14]','$row[15]','$row[16]','$row[17]','$row[18]','$row[19]','$row[20]','$row[21]','$row[22]','$row[23]','$row[24]','$row[25]','$row[26]','$row[27]','$row[28]','$row[29]','$row[30]','$row[31]','$row[32]','$row[33]','$row[34]','$row[35]','$row[36]','$row[37]','$row[38]','$row[39]','$row[40]','$row[41]','$row[42]','$row[43]','$row[44]','$row[45]','$row[46]','$row[47]','$row[48]','$row[49]','$row[50]','$row[51]','$row[52]','$row[53]','$row[54]','$row[55]','$row[56]','$row[57]','$row[58]','$row[59]','$row[60]','$row[61]','$row[62]');" ;
				    	$result = mysqli_query($dcConn,$sql);

				    	$response['status'] = 1;
				    	$response['message'] = "You're now editing this document" ;
					}
					else
					{
						$response['status'] = 0;
						$response['message'] = "Something went wrong (Error: Failed to retrieve latest section details), please contact administrator." ;
					}
				}
				else
				{
					$response['status'] = 0;
					$response['message'] = "Something went wrong (Error: Failed to retrieve latest revision), please contact administrator." ;
				}
			}
			else
			{
				//Failed to create new revision
				$response['status'] = 0;
		        $response['message'] = "Something went wrong (Error: Failed to create new revision), please contact administrator with Reference ID:".$token ;
		        $response['res'] = $sql;
			}
		}
		else
		{
			//Do Nothing
			$response['status'] = 1;
			$response['message'] = "You're now editing this document" ;
		}
	}
	else
	{
		$response['status'] = 0;
		$response['message'] = "Something went wrong, please contact administrator before editing.";
	}		

	//Output Data in JSON
	echo json_encode($response);

?>
