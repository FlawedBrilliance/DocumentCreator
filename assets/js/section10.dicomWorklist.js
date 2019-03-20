//id format =column.tabel_no.row_no



var section = '10/dicom' ;
//ECHO Table
$TableCtr=0 ;
$("#addrow_echo").click(function()
{
	
	$TableCtr++;


	rowString = `
	
	
	<table class="ui celled table black unstackable" >
				
						<thead>
			              
			              	<th class="six wide"><center>Workflow Steps</center></th>
							<th class="two wide"><center>Pass_fail</center></th>
							<th class="eight wide"><center>Comments</center></th>

						</thead>

						<tbody>


					<tr>
								<td colspan="3"><b>General Workflow</b></td>
							</tr>

							<tr>
								<td colspan="3"><b>Create Order</b></td>
							</tr>
								<tr>
									<td>Create order in HIS.</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`1" name="Pass_fail`+$TableCtr+`1" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`1" name="Comments`+$TableCtr+`1" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ORM is received by ISCV IBE.
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`2" name="Pass_fail`+$TableCtr+`2" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`2" name="Comments`+$TableCtr+`2" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ISCV IBE places order into the DMWL queue for modality queries.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`3" name="Pass_fail`+$TableCtr+`3" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`3" name="Comments`+$TableCtr+`3" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ISCV IBE assigns SUID for linking order and images.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`4" name="Pass_fail`+$TableCtr+`4" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`4" name="Comments`+$TableCtr+`4" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										Patient folder is created in ISCV DB for new patient, <br>
       or updates patient information in existing folder.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`5" name="Pass_fail`+$TableCtr+`5" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`5" name="Comments`+$TableCtr+`5" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										New order is created in the patient folder in ISCV.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`6" name="Pass_fail`+$TableCtr+`6" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`6" name="Comments`+$TableCtr+`6" />
										</div>
									</td>
								</tr>

								<tr>
								<td colspan="3"><b>Query ISCV IBE for DMWL via Modality Emulator or US Modality
								</b></td>
								</tr>
									<tr>
									<td>
										Initiate Query on DICOM Modality for ISCV IBE worklist.
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`7" name="Pass_fail`+$TableCtr+`7" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`7" name="Comments`+$TableCtr+`7" />
										</div>
									</td>
								</tr>
								<tr>
								<td>
									Locate order on DICOM modality worklist.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`8" name="Pass_fail`+$TableCtr+`8" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`8" name="Comments`+$TableCtr+`8" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Acquire Patient Images and Transmit Images to ISCV
							</b></td>
							</tr>
							<tr>
								<td>
									Select patient from DICOM Modality worklist on US modality.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`9" name="Pass_fail`+$TableCtr+`9" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`9" name="Comments`+$TableCtr+`9" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Perform study.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`10" name="Pass_fail`+$TableCtr+`10" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`10" name="Comments`+$TableCtr+`10" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Transfer images to ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`11" name="Pass_fail`+$TableCtr+`11" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`11" name="Comments`+$TableCtr+`11" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed from "Ordered" to "Unread" in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`12" name="Pass_fail`+$TableCtr+`12" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`12" name="Comments`+$TableCtr+`12" />
									</div>
								</td>
							</tr>

							<tr>
							<td colspan="3"><b>Create Report and Finalize Study
							</b></td>
							</tr>
							<tr>
								<td>
									Create report in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`13" name="Pass_fail`+$TableCtr+`13" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`13" name="Comments`+$TableCtr+`13" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize study in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`14" name="Pass_fail`+$TableCtr+`14" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`14" name="Comments`+$TableCtr+`14" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed to "Final" in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`15" name="Pass_fail`+$TableCtr+`15" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`15" name="Comments`+$TableCtr+`15" />
									</div>
								</td>
							</tr>

							<tr>
							<td colspan="3"><b>Result Message Created and Sent to HIS
							</b></td>
							</tr>
							<tr>
								<td>
									ISCV IBE creates ORU HL7 message.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`16" name="Pass_fail`+$TableCtr+`16" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`16" name="Comments`+$TableCtr+`16" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									ISCV IBE sends the ORU HL7 message to HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`17" name="Pass_fail`+$TableCtr+`17" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`17" name="Comments`+$TableCtr+`17" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Result Report in HIS
							</b></td>
							</tr>
							<tr>
								<td>
									Verify result report is accessible in HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`18" name="Pass_fail`+$TableCtr+`18" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`18" name="Comments`+$TableCtr+`18" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Amend Report
							</b></td>
							</tr>
							<tr>
								<td>
									Amend the report in ISCV.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`19" name="Pass_fail`+$TableCtr+`19" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`19" name="Comments`+$TableCtr+`19" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize amended report in ISCV.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`20" name="Pass_fail`+$TableCtr+`20" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`20" name="Comments`+$TableCtr+`20" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Result Report in HIS

							</b></td>
							</tr>
							<tr>
								<td>
									Verify amended result report is accessible in HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`21" name="Pass_fail`+$TableCtr+`21" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`21" name="Comments`+$TableCtr+`21" />
									</div>
								</td>
							</tr>

							<tr>
							<td colspan="3"><b>Downtime Workflow
							</b></td>
							</tr>
							<tr>
							<td colspan="3"><b>Acquire Patient Images and Transmit Images to ISCV
							</b></td>
							</tr>
							<tr>
								<td>
									Manually enter patient MRN and name on the US modality.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`22" name="Pass_fail`+$TableCtr+`22" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`22" name="Comments`+$TableCtr+`22" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Perform study.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`23" name="Pass_fail`+$TableCtr+`23" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`23" name="Comments`+$TableCtr+`23" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Transfer images to ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`24" name="Pass_fail`+$TableCtr+`24" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`24" name="Comments`+$TableCtr+`24" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify study is in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`25" name="Pass_fail`+$TableCtr+`25" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`25" name="Comments`+$TableCtr+`25" />
									</div>
								</td>
							</tr>

							<tr>
							<td colspan="3"><b>Reconcile Study when Systems Online
							</b></td>
							</tr>
							<tr>
								<td>
									Locate order in ISCV for study performed during downtime

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`26" name="Pass_fail`+$TableCtr+`26" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`26" name="Comments`+$TableCtr+`26" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Merge study into order in ISCV OR manually enter required order information in study work area.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`27" name="Pass_fail`+$TableCtr+`27" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`27" name="Comments`+$TableCtr+`27" />
									</div>
								</td>
							</tr>

							<tr>
							<td colspan="3"><b>Create Report and Finalize Study

							</b></td>
							</tr>
							<tr>
								<td>
									Create report in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`28" name="Pass_fail`+$TableCtr+`28" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`28" name="Comments`+$TableCtr+`28" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize study in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`29" name="Pass_fail`+$TableCtr+`29" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`29" name="Comments`+$TableCtr+`29" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed to "Final" in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`30" name="Pass_fail`+$TableCtr+`30" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`30" name="Comments`+$TableCtr+`30" />
									</div>
								</td>
							</tr>

							<td colspan="3"><b>Result Message Created and Sent to HIS
							</b></td>
							</tr>
							<tr>
								<td>
									ISCV IBE creates ORU HL7 message.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`31" name="Pass_fail`+$TableCtr+`31" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`31" name="Comments`+$TableCtr+`31" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									ISCV IBE sends the ORU HL7 message to HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`32" name="Pass_fail`+$TableCtr+`32" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`32" name="Comments`+$TableCtr+`32" />
									</div>
								</td>
							</tr>

							<td colspan="3"><b>Result Report in HIS
							</b></td>
							</tr>
							<tr>
								<td>
									Verify result report is accessible in HIS.
							</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`33" name="Pass_fail`+$TableCtr+`33" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`33" name="Comments`+$TableCtr+`33" />
									</div>
								</td>
							</tr>
							</tbody>

</table>
							`

	$('#echoTable tbody:last').before(rowString);
	$('#TableCtr').val($TableCtr);
	$('.editField').prop('readOnly', false);
	
});







var url = apiUrl+'/section10/dicom/fetch_dicom_worklist_create_order.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
        //Sample Messages Table
        $.each(response.fetch_dicom_worklist_create_order,function(key,dicomcrData)
        {
                rowString = `
     	<table class="ui celled table black unstackable" >
				
						<thead>
			              
			              	<th class="six wide"><center>Workflow Steps</center></th>
							<th class="two wide"><center>Pass_fail</center></th>
							<th class="eight wide"><center>Comments</center></th>

						</thead>

						<tbody>


					<tr>
								<td colspan="3"><b>General Workflow</b></td>
							</tr>

							<tr>
								<td colspan="3"><b>Create Order</b></td>
							</tr>
								<tr>
									<td>Create order in HIS.</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`1" name="Pass_fail`+$TableCtr+`1" value="`+dicomcrData.create_report_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`1" name="Comments`+$TableCtr+`1" value="`+dicomcrData.create_report_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ORM is received by ISCV IBE.
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`2" name="Pass_fail`+$TableCtr+`2" value="`+dicomcrData.orm_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`2" name="Comments`+$TableCtr+`2" value="`+dicomcrData.orm_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ISCV IBE places order into the DMWL queue for modality queries.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`3" name="Pass_fail`+$TableCtr+`3" value="`+dicomcrData.modality_query_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`3" name="Comments`+$TableCtr+`3" value="`+dicomcrData.modality_query_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										ISCV IBE assigns SUID for linking order and images.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`4" name="Pass_fail`+$TableCtr+`4" value="`+dicomcrData.suid_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`4" name="Comments`+$TableCtr+`4" value="`+dicomcrData.suid_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										Patient folder is created in ISCV DB for new patient, <br>
       or updates patient information in existing folder.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`5" name="Pass_fail`+$TableCtr+`5" value="`+dicomcrData.update_patient_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`5" name="Comments`+$TableCtr+`5" value="`+dicomcrData.update_patient_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										New order is created in the patient folder in ISCV.

									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`6" name="Pass_fail`+$TableCtr+`6" value="`+dicomcrData.neworder_pass+`" />
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`6" name="Comments`+$TableCtr+`6" value="`+dicomcrData.neworder_comments+`" />
										</div>
									</td>
								</tr>
							</tbody>
							</table>
							
                ` ;


                $('#echoTable tbody:last').before(rowString);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});



var url1 = apiUrl+'/section10/dicom/fetch_usmodality.php?prs=' + prs + '&token=' + token;
$.getJSON(url1,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_usmodality,function(key,dicomusmData)
        {
                rowString1 = `<table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
								<td colspan="3"><b>Query ISCV IBE for DMWL via Modality Emulator or US Modality
								</b></td>
								</tr>
                               	<tr>
									<td>
										Initiate Query on DICOM Modality for ISCV IBE worklist.
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Pass_fail`+$TableCtr+`7" name="Pass_fail`+$TableCtr+`7"  value="`+dicomusmData.initiate_query_pass+`"/>
										</div>
									</td>
									<td>
										<div class="ui form">
											<input type="text" id="Comments`+$TableCtr+`7" name="Comments`+$TableCtr+`7"  value="`+dicomusmData.initiate_query_comments+`" />
										</div>
									</td>
								</tr>
								<tr>
								<td>
									Locate order on DICOM modality worklist.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`8" name="Pass_fail`+$TableCtr+`8" value="`+dicomusmData.locate_order_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`8" name="Comments`+$TableCtr+`8"  value="`+dicomusmData.locate_order_commnets+`"/>
									</div>
								</td>
							</tr>
							</tbody>

</table>
                ` ;


                $('#echoTable tbody:last').before(rowString1);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});

