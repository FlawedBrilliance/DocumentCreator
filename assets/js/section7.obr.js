//Section Number
var section = '7/obr' ;

//OBR Table
$obrTableCtr=1 ;
$("#addObrSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$obrTableCtr+'" name="siteNum'+$obrTableCtr+'" value="'+$obrTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	OBR Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Set ID	</td>	<td>	OBR-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_1_default'+$obrTableCtr+'" name="obr_1_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_1_new'+$obrTableCtr+'" name="obr_1_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_1_comment'+$obrTableCtr+'" name="obr_1_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Study ID	</td>	<td>	OBR-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_3_default'+$obrTableCtr+'" name="obr_3_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_3_new'+$obrTableCtr+'" name="obr_3_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_3_comment'+$obrTableCtr+'" name="obr_3_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Universal Service ID	</td>	<td>	OBR-4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_default'+$obrTableCtr+'" name="obr_4_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_new'+$obrTableCtr+'" name="obr_4_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_comment'+$obrTableCtr+'" name="obr_4_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Study Type	</td>	<td>	OBR-4.2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_2_default'+$obrTableCtr+'" name="obr_4_2_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_2_new'+$obrTableCtr+'" name="obr_4_2_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_2_comment'+$obrTableCtr+'" name="obr_4_2_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Study Type	</td>	<td>	OBR-4.3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_3_default'+$obrTableCtr+'" name="obr_4_3_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_3_new'+$obrTableCtr+'" name="obr_4_3_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_4_3_comment'+$obrTableCtr+'" name="obr_4_3_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation Start Date Time	</td>	<td>	OBR-7	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_7_default'+$obrTableCtr+'" name="obr_7_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_7_new'+$obrTableCtr+'" name="obr_7_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_7_comment'+$obrTableCtr+'" name="obr_7_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation End Date Time	</td>	<td>	OBR-8	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_8_default'+$obrTableCtr+'" name="obr_8_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_8_new'+$obrTableCtr+'" name="obr_8_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_8_comment'+$obrTableCtr+'" name="obr_8_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Ordering Physician	</td>	<td>	OBR-16	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_16_default'+$obrTableCtr+'" name="obr_16_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_16_new'+$obrTableCtr+'" name="obr_16_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_16_comment'+$obrTableCtr+'" name="obr_16_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Accession Number	</td>	<td>	OBR-18	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_18_default'+$obrTableCtr+'" name="obr_18_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_18_new'+$obrTableCtr+'" name="obr_18_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_18_comment'+$obrTableCtr+'" name="obr_18_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Report Version	</td>	<td>	OBR-20	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_20_default'+$obrTableCtr+'" name="obr_20_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_20_new'+$obrTableCtr+'" name="obr_20_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_20_comment'+$obrTableCtr+'" name="obr_20_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Results Last Signed Date Time	</td>	<td>	OBR-22	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_22_default'+$obrTableCtr+'" name="obr_22_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_22_new'+$obrTableCtr+'" name="obr_22_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_22_comment'+$obrTableCtr+'" name="obr_22_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Diagnostic Serv Sect ID	</td>	<td>	OBR-24	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_24_default'+$obrTableCtr+'" name="obr_24_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_24_new'+$obrTableCtr+'" name="obr_24_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_24_comment'+$obrTableCtr+'" name="obr_24_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Result Status	</td>	<td>	OBR-25	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_25_default'+$obrTableCtr+'" name="obr_25_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_25_new'+$obrTableCtr+'" name="obr_25_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_25_comment'+$obrTableCtr+'" name="obr_25_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Reason for Study	</td>	<td>	OBR-31	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_31_default'+$obrTableCtr+'" name="obr_31_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_31_new'+$obrTableCtr+'" name="obr_31_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_31_comment'+$obrTableCtr+'" name="obr_31_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Principal Interpretor	</td>	<td>	OBR-32	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_default'+$obrTableCtr+'" name="obr_32_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_new'+$obrTableCtr+'" name="obr_32_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_comment'+$obrTableCtr+'" name="obr_32_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Family Name	</td>	<td>	OBR-32.2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_2_default'+$obrTableCtr+'" name="obr_32_2_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_2_new'+$obrTableCtr+'" name="obr_32_2_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_2_comment'+$obrTableCtr+'" name="obr_32_2_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Given Name	</td>	<td>	OBR-32.3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_3_default'+$obrTableCtr+'" name="obr_32_3_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_3_new'+$obrTableCtr+'" name="obr_32_3_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_3_comment'+$obrTableCtr+'" name="obr_32_3_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Middle Name	</td>	<td>	OBR-32.4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_4_default'+$obrTableCtr+'" name="obr_32_4_default'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_4_new'+$obrTableCtr+'" name="obr_32_4_new'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obr_32_4_comment'+$obrTableCtr+'" name="obr_32_4_comment'+$obrTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#obrTable tbody:last').before(rowString);
	$('#obrTableCtr').val($obrTableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$obrTableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/obr/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.obrDetails,function(key,obrData)
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
								<input type="text" class="editField" id="siteNum`+$obrTableCtr+`" name="siteNum`+$obrTableCtr+`" va+lue="`+obrData.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							OBR Details
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
							Set ID
						</td>
						<td>
							OBR-1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_1_default`+$obrTableCtr+`" name="obr_1_default`+$obrTableCtr+`" value="`+obrData.obr_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_1_new`+$obrTableCtr+`" name="obr_1_new`+$obrTableCtr+`" value="`+obrData.obr_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_1_comment`+$obrTableCtr+`" name="obr_1_comment`+$obrTableCtr+`" value="`+obrData.obr_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Study ID
						</td>
						<td>
							OBR-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_3_default`+$obrTableCtr+`" name="obr_3_default`+$obrTableCtr+`" value="`+obrData.obr_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_3_new`+$obrTableCtr+`" name="obr_3_new`+$obrTableCtr+`" value="`+obrData.obr_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_3_comment`+$obrTableCtr+`" name="obr_3_comment`+$obrTableCtr+`" value="`+obrData.obr_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Universal Service ID
						</td>
						<td>
							OBR-4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_default`+$obrTableCtr+`" name="obr_4_default`+$obrTableCtr+`" value="`+obrData.obr_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_new`+$obrTableCtr+`" name="obr_4_new`+$obrTableCtr+`" value="`+obrData.obr_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_comment`+$obrTableCtr+`" name="obr_4_comment`+$obrTableCtr+`" value="`+obrData.obr_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Study Type
						</td>
						<td>
							OBR-4.2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_2_default`+$obrTableCtr+`" name="obr_4_2_default`+$obrTableCtr+`" value="`+obrData.obr_4_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_2_new`+$obrTableCtr+`" name="obr_4_2_new`+$obrTableCtr+`" value="`+obrData.obr_4_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_2_comment`+$obrTableCtr+`" name="obr_4_2_comment`+$obrTableCtr+`" value="`+obrData.obr_4_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Study Type
						</td>
						<td>
							OBR-4.3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_3_default`+$obrTableCtr+`" name="obr_4_3_default`+$obrTableCtr+`" value="`+obrData.obr_4_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_3_new`+$obrTableCtr+`" name="obr_4_3_new`+$obrTableCtr+`" value="`+obrData.obr_4_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_4_3_comment`+$obrTableCtr+`" name="obr_4_3_comment`+$obrTableCtr+`" value="`+obrData.obr_4_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation Start Date Time
						</td>
						<td>
							OBR-7
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_7_default`+$obrTableCtr+`" name="obr_7_default`+$obrTableCtr+`" value="`+obrData.obr_7_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_7_new`+$obrTableCtr+`" name="obr_7_new`+$obrTableCtr+`" value="`+obrData.obr_7_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_7_comment`+$obrTableCtr+`" name="obr_7_comment`+$obrTableCtr+`" value="`+obrData.obr_7_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation End Date Time
						</td>
						<td>
							OBR-8
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_8_default`+$obrTableCtr+`" name="obr_8_default`+$obrTableCtr+`" value="`+obrData.obr_8_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_8_new`+$obrTableCtr+`" name="obr_8_new`+$obrTableCtr+`" value="`+obrData.obr_8_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_8_comment`+$obrTableCtr+`" name="obr_8_comment`+$obrTableCtr+`" value="`+obrData.obr_8_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Ordering Physician
						</td>
						<td>
							OBR-16
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_16_default`+$obrTableCtr+`" name="obr_16_default`+$obrTableCtr+`" value="`+obrData.obr_16_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_16_new`+$obrTableCtr+`" name="obr_16_new`+$obrTableCtr+`" value="`+obrData.obr_16_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_16_comment`+$obrTableCtr+`" name="obr_16_comment`+$obrTableCtr+`" value="`+obrData.obr_16_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Accession Number
						</td>
						<td>
							OBR-18
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_18_default`+$obrTableCtr+`" name="obr_18_default`+$obrTableCtr+`" value="`+obrData.obr_18_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_18_new`+$obrTableCtr+`" name="obr_18_new`+$obrTableCtr+`" value="`+obrData.obr_18_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_18_comment`+$obrTableCtr+`" name="obr_18_comment`+$obrTableCtr+`" value="`+obrData.obr_18_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Report Version
						</td>
						<td>
							OBR-20
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_20_default`+$obrTableCtr+`" name="obr_20_default`+$obrTableCtr+`" value="`+obrData.obr_20_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_20_new`+$obrTableCtr+`" name="obr_20_new`+$obrTableCtr+`" value="`+obrData.obr_20_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_20_comment`+$obrTableCtr+`" name="obr_20_comment`+$obrTableCtr+`" value="`+obrData.obr_20_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Results Last Signed Date Time
						</td>
						<td>
							OBR-22
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_22_default`+$obrTableCtr+`" name="obr_22_default`+$obrTableCtr+`" value="`+obrData.obr_22_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_22_new`+$obrTableCtr+`" name="obr_22_new`+$obrTableCtr+`" value="`+obrData.obr_22_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_22_comment`+$obrTableCtr+`" name="obr_22_comment`+$obrTableCtr+`" value="`+obrData.obr_22_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Diagnostic Serv Sect ID
						</td>
						<td>
							OBR-24
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_24_default`+$obrTableCtr+`" name="obr_24_default`+$obrTableCtr+`" value="`+obrData.obr_24_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_24_new`+$obrTableCtr+`" name="obr_24_new`+$obrTableCtr+`" value="`+obrData.obr_24_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_24_comment`+$obrTableCtr+`" name="obr_24_comment`+$obrTableCtr+`" value="`+obrData.obr_24_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Result Status
						</td>
						<td>
							OBR-25
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_25_default`+$obrTableCtr+`" name="obr_25_default`+$obrTableCtr+`" value="`+obrData.obr_25_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_25_new`+$obrTableCtr+`" name="obr_25_new`+$obrTableCtr+`" value="`+obrData.obr_25_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_25_comment`+$obrTableCtr+`" name="obr_25_comment`+$obrTableCtr+`" value="`+obrData.obr_25_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Reason for Study
						</td>
						<td>
							OBR-31
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_31_default`+$obrTableCtr+`" name="obr_31_default`+$obrTableCtr+`" value="`+obrData.obr_31_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_31_new`+$obrTableCtr+`" name="obr_31_new`+$obrTableCtr+`" value="`+obrData.obr_31_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_31_comment`+$obrTableCtr+`" name="obr_31_comment`+$obrTableCtr+`" value="`+obrData.obr_31_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Principal Interpretor
						</td>
						<td>
							OBR-32
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_default`+$obrTableCtr+`" name="obr_32_default`+$obrTableCtr+`" value="`+obrData.obr_32_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_new`+$obrTableCtr+`" name="obr_32_new`+$obrTableCtr+`" value="`+obrData.obr_32_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_comment`+$obrTableCtr+`" name="obr_32_comment`+$obrTableCtr+`" value="`+obrData.obr_32_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							OBR-32.2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_2_default`+$obrTableCtr+`" name="obr_32_2_default`+$obrTableCtr+`" value="`+obrData.obr_32_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_2_new`+$obrTableCtr+`" name="obr_32_2_new`+$obrTableCtr+`" value="`+obrData.obr_32_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_2_comment`+$obrTableCtr+`" name="obr_32_2_comment`+$obrTableCtr+`" value="`+obrData.obr_32_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							OBR-32.3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_3_default`+$obrTableCtr+`" name="obr_32_3_default`+$obrTableCtr+`" value="`+obrData.obr_32_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_3_new`+$obrTableCtr+`" name="obr_32_3_new`+$obrTableCtr+`" value="`+obrData.obr_32_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_3_comment`+$obrTableCtr+`" name="obr_32_3_comment`+$obrTableCtr+`" value="`+obrData.obr_32_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							OBR-32.4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_4_default`+$obrTableCtr+`" name="obr_32_4_default`+$obrTableCtr+`" value="`+obrData.obr_32_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_4_new`+$obrTableCtr+`" name="obr_32_4_new`+$obrTableCtr+`" value="`+obrData.obr_32_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obr_32_4_comment`+$obrTableCtr+`" name="obr_32_4_comment`+$obrTableCtr+`" value="`+obrData.obr_32_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#obrTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#obrTableCtr').val($obrTableCtr);
		$obrTableCtr++ ;
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