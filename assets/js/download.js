if(!prs)
{
	//Redirect to Landing Page
	window.location.href = '../index.' + extDirect;
}

//Populate Site
$('#siteName').html('Site: ' + siteName);
$('#prs').html('PRS: ' + prs);

//Reset Token to get Latest Published Revision
token = '' ;

//Revision History
var url = apiUrl+"/section1/fetch.php?prs=" + prs ;
$.getJSON(url,function(response)
{
	//Revision History
	$.each(response.revision,function(key,reval)
	{
		rowString = '<tr><td name="sec2_rev">'+reval.revisionNumber+'</td><td name="sec2_desc">'+reval.revisionDescription+'</td><td name="sec2_author">'+reval.revisionAuthor+'</td><td name="sec2_date">'+reval.revisionDate+'</td></tr>' ;
		$('#revisionTable tr:last').after(rowString) ;
	});
});

//Contact Details
var url = apiUrl+'/section2/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Customer Contact Table
	$.each(response.contactDetails,function(key,contact)
	{
		var org = '' ;
		if (contact.org==1) {org = 'Philips';}
		else if (contact.org==2) {org = 'Customer';}
		else if (contact.org==3) {org = 'Third Party';}
		rowString = '<tr>	<td>'+contact.name+'</td>	<td>'+contact.role+'</td>	<td>'+org+'</td>	<td>'+contact.mail+'</td>	<td>'+contact.phone+'</td>	<td>'+contact.remark+'</td>	</tr>' ;
		$('#customerContactTable tr:last').after(rowString);
	});
});

//Technical Details
var url = apiUrl+'/section3/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Technical Details Table
	$.each(response.technicalDetails,function(key,techDetail)
	{
		rowString = '<tr>	<td>'+techDetail.type+'</td>	<td>'+techDetail.appRole+'</td>	<td>'+techDetail.appName+'</td>	<td>'+techDetail.version+'</td>	<td>'+techDetail.ip+'</td>	<td>'+techDetail.hostname+'</td>	<td>'+techDetail.username+'</td>	<td>'+techDetail.password+'</td>	<td>'+techDetail.remark+'</td>	</tr>' ;
		$('#technicalDetailsTable tr:last').after(rowString);
	});
});

//Connectivity
var url = apiUrl+'/section4/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Connectivity Details Table
	$.each(response.connectivityDetails,function(key,connDetail)
	{
		var cType = '' ;
		if (connDetail.type==1) {cType = 'HL7';}
		else if (connDetail.type==2) {cType = 'Modality';}
		else if (connDetail.type==3) {cType = 'Server';}
		var direction = '' ;
		if (connDetail.interface_direction==1) {direction = 'Inbound';}
		else if (connDetail.interface_direction==2) {direction = 'Outbound';}
		rowString = '<tr>	<td>'+cType+'</td>	<td>'+connDetail.system_details+'</td>	<td>'+connDetail.interface_type+'</td>	<td>'+connDetail.message_event+'</td>	<td>'+direction+'</td>	<td>'+connDetail.conn_source+'</td>	<td>'+connDetail.source_ip+'</td>	<td>'+connDetail.conn_destination+'</td>	<td>'+connDetail.destination_ip+'</td>	<td>'+connDetail.port+'</td>	<td>'+connDetail.ae_title+'</td>	</tr>' ;
		$('#connectivityDetailsTable tr:last').after(rowString);
	});

	//Imaging Modality Details Table
	$.each(response.modalityDetails,function(key,modalityDetail)
	{
		rowString = '<tr>	<td>'+modalityDetail.vendor+'</td>	<td>'+modalityDetail.hostname+'</td>	<td>'+modalityDetail.ip+'</td>	<td>'+modalityDetail.ae_title+'</td>	<td>'+modalityDetail.model+'</td>	<td>'+modalityDetail.location+'</td>	<td>'+modalityDetail.serial+'</td>	</tr>' ;
		$('#imagingModalityDetailsTable tr:last').after(rowString);
	});
});

//Translation Tables
var url = apiUrl+'/section5/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Race Table
	$.each(response.raceDetails,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.source_value+'</td>	<td>'+fetchedData.destination_value+'</td>	<td>'+fetchedData.description+'</td>	</tr>' ;
		$('#raceTable tr:last').after(rowString);
	});

	//Patient Class Table
	$.each(response.patientClass,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.source_value+'</td>	<td>'+fetchedData.destination_value+'</td>	<td>'+fetchedData.description+'</td>	</tr>' ;
		$('#patientClassTable tr:last').after(rowString);
	});

	//Order Control Code Table
	$.each(response.orderControlCode,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.message_type+'</td>	<td>'+fetchedData.processing_trigger+'</td>	<td>'+fetchedData.description+'</td>	</tr>' ;
		$('#orderControlCodeTable tr:last').after(rowString);
	});

	//Order Status Table
	$.each(response.orderStatus,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.message_type+'</td>	<td>'+fetchedData.processing_trigger+'</td>	<td>'+fetchedData.description+'</td>	</tr>' ;
		$('#orderStatusTable tr:last').after(rowString);
	});

	//Order Control Status Table
	$.each(response.orderControlStatus,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.message_type+'</td>	<td>'+fetchedData.processing_trigger+'</td>	<td>'+fetchedData.description+'</td>	</tr>' ;
		$('#orderControlStatusTable tr:last').after(rowString);
	});

	//Exam Modality Type Table
	$.each(response.examModalityType,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.exam_code+'</td>	<td>'+fetchedData.study_type+'</td>	<td>'+fetchedData.modality+'</td>	<td>'+fetchedData.ae_title+'</td>	<td>'+fetchedData.procStepCode+'</td>	<td>'+fetchedData.cptCode+'</td>	<td>'+fetchedData.procStepDesc+'</td>	<td>'+fetchedData.cdrCode+'</td>	</tr>' ;
		$('#examModalityTypeTable tr:last').after(rowString);
	});
});

