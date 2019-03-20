//Section Number
var section = 4 ;

//Connectivity Details Table
$connectivityDetailsCtr=0 ;
function addConnectivityDetailsTableRow()
{
	$connectivityDetailsCtr++ ;
	rowString = '<tr>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="connectivityType'+$connectivityDetailsCtr+'" name="connectivityType'+$connectivityDetailsCtr+'" value="" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">HL7</div>	<div class="item" data-value="2">Modality</div>	<div class="item" data-value="3">Server</div>	</div>	</div>	</td> <td>	<div class="ui selection dropdown">	<input type="hidden" id="serverType'+$connectivityDetailsCtr+'" name="serverType'+$connectivityDetailsCtr+'" value="" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">Test</div>	<div class="item" data-value="2">Production</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivitySystem'+$connectivityDetailsCtr+'" name="connectivitySystem'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityInterfaceType'+$connectivityDetailsCtr+'" name="connectivityInterfaceType'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityMessageEvent'+$connectivityDetailsCtr+'" name="connectivityMessageEvent'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui selection dropdown">	<input type="hidden" id="connectivityDirection'+$connectivityDetailsCtr+'" name="connectivityDirection'+$connectivityDetailsCtr+'" value="" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">Inbound</div>	<div class="item" data-value="2">Outbound</div>	</div>	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivitySource'+$connectivityDetailsCtr+'" name="connectivitySource'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivitySourceIp'+$connectivityDetailsCtr+'" name="connectivitySourceIp'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityDestination'+$connectivityDetailsCtr+'" name="connectivityDestination'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityDestinationIp'+$connectivityDetailsCtr+'" name="connectivityDestinationIp'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityPort'+$connectivityDetailsCtr+'" name="connectivityPort'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" class="editField" id="connectivityAeTitle'+$connectivityDetailsCtr+'" name="connectivityAeTitle'+$connectivityDetailsCtr+'" value="" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>	</td>	</tr>' ;
	$('#connectivityDetailsTable tr:last').after(rowString);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
}
$("#addConnectivityDetailsTableRow").click(function()
{
	addConnectivityDetailsTableRow();
	$('#connectivityDetailsCtr').val($connectivityDetailsCtr);
});

