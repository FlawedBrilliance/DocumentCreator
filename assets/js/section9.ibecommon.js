//Section Number
var section = '9/ibecommon' ;

//MSH Table
$tableCtr=1 ;
$("#addRow").click(function()
{
	rowString = `
		    		<tr>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="hl7`+$tableCtr+`" name="hl7`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="defaultValue`+$tableCtr+`" name="defaultValue`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="customValue`+$tableCtr+`" name="customValue`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="description`+$tableCtr+`" name="description`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td class="center aligned">
							<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
						</td>
					</tr>
	` ;
	$('#mainTable tbody:last').before(rowString);
	$('#tableCtr').val($tableCtr);
	$('.editField').prop('readOnly', false);
	$tableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section9/ibecommon/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.details,function(key,detail)
	{
		rowString = `
			    		<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.hl7+`" id="hl7`+$tableCtr+`" name="hl7`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.defaultValue+`" id="defaultValue`+$tableCtr+`" name="defaultValue`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.customValue+`" id="customValue`+$tableCtr+`" name="customValue`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.description+`" id="description`+$tableCtr+`" name="description`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
		` ;
		$('#mainTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#tableCtr').val($tableCtr);
		$tableCtr++ ;
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