//Sample Messages
var url = apiUrl+'/section6/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.sampleMessages,function(key,sampleMessage)
	{
		var msgType = '' ;
		if (sampleMessage.msg_type==1) {msgType = 'ADT';}
		else if (sampleMessage.msg_type==2) {msgType = 'ORM';}
		else if (sampleMessage.msg_type==3) {msgType = 'ORU';}
		var msgSource = '' ;
		if (sampleMessage.msg_source==1) {msgSource = 'New';}
		else if (sampleMessage.msg_source==2) {msgSource = 'Old';}
		rowString = '<tr>	<td>'+msgType+'</td>	<td>'+sampleMessage.msg_content+'</td>	<td>'+msgSource+'</td>	<td>'+sampleMessage.msg_from+'</td>	</tr>' ;
		$('#sampleMessagesTable tr:last').after(rowString);
	});	
});

//Customizations
var url = apiUrl+'/section8/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Customizations Table
	$.each(response.customizations,function(key,fetchedData)
	{
		rowString = '<tr>	<td>'+fetchedData.site+'</td>	<td>'+fetchedData.description+'</td>	<td>'+fetchedData.details+'</td>	<td>'+fetchedData.solution+'</td>	<td>'+fetchedData.screenshot+'</td>	<td>'+fetchedData.remark+'</td>	</tr>' ;
		$('#customizationsTable tr:last').after(rowString);
	});
});

//Issue List
var url = apiUrl+'/section11/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Issue List Table
	$.each(response.issueList,function(key,issue)
	{
		var issueStatus = '' ;
		if (issue.status==1) {issueStatus = 'Open';}
		else if (issue.status==2) {issueStatus = 'Resolved';}
		var issuePriority = '' ;
		if (issue.priority==1) {issuePriority = 'High';}
		else if (issue.priority==2) {issuePriority = 'Medium';}
		else if (issue.priority==3) {issuePriority = 'Low';}
		rowString = '<tr>	<td>'+issue.issueNo+'</td>	<td>'+issueStatus+'</td>	<td>'+issue.logDate+'</td>	<td>'+issue.system+'</td>	<td>'+issue.issueName+'</td>	<td>'+issue.statusUpdate+'</td>	<td>'+issue.owner+'</td>	<td>'+issue.caseNo+'</td>	<td>'+issuePriority+'</td>	<td>'+issue.resolveDate+'</td>	</tr>' ;
		$('#issueListTable tr:last').after(rowString);
	});
});

