//Section Number
var section = 2 ;

//Contact Table
$contactTableCtr=0 ;
function addCustomerContactTableRow()
{
	$contactTableCtr++ ;
	/*rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="name'+$contactTableCtr+'" name="name'+$contactTableCtr+'" readOnly required /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="role'+$contactTableCtr+'" name="role'+$contactTableCtr+'" readOnly />  </div>  </td>   <td>    <div class="ui selection dropdown"> <input type="hidden" id="org'+$contactTableCtr+'" name="org'+$contactTableCtr+'" /> <i class="dropdown icon"></i>   <div class="default text">Select</div>  <div class="menu">  <div class="item" data-value="1">Philips</div>  <div class="item" data-value="2">Customer</div> <div class="item" data-value="3">Third Party</div>  </div>  </div>  </td>   <td>    <div class="ui form">   <input type="email" class="editField" id="mail'+$contactTableCtr+'" name="mail'+$contactTableCtr+'" readOnly /> </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="phone'+$contactTableCtr+'" name="phone'+$contactTableCtr+'" readOnly />    </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="remark'+$contactTableCtr+'" name="remark'+$contactTableCtr+'" readOnly />  </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;*/
	rowString = `	<tr>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="name`+$contactTableCtr+`" name="name`+$contactTableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="role`+$contactTableCtr+`" name="role`+$contactTableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui selection dropdown">
								<input type="hidden" id="org`+$contactTableCtr+`" name="org`+$contactTableCtr+`" />
								<i class="dropdown icon"></i>
								<div class="default text">Select</div>
								<div class="menu">
									<div class="item" data-value="1">Philips</div>
									<div class="item" data-value="2">Customer</div>
									<div class="item" data-value="3">Third Party</div>
								</div>
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="mail`+$contactTableCtr+`" name="mail`+$contactTableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="phone`+$contactTableCtr+`" name="phone`+$contactTableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="remark`+$contactTableCtr+`" name="remark`+$contactTableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui selection dropdown">
								<input type="hidden" id="stat`+$contactTableCtr+`" name="stat`+$contactTableCtr+`" />
								<i class="dropdown icon"></i>
								<div class="default text">Select</div>
								<div class="menu">
									<div class="item" data-value="1">Active</div>
									<div class="item" data-value="2">Inactive</div>
								</div>
							</div>
						</td>
						<td class="center aligned">
							<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
						</td>
					</tr> ` ;
	$('#customerContactTable tr:last').after(rowString);
	$('.ui.dropdown').dropdown();
	$('.editField').prop('readOnly', false);
}
$("#addCustomerContactTableRow").click(function()
{
	addCustomerContactTableRow();
	$('#contactTableCtr').val($contactTableCtr);
});

//Data Fetch
var url = apiUrl+'/section2/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Customer Contact Table
	$.each(response.contactDetails,function(key,contact)
	{
		$contactTableCtr++ ;
		/*rowString = '<tr>   <td>    <div class="ui form">   <input type="text" class="editField" id="name'+$contactTableCtr+'" name="name'+$contactTableCtr+'" value="'+contact.name+'" readOnly required/>  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="role'+$contactTableCtr+'" name="role'+$contactTableCtr+'" value="'+contact.role+'" readOnly />  </div>  </td>   <td>    <div class="ui selection dropdown"> <input type="hidden" id="org'+$contactTableCtr+'" name="org'+$contactTableCtr+'" value="'+contact.org+'" /> <i class="dropdown icon"></i>   <div class="default text">Select</div>  <div class="menu">  <div class="item" data-value="1">Philips</div>  <div class="item" data-value="2">Customer</div> <div class="item" data-value="3">Third Party</div>  </div>  </div>  </td>   <td>    <div class="ui form">   <input type="email" class="editField" id="mail'+$contactTableCtr+'" name="mail'+$contactTableCtr+'" value="'+contact.mail+'" readOnly />  </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="phone'+$contactTableCtr+'" name="phone'+$contactTableCtr+'" value="'+contact.phone+'" readOnly />    </div>  </td>   <td>    <div class="ui form">   <input type="text" class="editField" id="remark'+$contactTableCtr+'" name="remark'+$contactTableCtr+'" value="'+contact.remark+'" readOnly />  </div>  </td>   <td class="center aligned"> <button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button> </td>   </tr>' ;*/
		rowString = `	<tr>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="name`+$contactTableCtr+`" name="name`+$contactTableCtr+`" value="`+contact.name+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="role`+$contactTableCtr+`" name="role`+$contactTableCtr+`" value="`+contact.role+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui selection dropdown">
								<input type="hidden" id="org`+$contactTableCtr+`" name="org`+$contactTableCtr+`" value="`+contact.org+`" />
								<i class="dropdown icon"></i>
								<div class="default text">Select</div>
								<div class="menu">
									<div class="item" data-value="1">Philips</div>
									<div class="item" data-value="2">Customer</div>
									<div class="item" data-value="3">Third Party</div>
								</div>
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="mail`+$contactTableCtr+`" name="mail`+$contactTableCtr+`" value="`+contact.mail+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="phone`+$contactTableCtr+`" name="phone`+$contactTableCtr+`" value="`+contact.phone+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="remark`+$contactTableCtr+`" name="remark`+$contactTableCtr+`" value="`+contact.remark+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui selection dropdown">
								<input type="hidden" id="stat`+$contactTableCtr+`" name="stat`+$contactTableCtr+`" value="`+contact.stat+`" />
								<i class="dropdown icon"></i>
								<div class="default text">Select</div>
								<div class="menu">
									<div class="item" data-value="1">Active</div>
									<div class="item" data-value="2">Inactive</div>
								</div>
							</div>
						</td>
						<td class="center aligned">
							<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
						</td>
					</tr> ` ;
		$('#customerContactTable tr:last').after(rowString);
		$('.ui.dropdown').dropdown();
		$('.dropdown').unbind("click");
		$('.deleteRow').attr("disabled", true);
		$('#contactTableCtr').val($contactTableCtr);
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