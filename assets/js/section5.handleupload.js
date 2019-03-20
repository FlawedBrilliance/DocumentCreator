function parseRace()
{
	var fileUpload = document.getElementById("raceUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$raceCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="raceSourceValue`+$raceCtr+`" name="raceSourceValue`+$raceCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="raceDestinationValue`+$raceCtr+`" name="raceDestinationValue`+$raceCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="raceDescription`+$raceCtr+`" name="raceDescription`+$raceCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#raceTable tr:last').after(rowString);
					$('#raceCtr').val($raceCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#raceSourceValue'+$raceCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#raceDestinationValue'+$raceCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#raceDescription'+$raceCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}

function parsePatientClass()
{
	var fileUpload = document.getElementById("patientClassUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$patientClassCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="patientClassSourceValue`+$patientClassCtr+`" name="patientClassSourceValue`+$patientClassCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="patientClassDestinationValue`+$patientClassCtr+`" name="patientClassDestinationValue`+$patientClassCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="patientClassDescription`+$patientClassCtr+`" name="patientClassDescription`+$patientClassCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#patientClassTable tr:last').after(rowString);
					$('#patientClassCtr').val($patientClassCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#patientClassSourceValue'+$patientClassCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#patientClassDestinationValue'+$patientClassCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#patientClassDescription'+$patientClassCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}

function parseOCC()
{
	var fileUpload = document.getElementById("occUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$orderControlCodeCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeMessageType`+$orderControlCodeCtr+`" name="orderControlCodeMessageType`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeTrigger`+$orderControlCodeCtr+`" name="orderControlCodeTrigger`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeDescription`+$orderControlCodeCtr+`" name="orderControlCodeDescription`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#orderControlCodeTable tr:last').after(rowString);
					$('#orderControlCodeCtr').val($orderControlCodeCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#orderControlCodeMessageType'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#orderControlCodeTrigger'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#orderControlCodeDescription'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}

function parseOCC()
{
	var fileUpload = document.getElementById("occUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$orderControlCodeCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeMessageType`+$orderControlCodeCtr+`" name="orderControlCodeMessageType`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeTrigger`+$orderControlCodeCtr+`" name="orderControlCodeTrigger`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlCodeDescription`+$orderControlCodeCtr+`" name="orderControlCodeDescription`+$orderControlCodeCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#orderControlCodeTable tr:last').after(rowString);
					$('#orderControlCodeCtr').val($orderControlCodeCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#orderControlCodeMessageType'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#orderControlCodeTrigger'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#orderControlCodeDescription'+$orderControlCodeCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}

function parseOrderStatus()
{
	var fileUpload = document.getElementById("orderStatusUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$orderStatusCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderStatusMessageType`+$orderStatusCtr+`" name="orderStatusMessageType`+$orderStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderStatusTrigger`+$orderStatusCtr+`" name="orderStatusTrigger`+$orderStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderStatusDescription`+$orderStatusCtr+`" name="orderStatusDescription`+$orderStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#orderStatusTable tr:last').after(rowString);
					$('#orderStatusCtr').val($orderStatusCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#orderStatusMessageType'+$orderStatusCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#orderStatusTrigger'+$orderStatusCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#orderStatusDescription'+$orderStatusCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}

function parseControlStatus()
{
	var fileUpload = document.getElementById("orderControlStatusUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$orderControlStatusCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlStatusMessageType`+$orderControlStatusCtr+`" name="orderControlStatusMessageType`+$orderControlStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlStatusTrigger`+$orderControlStatusCtr+`" name="orderControlStatusTrigger`+$orderControlStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="orderControlStatusDescription`+$orderControlStatusCtr+`" name="orderControlStatusDescription`+$orderControlStatusCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#orderControlStatusTable tr:last').after(rowString);
					$('#orderControlStatusCtr').val($orderControlStatusCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 3; j++)
					{
						if (j==0)
						{
							$('#orderControlStatusMessageType'+$orderControlStatusCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#orderControlStatusTrigger'+$orderControlStatusCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#orderControlStatusDescription'+$orderControlStatusCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}


function parseEM()
{
	var fileUpload = document.getElementById("emUpload");
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
	if (regex.test(fileUpload.value.toLowerCase()))
	{
		if (typeof (FileReader) != "undefined")
		{
			var reader = new FileReader();
			reader.onload = function (e) 
			{
				var rows = e.target.result.split("\n");
				for (var i = 1; i < rows.length-1; i++)
				{
					$examModalityTypeCtr++ ;
					var rowString = `
						<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeExamCode`+$examModalityTypeCtr+`" name="examModalityTypeExamCode`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeStudyType`+$examModalityTypeCtr+`" name="examModalityTypeStudyType`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeModality`+$examModalityTypeCtr+`" name="examModalityTypeModality`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeAE`+$examModalityTypeCtr+`" name="examModalityTypeAE`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeProcStepCode`+$examModalityTypeCtr+`" name="examModalityTypeProcStepCode`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeCPT`+$examModalityTypeCtr+`" name="examModalityTypeCPT`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeProcStepDesc`+$examModalityTypeCtr+`" name="examModalityTypeProcStepDesc`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" id="examModalityTypeCDR`+$examModalityTypeCtr+`" name="examModalityTypeCDR`+$examModalityTypeCtr+`" value="" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
					` ;
					$('#examModalityTypeTable tr:last').after(rowString);
					$('#examModalityTypeCtr').val($examModalityTypeCtr);
					var cells = rows[i].split(",");
					for (var j = 0; j < 8; j++)
					{
						if (j==0)
						{
							$('#examModalityTypeExamCode'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==1)
						{
							$('#examModalityTypeStudyType'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==2)
						{
							$('#examModalityTypeModality'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==3)
						{
							$('#examModalityTypeAE'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==4)
						{
							$('#examModalityTypeProcStepCode'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==5)
						{
							$('#examModalityTypeCPT'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==6)
						{
							$('#examModalityTypeProcStepDesc'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
						else if (j==7)
						{
							$('#examModalityTypeCDR'+$examModalityTypeCtr).val(cells[j].split('"').join(''));
						}
					}
				}
			}
			reader.readAsText(fileUpload.files[0]);
		}
		else
		{
			alert("This browser does not support HTML5.");
		}
	}
	else
	{
		alert("Please upload a valid CSV file.");
	}
}