//Data Fetch
var url = apiUrl+'/section7/msh/fetch.php?prs=' + prs + '&token=' + token + '&app=ibe' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.mshDetails,function(key,mshData)
	{
		$('#mshIbe').html('MSH Table (Application - IBE)');
		rowString = `
			<table class="ui celled table black unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+mshData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							MSH Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Field Separator
						</td>
						<td>
							MSH-1
						</td>
						<td>
							`+mshData.msh_1_default+`
						</td>
						<td>
							`+mshData.msh_1_new+`
						</td>
						<td>
							`+mshData.msh_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Encoding Characters	
						</td>
						<td>
							MSH-2
						</td>
						<td>
							`+mshData.msh_2_default+`
						</td>
						<td>
							`+mshData.msh_2_new+`
						</td>
						<td>
							`+mshData.msh_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Application
						</td>
						<td>
							MSH-3
						</td>
						<td>
							`+mshData.msh_3_default+`
						</td>
						<td>
							`+mshData.msh_3_new+`
						</td>
						<td>
							`+mshData.msh_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Facility
						</td>
						<td>
							MSH-4
						</td>
						<td>
							`+mshData.msh_4_default+`
						</td>
						<td>
							`+mshData.msh_4_new+`
						</td>
						<td>
							`+mshData.msh_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Application
						</td>
						<td>
							MSH-5
						</td>
						<td>
							`+mshData.msh_5_default+`
						</td>
						<td>
							`+mshData.msh_5_new+`
						</td>
						<td>
							`+mshData.msh_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Facility
						</td>
						<td>
							MSH-6
						</td>
						<td>
							`+mshData.msh_6_default+`
						</td>
						<td>
							`+mshData.msh_6_new+`
						</td>
						<td>
							`+mshData.msh_6_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Message
						</td>
						<td>
							MSH-7
						</td>
						<td>
							`+mshData.msh_7_default+`
						</td>
						<td>
							`+mshData.msh_7_new+`
						</td>
						<td>
							`+mshData.msh_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9
						</td>
						<td>
							`+mshData.msh_9_default+`
						</td>
						<td>
							`+mshData.msh_9_new+`
						</td>
						<td>
							`+mshData.msh_9_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9.1
						</td>
						<td>
							`+mshData.msh_9_1_default+`
						</td>
						<td>
							`+mshData.msh_9_1_new+`
						</td>
						<td>
							`+mshData.msh_9_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Trigger Event
						</td>
						<td>
							MSH-9.2
						</td>
						<td>
							`+mshData.msh_9_2_default+`
						</td>
						<td>
							`+mshData.msh_9_2_new+`
						</td>
						<td>
							`+mshData.msh_9_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Control ID
						</td>
						<td>
							MSH-10
						</td>
						<td>
							`+mshData.msh_10_default+`
						</td>
						<td>
							`+mshData.msh_10_new+`
						</td>
						<td>
							`+mshData.msh_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Processing ID
						</td>
						<td>
							MSH-11
						</td>
						<td>
							`+mshData.msh_11_default+`
						</td>
						<td>
							`+mshData.msh_11_new+`
						</td>
						<td>
							`+mshData.msh_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Version ID
						</td>
						<td>
							MSH-12
						</td>
						<td>
							`+mshData.msh_12_default+`
						</td>
						<td>
							`+mshData.msh_12_new+`
						</td>
						<td>
							`+mshData.msh_12_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Character Set
						</td>
						<td>
							MSH-18
						</td>
						<td>
							`+mshData.msh_18_default+`
						</td>
						<td>
							`+mshData.msh_18_new+`
						</td>
						<td>
							`+mshData.msh_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#mshTableIbe tbody:last').before(rowString);
	});
});

//Data Fetch
var url = apiUrl+'/section7/msh/fetch.php?prs=' + prs + '&token=' + token + '&app=iscv' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.mshDetails,function(key,mshData)
	{
		$('#mshIscv').html('MSH Table (Application - ISCV)');
		rowString = `
			<table class="ui celled table black unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+mshData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							MSH Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Field Separator
						</td>
						<td>
							MSH-1
						</td>
						<td>
							`+mshData.msh_1_default+`
						</td>
						<td>
							`+mshData.msh_1_new+`
						</td>
						<td>
							`+mshData.msh_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Encoding Characters	
						</td>
						<td>
							MSH-2
						</td>
						<td>
							`+mshData.msh_2_default+`
						</td>
						<td>
							`+mshData.msh_2_new+`
						</td>
						<td>
							`+mshData.msh_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Application
						</td>
						<td>
							MSH-3
						</td>
						<td>
							`+mshData.msh_3_default+`
						</td>
						<td>
							`+mshData.msh_3_new+`
						</td>
						<td>
							`+mshData.msh_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Facility
						</td>
						<td>
							MSH-4
						</td>
						<td>
							`+mshData.msh_4_default+`
						</td>
						<td>
							`+mshData.msh_4_new+`
						</td>
						<td>
							`+mshData.msh_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Application
						</td>
						<td>
							MSH-5
						</td>
						<td>
							`+mshData.msh_5_default+`
						</td>
						<td>
							`+mshData.msh_5_new+`
						</td>
						<td>
							`+mshData.msh_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Facility
						</td>
						<td>
							MSH-6
						</td>
						<td>
							`+mshData.msh_6_default+`
						</td>
						<td>
							`+mshData.msh_6_new+`
						</td>
						<td>
							`+mshData.msh_6_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Message
						</td>
						<td>
							MSH-7
						</td>
						<td>
							`+mshData.msh_7_default+`
						</td>
						<td>
							`+mshData.msh_7_new+`
						</td>
						<td>
							`+mshData.msh_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9
						</td>
						<td>
							`+mshData.msh_9_default+`
						</td>
						<td>
							`+mshData.msh_9_new+`
						</td>
						<td>
							`+mshData.msh_9_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9.1
						</td>
						<td>
							`+mshData.msh_9_1_default+`
						</td>
						<td>
							`+mshData.msh_9_1_new+`
						</td>
						<td>
							`+mshData.msh_9_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Trigger Event
						</td>
						<td>
							MSH-9.2
						</td>
						<td>
							`+mshData.msh_9_2_default+`
						</td>
						<td>
							`+mshData.msh_9_2_new+`
						</td>
						<td>
							`+mshData.msh_9_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Control ID
						</td>
						<td>
							MSH-10
						</td>
						<td>
							`+mshData.msh_10_default+`
						</td>
						<td>
							`+mshData.msh_10_new+`
						</td>
						<td>
							`+mshData.msh_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Processing ID
						</td>
						<td>
							MSH-11
						</td>
						<td>
							`+mshData.msh_11_default+`
						</td>
						<td>
							`+mshData.msh_11_new+`
						</td>
						<td>
							`+mshData.msh_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Version ID
						</td>
						<td>
							MSH-12
						</td>
						<td>
							`+mshData.msh_12_default+`
						</td>
						<td>
							`+mshData.msh_12_new+`
						</td>
						<td>
							`+mshData.msh_12_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Character Set
						</td>
						<td>
							MSH-18
						</td>
						<td>
							`+mshData.msh_18_default+`
						</td>
						<td>
							`+mshData.msh_18_new+`
						</td>
						<td>
							`+mshData.msh_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#mshTableIscv tbody:last').before(rowString);
	});
});

