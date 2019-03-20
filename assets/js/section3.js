//Section Number
var section = 3 ;

//Technical Details Table
$technicalDetailsCtr=0 ;
function addTechnicalDetailsTableRow()
{
	$technicalDetailsCtr++ ;
	rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="type'+$technicalDetailsCtr+'" name="type'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="appRole'+$technicalDetailsCtr+'" name="appRole'+$technicalDetailsCtr+'" value="" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="appName'+$technicalDetailsCtr+'" name="appName'+$technicalDetailsCtr+'" value="" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="version'+$technicalDetailsCtr+'" name="version'+$technicalDetailsCtr+'" value="" readOnly />   </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="ip'+$technicalDetailsCtr+'" name="ip'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="hostname'+$technicalDetailsCtr+'" name="hostname'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="username'+$technicalDetailsCtr+'" name="username'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="password'+$technicalDetailsCtr+'" name="password'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="remark'+$technicalDetailsCtr+'" name="remark'+$technicalDetailsCtr+'" value="" readOnly /> </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>  </td>   </tr>' ;
	$('#technicalDetailsTable tr:last').after(rowString);
	$('.editField').prop('readOnly', false);
}
$("#addTechnicalDetailsTableRow").click(function()
{
	addTechnicalDetailsTableRow();
	$('#technicalDetailsCtr').val($technicalDetailsCtr);
});

//Data Fetch
var url = apiUrl+'/section3/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Technical Details Table
	$.each(response.technicalDetails,function(key,techDetail)
	{
		$technicalDetailsCtr++ ;
		rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="type'+$technicalDetailsCtr+'" name="type'+$technicalDetailsCtr+'" value="'+techDetail.type+'" readOnly />  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="appRole'+$technicalDetailsCtr+'" name="appRole'+$technicalDetailsCtr+'" value="'+techDetail.appRole+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="appName'+$technicalDetailsCtr+'" name="appName'+$technicalDetailsCtr+'" value="'+techDetail.appName+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="version'+$technicalDetailsCtr+'" name="version'+$technicalDetailsCtr+'" value="'+techDetail.version+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="ip'+$technicalDetailsCtr+'" name="ip'+$technicalDetailsCtr+'" value="'+techDetail.ip+'" readOnly />    </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="hostname'+$technicalDetailsCtr+'" name="hostname'+$technicalDetailsCtr+'" value="'+techDetail.hostname+'" readOnly />  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="username'+$technicalDetailsCtr+'" name="username'+$technicalDetailsCtr+'" value="'+techDetail.username+'" readOnly />  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="password'+$technicalDetailsCtr+'" name="password'+$technicalDetailsCtr+'" value="'+techDetail.password+'" readOnly />  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="remark'+$technicalDetailsCtr+'" name="remark'+$technicalDetailsCtr+'" value="'+techDetail.remark+'" readOnly />    </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()">X</button>  </td>   </tr>' ;
		$('#technicalDetailsTable tr:last').after(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#technicalDetailsCtr').val($technicalDetailsCtr);
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