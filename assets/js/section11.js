//Section Number
var section = 11 ;

//Contact Table
$issueListTableCtr=1 ;
function addIssueListTableRow()
{
	$issueListTableCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="issueNo'+$issueListTableCtr+'" name="issueNo'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="status'+$issueListTableCtr+'" name="status'+$issueListTableCtr+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">Open</div>	<div class="item" data-value="2">Resolved</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="logDate'+$issueListTableCtr+'" name="logDate'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="system'+$issueListTableCtr+'" name="system'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="issueName'+$issueListTableCtr+'" name="issueName'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input class="editField" type="text" id="statusUpdate'+$issueListTableCtr+'" name="statusUpdate'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="owner'+$issueListTableCtr+'" name="owner'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="caseNo'+$issueListTableCtr+'" name="caseNo'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="priority'+$issueListTableCtr+'" name="priority'+$issueListTableCtr+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">High</div>	<div class="item" data-value="2">Medium</div>	<div class="item" data-value="3">Low</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="resolveDate'+$issueListTableCtr+'" name="resolveDate'+$issueListTableCtr+'" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#issueListTable tr:last').after(rowString);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
}
$("#addIssueListTableRow").click(function()
{
	addIssueListTableRow();
	$('#issueListTableCtr').val($issueListTableCtr);
});

//Data Fetch
var url = apiUrl+'/section11/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	
	$.each(response.issueList,function(key,issue)
	{
		$issueListTableCtr++ ;
		rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="issueNo'+$issueListTableCtr+'" name="issueNo'+$issueListTableCtr+'" value="'+issue.issueNo+'" readOnly />	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="status'+$issueListTableCtr+'" name="status'+$issueListTableCtr+'" value="'+issue.status+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">Open</div>	<div class="item" data-value="2">Resolved</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="logDate'+$issueListTableCtr+'" name="logDate'+$issueListTableCtr+'" value="'+issue.logDate+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="system'+$issueListTableCtr+'" name="system'+$issueListTableCtr+'" value="'+issue.system+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="issueName'+$issueListTableCtr+'" name="issueName'+$issueListTableCtr+'" value="'+issue.issueName+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input class="editField" type="text" id="statusUpdate'+$issueListTableCtr+'" name="statusUpdate'+$issueListTableCtr+'" value="'+issue.statusUpdate+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="owner'+$issueListTableCtr+'" name="owner'+$issueListTableCtr+'" value="'+issue.owner+'" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="caseNo'+$issueListTableCtr+'" name="caseNo'+$issueListTableCtr+'" value="'+issue.caseNo+'" readOnly />	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="priority'+$issueListTableCtr+'" name="priority'+$issueListTableCtr+'" value="'+issue.priority+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">High</div>	<div class="item" data-value="2">Medium</div>	<div class="item" data-value="3">Low</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="resolveDate'+$issueListTableCtr+'" name="resolveDate'+$issueListTableCtr+'" value="'+issue.resolveDate+'" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
		$('#issueListTable tr:last').after(rowString);
		$('.ui.dropdown').dropdown();
		$('.dropdown').unbind("click");
		$('.deleteRow').attr("disabled", true);
		$('#issueListTableCtr').val($issueListTableCtr);
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