//Data Fetch
var url = apiUrl+'/section7/msh/fetch.php?prs=' + prs + '&token=' + token + '&app=iscpacs' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.mshDetails,function(key,mshData)
	{
		$('#mshIspacs').html('MSH Table (Application - IS PACS)');
		rowString = `
			<table class="ui celled table black unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+mshData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							MSH Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Field Separator
						</td>
						<td>
							MSH-1
						</td>
						<td>
							`+mshData.msh_1_default+`
						</td>
						<td>
							`+mshData.msh_1_new+`
						</td>
						<td>
							`+mshData.msh_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Encoding Characters	
						</td>
						<td>
							MSH-2
						</td>
						<td>
							`+mshData.msh_2_default+`
						</td>
						<td>
							`+mshData.msh_2_new+`
						</td>
						<td>
							`+mshData.msh_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Application
						</td>
						<td>
							MSH-3
						</td>
						<td>
							`+mshData.msh_3_default+`
						</td>
						<td>
							`+mshData.msh_3_new+`
						</td>
						<td>
							`+mshData.msh_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Facility
						</td>
						<td>
							MSH-4
						</td>
						<td>
							`+mshData.msh_4_default+`
						</td>
						<td>
							`+mshData.msh_4_new+`
						</td>
						<td>
							`+mshData.msh_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Application
						</td>
						<td>
							MSH-5
						</td>
						<td>
							`+mshData.msh_5_default+`
						</td>
						<td>
							`+mshData.msh_5_new+`
						</td>
						<td>
							`+mshData.msh_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Facility
						</td>
						<td>
							MSH-6
						</td>
						<td>
							`+mshData.msh_6_default+`
						</td>
						<td>
							`+mshData.msh_6_new+`
						</td>
						<td>
							`+mshData.msh_6_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Message
						</td>
						<td>
							MSH-7
						</td>
						<td>
							`+mshData.msh_7_default+`
						</td>
						<td>
							`+mshData.msh_7_new+`
						</td>
						<td>
							`+mshData.msh_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9
						</td>
						<td>
							`+mshData.msh_9_default+`
						</td>
						<td>
							`+mshData.msh_9_new+`
						</td>
						<td>
							`+mshData.msh_9_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9.1
						</td>
						<td>
							`+mshData.msh_9_1_default+`
						</td>
						<td>
							`+mshData.msh_9_1_new+`
						</td>
						<td>
							`+mshData.msh_9_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Trigger Event
						</td>
						<td>
							MSH-9.2
						</td>
						<td>
							`+mshData.msh_9_2_default+`
						</td>
						<td>
							`+mshData.msh_9_2_new+`
						</td>
						<td>
							`+mshData.msh_9_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Control ID
						</td>
						<td>
							MSH-10
						</td>
						<td>
							`+mshData.msh_10_default+`
						</td>
						<td>
							`+mshData.msh_10_new+`
						</td>
						<td>
							`+mshData.msh_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Processing ID
						</td>
						<td>
							MSH-11
						</td>
						<td>
							`+mshData.msh_11_default+`
						</td>
						<td>
							`+mshData.msh_11_new+`
						</td>
						<td>
							`+mshData.msh_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Version ID
						</td>
						<td>
							MSH-12
						</td>
						<td>
							`+mshData.msh_12_default+`
						</td>
						<td>
							`+mshData.msh_12_new+`
						</td>
						<td>
							`+mshData.msh_12_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Character Set
						</td>
						<td>
							MSH-18
						</td>
						<td>
							`+mshData.msh_18_default+`
						</td>
						<td>
							`+mshData.msh_18_new+`
						</td>
						<td>
							`+mshData.msh_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#mshTableIspacs tbody:last').before(rowString);
	});
});

//Data Fetch
var url = apiUrl+'/section7/msh/fetch.php?prs=' + prs + '&token=' + token + '&app=xper' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.mshDetails,function(key,mshData)
	{
		$('#mshXper').html('MSH Table (Application - XPER)');
		rowString = `
			<table class="ui celled table black unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+mshData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							MSH Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Field Separator
						</td>
						<td>
							MSH-1
						</td>
						<td>
							`+mshData.msh_1_default+`
						</td>
						<td>
							`+mshData.msh_1_new+`
						</td>
						<td>
							`+mshData.msh_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Encoding Characters	
						</td>
						<td>
							MSH-2
						</td>
						<td>
							`+mshData.msh_2_default+`
						</td>
						<td>
							`+mshData.msh_2_new+`
						</td>
						<td>
							`+mshData.msh_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Application
						</td>
						<td>
							MSH-3
						</td>
						<td>
							`+mshData.msh_3_default+`
						</td>
						<td>
							`+mshData.msh_3_new+`
						</td>
						<td>
							`+mshData.msh_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Sending Facility
						</td>
						<td>
							MSH-4
						</td>
						<td>
							`+mshData.msh_4_default+`
						</td>
						<td>
							`+mshData.msh_4_new+`
						</td>
						<td>
							`+mshData.msh_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Application
						</td>
						<td>
							MSH-5
						</td>
						<td>
							`+mshData.msh_5_default+`
						</td>
						<td>
							`+mshData.msh_5_new+`
						</td>
						<td>
							`+mshData.msh_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Receiving Facility
						</td>
						<td>
							MSH-6
						</td>
						<td>
							`+mshData.msh_6_default+`
						</td>
						<td>
							`+mshData.msh_6_new+`
						</td>
						<td>
							`+mshData.msh_6_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date Time of Message
						</td>
						<td>
							MSH-7
						</td>
						<td>
							`+mshData.msh_7_default+`
						</td>
						<td>
							`+mshData.msh_7_new+`
						</td>
						<td>
							`+mshData.msh_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9
						</td>
						<td>
							`+mshData.msh_9_default+`
						</td>
						<td>
							`+mshData.msh_9_new+`
						</td>
						<td>
							`+mshData.msh_9_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Type
						</td>
						<td>
							MSH-9.1
						</td>
						<td>
							`+mshData.msh_9_1_default+`
						</td>
						<td>
							`+mshData.msh_9_1_new+`
						</td>
						<td>
							`+mshData.msh_9_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Trigger Event
						</td>
						<td>
							MSH-9.2
						</td>
						<td>
							`+mshData.msh_9_2_default+`
						</td>
						<td>
							`+mshData.msh_9_2_new+`
						</td>
						<td>
							`+mshData.msh_9_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Message Control ID
						</td>
						<td>
							MSH-10
						</td>
						<td>
							`+mshData.msh_10_default+`
						</td>
						<td>
							`+mshData.msh_10_new+`
						</td>
						<td>
							`+mshData.msh_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Processing ID
						</td>
						<td>
							MSH-11
						</td>
						<td>
							`+mshData.msh_11_default+`
						</td>
						<td>
							`+mshData.msh_11_new+`
						</td>
						<td>
							`+mshData.msh_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Version ID
						</td>
						<td>
							MSH-12
						</td>
						<td>
							`+mshData.msh_12_default+`
						</td>
						<td>
							`+mshData.msh_12_new+`
						</td>
						<td>
							`+mshData.msh_12_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Character Set
						</td>
						<td>
							MSH-18
						</td>
						<td>
							`+mshData.msh_18_default+`
						</td>
						<td>
							`+mshData.msh_18_new+`
						</td>
						<td>
							`+mshData.msh_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#mshTableXper tbody:last').before(rowString);
	});
});

