//Section Number
var section = 5 ;

//Race Table
$raceCtr=0 ;
function addRaceTableRow()
{
	$raceCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="raceSourceValue'+$raceCtr+'" name="raceSourceValue'+$raceCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="raceDestinationValue'+$raceCtr+'" name="raceDestinationValue'+$raceCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="raceDescription'+$raceCtr+'" name="raceDescription'+$raceCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#raceTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addRaceTableRow").click(function()
{
	addRaceTableRow();
	$('#raceCtr').val($raceCtr);
});

//Patient Class Table
$patientClassCtr=0 ;
function addPatientClassTableRow()
{
	$patientClassCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="patientClassSourceValue'+$patientClassCtr+'" name="patientClassSourceValue'+$patientClassCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="patientClassDestinationValue'+$patientClassCtr+'" name="patientClassDestinationValue'+$patientClassCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="patientClassDescription'+$patientClassCtr+'" name="patientClassDescription'+$patientClassCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#patientClassTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addPatientClassTableRow").click(function()
{
	addPatientClassTableRow();
	$('#patientClassCtr').val($patientClassCtr);
});

//Order Control Code Table
$orderControlCodeCtr=0 ;
function addOrderControlCodeTableRow()
{
	$orderControlCodeCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlCodeMessageType'+$orderControlCodeCtr+'" name="orderControlCodeMessageType'+$orderControlCodeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlCodeTrigger'+$orderControlCodeCtr+'" name="orderControlCodeTrigger'+$orderControlCodeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlCodeDescription'+$orderControlCodeCtr+'" name="orderControlCodeDescription'+$orderControlCodeCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#orderControlCodeTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addOrderControlCodeTableRow").click(function()
{
	addOrderControlCodeTableRow();
	$('#orderControlCodeCtr').val($orderControlCodeCtr);
});

//Order Status Table
$orderStatusCtr=0 ;
function addOrderStatusTableRow()
{
	$orderStatusCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderStatusMessageType'+$orderStatusCtr+'" name="orderStatusMessageType'+$orderStatusCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderStatusTrigger'+$orderStatusCtr+'" name="orderStatusTrigger'+$orderStatusCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderStatusDescription'+$orderStatusCtr+'" name="orderStatusDescription'+$orderStatusCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#orderStatusTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addOrderStatusTableRow").click(function()
{
	addOrderStatusTableRow();
	$('#orderStatusCtr').val($orderStatusCtr);
});

//Order Control Status Table
$orderControlStatusCtr=0 ;
function addOrderControlStatusTableRow()
{
	$orderControlStatusCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlStatusMessageType'+$orderControlStatusCtr+'" name="orderControlStatusMessageType'+$orderControlStatusCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlStatusTrigger'+$orderControlStatusCtr+'" name="orderControlStatusTrigger'+$orderControlStatusCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="orderControlStatusDescription'+$orderControlStatusCtr+'" name="orderControlStatusDescription'+$orderControlStatusCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#orderControlStatusTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addOrderControlStatusTableRow").click(function()
{
	addOrderControlStatusTableRow();
	$('#orderControlStatusCtr').val($orderControlStatusCtr);
});

//Exam Modality Type Table
$examModalityTypeCtr=0 ;
function addExamModalityTypeTableRow()
{
	$examModalityTypeCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeExamCode'+$examModalityTypeCtr+'" name="examModalityTypeExamCode'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeStudyType'+$examModalityTypeCtr+'" name="examModalityTypeStudyType'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeModality'+$examModalityTypeCtr+'" name="examModalityTypeModality'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeAE'+$examModalityTypeCtr+'" name="examModalityTypeAE'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeProcStepCode'+$examModalityTypeCtr+'" name="examModalityTypeProcStepCode'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeCPT'+$examModalityTypeCtr+'" name="examModalityTypeCPT'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeProcStepDesc'+$examModalityTypeCtr+'" name="examModalityTypeProcStepDesc'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="examModalityTypeCDR'+$examModalityTypeCtr+'" name="examModalityTypeCDR'+$examModalityTypeCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#examModalityTypeTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addExamModalityTypeTableRow").click(function()
{
	addExamModalityTypeTableRow();
	$('#examModalityTypeCtr').val($examModalityTypeCtr);
});


