//Section Number
var section = '7/pv1' ;

//PV1 Table
$pv1TableCtr=1 ;
$("#addPv1Site").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$pv1TableCtr+'" name="siteNum'+$pv1TableCtr+'" value="'+$pv1TableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	PV1 Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Patient Class	</td>	<td>	PV1-2	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_2_default'+$pv1TableCtr+'" name="pv1_2_default'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_2_new'+$pv1TableCtr+'" name="pv1_2_new'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_2_comment'+$pv1TableCtr+'" name="pv1_2_comment'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Patient Location	</td>	<td>	PV1-3	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_3_default'+$pv1TableCtr+'" name="pv1_3_default'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_3_new'+$pv1TableCtr+'" name="pv1_3_new'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_3_comment'+$pv1TableCtr+'" name="pv1_3_comment'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	</tr>	<tr>	<td>	Assigning Authority	</td>	<td>	PV1-39	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_39_default'+$pv1TableCtr+'" name="pv1_39_default'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_39_new'+$pv1TableCtr+'" name="pv1_39_new'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="pv1_39_comment'+$pv1TableCtr+'" name="pv1_39_comment'+$pv1TableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>' ;
	$('#pv1Table tbody:last').before(rowString);
	$('#pv1TableCtr').val($pv1TableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$pv1TableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/pv1/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pv1Details,function(key,pv1Data)
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
								<input type="text" class="editField" id="siteNum`+$pv1TableCtr+`" name="siteNum`+$pv1TableCtr+`" value="`+pv1Data.siteNum+`" readOnly />
							</div>
						</th>
						<th colspan="3" style="text-align: center;">
							PV1 Details
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
							Patient Class
						</td>
						<td>
							PV1-2
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_2_default`+$pv1TableCtr+`" name="pv1_2_default`+$pv1TableCtr+`" value="`+pv1Data.pv1_2_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_2_new`+$pv1TableCtr+`" name="pv1_2_new`+$pv1TableCtr+`" value="`+pv1Data.pv1_2_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_2_comment`+$pv1TableCtr+`" name="pv1_2_comment`+$pv1TableCtr+`" value="`+pv1Data.pv1_2_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Patient Location
						</td>
						<td>
							PV1-3
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_3_default`+$pv1TableCtr+`" name="pv1_3_default`+$pv1TableCtr+`" value="`+pv1Data.pv1_3_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_3_new`+$pv1TableCtr+`" name="pv1_3_new`+$pv1TableCtr+`" value="`+pv1Data.pv1_3_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_3_comment`+$pv1TableCtr+`" name="pv1_3_comment`+$pv1TableCtr+`" value="`+pv1Data.pv1_3_comment+`" readOnly />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PV1-39
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_39_default`+$pv1TableCtr+`" name="pv1_39_default`+$pv1TableCtr+`" value="`+pv1Data.pv1_39_default+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_39_new`+$pv1TableCtr+`" name="pv1_39_new`+$pv1TableCtr+`" value="`+pv1Data.pv1_39_new+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pv1_39_comment`+$pv1TableCtr+`" name="pv1_39_comment`+$pv1TableCtr+`" value="`+pv1Data.pv1_39_comment+`" readOnly />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pv1Table tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#pv1TableCtr').val($pv1TableCtr);
		$pv1TableCtr++ ;
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