//Imaging Modality Table
$imagingModalityCtr=0 ;
function addImagingModalityDetailsTableRow()
{
	$imagingModalityCtr++ ;
	rowString = '<tr>	<td>	<div class="ui form">	<input type="text" id="IMvendor'+$imagingModalityCtr+'" name="IMvendor'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMhostname'+$imagingModalityCtr+'" name="IMhostname'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMip'+$imagingModalityCtr+'" name="IMip'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMaePort'+$imagingModalityCtr+'" name="IMaePort'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMmodel'+$imagingModalityCtr+'" name="IMmodel'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMlocation'+$imagingModalityCtr+'" name="IMlocation'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td>	<div class="ui form">	<input type="text" id="IMserial'+$imagingModalityCtr+'" name="IMserial'+$imagingModalityCtr+'" value="" class="editField" readOnly />	</div>	</td>	<td class="center aligned">	<button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>	</td>	</tr>' ;
	$('#imagingModalityDetailsTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addImagingModalityDetailsTableRow").click(function()
{
	addImagingModalityDetailsTableRow();
	$('#imagingModalityCtr').val($imagingModalityCtr);
});


//Data Fetch
var url = apiUrl+'/section4/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Connectivity Details Table
	$.each(response.connectivityDetails,function(key,connDetail)
	{
		$connectivityDetailsCtr++ ;
		rowString = '<tr>   <td>    <div class="ui selection dropdown"> <input type="hidden" id="connectivityType'+$connectivityDetailsCtr+'" name="connectivityType'+$connectivityDetailsCtr+'" value="'+connDetail.type+'" />    <i class="dropdown icon"></i>   <div class="default text">Select</div>  <div class="menu">  <div class="item" data-value="1">HL7</div>  <div class="item" data-value="2">Modality</div> <div class="item" data-value="3">Server</div>   </div>  </div>  </td>  <td>	<div class="ui selection dropdown">	<input type="hidden" id="serverType'+$connectivityDetailsCtr+'" name="serverType'+$connectivityDetailsCtr+'" value="'+connDetail.serverType+'" />	<i class="dropdown icon"></i>	<div class="default text">Select</div>	<div class="menu">	<div class="item" data-value="1">Test</div>	<div class="item" data-value="2">Production</div>	</div>	</div>	</td>  <td>    <div class="ui form">   <input type="text" class="editField" id="connectivitySystem'+$connectivityDetailsCtr+'" name="connectivitySystem'+$connectivityDetailsCtr+'" value="'+connDetail.system_details+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityInterfaceType'+$connectivityDetailsCtr+'" name="connectivityInterfaceType'+$connectivityDetailsCtr+'" value="'+connDetail.interface_type+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityMessageEvent'+$connectivityDetailsCtr+'" name="connectivityMessageEvent'+$connectivityDetailsCtr+'" value="'+connDetail.message_event+'" readOnly />   </div>  </td>   <td>    <div class="ui selection dropdown"> <input type="hidden" id="connectivityDirection'+$connectivityDetailsCtr+'" name="connectivityDirection'+$connectivityDetailsCtr+'" value="'+connDetail.interface_direction+'" />  <i class="dropdown icon"></i>   <div class="default text">Select</div>  <div class="menu">  <div class="item" data-value="1">Inbound</div>  <div class="item" data-value="2">Outbound</div> </div>  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivitySource'+$connectivityDetailsCtr+'" name="connectivitySource'+$connectivityDetailsCtr+'" value="'+connDetail.conn_source+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivitySourceIp'+$connectivityDetailsCtr+'" name="connectivitySourceIp'+$connectivityDetailsCtr+'" value="'+connDetail.source_ip+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityDestination'+$connectivityDetailsCtr+'" name="connectivityDestination'+$connectivityDetailsCtr+'" value="'+connDetail.conn_destination+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityDestinationIp'+$connectivityDetailsCtr+'" name="connectivityDestinationIp'+$connectivityDetailsCtr+'" value="'+connDetail.destination_ip+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityPort'+$connectivityDetailsCtr+'" name="connectivityPort'+$connectivityDetailsCtr+'" value="'+connDetail.port+'" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="connectivityAeTitle'+$connectivityDetailsCtr+'" name="connectivityAeTitle'+$connectivityDetailsCtr+'" value="'+connDetail.ae_title+'" readOnly /> </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;
		$('#connectivityDetailsTable tr:last').after(rowString);
		$('.ui.dropdown').dropdown();
		$('.dropdown').unbind("click");
		$('.deleteRow').attr("disabled", true);
		$('#connectivityDetailsCtr').val($connectivityDetailsCtr);
	});

	//Imaging Modality Details Table
	$.each(response.modalityDetails,function(key,modalityDetail)
	{
		$imagingModalityCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" id="IMvendor'+$imagingModalityCtr+'" name="IMvendor'+$imagingModalityCtr+'" value="'+modalityDetail.vendor+'" class="editField" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMhostname'+$imagingModalityCtr+'" name="IMhostname'+$imagingModalityCtr+'" value="'+modalityDetail.hostname+'" class="editField" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMip'+$imagingModalityCtr+'" name="IMip'+$imagingModalityCtr+'" value="'+modalityDetail.ip+'" class="editField" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMaePort'+$imagingModalityCtr+'" name="IMaePort'+$imagingModalityCtr+'" value="'+modalityDetail.ae_title+'" class="editField" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMmodel'+$imagingModalityCtr+'" name="IMmodel'+$imagingModalityCtr+'" value="'+modalityDetail.model+'" class="editField" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMlocation'+$imagingModalityCtr+'" name="IMlocation'+$imagingModalityCtr+'" value="'+modalityDetail.location+'" class="editField" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" id="IMserial'+$imagingModalityCtr+'" name="IMserial'+$imagingModalityCtr+'" value="'+modalityDetail.serial+'" class="editField" readOnly />   </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>  </td>   </tr>' ;
		$('#imagingModalityDetailsTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#imagingModalityCtr').val($imagingModalityCtr);
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