var url2 = apiUrl+'/section10/dicom/fetch_img_transfer.php?prs=' + prs + '&token=' + token;
$.getJSON(url2,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_imagetransfer,function(key,dicomimgmData)
        {
                rowString2 = `
                <table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
							<td colspan="3"><b>Acquire Patient Images and Transmit Images to ISCV
							</b></td>
							</tr>
                               	<tr>
								<td>
									Select patient from DICOM Modality worklist on US modality.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`9" name="Pass_fail`+$TableCtr+`9" value="`+dicomimgmData.select_patient_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`9" name="Comments`+$TableCtr+`9" value="`+dicomimgmData.select_patient_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Perform study.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`10" name="Pass_fail`+$TableCtr+`10" value="`+dicomimgmData.study_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`10" name="Comments`+$TableCtr+`10" value="`+dicomimgmData.study_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Transfer images to ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`11" name="Pass_fail`+$TableCtr+`11" value="`+dicomimgmData.transfer_images_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`11" name="Comments`+$TableCtr+`11" value="`+dicomimgmData.transfer_images_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed from "Ordered" to "Unread" in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`12" name="Pass_fail`+$TableCtr+`12" value="`+dicomimgmData.verify_status_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`12" name="Comments`+$TableCtr+`12" value="`+dicomimgmData.verify_status_comments+`" />
									</div>
								</td>
							</tr>
							</tbody>

</table>
                ` ;


                $('#echoTable tbody:last').before(rowString2);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});

var url3 = apiUrl+'/section10/dicom/fetch_create_report.php?prs=' + prs + '&token=' + token;
$.getJSON(url3,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_createreport,function(key,dicomcrmData)
        {
                rowString3 = `
                <table class="ui celled table black unstackable" >
				
						

						<tbody>
                               	<tr>
							<td colspan="3"><b>Create Report and Finalize Study
							</b></td>
							</tr>
							<tr>
								<td>
									Create report in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`13" name="Pass_fail`+$TableCtr+`13" value="`+dicomcrmData.create_report_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`13" name="Comments`+$TableCtr+`13"  value="`+dicomcrmData.create_report_comments+`"/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize study in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`14" name="Pass_fail`+$TableCtr+`14" value="`+dicomcrmData.finalize_study_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`14" name="Comments`+$TableCtr+`14" value="`+dicomcrmData.finalize_study_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed to "Final" in ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`15" name="Pass_fail`+$TableCtr+`15" value="`+dicomcrmData.verify_status_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`15" name="Comments`+$TableCtr+`15" value="`+dicomcrmData.verify_status_comments+`" />
									</div>
								</td>
							</tr>
							</tbody>

</table>
                ` ;


                $('#echoTable tbody:last').before(rowString3);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});


var url4 = apiUrl+'/section10/dicom/fetch_result_img.php?prs=' + prs + '&token=' + token;
$.getJSON(url4,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_images,function(key,dicomrimgData)
        {
                rowString4 = `
                <table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
							<td colspan="3"><b>Result Message Created and Sent to HIS
							</b></td>
							</tr>
                               	<tr>
								<td>
									ISCV IBE creates ORU HL7 message.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`16" name="Pass_fail`+$TableCtr+`16" value="`+dicomrimgData.createoru_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`16" name="Comments`+$TableCtr+`16" value="`+dicomrimgData.createoru_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									ISCV IBE sends the ORU HL7 message to HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`17" name="Pass_fail`+$TableCtr+`17" value="`+dicomrimgData.sendoru_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`17" name="Comments`+$TableCtr+`17" value="`+dicomrimgData.sendoru_comments+`" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Result Report in HIS
							</b></td>
							</tr>
							<tr>
								<td>
									Verify result report is accessible in HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`18" name="Pass_fail`+$TableCtr+`18" value="`+dicomrimgData.verify_status_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`18" name="Comments`+$TableCtr+`18" value="`+dicomrimgData.verify_status_comments+`" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Amend Report
							</b></td>
							</tr>
							<tr>
								<td>
									Amend the report in ISCV.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`19" name="Pass_fail`+$TableCtr+`19" value="`+dicomrimgData.ammend_report_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`19" name="Comments`+$TableCtr+`19" value="`+dicomrimgData.ammend_report_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize amended report in ISCV.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`20" name="Pass_fail`+$TableCtr+`20" value="`+dicomrimgData.finalize_report_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`20" name="Comments`+$TableCtr+`20" value="`+dicomrimgData.finalize_report_comments+`" />
									</div>
								</td>
							</tr>


							<tr>
							<td colspan="3"><b>Result Report in HIS

							</b></td>
							</tr>
							<tr>
								<td>
									Verify amended result report is accessible in HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`21" name="Pass_fail`+$TableCtr+`21" value="`+dicomdwcrmData.verify_result_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`21" name="Comments`+$TableCtr+`21" value="`+dicomdwcrmData.verify_result_comments+`" />
									</div>
								</td>
							</tr>
							</tbody>

</table>
                ` ;


                $('#echoTable tbody:last').before(rowString4);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});


var url5 = apiUrl+'/section10/dicom/fetch_dw_images.php?prs=' + prs + '&token=' + token;
$.getJSON(url5,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_dw_images,function(key,dicomdwimgData)
        {
                rowString5 = `
<table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
							<td colspan="3"><b>Downtime Workflow
							</b></td>
							</tr>
							<tr>
							<td colspan="3"><b>Acquire Patient Images and Transmit Images to ISCV
							</b></td>
							</tr>
                <tr>
								<td>
									Manually enter patient MRN and name on the US modality.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`22" name="Pass_fail`+$TableCtr+`22" value="`+dicomdwimgData.enter_mrn_pass+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`22" name="Comments`+$TableCtr+`22" value="`+dicomdwimgData.enter_mrn_comments+`"/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Perform study.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`23" name="Pass_fail`+$TableCtr+`23" value="`+dicomdwimgData.study_pass+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`23" name="Comments`+$TableCtr+`23" value="`+dicomdwimgData.study_comments+`"/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Transfer images to ISCV.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`24" name="Pass_fail`+$TableCtr+`24" value="`+dicomdwimgData.transfer_images_pass+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`24" name="Comments`+$TableCtr+`24" value="`+dicomdwimgData.transfer_images_comments+`"/>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify study is in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`25" name="Pass_fail`+$TableCtr+`25" value="`+dicomdwimgData.verify_status_pass+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`25" name="Comments`+$TableCtr+`25" value="`+dicomdwimgData.verify_status_comments+`"/>
									</div>
								</td>
							</tr>
							</tbody>

</table>

                ` ;


                $('#echoTable tbody:last').before(rowString5);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});