//Data Fetch
var url = apiUrl+'/section5/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Race Table
	$.each(response.raceDetails,function(key,fetchedData)
	{
		$raceCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="raceSourceValue'+$raceCtr+'" name="raceSourceValue'+$raceCtr+'" value="'+fetchedData.source_value+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="raceDestinationValue'+$raceCtr+'" name="raceDestinationValue'+$raceCtr+'" value="'+fetchedData.destination_value+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="raceDescription'+$raceCtr+'" name="raceDescription'+$raceCtr+'" value="'+fetchedData.description+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#raceTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#raceCtr').val($raceCtr);
	});

	//Patient Class Table
	$.each(response.patientClass,function(key,fetchedData)
	{
		$patientClassCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="patientClassSourceValue'+$patientClassCtr+'" name="patientClassSourceValue'+$patientClassCtr+'" value="'+fetchedData.source_value+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="patientClassDestinationValue'+$patientClassCtr+'" name="patientClassDestinationValue'+$patientClassCtr+'" value="'+fetchedData.destination_value+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="patientClassDescription'+$patientClassCtr+'" name="patientClassDescription'+$patientClassCtr+'" value="'+fetchedData.description+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#patientClassTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#patientClassCtr').val($patientClassCtr);
	});

	//Order Control Code Table
	$.each(response.orderControlCode,function(key,fetchedData)
	{
		$orderControlCodeCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlCodeMessageType'+$orderControlCodeCtr+'" name="orderControlCodeMessageType'+$orderControlCodeCtr+'" value="'+fetchedData.message_type+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlCodeTrigger'+$orderControlCodeCtr+'" name="orderControlCodeTrigger'+$orderControlCodeCtr+'" value="'+fetchedData.processing_trigger+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlCodeDescription'+$orderControlCodeCtr+'" name="orderControlCodeDescription'+$orderControlCodeCtr+'" value="'+fetchedData.description+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#orderControlCodeTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#orderControlCodeCtr').val($orderControlCodeCtr);
	});

	//Order Status Table
	$.each(response.orderStatus,function(key,fetchedData)
	{
		$orderStatusCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderStatusMessageType'+$orderStatusCtr+'" name="orderStatusMessageType'+$orderStatusCtr+'" value="'+fetchedData.message_type+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderStatusTrigger'+$orderStatusCtr+'" name="orderStatusTrigger'+$orderStatusCtr+'" value="'+fetchedData.processing_trigger+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderStatusDescription'+$orderStatusCtr+'" name="orderStatusDescription'+$orderStatusCtr+'" value="'+fetchedData.description+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#orderStatusTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#orderStatusCtr').val($orderStatusCtr);
	});

	//Order Control Status Table
	$.each(response.orderControlStatus,function(key,fetchedData)
	{
		$orderControlStatusCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlStatusMessageType'+$orderControlStatusCtr+'" name="orderControlStatusMessageType'+$orderControlStatusCtr+'" value="'+fetchedData.message_type+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlStatusTrigger'+$orderControlStatusCtr+'" name="orderControlStatusTrigger'+$orderControlStatusCtr+'" value="'+fetchedData.processing_trigger+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="orderControlStatusDescription'+$orderControlStatusCtr+'" name="orderControlStatusDescription'+$orderControlStatusCtr+'" value="'+fetchedData.description+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#orderControlStatusTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#orderControlStatusCtr').val($orderControlStatusCtr);
	});

	//Exam Modality Type Table
	$.each(response.examModalityType,function(key,fetchedData)
	{
		$examModalityTypeCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeExamCode'+$examModalityTypeCtr+'" name="examModalityTypeExamCode'+$examModalityTypeCtr+'" value="'+fetchedData.exam_code+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeStudyType'+$examModalityTypeCtr+'" name="examModalityTypeStudyType'+$examModalityTypeCtr+'" value="'+fetchedData.study_type+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeModality'+$examModalityTypeCtr+'" name="examModalityTypeModality'+$examModalityTypeCtr+'" value="'+fetchedData.modality+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeAE'+$examModalityTypeCtr+'" name="examModalityTypeAE'+$examModalityTypeCtr+'" value="'+fetchedData.ae_title+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeProcStepCode'+$examModalityTypeCtr+'" name="examModalityTypeProcStepCode'+$examModalityTypeCtr+'" value="'+fetchedData.procStepCode+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeCPT'+$examModalityTypeCtr+'" name="examModalityTypeCPT'+$examModalityTypeCtr+'" value="'+fetchedData.cptCode+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeProcStepDesc'+$examModalityTypeCtr+'" name="examModalityTypeProcStepDesc'+$examModalityTypeCtr+'" value="'+fetchedData.procStepDesc+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="examModalityTypeCDR'+$examModalityTypeCtr+'" name="examModalityTypeCDR'+$examModalityTypeCtr+'" value="'+fetchedData.cdrCode+'" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#examModalityTypeTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#examModalityTypeCtr').val($examModalityTypeCtr);
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