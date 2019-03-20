//id format=coumn.row_no


var section = '10/adt' ;

//ADT Table
$adtTableCtr=1 ;
$("#addrow").click(function()
{
	

	rowString = 
	`<table class="ui celled table black unstackable" >
				
						<thead>
			              <th class="two wide"><center>Issue #</center></th>
			              <th class="one wide"><center>Date/Time Reported</center></th>
			              <th class="one wide"><center>Issue Identified By</center></th>
			              <th class="one wide"><center>Priority</center></th>
			              <th class="three wide"><center>Issue Description</center></th>
			              <th class="one wide"><center>Assigned To</center></th>
			              <th class="three wide"><center>Comments/Resolution</center></th>
			              <th class="two wide"><center>Resolved By</center></th>
			              <th class="one wide"><center>Closed Date</center></th>
			              <th class="one wide"><center>Status</center></th>

					</thead>

						<tbody>
						<tr>
						<td>
						  <div class="ui form">
						    <input type="text" id="issues`+$adtTableCtr+`" name="issues`+$adtTableCtr+`" />
						  </div>
						</td>

						<td>
						  <div class="ui form">
						    <input type="text" id="date_time_reported`+$adtTableCtr+` " name="date_time_reported`+$adtTableCtr+`" />
						  </div>
						</td>

						<td>
						<div class="ui form">
						  <input type="text" id="issue_identified_by`+$adtTableCtr+`" name="issue_identified_by`+$adtTableCtr+`" />
						</div>
						</td>

						<td>
							<div class="ui form">
							<input type="text" id="priority`+$adtTableCtr+`" name="priority`+$adtTableCtr+`" />
							</div>
						</td>

						<td>
							<div class="ui form">
								<input type="text" id="issue_description`+$adtTableCtr+`" name="issue_description`+$adtTableCtr+`" />
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="assigned_to`+$adtTableCtr+`" name="assigned_to`+$adtTableCtr+`" />
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="comments_resolution`+$adtTableCtr+`" name="comments_resolution`+$adtTableCtr+`" />
							</div>
						</td>

						<td>
						<div class="ui form">
						  <input type="text" id="resolved_By`+$adtTableCtr+`" name="resolved_By`+$adtTableCtr+`" />
						</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="closed_Date`+$adtTableCtr+`" name="closed_Date`+$adtTableCtr+`" />
							</div>
						</td>
						<td>
						<div class="ui form">
						  <input type="text" id="status`+$adtTableCtr+`" name="status`+$adtTableCtr+`" />
						</div>
						</td>
				</tr>
				</tbody>
				</table>`
	$('#adtTable tbody:last').before(rowString);
	$('#adtTableCtr').val($adtTableCtr);
	$('.editField').prop('readOnly', false);
	$adtTableCtr++;
});



var url = apiUrl+'/section10/adt/fetch.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.testplan_adt,function(key,adtData)
	{
		rowString = `
			<table class="ui celled table black unstackable" >
				
						<thead>
			              <th class="two wide"><center>Issue #</center></th>
			              <th class="one wide"><center>Date/Time Reported</center></th>
			              <th class="one wide"><center>Issue Identified By</center></th>
			              <th class="one wide"><center>Priority</center></th>
			              <th class="three wide"><center>Issue Description</center></th>
			              <th class="one wide"><center>Assigned To</center></th>
			              <th class="three wide"><center>Comments/Resolution</center></th>
			              <th class="two wide"><center>Resolved By</center></th>
			              <th class="one wide"><center>Closed Date</center></th>
			              <th class="one wide"><center>Status</center></th>

					</thead>

						<tbody>
						<tr>
						<td>
						  <div class="ui form">
						    <input type="text" id="issues`+$adtTableCtr+`" name="issues`+$adtTableCtr+`" value="`+adtData.issue_num+`" />
						  </div>
						</td>

						<td>
						  <div class="ui form">
						    <input type="text" id="date_time_reported`+$adtTableCtr+` " name="date_time_reported`+$adtTableCtr+`"  value="`+adtData.date_time+`"/>
						  </div>
						</td>

						<td>
						<div class="ui form"> 
						  <input type="text" id="issue_identified_by`+$adtTableCtr+`" name="issue_identified_by`+$adtTableCtr+`"  value="`+adtData.issue_by+`"/>
						</div>
						</td>

						<td>
							<div class="ui form">
							<input type="text" id="priority`+$adtTableCtr+`" name="priority`+$adtTableCtr+`"  value="`+adtData.priority+`"/>
							</div>
						</td>

						<td>
							<div class="ui form">
								<input type="text" id="issue_description`+$adtTableCtr+`" name="issue_description`+$adtTableCtr+`"  value="`+adtData.issue_des+`"/>
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="assigned_to`+$adtTableCtr+`" name="assigned_to`+$adtTableCtr+`" value="`+adtData.assign_to+`" />
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="comments_resolution`+$adtTableCtr+`" name="comments_resolution`+$adtTableCtr+`"  value="`+adtData.comments+`"/>
							</div>
						</td>

						<td>
						<div class="ui form">
						  <input type="text" id="resolved_By`+$adtTableCtr+`" name="resolved_By`+$adtTableCtr+`" value="`+adtData.resolved_by+`"/>
						</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="closed_Date`+$adtTableCtr+`" name="closed_Date`+$adtTableCtr+`" value="`+adtData.closed_date+`" />
							</div>
						</td>
						<td>
						<div class="ui form">
						  <input type="text" id="status`+$adtTableCtr+`" name="status`+$adtTableCtr+`" value="`+adtData.status+`" />
						</div>
						</td>
				</tr>
				</tbody>
				</table>
		` ;


		$('#adtTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#adtTableCtr').val($adtTableCtr);
		$adtTableCtr++ ;
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






