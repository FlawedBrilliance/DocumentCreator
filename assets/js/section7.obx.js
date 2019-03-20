//Section Number
var section = '7/obx' ;

//OBX Table
$obxTableCtr=1 ;
$("#addObxSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$obxTableCtr+'" name="siteNum'+$obxTableCtr+'" value="'+$obxTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	OBX Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Set ID	</td>	<td>	OBX-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_1_default'+$obxTableCtr+'" name="obx_1_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_1_new'+$obxTableCtr+'" name="obx_1_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_1_comment'+$obxTableCtr+'" name="obx_1_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Value Type	</td>	<td>	OBX-2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_2_default'+$obxTableCtr+'" name="obx_2_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_2_new'+$obxTableCtr+'" name="obx_2_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_2_comment'+$obxTableCtr+'" name="obx_2_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation Identifier	</td>	<td>	OBX-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_3_default'+$obxTableCtr+'" name="obx_3_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_3_new'+$obxTableCtr+'" name="obx_3_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_3_comment'+$obxTableCtr+'" name="obx_3_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation Sub Identifier	</td>	<td>	OBX-4	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_4_default'+$obxTableCtr+'" name="obx_4_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_4_new'+$obxTableCtr+'" name="obx_4_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_4_comment'+$obxTableCtr+'" name="obx_4_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation Value	</td>	<td>	OBX-5	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_5_default'+$obxTableCtr+'" name="obx_5_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_5_new'+$obxTableCtr+'" name="obx_5_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_5_comment'+$obxTableCtr+'" name="obx_5_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Observation Status	</td>	<td>	OBX-11	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_11_default'+$obxTableCtr+'" name="obx_11_default'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_11_new'+$obxTableCtr+'" name="obx_11_new'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="obx_11_comment'+$obxTableCtr+'" name="obx_11_comment'+$obxTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#obxTable tbody:last').before(rowString);
	$('#obxTableCtr').val($obxTableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$obxTableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/obx/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.obxDetails,function(key,obxData)
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
								<input type="text" class="editField" id="siteNum`+$obxTableCtr+`" name="siteNum`+$obxTableCtr+`" value="`+obxData.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							OBX Details
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
							OBX-1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_1_default`+$obxTableCtr+`" name="obx_1_default`+$obxTableCtr+`" value="`+obxData.obx_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_1_new`+$obxTableCtr+`" name="obx_1_new`+$obxTableCtr+`" value="`+obxData.obx_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_1_comment`+$obxTableCtr+`" name="obx_1_comment`+$obxTableCtr+`" value="`+obxData.obx_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Value Type
						</td>
						<td>
							OBX-2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_2_default`+$obxTableCtr+`" name="obx_2_default`+$obxTableCtr+`" value="`+obxData.obx_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_2_new`+$obxTableCtr+`" name="obx_2_new`+$obxTableCtr+`" value="`+obxData.obx_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_2_comment`+$obxTableCtr+`" name="obx_2_comment`+$obxTableCtr+`" value="`+obxData.obx_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation Identifier
						</td>
						<td>
							OBX-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_3_default`+$obxTableCtr+`" name="obx_3_default`+$obxTableCtr+`" value="`+obxData.obx_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_3_new`+$obxTableCtr+`" name="obx_3_new`+$obxTableCtr+`" value="`+obxData.obx_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_3_comment`+$obxTableCtr+`" name="obx_3_comment`+$obxTableCtr+`" value="`+obxData.obx_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation Sub Identifier
						</td>
						<td>
							OBX-4
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_4_default`+$obxTableCtr+`" name="obx_4_default`+$obxTableCtr+`" value="`+obxData.obx_4_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_4_new`+$obxTableCtr+`" name="obx_4_new`+$obxTableCtr+`" value="`+obxData.obx_4_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_4_comment`+$obxTableCtr+`" name="obx_4_comment`+$obxTableCtr+`" value="`+obxData.obx_4_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation Value
						</td>
						<td>
							OBX-5
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_5_default`+$obxTableCtr+`" name="obx_5_default`+$obxTableCtr+`" value="`+obxData.obx_5_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_5_new`+$obxTableCtr+`" name="obx_5_new`+$obxTableCtr+`" value="`+obxData.obx_5_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_5_comment`+$obxTableCtr+`" name="obx_5_comment`+$obxTableCtr+`" value="`+obxData.obx_5_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Observation Status
						</td>
						<td>
							OBX-11
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_11_default`+$obxTableCtr+`" name="obx_11_default`+$obxTableCtr+`" value="`+obxData.obx_11_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_11_new`+$obxTableCtr+`" name="obx_11_new`+$obxTableCtr+`" value="`+obxData.obx_11_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="obx_11_comment`+$obxTableCtr+`" name="obx_11_comment`+$obxTableCtr+`" value="`+obxData.obx_11_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#obxTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#obxTableCtr').val($obxTableCtr);
		$obxTableCtr++ ;
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