var url6 = apiUrl+'/section10/dicom/fetch_reconcile.php?prs=' + prs + '&token=' + token;
$.getJSON(url6,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_reconcilestudy,function(key,dicomrecData)
        {
                rowString6 = `
                <table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
							<td colspan="3"><b>Reconcile Study when Systems Online
							</b></td>
							</tr>
                <tr>
								<td>
									Locate order in ISCV for study performed during downtime

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`26" name="Pass_fail`+$TableCtr+`26" value="`+dicomrecData.locate_order_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`26" name="Comments`+$TableCtr+`26" value="`+dicomrecData.locate_order_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Merge study into order in ISCV OR manually enter required order information in study work area.

								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`27" name="Pass_fail`+$TableCtr+`27" value="`+dicomrecData.merge_study_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`27" name="Comments`+$TableCtr+`27" value="`+dicomrecData.merge_study_comments+`" />
									</div>
								</td>
							</tr>
							</tbody>

</table>

                ` ;


                $('#echoTable tbody:last').before(rowString6);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);	
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});


var url7 = apiUrl+'/section10/dicom/fetch_dw_create_report.php?prs=' + prs + '&token=' + token;
$.getJSON(url7,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_dw_createreport,function(key,dicomdwreport)
        {
                rowString7 = `

                <table class="ui celled table black unstackable" >
				
						

						<tbody>
               <tr>
							<td colspan="3"><b>Create Report and Finalize Study

							</b></td>
							</tr>
							<tr>
								<td>
									Create report in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`28" name="Pass_fail`+$TableCtr+`28" value="`+dicomdwreport.create_report_comments+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`28" name="Comments`+$TableCtr+`28" value="`+dicomdwreport.finalize_study_pass+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Finalize study in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`29" name="Pass_fail`+$TableCtr+`29" value="`+dicomdwreport.finalize_study_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`29" name="Comments`+$TableCtr+`29" value="`+dicomdwreport.finalize_study_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Verify Study Status is changed to "Final" in ISCV.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`30" name="Pass_fail`+$TableCtr+`30" value="`+dicomdwreport.verify_status_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`30" name="Comments`+$TableCtr+`30" value="`+dicomdwreport.verify_status_comments+`" />
									</div>
								</td>
							</tr>

							</tbody>

</table>

                ` ;


                $('#echoTable tbody:last').before(rowString7);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});






