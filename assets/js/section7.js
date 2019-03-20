//Section Number
var section = '7/msh' ;

//MSH Table
$mshTableCtr=1 ;
$("#addMshSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$mshTableCtr+'" name="siteNum'+$mshTableCtr+'" value="'+$mshTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	MSH Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Field Separator	</td>	<td>	MSH-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_1_default'+$mshTableCtr+'" name="msh_1_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_1_new'+$mshTableCtr+'" name="msh_1_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_1_comment'+$mshTableCtr+'" name="msh_1_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Encoding Characters	</td>	<td>	MSH-2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_2_default'+$mshTableCtr+'" name="msh_2_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_2_new'+$mshTableCtr+'" name="msh_2_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_2_comment'+$mshTableCtr+'" name="msh_2_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Sending Application	</td>	<td>	MSH-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_3_default'+$mshTableCtr+'" name="msh_3_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_3_new'+$mshTableCtr+'" name="msh_3_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_3_comment'+$mshTableCtr+'" name="msh_3_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Sending Facility	</td>	<td>	MSH-4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_4_default'+$mshTableCtr+'" name="msh_4_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_4_new'+$mshTableCtr+'" name="msh_4_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_4_comment'+$mshTableCtr+'" name="msh_4_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Receiving Application	</td>	<td>	MSH-5	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_5_default'+$mshTableCtr+'" name="msh_5_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_5_new'+$mshTableCtr+'" name="msh_5_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_5_comment'+$mshTableCtr+'" name="msh_5_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Receiving Facility	</td>	<td>	MSH-6	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_6_default'+$mshTableCtr+'" name="msh_6_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_6_new'+$mshTableCtr+'" name="msh_6_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_6_comment'+$mshTableCtr+'" name="msh_6_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Date Time of Message	</td>	<td>	MSH-7	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_7_default'+$mshTableCtr+'" name="msh_7_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_7_new'+$mshTableCtr+'" name="msh_7_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_7_comment'+$mshTableCtr+'" name="msh_7_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Message Type	</td>	<td>	MSH-9	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_default'+$mshTableCtr+'" name="msh_9_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_new'+$mshTableCtr+'" name="msh_9_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_comment'+$mshTableCtr+'" name="msh_9_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Message Type	</td>	<td>	MSH-9.1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_1_default'+$mshTableCtr+'" name="msh_9_1_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_1_new'+$mshTableCtr+'" name="msh_9_1_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_1_comment'+$mshTableCtr+'" name="msh_9_1_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Trigger Event	</td>	<td>	MSH-9.2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_2_default'+$mshTableCtr+'" name="msh_9_2_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_2_new'+$mshTableCtr+'" name="msh_9_2_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_9_2_comment'+$mshTableCtr+'" name="msh_9_2_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Message Control ID	</td>	<td>	MSH-10	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_10_default'+$mshTableCtr+'" name="msh_10_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_10_new'+$mshTableCtr+'" name="msh_10_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_10_comment'+$mshTableCtr+'" name="msh_10_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Processing ID	</td>	<td>	MSH-11	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_11_default'+$mshTableCtr+'" name="msh_11_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_11_new'+$mshTableCtr+'" name="msh_11_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_11_comment'+$mshTableCtr+'" name="msh_11_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Version ID	</td>	<td>	MSH-12	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_12_default'+$mshTableCtr+'" name="msh_12_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_12_new'+$mshTableCtr+'" name="msh_12_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_12_comment'+$mshTableCtr+'" name="msh_12_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Character Set	</td>	<td>	MSH-18	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_18_default'+$mshTableCtr+'" name="msh_18_default'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_18_new'+$mshTableCtr+'" name="msh_18_new'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="msh_18_comment'+$mshTableCtr+'" name="msh_18_comment'+$mshTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#mshTable tbody:last').before(rowString);
	$('#mshTableCtr').val($mshTableCtr);
	$('.editField').prop('readOnly', false);
	$mshTableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/msh/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.mshDetails,function(key,mshData)
	{
		rowString = `
			<table class="ui celled table black unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							<div class="ui form">
								<input type="text" class="editField" id="siteNum`+$mshTableCtr+`" name="siteNum`+$mshTableCtr+`" value="`+mshData.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							MSH Details
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
							Field Separator
						</td>
						<td>
							MSH-1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_1_default`+$mshTableCtr+`" name="msh_1_default`+$mshTableCtr+`" value="`+mshData.msh_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_1_new`+$mshTableCtr+`" name="msh_1_new`+$mshTableCtr+`" value="`+mshData.msh_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_1_comment`+$mshTableCtr+`" name="msh_1_comment`+$mshTableCtr+`" value="`+mshData.msh_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Encoding Characters	
						</td>
						<td>
							MSH-2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_2_default`+$mshTableCtr+`" name="msh_2_default`+$mshTableCtr+`" value="`+mshData.msh_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_2_new`+$mshTableCtr+`" name="msh_2_new`+$mshTableCtr+`" value="`+mshData.msh_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_2_comment`+$mshTableCtr+`" name="msh_2_comment`+$mshTableCtr+`" value="`+mshData.msh_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Sending Application
						</td>
						<td>
							MSH-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_3_default`+$mshTableCtr+`" name="msh_3_default`+$mshTableCtr+`" value="`+mshData.msh_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_3_new`+$mshTableCtr+`" name="msh_3_new`+$mshTableCtr+`" value="`+mshData.msh_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_3_comment`+$mshTableCtr+`" name="msh_3_comment`+$mshTableCtr+`" value="`+mshData.msh_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Sending Facility
						</td>
						<td>
							MSH-4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_4_default`+$mshTableCtr+`" name="msh_4_default`+$mshTableCtr+`" value="`+mshData.msh_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_4_new`+$mshTableCtr+`" name="msh_4_new`+$mshTableCtr+`" value="`+mshData.msh_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_4_comment`+$mshTableCtr+`" name="msh_4_comment`+$mshTableCtr+`" value="`+mshData.msh_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Receiving Application
						</td>
						<td>
							MSH-5
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_5_default`+$mshTableCtr+`" name="msh_5_default`+$mshTableCtr+`" value="`+mshData.msh_5_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_5_new`+$mshTableCtr+`" name="msh_5_new`+$mshTableCtr+`" value="`+mshData.msh_5_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_5_comment`+$mshTableCtr+`" name="msh_5_comment`+$mshTableCtr+`" value="`+mshData.msh_5_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Receiving Facility
						</td>
						<td>
							MSH-6
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_6_default`+$mshTableCtr+`" name="msh_6_default`+$mshTableCtr+`" value="`+mshData.msh_6_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_6_new`+$mshTableCtr+`" name="msh_6_new`+$mshTableCtr+`" value="`+mshData.msh_6_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_6_comment`+$mshTableCtr+`" name="msh_6_comment`+$mshTableCtr+`" value="`+mshData.msh_6_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Message
						</td>
						<td>
							MSH-7
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_7_default`+$mshTableCtr+`" name="msh_7_default`+$mshTableCtr+`" value="`+mshData.msh_7_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_7_new`+$mshTableCtr+`" name="msh_7_new`+$mshTableCtr+`" value="`+mshData.msh_7_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_7_comment`+$mshTableCtr+`" name="msh_7_comment`+$mshTableCtr+`" value="`+mshData.msh_7_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_default`+$mshTableCtr+`" name="msh_9_default`+$mshTableCtr+`" value="`+mshData.msh_9_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_new`+$mshTableCtr+`" name="msh_9_new`+$mshTableCtr+`" value="`+mshData.msh_9_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_comment`+$mshTableCtr+`" name="msh_9_comment`+$mshTableCtr+`" value="`+mshData.msh_9_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9.1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_1_default`+$mshTableCtr+`" name="msh_9_1_default`+$mshTableCtr+`" value="`+mshData.msh_9_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_1_new`+$mshTableCtr+`" name="msh_9_1_new`+$mshTableCtr+`" value="`+mshData.msh_9_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_1_comment`+$mshTableCtr+`" name="msh_9_1_comment`+$mshTableCtr+`" value="`+mshData.msh_9_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Trigger Event
						</td>
						<td>
							MSH-9.2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_2_default`+$mshTableCtr+`" name="msh_9_2_default`+$mshTableCtr+`" value="`+mshData.msh_9_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_2_new`+$mshTableCtr+`" name="msh_9_2_new`+$mshTableCtr+`" value="`+mshData.msh_9_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_9_2_comment`+$mshTableCtr+`" name="msh_9_2_comment`+$mshTableCtr+`" value="`+mshData.msh_9_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Message Control ID
						</td>
						<td>
							MSH-10
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_10_default`+$mshTableCtr+`" name="msh_10_default`+$mshTableCtr+`" value="`+mshData.msh_10_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_10_new`+$mshTableCtr+`" name="msh_10_new`+$mshTableCtr+`" value="`+mshData.msh_10_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_10_comment`+$mshTableCtr+`" name="msh_10_comment`+$mshTableCtr+`" value="`+mshData.msh_10_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Processing ID
						</td>
						<td>
							MSH-11
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_11_default`+$mshTableCtr+`" name="msh_11_default`+$mshTableCtr+`" value="`+mshData.msh_11_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_11_new`+$mshTableCtr+`" name="msh_11_new`+$mshTableCtr+`" value="`+mshData.msh_11_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_11_comment`+$mshTableCtr+`" name="msh_11_comment`+$mshTableCtr+`" value="`+mshData.msh_11_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Version ID
						</td>
						<td>
							MSH-12
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_12_default`+$mshTableCtr+`" name="msh_12_default`+$mshTableCtr+`" value="`+mshData.msh_12_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_12_new`+$mshTableCtr+`" name="msh_12_new`+$mshTableCtr+`" value="`+mshData.msh_12_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_12_comment`+$mshTableCtr+`" name="msh_12_comment`+$mshTableCtr+`" value="`+mshData.msh_12_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Character Set
						</td>
						<td>
							MSH-18
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_18_default`+$mshTableCtr+`" name="msh_18_default`+$mshTableCtr+`" value="`+mshData.msh_18_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_18_new`+$mshTableCtr+`" name="msh_18_new`+$mshTableCtr+`" value="`+mshData.msh_18_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="msh_18_comment`+$mshTableCtr+`" name="msh_18_comment`+$mshTableCtr+`" value="`+mshData.msh_18_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#mshTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#mshTableCtr').val($mshTableCtr);
		$mshTableCtr++ ;
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