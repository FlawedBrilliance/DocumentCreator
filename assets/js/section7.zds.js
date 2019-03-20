//Section Number
var section = '7/zds' ;

//ZDS Table
$zdsTableCtr=1 ;
$("#addZdsSite").click(function()
{
	rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$zdsTableCtr+'" name="siteNum'+$zdsTableCtr+'" value="'+$zdsTableCtr+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	ZDS Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Study Instance UID	</td>	<td>	ZDS-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_default'+$zdsTableCtr+'" name="zds_1_default'+$zdsTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_new'+$zdsTableCtr+'" name="zds_1_new'+$zdsTableCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_comment'+$zdsTableCtr+'" name="zds_1_comment'+$zdsTableCtr+'" value="" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
	$('#zdsTable tbody:last').before(rowString);
	$('#zdsTableCtr').val($zdsTableCtr);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
	$zdsTableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section7/zds/fetch.php?prs=' + prs + '&token=' + token + '&app=' + application ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.zdsDetails,function(key,zdsData)
	{
		rowString = '<table class="ui celled table black unstackable">	<thead>	<tr>	<th colspan="1">	Institution	</th>	<th colspan="1">	<div class="ui form">	<input type="text" class="editField" id="siteNum'+$zdsTableCtr+'" name="siteNum'+$zdsTableCtr+'" value="'+zdsData.siteNum+'" readOnly />	</div>	</th>	<th colspan="3" style="text-align: center;">	ZDS Details	</th>	</tr>	<tr>	<th>HL7 Element Name</th>	<th>Default HL7 Parsing</th>	<th>Default Value</th>	<th>New HL7 Parsing</th>	<th>Comment/Value</th>	</tr>	</thead>	<tbody>	<tr>	<td>	Study Instance UID	</td>	<td>	ZDS-1	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_default'+$zdsTableCtr+'" name="zds_1_default'+$zdsTableCtr+'" value="'+zdsData.zds_1_default+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_new'+$zdsTableCtr+'" name="zds_1_new'+$zdsTableCtr+'" value="'+zdsData.zds_1_new+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="zds_1_comment'+$zdsTableCtr+'" name="zds_1_comment'+$zdsTableCtr+'" value="'+zdsData.zds_1_comment+'" readOnly />	</div>	</td>	</tr>	</tbody>	</table>' ;
		$('#zdsTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#zdsTableCtr').val($zdsTableCtr);
		$zdsTableCtr++ ;
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