//Data Fetch
var url = apiUrl+'/section7/pid/fetch.php?prs=' + prs + '&token=' + token + '&app=ibe' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pidDetails,function(key,pidData)
	{
		$('#pidIbe').html('PID Table (Application - IBE)');
		rowString = `
			<table class="ui celled black table unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+pidData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							PID Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Patient Identifier
						</td>
						<td>
							PID-3
						</td>
						<td>
							`+pidData.pid_3_default+`
						</td>
						<td>
							`+pidData.pid_3_new+`
						</td>
						<td>
							`+pidData.pid_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							ID
						</td>
						<td>
							PID-3.1
						</td>
						<td>
							`+pidData.pid_3_1_default+`
						</td>
						<td>
							`+pidData.pid_3_1_new+`
						</td>
						<td>
							`+pidData.pid_3_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PID-3.4
						</td>
						<td>
							`+pidData.pid_3_4_default+`
						</td>
						<td>
							`+pidData.pid_3_4_new+`
						</td>
						<td>
							`+pidData.pid_3_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Name
						</td>
						<td>
							PID-5
						</td>
						<td>
							`+pidData.pid_5_default+`
						</td>
						<td>
							`+pidData.pid_5_new+`
						</td>
						<td>
							`+pidData.pid_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							PID-5.1
						</td>
						<td>
							`+pidData.pid_5_1_default+`
						</td>
						<td>
							`+pidData.pid_5_1_new+`
						</td>
						<td>
							`+pidData.pid_5_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							PID-5.2
						</td>
						<td>
							`+pidData.pid_5_2_default+`
						</td>
						<td>
							`+pidData.pid_5_2_new+`
						</td>
						<td>
							`+pidData.pid_5_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							PID-5.3
						</td>
						<td>
							`+pidData.pid_5_3_default+`
						</td>
						<td>
							`+pidData.pid_5_3_new+`
						</td>
						<td>
							`+pidData.pid_5_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date of Birth
						</td>
						<td>
							PID-7
						</td>
						<td>
							`+pidData.pid_7_default+`
						</td>
						<td>
							`+pidData.pid_7_new+`
						</td>
						<td>
							`+pidData.pid_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Gender
						</td>
						<td>
							PID-8
						</td>
						<td>
							`+pidData.pid_8_default+`
						</td>
						<td>
							`+pidData.pid_8_new+`
						</td>
						<td>
							`+pidData.pid_8_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Race
						</td>
						<td>
							PID-10
						</td>
						<td>
							`+pidData.pid_10_default+`
						</td>
						<td>
							`+pidData.pid_10_new+`
						</td>
						<td>
							`+pidData.pid_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Address
						</td>
						<td>
							PID-11
						</td>
						<td>
							`+pidData.pid_11_default+`
						</td>
						<td>
							`+pidData.pid_11_new+`
						</td>
						<td>
							`+pidData.pid_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Street Address
						</td>
						<td>
							PID-11.1
						</td>
						<td>
							`+pidData.pid_11_1_default+`
						</td>
						<td>
							`+pidData.pid_11_1_new+`
						</td>
						<td>
							`+pidData.pid_11_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Designation
						</td>
						<td>
							PID-11.2
						</td>
						<td>
							`+pidData.pid_11_2_default+`
						</td>
						<td>
							`+pidData.pid_11_2_new+`
						</td>
						<td>
							`+pidData.pid_11_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							City
						</td>
						<td>
							PID-11.3
						</td>
						<td>
							`+pidData.pid_11_3_default+`
						</td>
						<td>
							`+pidData.pid_11_3_new+`
						</td>
						<td>
							`+pidData.pid_11_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							State
						</td>
						<td>
							PID-11.4
						</td>
						<td>
							`+pidData.pid_11_4_default+`
						</td>
						<td>
							`+pidData.pid_11_4_new+`
						</td>
						<td>
							`+pidData.pid_11_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Zip Code
						</td>
						<td>
							PID-11.5
						</td>
						<td>
							`+pidData.pid_11_5_default+`
						</td>
						<td>
							`+pidData.pid_11_5_new+`
						</td>
						<td>
							`+pidData.pid_11_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Home Phone
						</td>
						<td>
							PID-13
						</td>
						<td>
							`+pidData.pid_13_default+`
						</td>
						<td>
							`+pidData.pid_13_new+`
						</td>
						<td>
							`+pidData.pid_13_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Phone
						</td>
						<td>
							PID-14
						</td>
						<td>
							`+pidData.pid_14_default+`
						</td>
						<td>
							`+pidData.pid_14_new+`
						</td>
						<td>
							`+pidData.pid_14_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Account
						</td>
						<td>
							PID-18
						</td>
						<td>
							`+pidData.pid_18_default+`
						</td>
						<td>
							`+pidData.pid_18_new+`
						</td>
						<td>
							`+pidData.pid_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pidTableIbe tbody:last').before(rowString);
	}); 
});