var url8 = apiUrl+'/section10/dicom/fetch_resultmsg.php?prs=' + prs + '&token=' + token;
$.getJSON(url8,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_dicom_dw_resultmsg,function(key,dicomdwrimgData)
        {
                rowString8 = `

                <table class="ui celled table black unstackable" >
				
						

						<tbody>
						<tr>
							<td colspan="3"><b>Result Message Created and Sent to HIS
							</b></td>
							</tr>
                <tr>
								<td>
									ISCV IBE creates ORU HL7 message.


								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`31" name="Pass_fail`+$TableCtr+`31" value="`+dicomdwrimgData.createoru_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`31" name="Comments`+$TableCtr+`31" value="`+dicomdwrimgData.createoru_comments+`" />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									ISCV IBE sends the ORU HL7 message to HIS.
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`32" name="Pass_fail`+$TableCtr+`32" value="`+dicomdwrimgData.sendoru_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`32" name="Comments`+$TableCtr+`32" value="`+dicomdwrimgData.sendoru_comments+`" />
									</div>
								</td>
							</tr>

							<td colspan="3"><b>Result Report in HIS
							</b></td>
							</tr>
							<tr>
								<td>
									Verify result report is accessible in HIS.
							</td>
								<td>
									<div class="ui form">
										<input type="text" id="Pass_fail`+$TableCtr+`33" name="Pass_fail`+$TableCtr+`33" value="`+dicomdwrimgData.verify_status_pass+`" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Comments`+$TableCtr+`33" name="Comments`+$TableCtr+`33" value="`+dicomdwrimgData.verify_status_comments+`" />
									</div>
								</td>
							</tr>
							</tbody>

</table>


                ` ;


                $('#echoTable tbody:last').before(rowString8);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});


