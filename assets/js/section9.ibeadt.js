//Section Number
var section = '9/ibeadt' ;

//MSH Table
$tableCtr=1 ;
$("#addRow").click(function()
{
	rowString = `
		    		<tr>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="pureId`+$tableCtr+`" name="pureId`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orderName`+$tableCtr+`" name="orderName`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="orderCode`+$tableCtr+`" name="orderCode`+$tableCtr+`" readOnly />
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
var url = apiUrl+'/section9/ibeadt/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.details,function(key,detail)
	{
		rowString = `
			    		<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.pureId+`" id="pureId`+$tableCtr+`" name="pureId`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.orderName+`" id="orderName`+$tableCtr+`" name="orderName`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.orderCode+`" id="orderCode`+$tableCtr+`" name="orderCode`+$tableCtr+`" readOnly />
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