//Data Fetch
var url = apiUrl+'/section7/pid/fetch.php?prs=' + prs + '&token=' + token + '&app=iscv' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pidDetails,function(key,pidData)
	{
		$('#pidIscv').html('PID Table (Application - ISCV)');
		rowString = `
			<table class="ui celled black table unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+pidData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							PID Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Patient Identifier
						</td>
						<td>
							PID-3
						</td>
						<td>
							`+pidData.pid_3_default+`
						</td>
						<td>
							`+pidData.pid_3_new+`
						</td>
						<td>
							`+pidData.pid_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							ID
						</td>
						<td>
							PID-3.1
						</td>
						<td>
							`+pidData.pid_3_1_default+`
						</td>
						<td>
							`+pidData.pid_3_1_new+`
						</td>
						<td>
							`+pidData.pid_3_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PID-3.4
						</td>
						<td>
							`+pidData.pid_3_4_default+`
						</td>
						<td>
							`+pidData.pid_3_4_new+`
						</td>
						<td>
							`+pidData.pid_3_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Name
						</td>
						<td>
							PID-5
						</td>
						<td>
							`+pidData.pid_5_default+`
						</td>
						<td>
							`+pidData.pid_5_new+`
						</td>
						<td>
							`+pidData.pid_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							PID-5.1
						</td>
						<td>
							`+pidData.pid_5_1_default+`
						</td>
						<td>
							`+pidData.pid_5_1_new+`
						</td>
						<td>
							`+pidData.pid_5_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							PID-5.2
						</td>
						<td>
							`+pidData.pid_5_2_default+`
						</td>
						<td>
							`+pidData.pid_5_2_new+`
						</td>
						<td>
							`+pidData.pid_5_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							PID-5.3
						</td>
						<td>
							`+pidData.pid_5_3_default+`
						</td>
						<td>
							`+pidData.pid_5_3_new+`
						</td>
						<td>
							`+pidData.pid_5_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date of Birth
						</td>
						<td>
							PID-7
						</td>
						<td>
							`+pidData.pid_7_default+`
						</td>
						<td>
							`+pidData.pid_7_new+`
						</td>
						<td>
							`+pidData.pid_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Gender
						</td>
						<td>
							PID-8
						</td>
						<td>
							`+pidData.pid_8_default+`
						</td>
						<td>
							`+pidData.pid_8_new+`
						</td>
						<td>
							`+pidData.pid_8_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Race
						</td>
						<td>
							PID-10
						</td>
						<td>
							`+pidData.pid_10_default+`
						</td>
						<td>
							`+pidData.pid_10_new+`
						</td>
						<td>
							`+pidData.pid_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Address
						</td>
						<td>
							PID-11
						</td>
						<td>
							`+pidData.pid_11_default+`
						</td>
						<td>
							`+pidData.pid_11_new+`
						</td>
						<td>
							`+pidData.pid_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Street Address
						</td>
						<td>
							PID-11.1
						</td>
						<td>
							`+pidData.pid_11_1_default+`
						</td>
						<td>
							`+pidData.pid_11_1_new+`
						</td>
						<td>
							`+pidData.pid_11_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Designation
						</td>
						<td>
							PID-11.2
						</td>
						<td>
							`+pidData.pid_11_2_default+`
						</td>
						<td>
							`+pidData.pid_11_2_new+`
						</td>
						<td>
							`+pidData.pid_11_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							City
						</td>
						<td>
							PID-11.3
						</td>
						<td>
							`+pidData.pid_11_3_default+`
						</td>
						<td>
							`+pidData.pid_11_3_new+`
						</td>
						<td>
							`+pidData.pid_11_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							State
						</td>
						<td>
							PID-11.4
						</td>
						<td>
							`+pidData.pid_11_4_default+`
						</td>
						<td>
							`+pidData.pid_11_4_new+`
						</td>
						<td>
							`+pidData.pid_11_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Zip Code
						</td>
						<td>
							PID-11.5
						</td>
						<td>
							`+pidData.pid_11_5_default+`
						</td>
						<td>
							`+pidData.pid_11_5_new+`
						</td>
						<td>
							`+pidData.pid_11_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Home Phone
						</td>
						<td>
							PID-13
						</td>
						<td>
							`+pidData.pid_13_default+`
						</td>
						<td>
							`+pidData.pid_13_new+`
						</td>
						<td>
							`+pidData.pid_13_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Phone
						</td>
						<td>
							PID-14
						</td>
						<td>
							`+pidData.pid_14_default+`
						</td>
						<td>
							`+pidData.pid_14_new+`
						</td>
						<td>
							`+pidData.pid_14_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Account
						</td>
						<td>
							PID-18
						</td>
						<td>
							`+pidData.pid_18_default+`
						</td>
						<td>
							`+pidData.pid_18_new+`
						</td>
						<td>
							`+pidData.pid_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pidTableIscv tbody:last').before(rowString);
	}); 
});

