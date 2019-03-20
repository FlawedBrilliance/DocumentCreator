//Section Number
var section = '7/orc' ;

//ORC Table
$orcTableCtr=1 ;
$("#addOrcSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$orcTableCtr+'" name="siteNum'+$orcTableCtr+'" value="'+$orcTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	ORC Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Order Control	</td>	<td>	ORC-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_1_default'+$orcTableCtr+'" name="orc_1_default'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_1_new'+$orcTableCtr+'" name="orc_1_new'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_1_comment'+$orcTableCtr+'" name="orc_1_comment'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Place Order Number	</td>	<td>	ORC-2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_2_default'+$orcTableCtr+'" name="orc_2_default'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_2_new'+$orcTableCtr+'" name="orc_2_new'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_2_comment'+$orcTableCtr+'" name="orc_2_comment'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Field Order Number	</td>	<td>	ORC-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_3_default'+$orcTableCtr+'" name="orc_3_default'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_3_new'+$orcTableCtr+'" name="orc_3_new'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_3_comment'+$orcTableCtr+'" name="orc_3_comment'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Order Status	</td>	<td>	ORC-5	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_5_default'+$orcTableCtr+'" name="orc_5_default'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_5_new'+$orcTableCtr+'" name="orc_5_new'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_5_comment'+$orcTableCtr+'" name="orc_5_comment'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Date Time of Translation	</td>	<td>	ORC-9	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_9_default'+$orcTableCtr+'" name="orc_9_default'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_9_new'+$orcTableCtr+'" name="orc_9_new'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orc_9_comment'+$orcTableCtr+'" name="orc_9_comment'+$orcTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#orcTable tbody:last').before(rowString);
	$('#orcTableCtr').val($orcTableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$orcTableCtr++ ;
});


//Data Fetch
var url = apiUrl+'/section7/orc/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.orcDetails,function(key,orcData)
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
								<input type="text" class="editField" id="siteNum`+$orcTableCtr+`" name="siteNum`+$orcTableCtr+`" value="`+orcData.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							ORC Details
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
							Order Control
						</td>
						<td>
							ORC-1
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_1_default`+$orcTableCtr+`" name="orc_1_default`+$orcTableCtr+`" value="`+orcData.orc_1_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_1_new`+$orcTableCtr+`" name="orc_1_new`+$orcTableCtr+`" value="`+orcData.orc_1_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_1_comment`+$orcTableCtr+`" name="orc_1_comment`+$orcTableCtr+`" value="`+orcData.orc_1_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Place Order Number
						</td>
						<td>
							ORC-2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_2_default`+$orcTableCtr+`" name="orc_2_default`+$orcTableCtr+`" value="`+orcData.orc_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_2_new`+$orcTableCtr+`" name="orc_2_new`+$orcTableCtr+`" value="`+orcData.orc_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_2_comment`+$orcTableCtr+`" name="orc_2_comment`+$orcTableCtr+`" value="`+orcData.orc_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Field Order Number
						</td>
						<td>
							ORC-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_3_default`+$orcTableCtr+`" name="orc_3_default`+$orcTableCtr+`" value="`+orcData.orc_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_3_new`+$orcTableCtr+`" name="orc_3_new`+$orcTableCtr+`" value="`+orcData.orc_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_3_comment`+$orcTableCtr+`" name="orc_3_comment`+$orcTableCtr+`" value="`+orcData.orc_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Order Status
						</td>
						<td>
							ORC-5
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_5_default`+$orcTableCtr+`" name="orc_5_default`+$orcTableCtr+`" value="`+orcData.orc_5_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_5_new`+$orcTableCtr+`" name="orc_5_new`+$orcTableCtr+`" value="`+orcData.orc_5_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_5_comment`+$orcTableCtr+`" name="orc_5_comment`+$orcTableCtr+`" value="`+orcData.orc_5_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Translation
						</td>
						<td>
							ORC-9
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_9_default`+$orcTableCtr+`" name="orc_9_default`+$orcTableCtr+`" value="`+orcData.orc_9_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_9_new`+$orcTableCtr+`" name="orc_9_new`+$orcTableCtr+`" value="`+orcData.orc_9_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orc_9_comment`+$orcTableCtr+`" name="orc_9_comment`+$orcTableCtr+`" value="`+orcData.orc_9_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#orcTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#orcTableCtr').val($orcTableCtr);
		$orcTableCtr++ ;
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