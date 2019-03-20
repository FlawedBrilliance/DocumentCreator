//Section Number
var section = '7/pid' ;

//PID Table
$pidTableCtr=1 ;
$("#addPidSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$pidTableCtr+'" name="siteNum'+$pidTableCtr+'" value="'+$pidTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	PID Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Patient Identifier	</td>	<td>	PID-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_default'+$pidTableCtr+'" name="pid_3_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_new'+$pidTableCtr+'" name="pid_3_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_comment'+$pidTableCtr+'" name="pid_3_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	ID	</td>	<td>	PID-3.1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_1_default'+$pidTableCtr+'" name="pid_3_1_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_1_new'+$pidTableCtr+'" name="pid_3_1_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_1_comment'+$pidTableCtr+'" name="pid_3_1_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Assigning Authority	</td>	<td>	PID-3.4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_4_default'+$pidTableCtr+'" name="pid_3_4_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_4_new'+$pidTableCtr+'" name="pid_3_4_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_3_4_comment'+$pidTableCtr+'" name="pid_3_4_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Patient Name	</td>	<td>	PID-5	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_default'+$pidTableCtr+'" name="pid_5_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_new'+$pidTableCtr+'" name="pid_5_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_comment'+$pidTableCtr+'" name="pid_5_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Family Name	</td>	<td>	PID-5.1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_1_default'+$pidTableCtr+'" name="pid_5_1_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_1_new'+$pidTableCtr+'" name="pid_5_1_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_1_comment'+$pidTableCtr+'" name="pid_5_1_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Given Name	</td>	<td>	PID-5.2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_2_default'+$pidTableCtr+'" name="pid_5_2_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_2_new'+$pidTableCtr+'" name="pid_5_2_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_2_comment'+$pidTableCtr+'" name="pid_5_2_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Middle Name	</td>	<td>	PID-5.3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_3_default'+$pidTableCtr+'" name="pid_5_3_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_3_new'+$pidTableCtr+'" name="pid_5_3_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_5_3_comment'+$pidTableCtr+'" name="pid_5_3_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Date of Birth	</td>	<td>	PID-7	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_7_default'+$pidTableCtr+'" name="pid_7_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_7_new'+$pidTableCtr+'" name="pid_7_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_7_comment'+$pidTableCtr+'" name="pid_7_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Gender	</td>	<td>	PID-8	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_8_default'+$pidTableCtr+'" name="pid_8_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_8_new'+$pidTableCtr+'" name="pid_8_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_8_comment'+$pidTableCtr+'" name="pid_8_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Race	</td>	<td>	PID-10	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_10_default'+$pidTableCtr+'" name="pid_10_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_10_new'+$pidTableCtr+'" name="pid_10_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_10_comment'+$pidTableCtr+'" name="pid_10_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Patient Address	</td>	<td>	PID-11	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_default'+$pidTableCtr+'" name="pid_11_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_new'+$pidTableCtr+'" name="pid_11_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_comment'+$pidTableCtr+'" name="pid_11_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Street Address	</td>	<td>	PID-11.1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_1_default'+$pidTableCtr+'" name="pid_11_1_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_1_new'+$pidTableCtr+'" name="pid_11_1_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_1_comment'+$pidTableCtr+'" name="pid_11_1_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Other Designation	</td>	<td>	PID-11.2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_2_default'+$pidTableCtr+'" name="pid_11_2_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_2_new'+$pidTableCtr+'" name="pid_11_2_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_2_comment'+$pidTableCtr+'" name="pid_11_2_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	City	</td>	<td>	PID-11.3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_3_default'+$pidTableCtr+'" name="pid_11_3_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_3_new'+$pidTableCtr+'" name="pid_11_3_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_3_comment'+$pidTableCtr+'" name="pid_11_3_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	State	</td>	<td>	PID-11.4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_4_default'+$pidTableCtr+'" name="pid_11_4_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_4_new'+$pidTableCtr+'" name="pid_11_4_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_4_comment'+$pidTableCtr+'" name="pid_11_4_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Zip Code	</td>	<td>	PID-11.5	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_5_default'+$pidTableCtr+'" name="pid_11_5_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_5_new'+$pidTableCtr+'" name="pid_11_5_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_11_5_comment'+$pidTableCtr+'" name="pid_11_5_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Home Phone	</td>	<td>	PID-13	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_13_default'+$pidTableCtr+'" name="pid_13_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_13_new'+$pidTableCtr+'" name="pid_13_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_13_comment'+$pidTableCtr+'" name="pid_13_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Other Phone	</td>	<td>	PID-14	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_14_default'+$pidTableCtr+'" name="pid_14_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_14_new'+$pidTableCtr+'" name="pid_14_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_14_comment'+$pidTableCtr+'" name="pid_14_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Patient Account	</td>	<td>	PID-18	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_18_default'+$pidTableCtr+'" name="pid_18_default'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_18_new'+$pidTableCtr+'" name="pid_18_new'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pid_18_comment'+$pidTableCtr+'" name="pid_18_comment'+$pidTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#pidTable tbody:last').before(rowString);
	$('#pidTableCtr').val($pidTableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$pidTableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/pid/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pidDetails,function(key,pidData)
	{
		rowString = `
			<table class="ui celled black table unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							<div class="ui form">
								<input type="text" class="editField" id="siteNum`+$pidTableCtr+`" name="siteNum`+$pidTableCtr+`" value="`+pidData.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							PID Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Patient Identifier
						</td>
						<td>
							PID-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_default`+$pidTableCtr+`" name="pid_3_default`+$pidTableCtr+`" value="`+pidData.pid_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_new`+$pidTableCtr+`" name="pid_3_new`+$pidTableCtr+`" value="`+pidData.pid_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_comment`+$pidTableCtr+`" name="pid_3_comment`+$pidTableCtr+`" value="`+pidData.pid_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							ID
						</td>
						<td>
							PID-3.1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_1_default`+$pidTableCtr+`" name="pid_3_1_default`+$pidTableCtr+`" value="`+pidData.pid_3_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_1_new`+$pidTableCtr+`" name="pid_3_1_new`+$pidTableCtr+`" value="`+pidData.pid_3_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_1_comment`+$pidTableCtr+`" name="pid_3_1_comment`+$pidTableCtr+`" value="`+pidData.pid_3_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PID-3.4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_4_default`+$pidTableCtr+`" name="pid_3_4_default`+$pidTableCtr+`" value="`+pidData.pid_3_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_4_new`+$pidTableCtr+`" name="pid_3_4_new`+$pidTableCtr+`" value="`+pidData.pid_3_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_3_4_comment`+$pidTableCtr+`" name="pid_3_4_comment`+$pidTableCtr+`" value="`+pidData.pid_3_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Patient Name
						</td>
						<td>
							PID-5
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_default`+$pidTableCtr+`" name="pid_5_default`+$pidTableCtr+`" value="`+pidData.pid_5_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_new`+$pidTableCtr+`" name="pid_5_new`+$pidTableCtr+`" value="`+pidData.pid_5_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_comment`+$pidTableCtr+`" name="pid_5_comment`+$pidTableCtr+`" value="`+pidData.pid_5_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							PID-5.1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_1_default`+$pidTableCtr+`" name="pid_5_1_default`+$pidTableCtr+`" value="`+pidData.pid_5_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_1_new`+$pidTableCtr+`" name="pid_5_1_new`+$pidTableCtr+`" value="`+pidData.pid_5_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_1_comment`+$pidTableCtr+`" name="pid_5_1_comment`+$pidTableCtr+`" value="`+pidData.pid_5_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							PID-5.2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_2_default`+$pidTableCtr+`" name="pid_5_2_default`+$pidTableCtr+`" value="`+pidData.pid_5_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_2_new`+$pidTableCtr+`" name="pid_5_2_new`+$pidTableCtr+`" value="`+pidData.pid_5_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_2_comment`+$pidTableCtr+`" name="pid_5_2_comment`+$pidTableCtr+`" value="`+pidData.pid_5_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							PID-5.3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_3_default`+$pidTableCtr+`" name="pid_5_3_default`+$pidTableCtr+`" value="`+pidData.pid_5_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_3_new`+$pidTableCtr+`" name="pid_5_3_new`+$pidTableCtr+`" value="`+pidData.pid_5_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_5_3_comment`+$pidTableCtr+`" name="pid_5_3_comment`+$pidTableCtr+`" value="`+pidData.pid_5_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Date of Birth
						</td>
						<td>
							PID-7
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_7_default`+$pidTableCtr+`" name="pid_7_default`+$pidTableCtr+`" value="`+pidData.pid_7_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_7_new`+$pidTableCtr+`" name="pid_7_new`+$pidTableCtr+`" value="`+pidData.pid_7_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_7_comment`+$pidTableCtr+`" name="pid_7_comment`+$pidTableCtr+`" value="`+pidData.pid_7_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Gender
						</td>
						<td>
							PID-8
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_8_default`+$pidTableCtr+`" name="pid_8_default`+$pidTableCtr+`" value="`+pidData.pid_8_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_8_new`+$pidTableCtr+`" name="pid_8_new`+$pidTableCtr+`" value="`+pidData.pid_8_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_8_comment`+$pidTableCtr+`" name="pid_8_comment`+$pidTableCtr+`" value="`+pidData.pid_8_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Race
						</td>
						<td>
							PID-10
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_10_default`+$pidTableCtr+`" name="pid_10_default`+$pidTableCtr+`" value="`+pidData.pid_10_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_10_new`+$pidTableCtr+`" name="pid_10_new`+$pidTableCtr+`" value="`+pidData.pid_10_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_10_comment`+$pidTableCtr+`" name="pid_10_comment`+$pidTableCtr+`" value="`+pidData.pid_10_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Patient Address
						</td>
						<td>
							PID-11
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_default`+$pidTableCtr+`" name="pid_11_default`+$pidTableCtr+`" value="`+pidData.pid_11_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_new`+$pidTableCtr+`" name="pid_11_new`+$pidTableCtr+`" value="`+pidData.pid_11_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_comment`+$pidTableCtr+`" name="pid_11_comment`+$pidTableCtr+`" value="`+pidData.pid_11_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Street Address
						</td>
						<td>
							PID-11.1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_1_default`+$pidTableCtr+`" name="pid_11_1_default`+$pidTableCtr+`" value="`+pidData.pid_11_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_1_new`+$pidTableCtr+`" name="pid_11_1_new`+$pidTableCtr+`" value="`+pidData.pid_11_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_1_comment`+$pidTableCtr+`" name="pid_11_1_comment`+$pidTableCtr+`" value="`+pidData.pid_11_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Other Designation
						</td>
						<td>
							PID-11.2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_2_default`+$pidTableCtr+`" name="pid_11_2_default`+$pidTableCtr+`" value="`+pidData.pid_11_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_2_new`+$pidTableCtr+`" name="pid_11_2_new`+$pidTableCtr+`" value="`+pidData.pid_11_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_2_comment`+$pidTableCtr+`" name="pid_11_2_comment`+$pidTableCtr+`" value="`+pidData.pid_11_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							City
						</td>
						<td>
							PID-11.3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_3_default`+$pidTableCtr+`" name="pid_11_3_default`+$pidTableCtr+`" value="`+pidData.pid_11_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_3_new`+$pidTableCtr+`" name="pid_11_3_new`+$pidTableCtr+`" value="`+pidData.pid_11_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_3_comment`+$pidTableCtr+`" name="pid_11_3_comment`+$pidTableCtr+`" value="`+pidData.pid_11_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							State
						</td>
						<td>
							PID-11.4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_4_default`+$pidTableCtr+`" name="pid_11_4_default`+$pidTableCtr+`" value="`+pidData.pid_11_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_4_new`+$pidTableCtr+`" name="pid_11_4_new`+$pidTableCtr+`" value="`+pidData.pid_11_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_4_comment`+$pidTableCtr+`" name="pid_11_4_comment`+$pidTableCtr+`" value="`+pidData.pid_11_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Zip Code
						</td>
						<td>
							PID-11.5
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_5_default`+$pidTableCtr+`" name="pid_11_5_default`+$pidTableCtr+`" value="`+pidData.pid_11_5_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_5_new`+$pidTableCtr+`" name="pid_11_5_new`+$pidTableCtr+`" value="`+pidData.pid_11_5_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_11_5_comment`+$pidTableCtr+`" name="pid_11_5_comment`+$pidTableCtr+`" value="`+pidData.pid_11_5_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Home Phone
						</td>
						<td>
							PID-13
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_13_default`+$pidTableCtr+`" name="pid_13_default`+$pidTableCtr+`" value="`+pidData.pid_13_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_13_new`+$pidTableCtr+`" name="pid_13_new`+$pidTableCtr+`" value="`+pidData.pid_13_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_13_comment`+$pidTableCtr+`" name="pid_13_comment`+$pidTableCtr+`" value="`+pidData.pid_13_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Other Phone
						</td>
						<td>
							PID-14
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_14_default`+$pidTableCtr+`" name="pid_14_default`+$pidTableCtr+`" value="`+pidData.pid_14_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_14_new`+$pidTableCtr+`" name="pid_14_new`+$pidTableCtr+`" value="`+pidData.pid_14_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_14_comment`+$pidTableCtr+`" name="pid_14_comment`+$pidTableCtr+`" value="`+pidData.pid_14_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Patient Account
						</td>
						<td>
							PID-18
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_18_default`+$pidTableCtr+`" name="pid_18_default`+$pidTableCtr+`" value="`+pidData.pid_18_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_18_new`+$pidTableCtr+`" name="pid_18_new`+$pidTableCtr+`" value="`+pidData.pid_18_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pid_18_comment`+$pidTableCtr+`" name="pid_18_comment`+$pidTableCtr+`" value="`+pidData.pid_18_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pidTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#pidTableCtr').val($pidTableCtr);
		$pidTableCtr++ ;
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

//Editable Options if AJAX Query Fails
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