//Data Fetch
var url = apiUrl+'/section7/pid/fetch.php?prs=' + prs + '&token=' + token + '&app=ispacs' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pidDetails,function(key,pidData)
	{
		$('#pidIspacs').html('PID Table (Application - IS PACS)');
		rowString = `
			<table class="ui celled black table unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+pidData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							PID Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Patient Identifier
						</td>
						<td>
							PID-3
						</td>
						<td>
							`+pidData.pid_3_default+`
						</td>
						<td>
							`+pidData.pid_3_new+`
						</td>
						<td>
							`+pidData.pid_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							ID
						</td>
						<td>
							PID-3.1
						</td>
						<td>
							`+pidData.pid_3_1_default+`
						</td>
						<td>
							`+pidData.pid_3_1_new+`
						</td>
						<td>
							`+pidData.pid_3_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PID-3.4
						</td>
						<td>
							`+pidData.pid_3_4_default+`
						</td>
						<td>
							`+pidData.pid_3_4_new+`
						</td>
						<td>
							`+pidData.pid_3_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Name
						</td>
						<td>
							PID-5
						</td>
						<td>
							`+pidData.pid_5_default+`
						</td>
						<td>
							`+pidData.pid_5_new+`
						</td>
						<td>
							`+pidData.pid_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							PID-5.1
						</td>
						<td>
							`+pidData.pid_5_1_default+`
						</td>
						<td>
							`+pidData.pid_5_1_new+`
						</td>
						<td>
							`+pidData.pid_5_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							PID-5.2
						</td>
						<td>
							`+pidData.pid_5_2_default+`
						</td>
						<td>
							`+pidData.pid_5_2_new+`
						</td>
						<td>
							`+pidData.pid_5_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							PID-5.3
						</td>
						<td>
							`+pidData.pid_5_3_default+`
						</td>
						<td>
							`+pidData.pid_5_3_new+`
						</td>
						<td>
							`+pidData.pid_5_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date of Birth
						</td>
						<td>
							PID-7
						</td>
						<td>
							`+pidData.pid_7_default+`
						</td>
						<td>
							`+pidData.pid_7_new+`
						</td>
						<td>
							`+pidData.pid_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Gender
						</td>
						<td>
							PID-8
						</td>
						<td>
							`+pidData.pid_8_default+`
						</td>
						<td>
							`+pidData.pid_8_new+`
						</td>
						<td>
							`+pidData.pid_8_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Race
						</td>
						<td>
							PID-10
						</td>
						<td>
							`+pidData.pid_10_default+`
						</td>
						<td>
							`+pidData.pid_10_new+`
						</td>
						<td>
							`+pidData.pid_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Address
						</td>
						<td>
							PID-11
						</td>
						<td>
							`+pidData.pid_11_default+`
						</td>
						<td>
							`+pidData.pid_11_new+`
						</td>
						<td>
							`+pidData.pid_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Street Address
						</td>
						<td>
							PID-11.1
						</td>
						<td>
							`+pidData.pid_11_1_default+`
						</td>
						<td>
							`+pidData.pid_11_1_new+`
						</td>
						<td>
							`+pidData.pid_11_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Designation
						</td>
						<td>
							PID-11.2
						</td>
						<td>
							`+pidData.pid_11_2_default+`
						</td>
						<td>
							`+pidData.pid_11_2_new+`
						</td>
						<td>
							`+pidData.pid_11_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							City
						</td>
						<td>
							PID-11.3
						</td>
						<td>
							`+pidData.pid_11_3_default+`
						</td>
						<td>
							`+pidData.pid_11_3_new+`
						</td>
						<td>
							`+pidData.pid_11_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							State
						</td>
						<td>
							PID-11.4
						</td>
						<td>
							`+pidData.pid_11_4_default+`
						</td>
						<td>
							`+pidData.pid_11_4_new+`
						</td>
						<td>
							`+pidData.pid_11_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Zip Code
						</td>
						<td>
							PID-11.5
						</td>
						<td>
							`+pidData.pid_11_5_default+`
						</td>
						<td>
							`+pidData.pid_11_5_new+`
						</td>
						<td>
							`+pidData.pid_11_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Home Phone
						</td>
						<td>
							PID-13
						</td>
						<td>
							`+pidData.pid_13_default+`
						</td>
						<td>
							`+pidData.pid_13_new+`
						</td>
						<td>
							`+pidData.pid_13_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Phone
						</td>
						<td>
							PID-14
						</td>
						<td>
							`+pidData.pid_14_default+`
						</td>
						<td>
							`+pidData.pid_14_new+`
						</td>
						<td>
							`+pidData.pid_14_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Account
						</td>
						<td>
							PID-18
						</td>
						<td>
							`+pidData.pid_18_default+`
						</td>
						<td>
							`+pidData.pid_18_new+`
						</td>
						<td>
							`+pidData.pid_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pidTableIspacs tbody:last').before(rowString);
	}); 
});

