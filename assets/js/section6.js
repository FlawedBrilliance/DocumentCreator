//Section Number
var section = 6 ;

//Sample Messages Table
$sampleMessagesCtr=0 ;
function addSampleMessagesTableRow()
{
	$sampleMessagesCtr++ ;
	rowString = '<tr>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="msg_type'+$sampleMessagesCtr+'" name="msg_type'+$sampleMessagesCtr+'" value="" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">ADT</div>	<div class="item" data-value="2">ORM</div>	<div class="item" data-value="3">ORU</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<textarea id="msg_content'+$sampleMessagesCtr+'" name="msg_content'+$sampleMessagesCtr+'" value="" class="editField" readOnly ></textarea>	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="msg_source'+$sampleMessagesCtr+'" name="msg_source'+$sampleMessagesCtr+'" value="" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">New</div>	<div class="item" data-value="2">Old</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="msg_from'+$sampleMessagesCtr+'" name="msg_from'+$sampleMessagesCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#sampleMessagesTable tr:last').after(rowString);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
}
$("#addSampleMessagesTableRow").click(function()
{
	addSampleMessagesTableRow();
	$('#sampleMessagesCtr').val($sampleMessagesCtr);
});


//Data Fetch
var url = apiUrl+'/section6/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.sampleMessages,function(key,sampleMessage)
	{
		$sampleMessagesCtr++ ;
		rowString = '<tr>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="msg_type'+$sampleMessagesCtr+'" name="msg_type'+$sampleMessagesCtr+'" value="'+sampleMessage.msg_type+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">ADT</div>	<div class="item" data-value="2">ORM</div>	<div class="item" data-value="3">ORU</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<textarea id="msg_content'+$sampleMessagesCtr+'" name="msg_content'+$sampleMessagesCtr+'" value="" class="editField" readOnly >'+sampleMessage.msg_content+'</textarea>	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="msg_source'+$sampleMessagesCtr+'" name="msg_source'+$sampleMessagesCtr+'" value="'+sampleMessage.msg_source+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">New</div>	<div class="item" data-value="2">Old</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="msg_from'+$sampleMessagesCtr+'" name="msg_from'+$sampleMessagesCtr+'" value="'+sampleMessage.msg_from+'" class="editField" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
		$('#sampleMessagesTable tr:last').after(rowString);
		$('.ui.dropdown').dropdown();
		$('.dropdown').unbind("click");
		$('.deleteRow').attr("disabled", true);
		$('#sampleMessagesCtr').val($sampleMessagesCtr);
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