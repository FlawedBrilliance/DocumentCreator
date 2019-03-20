//Section Number
var section = '9/xcommon' ;

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
								<input type="text" class="editField" id="studyType`+$tableCtr+`" name="studyType`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="aeTitle`+$tableCtr+`" name="aeTitle`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="ip`+$tableCtr+`" name="ip`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="port`+$tableCtr+`" name="port`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="messageTypes`+$tableCtr+`" name="messageTypes`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="calledAeReq`+$tableCtr+`" name="calledAeReq`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="callingAe`+$tableCtr+`" name="callingAe`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="calledAe`+$tableCtr+`" name="calledAe`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="relayAe`+$tableCtr+`" name="relayAe`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="relayIp`+$tableCtr+`" name="relayIp`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="relayPort`+$tableCtr+`" name="relayPort`+$tableCtr+`" readOnly />
							</div>
						</td>reconciled
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
var url = apiUrl+'/section9/xcommon/fetch.php?prs=' + prs + '&token=' + token ;
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
									<input type="text" class="editField" value="`+detail.studyType+`" id="studyType`+$tableCtr+`" name="studyType`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.aeTitle+`" id="aeTitle`+$tableCtr+`" name="aeTitle`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.ip+`" id="ip`+$tableCtr+`" name="ip`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.port+`" id="port`+$tableCtr+`" name="port`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.messageTypes+`" id="messageTypes`+$tableCtr+`" name="messageTypes`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.calledAeReq+`" id="calledAeReq`+$tableCtr+`" name="calledAeReq`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.callingAe+`" id="callingAe`+$tableCtr+`" name="callingAe`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.calledAe+`" id="calledAe`+$tableCtr+`" name="calledAe`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.relayAe+`" id="relayAe`+$tableCtr+`" name="relayAe`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.relayIp+`" id="relayIp`+$tableCtr+`" name="relayIp`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.relayPort+`" id="relayPort`+$tableCtr+`" name="relayPort`+$tableCtr+`" readOnly />
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