//Data Fetch
var url = apiUrl+'/section7/pid/fetch.php?prs=' + prs + '&token=' + token + '&app=xper' ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.pidDetails,function(key,pidData)
	{
		$('#pidXper').html('PID Table (Application - XPER)');
		rowString = `
			<table class="ui celled black table unstackable">
				<thead>
					<tr>
						<th colspan="1">
							Institution
						</th>
						<th colspan="1">
							`+pidData.siteNum+`
						</th>
						<th colspan="3" style="text-align: center;">
							PID Details
						</th>
					</tr>
					<tr>
						<th>HL7 Element Name</th>
						<th>Default HL7 Parsing</th>
						<th>Default Value</th>
						<th>New HL7 Parsing</th>
						<th>Comment/Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Patient Identifier
						</td>
						<td>
							PID-3
						</td>
						<td>
							`+pidData.pid_3_default+`
						</td>
						<td>
							`+pidData.pid_3_new+`
						</td>
						<td>
							`+pidData.pid_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							ID
						</td>
						<td>
							PID-3.1
						</td>
						<td>
							`+pidData.pid_3_1_default+`
						</td>
						<td>
							`+pidData.pid_3_1_new+`
						</td>
						<td>
							`+pidData.pid_3_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Assigning Authority
						</td>
						<td>
							PID-3.4
						</td>
						<td>
							`+pidData.pid_3_4_default+`
						</td>
						<td>
							`+pidData.pid_3_4_new+`
						</td>
						<td>
							`+pidData.pid_3_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Name
						</td>
						<td>
							PID-5
						</td>
						<td>
							`+pidData.pid_5_default+`
						</td>
						<td>
							`+pidData.pid_5_new+`
						</td>
						<td>
							`+pidData.pid_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Family Name
						</td>
						<td>
							PID-5.1
						</td>
						<td>
							`+pidData.pid_5_1_default+`
						</td>
						<td>
							`+pidData.pid_5_1_new+`
						</td>
						<td>
							`+pidData.pid_5_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Given Name
						</td>
						<td>
							PID-5.2
						</td>
						<td>
							`+pidData.pid_5_2_default+`
						</td>
						<td>
							`+pidData.pid_5_2_new+`
						</td>
						<td>
							`+pidData.pid_5_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Middle Name
						</td>
						<td>
							PID-5.3
						</td>
						<td>
							`+pidData.pid_5_3_default+`
						</td>
						<td>
							`+pidData.pid_5_3_new+`
						</td>
						<td>
							`+pidData.pid_5_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Date of Birth
						</td>
						<td>
							PID-7
						</td>
						<td>
							`+pidData.pid_7_default+`
						</td>
						<td>
							`+pidData.pid_7_new+`
						</td>
						<td>
							`+pidData.pid_7_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Gender
						</td>
						<td>
							PID-8
						</td>
						<td>
							`+pidData.pid_8_default+`
						</td>
						<td>
							`+pidData.pid_8_new+`
						</td>
						<td>
							`+pidData.pid_8_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Race
						</td>
						<td>
							PID-10
						</td>
						<td>
							`+pidData.pid_10_default+`
						</td>
						<td>
							`+pidData.pid_10_new+`
						</td>
						<td>
							`+pidData.pid_10_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Address
						</td>
						<td>
							PID-11
						</td>
						<td>
							`+pidData.pid_11_default+`
						</td>
						<td>
							`+pidData.pid_11_new+`
						</td>
						<td>
							`+pidData.pid_11_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Street Address
						</td>
						<td>
							PID-11.1
						</td>
						<td>
							`+pidData.pid_11_1_default+`
						</td>
						<td>
							`+pidData.pid_11_1_new+`
						</td>
						<td>
							`+pidData.pid_11_1_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Designation
						</td>
						<td>
							PID-11.2
						</td>
						<td>
							`+pidData.pid_11_2_default+`
						</td>
						<td>
							`+pidData.pid_11_2_new+`
						</td>
						<td>
							`+pidData.pid_11_2_comment+`
						</td>
					</tr>
					<tr>
						<td>
							City
						</td>
						<td>
							PID-11.3
						</td>
						<td>
							`+pidData.pid_11_3_default+`
						</td>
						<td>
							`+pidData.pid_11_3_new+`
						</td>
						<td>
							`+pidData.pid_11_3_comment+`
						</td>
					</tr>
					<tr>
						<td>
							State
						</td>
						<td>
							PID-11.4
						</td>
						<td>
							`+pidData.pid_11_4_default+`
						</td>
						<td>
							`+pidData.pid_11_4_new+`
						</td>
						<td>
							`+pidData.pid_11_4_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Zip Code
						</td>
						<td>
							PID-11.5
						</td>
						<td>
							`+pidData.pid_11_5_default+`
						</td>
						<td>
							`+pidData.pid_11_5_new+`
						</td>
						<td>
							`+pidData.pid_11_5_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Home Phone
						</td>
						<td>
							PID-13
						</td>
						<td>
							`+pidData.pid_13_default+`
						</td>
						<td>
							`+pidData.pid_13_new+`
						</td>
						<td>
							`+pidData.pid_13_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Other Phone
						</td>
						<td>
							PID-14
						</td>
						<td>
							`+pidData.pid_14_default+`
						</td>
						<td>
							`+pidData.pid_14_new+`
						</td>
						<td>
							`+pidData.pid_14_comment+`
						</td>
					</tr>
					<tr>
						<td>
							Patient Account
						</td>
						<td>
							PID-18
						</td>
						<td>
							`+pidData.pid_18_default+`
						</td>
						<td>
							`+pidData.pid_18_new+`
						</td>
						<td>
							`+pidData.pid_18_comment+`
						</td>
					</tr>
				</tbody>
			</table>
		` ;
		$('#pidTableXper tbody:last').before(rowString);
	}); 
});

/*$(window).on('load', function() {
	window.print();
})*/
