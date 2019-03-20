//Section Number
var section = 8 ;

//Customizations Table
$customizationsCtr=0 ;
function addCustomizationsTableRow()
{
	$customizationsCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" id="site'+$customizationsCtr+'" name="site'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="description'+$customizationsCtr+'" name="description'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="details'+$customizationsCtr+'" name="details'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="solution'+$customizationsCtr+'" name="solution'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="screenshot'+$customizationsCtr+'" name="screenshot'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="remark'+$customizationsCtr+'" name="remark'+$customizationsCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>	</td>	</tr>' ;
	$('#customizationsTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addCustomizationsTableRow").click(function()
{
	addCustomizationsTableRow();
	$('#customizationsCtr').val($customizationsCtr);
});

//Data Fetch
var url = apiUrl+'/section8/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Customizations Table
	$.each(response.customizations,function(key,fetchedData)
	{
		$customizationsCtr++ ;
		rowString = '<tr>	<td>	<div class="ui form">	<input type="text" id="site'+$customizationsCtr+'" name="site'+$customizationsCtr+'" value="'+fetchedData.site+'" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="description'+$customizationsCtr+'" name="description'+$customizationsCtr+'" value="'+fetchedData.description+'" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="details'+$customizationsCtr+'" name="details'+$customizationsCtr+'" value="'+fetchedData.details+'" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="solution'+$customizationsCtr+'" name="solution'+$customizationsCtr+'" value="'+fetchedData.solution+'" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="screenshot'+$customizationsCtr+'" name="screenshot'+$customizationsCtr+'" value="'+fetchedData.screenshot+'" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="remark'+$customizationsCtr+'" name="remark'+$customizationsCtr+'" value="'+fetchedData.remark+'" class="editField" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>	</td>	</tr>' ;
		$('#customizationsTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#customizationsCtr').val($customizationsCtr);
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